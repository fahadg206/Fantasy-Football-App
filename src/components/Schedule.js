import React, { useEffect, useState } from "react";
import sleeper from "../api/sleeper";
import Poll from "react-polls";
import axios from "axios";
import jefe from "../images/jefe.png";

const Schedule = () => {
  const [pollAnswers, setPollAnswers] = useState([
    { option: "Kabo", votes: 0 },
    { option: "Fahad", votes: 0 },
  ]);
  const [polls, setPolls] = useState([]);
  const { REACT_APP_LEAGUE_ID } = process.env;
  const [schedule, setSchedule] = useState([]);
  const [weeklyMatchups, setWeeklyMatchups] = useState(new Map());
  const [users, setUsers] = useState([]);

  const [rosters, setRosters] = useState([]);

  const [matchupPolls, setMatchupPolls] = useState(new Map());
  const pollStyles1 = {
    questionBold: true,
    questionColor: "black",
    theme: "black",
    align: "center",
  };

  const scheduleData = new Map();
  const postedMatchups = new Map();
  const getSchedule = async () => {
    //returns roster id & matchup id
    const response = await sleeper.get(
      `league/${REACT_APP_LEAGUE_ID}/matchups/3`
    );
    setSchedule(response.data);
  };

  const getUsers = async () => {
    // returns user id, name, avatar
    const response = await sleeper.get(`league/${REACT_APP_LEAGUE_ID}/users`);
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
    const response = await sleeper.get(
      `/league/${REACT_APP_LEAGUE_ID}/rosters`
    );
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
    const response = await axios.get(
      "https://raincityserver.herokuapp.com/getMatchupVotes"
    );

    for (let i = 0; i < response.data.length; i++) {
      matchupPolls.set(response.data[i].matchupId, response.data[i].answers);
    }
    setMatchupPolls(matchupPolls);
    setPolls(response.data);
  };

  useEffect(() => {
    getSchedule();
    getUsers();
    getRoster();
    getMatchupVotes();
  }, [JSON.stringify(polls)]);
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

                matchupPolls.set(
                  matchup[0].matchup_id,
                  matchupPolls.has(matchup[0].matchup_id)
                    ? matchupPolls.get(matchup[0].matchup_id)
                    : [
                        { option: team1.name, votes: 0 },
                        { option: team2.name, votes: 0 },
                      ]
                );
                const abv = new Map();
                abv.set(5, "Ganay");
                abv.set(6, "FG😁");
                abv.set(1, "Kabo👟");
                abv.set(7, "Jefe");
                abv.set(8, `Sleepy🔑`);
                abv.set(2, "Sal");
                abv.set(4, "YSL");
                abv.set(3, "Lock👨‍👦");
                abv.set(10, "Edo");
                abv.set(12, "King🐍");
                abv.set(9, "6'3");
                abv.set(11, "Gojo💤");

                matchupText = (
                  <div className="grid grid-cols-1  lg:flex items-center content-center text-center mb-[30px] p-8 w-[80vw] text-black rounded-[15px] bg-white shadow-lg shadow-black">
                    <div className="flex justify-between items-center w-[70vw]">
                      <div className="team1 flex items-center">
                        <div className="skew">
                          <p className="hidden sm:block text-2xl font-bold mr-[5px] text-white names pt-7">
                            {abv.get(team1.roster_id)}
                          </p>
                          <img
                            className="w-[50px] rounded-full my-[5px] mr-[5px]  pt-7 ml-3 sm:hidden"
                            src={team1.avatar}
                          />
                        </div>
                        <img
                          className="hidden sm:block w-[30px] md:w-[50px] my-[5px] mr-[5px] rounded-full"
                          src={team1.avatar}
                        />
                        <p className="text-[12px] sm:text-2xl points">
                          {schedule[i].points === 0 ? "" : matchup[0].points}
                        </p>
                      </div>
                      <div className="hidden lg:block text-3xl">VS</div>
                      <div className="text-2xl block sm:hidden">-</div>
                      <div className="team2 flex items-center">
                        <p className="text-[12px] sm:text-2xl points mr-3">
                          {schedule[i].points === 0 ? "" : matchup[1].points}
                        </p>

                        <img
                          className="hidden sm:block w-[30px] md:w-[50px] my-[5px] rounded-full"
                          src={team2.avatar}
                        ></img>
                        <div className="skew2 mr-4">
                          <p className="hidden sm:block text-2xl text-white names pt-7 mr-3">
                            {abv.get(team2.roster_id)}
                          </p>
                          <img
                            className="w-[50px] md:w-[50px] my-[5px] mr-[5px] rounded-full pt-7 sm:hidden"
                            src={team2.avatar}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center lg:ml-auto">
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
                            "https://raincityserver.herokuapp.com/updateMatchupPolls",
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
      <p className="text-center text-2xl mb-[10px] font-bold">Week 3</p>
      <table className="flex flex-col items-center">
        <tr className="hidden sm:flex justify-between content-center gap-[20px] text-center p-[7px] border-2 mb-[10px] rounded-[15px] w-[80vw] bg-[#0a090afa] text-white">
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
