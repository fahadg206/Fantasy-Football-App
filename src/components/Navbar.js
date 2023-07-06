import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaDiscord, FaBars, FaFootballBall } from "react-icons/fa";
import ScheduleNav from "./ScheduleNav";
import RcMan from "../images/rcman.png";

export default function Navbar({ fixed, navbarMatchup }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [scoreNavbarOpen, setScoreNavbarOpen] = React.useState(false);
  //dark mode
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-[#0a090afa]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between text-center lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="flex items-center font-bold leading-relaxed  mr-4  whitespace-nowrap text-white hover:underline hover:text-white"
              to="/"
            >
              <img className=" w-[44px] h-[36px] mr-2" src={RcMan} />{" "}
              <p className="hidden sm:block">RainCity League</p>
            </Link>

            <button
              className=" text-gray-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => {
                setNavbarOpen(!navbarOpen);
                setScoreNavbarOpen(false);
              }}
            >
              <FaBars className="sm:mr-[118px] justify-center cursor-pointer mr-[20px] h-[30px] w-[30px] ml-auto hover:scale-125 duration-500" />
            </button>
            <button
              className="text-gray-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => {
                setScoreNavbarOpen(!scoreNavbarOpen);
                setNavbarOpen(false);
              }}
            >
              <FaFootballBall className="text-3xl" />
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
              <ul className="flex flex-col lg:flex-row list-none items-center lg:ml-auto font-bold">
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:underline hover:text-white"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:underline hover:text-white"
                    to="/articles"
                  >
                    Articles
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:underline hover:text-white"
                    to="/schedule"
                  >
                    Schedule
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:underline hover:text-white"
                    to="/standings"
                  >
                    Standings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:underline hover:text-white"
                    to="/powerrankings"
                  >
                    Power Rankings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:underline hover:text-white"
                    to="/redemptionleague"
                  >
                    Redemption League
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/apply">
                    <button className="px-4 py-1 mr-2 bg-[#D1D5DB] text-[black] shadow-md shadow-black rounded-lg font-bold hover:scale-110 hover:duration-500 text-[15px]">
                      Apply
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="https://discord.gg/nh7ytTy5Da" target="_blank">
                    <FaDiscord className="h-[24px] mx-2 w-[24px] hover:scale-150 duration-500 text-[#D1D5DB] mt-2" />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="https://twitter.com/raincityleague" target="_blank">
                    <FaTwitter className="h-[24px] mx-2 w-[24px] hover:scale-150 duration-500 text-[#D1D5DB] mt-2" />
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleThemeSwitch}
                    className="bg-white rounded-lg text-black p-2"
                  >
                    Dark Mode
                  </button>
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
