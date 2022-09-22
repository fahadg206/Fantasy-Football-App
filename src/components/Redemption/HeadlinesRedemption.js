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
            Hanad, 7Sell, & OddJobs sit atop the standings throughout 2 weeks.
          </li>
          <li>
            Totaling 150 FP throughout 2 weeks, is it time for HIMOTHY to
            rebuild his roster?
          </li>
          <li>Will Payafee's streak of blown leads continue?</li>
          <li>Lamar and company tramples Moro's hopes of going 2-0.</li>
          <li>Is HIMOTHY & Moro the new Lakers vs Celtics rivarly?</li>
        </ul>
      </div>
    </div>
  );
};

export default HeadlinesRedemption;
