import React from "react";

const HeadlinesRedemption = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[20px] mb-[10px] self-start border-b border-black border-opacity-10 w-full lg:flex justify-center">
        Top Headlines
      </p>
      <div className="grid grid-cols-2 gap-x-10 text-[15px] lg:flex flex-col gap-y-[20px]">
        <ul className="flex flex-col justify-between list-disc h-[30vh] w-[20vw] mt-10 ml-3">
          <li>HeadLine</li>
          <li>HeadLine</li>
          <li>HeadLine</li>
          <li>HeadLine</li>
          <li>HeadLine</li>
        </ul>
      </div>
    </div>
  );
};

export default HeadlinesRedemption;
