import React from "react";
import useScorer from "./UseScorer";

const HighestScorer = () => {
  const { scorers } = useScorer("CL");

  return <div>{scorers}</div>;
};

export default HighestScorer;
