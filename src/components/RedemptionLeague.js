import React from "react";
import Standings from "./Redemption/Standings";

const RedemptionLeague = () => {
  return (
    <div className="grid grid-cols-1 items-center justify-center w-70vw">
      <div>{/* <RedemptionPoll /> */}</div>
      <div>Schedule</div>
      <div>
        <Standings />
      </div>
    </div>
  );
};

export default RedemptionLeague;
