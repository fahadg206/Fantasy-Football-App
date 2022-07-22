import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosAmericanFootball } from "react-icons/io";
import { FaTwitter, FaDiscord, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div>
      <div className="nav hidden md:fixed w-full flex justify-center items-center text-white pt-[20px]">
        <ul className="nav md:flex grow px-2 bg-[#0046FF] w-[80vw] flex justify-center items-center p-[7px]">
          <li>
            <IoIosAmericanFootball className="cursor-pointer mr-[20px] h-[30px] w-[30px] ml-auto hover:scale-125 duration-500" />
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[20px]">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[20px]">
            <Link to="/articles">Articles</Link>
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[20px]">
            <Link to="/schedule">Schedule</Link>
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[30px]">
            <Link to="/standings">Standings</Link>
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[30px]">
            <Link to="/powerrankings">Power Rankings</Link>
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[20px]">
            <Link to="/redemptionleague">Redemption League</Link>
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[20px] bg-[white] rounded-[10px] font-bold hover:scale-110 duration-500 text-[17px] ml-auto">
            <Link className="p-[13px]  text-[#0046FF] text-center" to="/apply">
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

      <div className="md:hidden z-10 text-white text-3xl" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes className="text-white text-3xl" />}
      </div>

      {/* {Mobile Menu} */}

      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "w-full h-screen flex flex-col justify-center items-center text-gray-300 gap-[30px] text-[35px]"
          }
        >
          <li>
            <IoIosAmericanFootball className="cursor-pointer mr-[20px] hover:scale-125 duration-500 text-5xl" />
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[20px]">
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[20px]">
            <Link onClick={handleClick} to="/articles">
              Articles
            </Link>
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[20px]">
            <Link onClick={handleClick} to="/schedule">
              Schedule
            </Link>
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[30px]">
            <Link onClick={handleClick} to="/standings">
              Standings
            </Link>
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[30px]">
            <Link onClick={handleClick} to="/powerrankings">
              Power Rankings
            </Link>
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[20px]">
            <Link onClick={handleClick} to="/redemptionleague">
              Redemption League
            </Link>
          </li>
          <li className="cursor-pointer hover:border-b-2 border-[#01ECF2] mr-[20px] bg-[white] rounded-[10px] font-bold hover:scale-110 duration-500 text-[25px]">
            <Link
              onClick={handleClick}
              className="p-[13px]  text-[#0046FF] text-center"
              to="/apply"
            >
              Apply
            </Link>
          </li>
          <li className="flex items-center ">
            <a href="https://twitter.com/fahadg_dev" target="_blank">
              <FaTwitter
                onClick={handleClick}
                className=" hover:scale-125 duration-500"
              />
            </a>
          </li>
          <li className="cursor-pointer">
            <a href="https://twitter.com/fahadg_dev" target="_blank">
              <FaDiscord
                onClick={handleClick}
                className=" hover:scale-125 duration-500"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
