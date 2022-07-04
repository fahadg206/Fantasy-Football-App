import React, {useEffect} from "react";
import sleeper from "../api/sleeper";

const getStandings = async () => {
  const response = await sleeper.get("/league/845531683540303872/rosters")
  console.log(response.data);
}

const Standings = () => {
  getStandings();
  return <div>Standings</div>;
};

export default Standings;
