import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav fixed w-full h-[80px] flex justify-center items-center">
      <ul className="hidden md:flex text-[#ed1c24] px-2 text-[white]">
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8] mr-[20px]">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8] mr-[20px]">
          <Link to="/articles">Articles</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8] mr-[20px]">
          <Link to="/schedule">Schedule</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8] mr-[30px]">
          <Link to="/standings">Standings</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8] mr-[30px]">
          <Link to="/powerrankings">Power Rankings</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8] mr-[20px]">
          <Link to="/redemptionleague">Redemption League</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8] mr-[20px]">
          <Link to="/apply">Apply</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
