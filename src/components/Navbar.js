import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaDiscord, FaBars } from "react-icons/fa";
import ScheduleNav from "./ScheduleNav";

export default function Navbar({ fixed, navbarMatchup }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [scoreNavbarOpen, setScoreNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap mt-3 items-center justify-between px-2 py-2 bg-[#0b1a47e0] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between text-center lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
              href="#pablo"
            >
              Raincity Fantasy
            </a>

            <button
              className=" text-gray-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => {
                setNavbarOpen(!navbarOpen);
                setScoreNavbarOpen(false);
              }}
            >
              <FaBars className="justify-center cursor-pointer mr-[20px] h-[30px] w-[30px] ml-auto hover:scale-125 duration-500" />
            </button>
            <button
              className="text-gray-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => {
                setScoreNavbarOpen(!scoreNavbarOpen);
                setNavbarOpen(false);
              }}
            >
              Scores
            </button>
          </div>

          {!scoreNavbarOpen ? (
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? "flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none items-center lg:ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <Link to="/">Home</Link>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <Link to="/articles">Articles</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <Link to="/schedule">Schedule</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <Link to="/standings">Standings</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <Link to="/powerrankings">Power Rankings</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    <Link to="/redemptionleague">Redemption League</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <button className="px-4 py-1 mr-2 bg-blue-600 text-white text-lg rounded-lg">
                    Apply
                  </button>
                </li>
                <li className="nav-item">
                  <a href="https://twitter.com/fahadg_dev" target="_blank">
                    <FaDiscord className="h-[24px] mx-2 w-[24px] hover:scale-125 duration-500" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://twitter.com/fahadg_dev" target="_blank">
                    <FaTwitter className="h-[24px] mx-2 w-[24px] hover:scale-125 duration-500" />
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className={scoreNavbarOpen ? "" : ""}>
              <ScheduleNav navbarMatchup={navbarMatchup} />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
