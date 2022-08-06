import React, { useEffect, useState } from "react";
import sleeper from "../api/sleeper";
import Poll from "react-polls";
import axios from "axios";

const Schedule = () => {
  const [pollAnswers, setPollAnswers] = useState([
    { option: "Kabo", votes: 0 },
    { option: "Fahad", votes: 0 },
  ]);
  const [schedule, setSchedule] = useState([]);
  const [weeklyMatchups, setWeeklyMatchups] = useState(new Map());
  const [users, setUsers] = useState([]);

  const [rosters, setRosters] = useState([]);

  const [matchupPolls, setMatchupPolls] = useState(new Map());
  const pollStyles1 = {
    questionBold: true,
    questionColor: "green",
    theme: "red",

    align: "center",
  };

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) {
        answer.votes++;
      }

      return answer;
    });
  };

  let scheduleChanged = false;
  if (schedule.length > 0) {
    scheduleChanged = true;
  }

  let usersChanged = false;
  if (users.length > 0) {
    usersChanged = true;
  }

  let rostersChanged = false;
  if (rosters.length > 0) {
    rostersChanged = true;
  }

  const scheduleData = new Map();
  const postedMatchups = new Map();
  const getSchedule = async () => {
    //returns roster id & matchup id
    const response = await sleeper.get("league/845531683540303872/matchups/4");
    setSchedule(response.data);
  };

  const getUsers = async () => {
    // returns user id, name, avatar
    const response = await sleeper.get("league/845531683540303872/users");
    // Setting the avatar and name in this function and giving a default value to roster_id if it doesn't exist
    for (let i = 0; i < response.data.length; i++) {
      scheduleData.set(response.data[i].user_id, {
        avatar: `https://sleepercdn.com/avatars/thumbs/${response.data[i].avatar}`,
        name: response.data[i].display_name,
        roster_id: scheduleData.has(response.data[i].user_id)
          ? scheduleData.get(response.data[i].user_id).roster_id
          : "loading",
      });
    }

    setUsers(response.data);

    setWeeklyMatchups(scheduleData);
  };

  const getRoster = async () => {
    // returns user id, roster id
    const response = await sleeper.get("/league/845531683540303872/rosters");
    // Setting the roster_id in this function and giving a default value to avatar and name if they don't exist
    for (let i = 0; i < response.data.length; i++) {
      scheduleData.set(response.data[i].owner_id, {
        avatar: scheduleData.has(response.data[i].owner_id)
          ? scheduleData.get(response.data[i].owner_id).avatar
          : "loading",
        name: scheduleData.has(response.data[i].owner_id)
          ? scheduleData.get(response.data[i].owner_id).name
          : "loading",
        roster_id: response.data[i].roster_id,
      });
    }
    setRosters(response.data);
    setWeeklyMatchups(scheduleData);
  };

  const getMatchupVotes = async () => {
    const response = await axios.get("http://localhost:3001/getMatchupVotes");
    for (let i = 0; i < response.data.length; i++) {
      matchupPolls.set(response.data[i].matchupId, response.data[i].answers);
    }
    setMatchupPolls(matchupPolls);
  };
  useEffect(() => {
    getSchedule();
    getUsers();
    getRoster();
    getMatchupVotes();
  }, [usersChanged, scheduleChanged, rostersChanged]);

  const weeklyMatches = [...weeklyMatchups.values()].map((player) => {
    return (
      <div key={player.user_id} className="text-[black]">
        <div key={player.roster_id}>
          {(function () {
            let matchupText;
            // We loop through schedule, which is the array containing the matchup ids, roster ids and points for each team

            for (let i = 0; i < schedule.length; i++) {
              if (
                player.roster_id === schedule[i].roster_id &&
                !postedMatchups.has(schedule[i].matchup_id)
              ) {
                // Creating a smaller array containing only the information of the two teams with the same matchup id as the current element we are on (player).
                let matchup = schedule.filter(
                  (team) => team.matchup_id === schedule[i].matchup_id
                );
                // In order to retrieve the remaining information for the pair of teams, we searched through the weeklyMatchups map
                // and stored the object that's returned (which contains the name, avatar etc) into these variables
                let team1 = [...weeklyMatchups.values()].find(
                  (team) => team.roster_id === matchup[0].roster_id
                );
                let team2 = [...weeklyMatchups.values()].find(
                  (team) => team.roster_id === matchup[1].roster_id
                );

                postedMatchups.set(matchup[0].matchup_id, team1);

                // if (
                //   !matchupPolls.has(matchup[0].matchup_id) ||
                //   team1.name !== "loading"
                // ) {
                //   matchupPolls.set(matchup[0].matchup_id, [
                //     { option: team1.name, votes: 0 },
                //     { option: team2.name, votes: 0 },
                //   ]);
                // }

                console.log(team1.name !== "loading");

                matchupText = (
                  <div className="grid grid-cols-1 sm:flex items-center content-center text-center mb-[30px] p-8 w-[80vw] text-black rounded-[15px] bg-white">
                    <div className="flex justify-center items-center">
                      <div className="team1 flex items-center">
                        <img
                          className="w-[50px] my-[5px] mr-[5px] rounded-full"
                          src={team1.avatar}
                        />
                        <p className="text-[16px] mr-[5px]">{team1.name}</p>

                        <p className="text-[14px]">
                          {schedule[i].points === 0 ? "" : schedule[i].points}
                        </p>
                      </div>
                      <div className="flex justify-right text-[15px] p-[7px]">
                        vs.
                      </div>
                      <div className="team2 flex items-center">
                        <img
                          className="w-[50px] my-[5px] mr-[5px] rounded-full"
                          src={team2.avatar}
                        ></img>
                        <p className="text-[16px]">{team2.name}</p>
                        <p className="text-[14px]">
                          {schedule[i].points === 0 ? "" : schedule[i].points}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center sm:ml-auto">
                      <Poll
                        question={"Who will win this week?"}
                        answers={matchupPolls.get(matchup[0].matchup_id)}
                        onVote={(voteAnswer) => {
                          const newPollAnswers = matchupPolls
                            .get(matchup[0].matchup_id)
                            .map((answer) => {
                              if (answer.option === voteAnswer) {
                                answer.votes++;
                              }

                              return answer;
                            });
                          matchupPolls.set(
                            matchup[0].matchup_id,
                            newPollAnswers
                          );
                          setMatchupPolls(matchupPolls);

                          axios.post(
                            "http://localhost:3001/updateMatchupPolls",
                            {
                              matchupId: matchup[0].matchup_id,
                              question: "Who will win this week?",
                              answers: newPollAnswers,
                            }
                          );
                        }}
                        customStyles={pollStyles1}
                        noStorage={true}
                      />
                    </div>
                  </div>
                );
              }
            }
            return matchupText;
          })()}
        </div>
      </div>
    );
  });

  return (
    <div
      key={new Date()}
      className=" flex flex-col justify-center content-center w-full "
    >
      <p className="text-center text-2xl mb-[10px] font-bold">Week 1</p>
      <table className="flex flex-col items-center">
        <tr className="hidden sm:flex justify-between content-center gap-[20px] text-center p-[7px] border-2 mb-[10px] rounded-[15px] w-[80vw] bg-white">
          <th className=" ml-[50px]">Matchup</th>
          <th className="mr-[50px]">Favorite</th>
        </tr>
        <tr className="flex justify-evenly gap-[20px]">
          <tbody>{weeklyMatches}</tbody>
        </tr>
      </table>
    </div>
  );
};

export default Schedule;
