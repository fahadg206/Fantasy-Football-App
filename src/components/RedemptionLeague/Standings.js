import React from "react";
import useStandings from "../reusableComponents/useStandings";

const Standings = () => {
  const { standingsDisplay } = useStandings("RL");
  return <div>{standingsDisplay}</div>;
};

export default Standings;
