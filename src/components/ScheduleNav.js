import React from "react";
import { Link } from "react-router-dom";

const Schedule = ({ navbarMatchup }) => {
  return (
    <div
      key={new Date()}
      className="flex flex-wrap lg:flex-row md:flex-row justify-between items-center w-full"
    >
      <Link to="/schedule">
        <div className="mx-2 my-2 shadow-md shadow-[#0046FF] hover:scale-125  hover:shadow-[#01ECF2] duration-500 p-[10px] rounded-[20px]">
          {navbarMatchup[0]}
        </div>
      </Link>
      <Link to="/schedule">
        <div className="mx-2 my-2 shadow-md shadow-[#0046FF]  hover:scale-125 hover:shadow-[#01ECF2] duration-500 p-[10px] rounded-[20px]">
          {navbarMatchup[1]}
        </div>
      </Link>
      <Link to="/schedule">
        <div className="mx-2 my-2 shadow-md shadow-[#0046FF] hover:scale-125 hover:shadow-[#01ECF2] duration-500 p-[10px] rounded-[20px]">
          {navbarMatchup[1]}
        </div>
      </Link>
      <Link to="/schedule">
        <div className="mx-2 my-2 shadow-md shadow-[#0046FF] hover:scale-125 hover:shadow-[#01ECF2] duration-500 p-[10px] rounded-[20px]">
          {navbarMatchup[1]}
        </div>
      </Link>
      <Link to="/schedule">
        <div className="mx-2 my-2 shadow-md shadow-[#0046FF] hover:scale-125 hover:shadow-[#01ECF2] duration-500 p-[10px] rounded-[20px]">
          {navbarMatchup[1]}
        </div>
      </Link>
      <Link to="/schedule" className="mr-[200px]">
        <div className="mx-2 my-2 shadow-md shadow-[#0046FF] hover:scale-125 hover:shadow-[#01ECF2] duration-500 p-[10px] rounded-[20px]">
          {navbarMatchup[1]}
        </div>
      </Link>
    </div>
  );
};

export default Schedule;
