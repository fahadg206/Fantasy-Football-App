import React, { useEffect, useState } from "react";
import sleeper from "../api/sleeper";
import { Link } from "react-router-dom";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [weeklyMatchups, setWeeklyMatchups] = useState(new Map());
  const [users, setUsers] = useState([]);

  const [rosters, setRosters] = useState([]);

  const navbarMatchup = [];

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

  const getSchedule = async () => {
    const response = await sleeper.get("league/845531683540303872/matchups/1");
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
      <div key={player.user_id} className="text-[black] flex">
        <div key={player.roster_id}>
          {(function () {
            let matchupText;
            // We loop through schedule, which is the array containing the matchup ids, roster ids and points for each team
            for (let i = 0; i < schedule.length / 2; i++) {
              if (player.roster_id === schedule[i].roster_id) {
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

                matchupText = (
                  <div>
                    <div>
                      <div className="team1 flex  items-center mb-[5px]">
                        <img
                          className=" w-[25px] my-[5px] mr-[5px] rounded-[50px]"
                          src={team1.avatar}
                        />
                        <p className="text-[10px] mr-[5px]">{team1.name}</p>
                        <p className="text-[12px]">{schedule[i].points}</p>
                      </div>

                      <div className=" team2 flex items-center mb-[5px]">
                        <img
                          className="w-[25px] mr-[5px] rounded-[50px]"
                          src={team2.avatar}
                        ></img>
                        <p className="text-[10px] mr-[5px]">{team2.name}</p>
                        <p className="text-[12px]">{schedule[i].points}</p>
                      </div>
                    </div>
                  </div>
                );
                navbarMatchup.push(matchupText);
              }
            }
          })()}
        </div>
      </div>
    );
  });

  return (
    <div
      key={new Date()}
      className="hidden md:flex flex-wrap flex-grow justify-center items-center"
    >
      <div className="mr-auto">
        <img
          className="w-[300px] h-[100px]"
          src="https://www.pngkit.com/png/full/177-1773878_sec-logo-png.png "
        />
      </div>
      <Link to="/schedule">
        <div className="mr-[60px] shadow-md shadow-[#0046FF] hover:scale-125 hover:shadow-[#01ECF2] duration-500 p-[10px] rounded-[20px]">
          {navbarMatchup[0]}
        </div>
      </Link>
      <Link to="/schedule">
        <div className="mr-[60px] shadow-md shadow-[#0046FF] hover:scale-125 hover:shadow-[#01ECF2] duration-500 p-[10px] rounded-[20px]">
          {navbarMatchup[1]}
        </div>
      </Link>
      <Link to="/schedule">
        <div className="mr-[60px] shadow-md shadow-[#0046FF] hover:scale-125 hover:shadow-[#01ECF2] duration-500 p-[10px] rounded-[20px]">
          {navbarMatchup[1]}
        </div>
      </Link>
      <Link to="/schedule">
        <div className="mr-[60px] shadow-md shadow-[#0046FF] hover:scale-125 hover:shadow-[#01ECF2] duration-500 p-[10px] rounded-[20px]">
          {navbarMatchup[1]}
        </div>
      </Link>
      <Link to="/schedule">
        <div className="mr-[60px] shadow-md shadow-[#0046FF] hover:scale-125 hover:shadow-[#01ECF2] duration-500 p-[10px] rounded-[20px]">
          {navbarMatchup[1]}
        </div>
      </Link>
      <Link to="/schedule" className="mr-[200px]">
        <div className="mr-[60px] shadow-md shadow-[#0046FF] hover:scale-125 hover:shadow-[#01ECF2] duration-500 p-[10px] rounded-[20px]">
          {navbarMatchup[1]}
        </div>
      </Link>
    </div>
  );
};

export default Schedule;
