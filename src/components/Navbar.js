import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-center items-center text-[black]">
      <ul className="hidden md:flex text-black px-2">
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8]">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8]">
          <Link to="/articles">Articles</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8]">
          <Link to="/schedule">Schedule</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8]">
          <Link to="/standings">Standings</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8]">
          <Link to="/powerrankings">PowerRankings</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8]">
          <Link to="/redemptionleague">RedemptionLeague</Link>
        </li>
        <li className="cursor-pointer hover:border-b-2 border-[#ba30e8]">
          <Link to="/apply">Apply</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
