import React from "react";
import useScorer from "../UseScorer";

const TopScorerRL = () => {
  const { scorers } = useScorer("RL");

  return <div>{scorers}</div>;
};

export default TopScorerRL;
