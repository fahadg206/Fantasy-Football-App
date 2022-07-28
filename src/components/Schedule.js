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
    const response = await sleeper.get("league/845531683540303872/matchups/4");
    setSchedule(response.data);
  };

  const getUsers = async () => {
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

  useEffect(() => {
    getSchedule();
    getUsers();
    getRoster();
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
                matchupText = (
                  <div className="grid grid-cols-1 sm:flex items-center content-center text-center mb-[30px] p-8 w-[100vw] text-white border-2 border-[#01ECF2] rounded-[15px] bg-[#1A4AAC]">
                    <div className="flex justify-center">
                      <div className="team1 flex items-center">
                        <img
                          className=" w-[30px] my-[5px] mr-[5px] rounded-[50px] bg-[green]"
                          src={team1.avatar}
                        />
                        <p className="text-[12px] mr-[5px]">{team1.name}</p>

                        <p className="text-[14px]">
                          {schedule[i].points === 0 ? "" : schedule[i].points}
                        </p>
                      </div>
                      <div className="flex justify-right text-[15px] p-[7px]">
                        vs.
                      </div>
                      <div className="team2 flex items-center">
                        <img
                          className="w-[30px] my-[5px] mr-[5px] rounded-[50px]"
                          src={team2.avatar}
                        ></img>
                        <p className="text-[12px]">{team2.name}</p>
                        <p className="text-[14px]">
                          {schedule[i].points === 0 ? "" : schedule[i].points}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center sm:ml-auto">
                      <Poll
                        question={"What's the best framework?"}
                        answers={pollAnswers}
                        onVote={handleVote}
                        customStyles={pollStyles1}
                        noStorage={false}
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
      className=" flex flex-col justify-center content-center w-full"
    >
      <p className="text-center text-2xl mb-[10px] font-bold">Week 1</p>
      <table>
        <tr className="hidden sm:flex justify-evenly content-center gap-[20px] text-center p-[7px] border-2 border-[#01ECF2] mb-[10px] rounded-[15px] bg-[#1A4AAC]">
          <th className="mr-auto pl-[30px]">Matchup</th>
          <th className="mr-[30px]">Favorite</th>
        </tr>
        <tr className="flex justify-evenly gap-[20px]">
          <tbody>{weeklyMatches}</tbody>
        </tr>
      </table>
    </div>
  );
};

export default Schedule;
