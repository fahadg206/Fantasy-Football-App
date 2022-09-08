import React from "react";

const HeadlinesRedemption = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[20px] mb-[10px] self-start border-b border-black border-opacity-10 w-full lg:flex justify-center ">
        Top Headlines
      </p>
      <div className="grid grid-cols-2 gap-x-10 text-[15px] lg:flex flex-col gap-y-[20px]">
        <ul className="w-[55vw] flex flex-col md:w-[55vw] p-5 md:break-words lg:text-[14px] lg:grid grid-cols-1  justify-between text-[15px] list-disc h-[45vh] lg:w-[20vw]">
          <li className="break-words">
            Can Moro hang on this time and finally secure himself a spot in the
            Champions League?
          </li>
          <li>
            Unc is now the longest tenured member of the redemption league. Does
          </li>
          <li>
            HeadAfter narrowly escaping relegation last season, is this the end
          </li>
          <li>
            HeadAfter narrowly escaping relegation last season, is this the end
          </li>
          <li>
            HeadAfter narrowly escaping relegation last season, is this the end
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeadlinesRedemption;
