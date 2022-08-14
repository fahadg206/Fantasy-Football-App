import React, { useState } from "react";
import Week2 from "./WeeklyArticles/Week2";
import { Link } from "react-router-dom";
import { Link as SmoothLink } from "react-scroll";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Articles = () => {
  const [showNav, setShowNav] = useState(false);
  const showArticlesNav = () => {
    return (
      <div>
        <ul className="text-[17px]">
          <li className="p-[5px]">
            <Link to="/articles/week1">Week1</Link>
          </li>
          <li className="p-[5px]">
            <Link to="/articles/week1">Week1</Link>
          </li>
          <li className="p-[5px]">
            <Link to="/articles/week1">Week1</Link>
          </li>
          <li className="p-[5px]">
            <Link to="/articles/week1">Week1</Link>
          </li>
          <li className="p-[5px]">
            <Link to="/articles/week1">Week1</Link>
          </li>
          <li className="p-[5px]">
            <Link to="/articles/week1">Week1</Link>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <div className="min-h-screen bg-[url('images/bgpng.png')] ">
      <div className="flex flex-col md:grid grid-cols-4 justify-items-center">
        {/* Use React Smooth Scroll for Headlines */}
        <div className="hidden md:flex flex-col items-center justify-center text-center polls text-[black] rounded-[10px] bg-[#eaecee] h-[400px] p-[10px] shadow-md shadow-black sticky top-5 w-3/4">
          <h2 className="mb-[15px] text-2xl">Headlines</h2>
          <ul className="text-[17px]">
            <li className="p-[5px]">
              <SmoothLink
                className="cursor-pointer text-center"
                to="article1"
                smooth={true}
                duration={500}
                delay={200}
              >
                Watson Suspension Appealed fsffsdfsdfsdfsdfsd
              </SmoothLink>
            </li>
            <li className="p-[5px]">
              <SmoothLink
                className="cursor-pointer"
                to="article2"
                smooth={true}
                duration={500}
                delay={200}
              >
                Rodgers Seeking 3rd Straight MVP
              </SmoothLink>
            </li>
          </ul>
        </div>
        <div className="col-span-2 justify-self-start">
          <Week2 />
        </div>
        <div className="hidden lg:flex flex-col items-center justify-center text-center polls text-[black] rounded-[10px] bg-[#eaecee] h-[400px] p-[10px] shadow-md shadow-black sticky top-20 lg:top-5">
          <h2 className="mb-[15px] text-2xl">Weekly Articles</h2>
          <ul className="text-[17px]">
            <li className="p-[5px]">
              <Link to="/articles/week1">Week1</Link>
            </li>
            <li className="p-[5px]">
              <Link to="/articles/week1">Week1</Link>
            </li>
            <li className="p-[5px]">
              <Link to="/articles/week1">Week1</Link>
            </li>
            <li className="p-[5px]">
              <Link to="/articles/week1">Week1</Link>
            </li>
            <li className="p-[5px]">
              <Link to="/articles/week1">Week1</Link>
            </li>
            <li className="p-[5px]">
              <Link to="/articles/week1">Week1</Link>
            </li>
          </ul>
        </div>
      </div>

      {/*Mobile DropDown Menu*/}
      <div className="flex flex-col items-center fixed w-full md:hidden">
        <p className="text-2xl">Weekly Articles</p>
        {showNav ? (
          <FaArrowUp
            className="mb-[30px] text-2xl"
            onClick={() => setShowNav(!showNav)}
          />
        ) : (
          <FaArrowDown
            className="text-2xl animate-bounce"
            onClick={() => setShowNav(!showNav)}
          />
        )}
        {showNav && showArticlesNav()}
      </div>
    </div>
  );
};

export default Articles;
