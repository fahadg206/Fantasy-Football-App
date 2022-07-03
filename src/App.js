import React, { useEffect } from "react";
import sleeper from "./api/sleeper";

const getLeagueData = async () => {
  const response = await sleeper.get("/league/845531683540303872");
  console.log(response.data);
};

const App = () => {
  useEffect(() => {
    getLeagueData();
  });

  return <h1>App</h1>;
};

export default App;
