import React from "react";
import Poll from "react-polls";

const Polls = () => {
  return (
    <div>
      <div className="flex md:grid grid-cols-1 items-center justify-center polls text-[white] p-[20px] rounded-[40px] bg-[#1A4AAC]">
        <Poll />
      </div>
    </div>
  );
};

export default Polls;
