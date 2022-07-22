import React from "react";
import { Link } from "react-router-dom";

const Schedule = ({ navbarMatchup }) => {
  return (
    <div
      key={new Date()}
      className="flex lg:flex-row md:flex-row flex-col justify-between items-center w-full"
    >
      <div className="mr-auto ml-5 my-2 ">
        <img
          className="w-[300px] h-[100px]"
          src="https://www.pngkit.com/png/full/177-1773878_sec-logo-png.png "
        />
      </div>
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
