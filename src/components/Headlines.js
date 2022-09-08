import React from "react";
import { Link } from "react-router-dom";

const Headlines = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-[20px] mb-[10px] self-start border-b border-black border-opacity-10 w-full lg:flex justify-center">
        Top Headlines
      </p>
      <div className="grid grid-cols-2 gap-x-10 text-[15px] lg:flex flex-col gap-y-[20px]">
        <ul className=" w-[55vw] flex flex-col  md:w-[70vw]  lg:grid grid-cols-1 justify-between text-[15px] list-disc h-[45vh] lg:w-[20vw]">
          <li className="mb-2">
            It's a new era in fantasy with RainCity League! Want to join?
            <Link className="underline" to="/apply">
              {" "}
              Apply now!
            </Link>
          </li>
          <li className="mb-2">
            Matchup has been set. FG vs Boogie Week 2. Just what the doctor
            ordered.
          </li>
          <li className="mb-2">
            Experts rank ECW division as "The toughest division in football
            right now"
          </li>
          <li className="mb-2">
            Unfinished business for JewelsWinterhood as he eye's his 3rd
            consecutive finals appearance
          </li>
          <li className="mb-2">
            Having never missed the playoffs in his career, is Sal the dark
            horse to win it all this season?
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Headlines;
