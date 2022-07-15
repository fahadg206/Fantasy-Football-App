import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Articles = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[100px]">
      <ul className=" flex flex-col justify-center bg-[#1a1a1c] w-[20vw] h-[30vh] text-[white] text-center rounded-[30px]">
        <li>fdsfsdfddfsfssfdfdssdsdffsd</li>
        <li>fdsfsdfddfsfssfdfdssdsdffsd</li>
        <li>fdsfsdfddfsfssfdfdssdsdffsd</li>
        <li>fdsfsdfddfsfssfdfdssdsdffsd</li>
        <li>fdsfsdfddfsfssfdfdssdsdffsd</li>
        <li>fdsfsdfddfsfssfdfdssdsdffsd</li>
        <button className="text-white text-center bg-[#1a1a1c] group border-2 px-6 py-3 my-2 flex justify-center hover:bg-[#ba30e8] hover:border-[#ba30e8]">
          View Work
          <span className="group-hover:rotate-90 duration=300">
            <HiArrowNarrowRight className="ml-2" />
          </span>
        </button>
      </ul>
    </div>
  );
};

export default Articles;
