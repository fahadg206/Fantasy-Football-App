import React from "react";
import { Link } from "react-router-dom";
import { IoIosAmericanFootball } from "react-icons/io";
import { FaTwitter, FaDiscord } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="nav fixed w-full flex justify-center items-center  pt-[20px]">
      <ul className="nav hidden md:flex grow px-2 bg-[#850c10] w-[80vw] flex justify-center items-center p-[7px]">
        <li>
          <IoIosAmericanFootball className="cursor-pointer mr-[20px] h-[30px] w-[30px] ml-auto hover:scale-125 duration-500" />
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[white] mr-[20px]">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[white] mr-[20px]">
          <Link to="/articles">Articles</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[white] mr-[20px]">
          <Link to="/schedule">Schedule</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[white] mr-[30px]">
          <Link to="/standings">Standings</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[white] mr-[30px]">
          <Link to="/powerrankings">Power Rankings</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[white] mr-[20px]">
          <Link to="/redemptionleague">Redemption League</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[white] mr-[20px] border-2 border-white bg-[white] rounded-[10px] font-bold hover:scale-110 duration-500 text-[17px] ml-auto">
          <Link className="p-[13px]  text-[#850c10] text-center" to="/apply">
            Apply
          </Link>
        </li>
        <li className="flex items-center border-l ml-6 pl-6 border-[white]">
          <a href="https://twitter.com/fahadg_dev" target="_blank">
            <FaTwitter className="h-[28px] w-[28px] hover:scale-125 duration-500" />
          </a>
        </li>
        <li className="ml-[10px] cursor-pointer  mr-[20px]">
          <a href="https://twitter.com/fahadg_dev" target="_blank">
            <FaDiscord className="h-[28px] w-[28px] hover:scale-125 duration-500" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
