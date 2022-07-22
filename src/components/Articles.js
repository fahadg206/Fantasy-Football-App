import React, { useState } from "react";
import Week1 from "./WeeklyArticles/Week1";
import Week2 from "./WeeklyArticles/Week2";
import { Link } from "react-router-dom";
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
    <div>
      <div className="hidden sm:flex justify-center items-center pt-[100px] ml-[20px] gap-[50px] ">
        <div className="flex flex-col items-center justify-center text-center polls text-[white] p-[20px] rounded-[40px] bg-[#1A4AAC] ">
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
        <div className="w-[60%]">
          <Week2 />
        </div>
      </div>

      <div className="flex flex-col items-center fixed w-full sm:hidden">
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
