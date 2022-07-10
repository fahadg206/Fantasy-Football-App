import React, { useEffect, useState } from "react";
import sleeper from "../api/sleeper";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [users, setUsers] = useState([]);
  const [rosters, setRosters] = useState([]);
  const [weeklyMatchups, setWeeklyMatchups] = useState(new Map());
  let ready = { usersReady: false, rostersReady: false };

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

  let dataReady = false;
  if (ready.rostersReady && ready.usersReady) {
    dataReady = true;
  }

  const scheduleData = new Map();
  const rosterData = new Map();

  const getSchedule = async () => {
    const response = await sleeper.get("league/845531683540303872/matchups/1");
    console.log(response.data);
    setSchedule(response.data);
  };

  const getUsers = async () => {
    const response = await sleeper.get("league/845531683540303872/users");

    for (let i = 0; i < response.data.length; i++) {
      scheduleData.set(response.data[i].user_id, {
        avatar: response.data[i].avatar,
        name: response.data[i].display_name,
        roster_id: scheduleData.has(response.data[i].user_id)
          ? scheduleData.get(response.data[i].user_id).roster_id
          : "loading",
      });
    }

    ready.usersReady = true;

    setUsers(response.data);
    setWeeklyMatchups(scheduleData);
    console.log("users");
  };

  const getRoster = async () => {
    const response = await sleeper.get("/league/845531683540303872/rosters");

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
      ready.rostersReady = true;
    }
    setRosters(response.data);
    setWeeklyMatchups(scheduleData);
    console.log("rosters");
  };
  console.log(weeklyMatchups);
  useEffect(() => {
    getSchedule();
    getUsers();
    getRoster();
  }, []);

  // const matchupPoints = schedule.map((player) => {
  //   return (
  //     <div key={new Date()} className="bg-[blue] pt-[50px]">
  //       <div>{schedule.matchup_id}</div>
  //     </div>
  //   );
  // });

  const weeklyMatches = [...weeklyMatchups.values()].map((player) => {
    return (
      <div key={player.user_id} className="bg-[green] text-[black]">
        <div className="">{player.name}</div>
        <div>{player.avatar}</div>
        <div>{player.roster_id}</div>
      </div>
    );
  });

  return (
    <div key={new Date()} className="pt-[100px]">
      {/* {matchupPoints} */}
      {weeklyMatches}
    </div>
  );
};

export default Schedule;
