import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Schedule = ({ navbarMatchup }) => {
  return (
    <div
      key={new Date()}
      className="flex flex-wrap lg:flex-row md:flex-row justify-between items-center w-full opacity-100 text-black "
    >
      <Link to="/schedule">
        <div className="mx-2 my-2 shadow-md shadow-[black] hover:scale-110  hover:shadow-#D1D5DB duration-500 p-[10px] rounded-[20px] bg-[#F9F9FB] dark:bg-[#1a1a1c] dark:shadow-white w-[140px] flex justify-center">
          {navbarMatchup[0]}
        </div>
      </Link>
      <Link to="/schedule">
        <div className="mx-2 my-2 shadow-md shadow-[black]  hover:scale-110 hover:shadow-#D1D5DB duration-500 p-[10px] rounded-[20px] bg-[#F9F9FB] dark:bg-[#1a1a1c] dark:shadow-white w-[140px] flex justify-center">
          {navbarMatchup[1]}
        </div>
      </Link>
      <Link to="/schedule">
        <div className="mx-2 my-2 shadow-md shadow-[black] hover:scale-110 hover:shadow-#D1D5DB duration-500 p-[10px] rounded-[20px] bg-[#F9F9FB] dark:bg-[#1a1a1c] dark:shadow-white w-[140px] flex justify-center">
          {navbarMatchup[2]}
        </div>
      </Link>
      <Link to="/schedule">
        <div className="mx-2 my-2 shadow-md shadow-[black] hover:scale-110 hover:shadow-#D1D5DB duration-500 p-[10px] rounded-[20px] bg-[#F9F9FB] dark:bg-[#1a1a1c] dark:shadow-white w-[140px] flex justify-center">
          {navbarMatchup[3]}
        </div>
      </Link>
      <Link to="/schedule">
        <div className="mx-2 my-2 shadow-md shadow-[black] hover:scale-110 hover:shadow-#D1D5DB duration-500 p-[10px] rounded-[20px] bg-[#F9F9FB] dark:bg-[#1a1a1c] dark:shadow-white w-[140px] flex justify-center">
          {navbarMatchup[4]}
        </div>
      </Link>
      <Link to="/schedule">
        <div className="mx-2 my-2 shadow-md shadow-[black] hover:scale-110 hover:shadow-#D1D5DB duration-500 p-[10px] rounded-[20px] bg-[#F9F9FB] dark:bg-[#1a1a1c] dark:shadow-white w-[140px] flex justify-center">
          {navbarMatchup[5]}
        </div>
      </Link>
    </div>
  );
};

export default Schedule;
