import React, {useEffect, useState} from "react";
import sleeper from "../api/sleeper";





const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [users, setUsers] = useState([]);
  const [rosters, setRosters] = useState([]);
  const [weeklyMatchups, setWeeklyMatchups] = useState(new Map());
  let ready = {usersReady: false, rostersReady: false};
 
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
  if(ready.rostersReady && ready.usersReady){
    dataReady = true;
  }

  const scheduleData = new Map();
  const rosterData = new Map();
  
  const getSchedule = async () => {
    const response = await sleeper.get("league/845531683540303872/matchups/1")
    console.log("matchups");
    console.log(schedule);
    setSchedule(response.data);

}

const getUsers = async () => {
  const response = await sleeper.get("league/845531683540303872/users");
  console.log("users");
  console.log(users);
  for(let i = 0; i < response.data.length; i++){
    scheduleData.set(response.data[i].user_id, {
      avatar: response.data[i].avatar,
      name: response.data[i].display_name,
      roster_id: (scheduleData.has(response.data[i].user_id)? scheduleData.get(response.data[i].user_id).roster_id : "0"),
      });
  }
  console.log("Roster data in users");
  console.log(scheduleData); 

  ready.usersReady = true;
  

  setUsers(response.data);
  setWeeklyMatchups(scheduleData);
}

const getRoster = async () => {
  const response = await sleeper.get("/league/845531683540303872/rosters");
  console.log("rosters");
  console.log(rosters);
  for(let i = 0; i < response.data.length; i++){
    scheduleData.set(response.data[i].owner_id, {
      avatar: (scheduleData.has(response.data[i].owner_id)? scheduleData.get(response.data[i].owner_id).avatar : "0"),
      name: (scheduleData.has(response.data[i].owner_id)? scheduleData.get(response.data[i].owner_id).display_name : "0"),
      roster_id: response.data[i].roster_id,
  });
  ready.rostersReady = true;
         console.log("Roster data in rosters");
  console.log(scheduleData); 
  setRosters(response.data);
  setWeeklyMatchups(scheduleData);



}

}


  useEffect(() => {
    getSchedule();
    getUsers();
    getRoster();
    
  if( true){
 
  }
  },[usersChanged,scheduleChanged, rostersChanged]);


  const userInfo = users.map(user => {
     return (
     <div className="sm:flex">
      <div>{user.avatar}</div>
      <div className=" sm:text-[red]">{user.display_name}</div>
    </div>
    )
  })
  
  const matchupPoints = schedule.map(player => {
    return (
    <div>
      <div>{schedule.matchup_id}</div>
    </div>
    )
  })
   
   const weeklyMatches = [...weeklyMatchups.values()].map(player => {
    return (
    <div>
      <div>{player.name}</div>
      <div>{player.avatar}</div>
      <div>{player.roster_id}</div>
    </div>
    )
  })

  return (
    <div>
      {userInfo}
      {matchupPoints}
      {weeklyMatches}
      
    </div>
  );
};

export default Schedule;
