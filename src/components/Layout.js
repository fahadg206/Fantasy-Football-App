import Navbar from "./Navbar";
import ScheduleNav from "./ScheduleNav";
import React, { useEffect, useState } from "react";
import sleeper from "../api/sleeper";
import { FaCloudRain } from "react-icons/fa";

const Layout = ({ children }) => {
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

  const postedMatchups = new Map();

  const scheduleData = new Map();
  const { REACT_APP_LEAGUE_ID } = process.env;

  const getSchedule = async () => {
    const response = await sleeper.get(
      `league/${REACT_APP_LEAGUE_ID}/matchups/7`
    );
    setSchedule(response.data);
  };

  const getUsers = async () => {
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
            // We loop through schedule, which is the array containing the matchup ids, roster ids and points for each team.
            for (let i = 0; i < schedule.length; i++) {
              if (
                player.roster_id === schedule[i].roster_id &&
                !postedMatchups.has(schedule[i].matchup_id)
              ) {
                // Creating a smaller array containing only the information of the two teams with the same matchup id as the current element we are on (player).
                let matchup = schedule.filter(
                  (team) => team.matchup_id === schedule[i].matchup_id
                );
                //console.log(matchup);
                // In order to retrieve the remaining information for the pair of teams, we searched through the weeklyMatchups map
                // and stored the object that's returned (which contains the name, avatar etc) into these variables.
                let team1 = [...weeklyMatchups.values()].find(
                  (team) => team.roster_id === matchup[0].roster_id
                );
                let team2 = [...weeklyMatchups.values()].find(
                  (team) => team.roster_id === matchup[1].roster_id
                );
                postedMatchups.set(matchup[0].matchup_id, team1);
                //console.log(schedule);
                matchupText = (
                  <div>
                    <div className="text-black">
                      <div className="team1 flex items-center mb-[5px]">
                        <img
                          className=" w-[25px] my-[5px] mr-[5px] rounded-[50px]"
                          src={team1.avatar}
                        />
                        <p className="text-[10px] mr-[5px]">{team1.name}</p>
                        <p className="text-[10px]">
                          {Math.round(matchup[0].points * 10) / 10}
                        </p>
                      </div>

                      <div className=" team2 flex items-center mb-[5px]">
                        <img
                          className="w-[25px] mr-[5px] rounded-[50px]"
                          src={team2.avatar}
                        ></img>
                        <p className="text-[10px] mr-[5px]">{team2.name}</p>
                        <p className="text-[10px]">
                          {Math.round(matchup[1].points * 10) / 10}
                        </p>
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
    <div>
      <div className="flex justify-center lg:flex">
        <FaCloudRain className="hidden lg:mr-auto ml-5 my-2 w-[300px] h-[100px]" />
        <div className="hidden lg:flex ">
          <ScheduleNav navbarMatchup={navbarMatchup} />
        </div>
      </div>
      <div>
        <Navbar navbarMatchup={navbarMatchup} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
