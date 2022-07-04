import React, {useEffect} from "react";
import sleeper from "../api/sleeper";

const getSchedule = async () => {
  const response = await sleeper.get("league/845531683540303872/users")
  console.log(response.data);
}


const Schedule = () => {
  useEffect(() => {
    getSchedule();
  });
  return <div>Schedule</div>;
};

export default Schedule;
