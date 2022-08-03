import React from "react";

const Headlines = () => {
  return (
    <div className="flex flex-col items-center lg:border-2 border-[#01ECF2] border-opacity-30 rounded-[10px] bg-white p-10">
      <p className="text-[20px] mb-[10px] self-start border-b border-[#01ECF2] w-full border-opacity-30 lg:flex justify-center">
        Top Headlines
      </p>
      <div className="grid grid-cols-2 gap-x-10 text-[15px] lg:flex flex-col gap-y-[20px]">
        <p>Headline 1 </p>
        <p>Headline 2 </p>
        <p>Headline 3 </p>
        <p>Headline 4 </p>
        <p>Headline 5 </p>
        <p>Headline 6 </p>
        <p>Headline 7 </p>
        <p>Headline 8 </p>
      </div>
    </div>
  );
};

export default Headlines;
