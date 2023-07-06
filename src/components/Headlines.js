import React from "react";
import { Link } from "react-router-dom";

const Headlines = () => {
  return (
    <div className="flex flex-col items-center dark:text-white">
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
            "Where are all them critics now?" YSL said as he established himself
            as the most dangerous team in CL.
          </li>
          <li className="mb-2">
            King K0bra's skid continues as he loses 6 in a row.
          </li>
          <li className="mb-2">Mixon drops 50, keeps JEFE's season alive</li>
          <li className="mb-2">
            Josh Jacobs, Tyreek and Kelce, Key players that might be on the move
            as the trade deadline nears
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Headlines;
