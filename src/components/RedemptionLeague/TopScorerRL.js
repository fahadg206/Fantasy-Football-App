import React from "react";
import useScorer from "../reusableComponents/UseScorer";

const TopScorerRL = () => {
  const { scorers } = useScorer("RL");

  return <div>{scorers}</div>;
};

export default TopScorerRL;
