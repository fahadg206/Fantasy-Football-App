import React from "react";

const HeadlinesRedemption = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[20px] mb-[10px] self-start border-b border-black border-opacity-10 w-full lg:flex justify-center ">
        Top Headlines
      </p>
      <div className="grid grid-cols-2 gap-x-10 text-[15px] lg:flex flex-col gap-y-[20px]">
        <ul className=" w-[57vw] flex flex-col p-2 md:w-[67vw] lg:grid grid-cols-1 justify-between text-[15px] list-disc h-[45vh] lg:w-[20vw]">
          <li className="break-words">
            Can Moro hang on this time and finally secure himself a spot in the
            Champions League?
          </li>
          <li>
            Unc is now the longest tenured member of the redemption league. Does
            he know something we don't?
          </li>
          <li>
            After a promising rookie season, can HIMOTHY take the next step?{" "}
          </li>
          <li>
            4 new members, two pairs of siblings, can they all make it out of
            RL?
          </li>
          <li>KingOmar24 looks to prevent another FLAME OUT this season</li>
        </ul>
      </div>
    </div>
  );
};

export default HeadlinesRedemption;
