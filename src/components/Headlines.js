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
            "I'm blowing this **** up! Change is coming soon. Enough Saaid...
            🙏" - 6'3
          </li>
          <li className="mb-2">
            Having a 1-1 record in Monday Night games, will the coin finally
            flip SleepyKey's way this Monday?
          </li>
          <li className="mb-2">
            Kabo, KingKobra sit atop the standings throughout 2 weeks.
          </li>
          <li className="mb-2">
            AkhJefe PROMISES to get a blockbuster deal done soon. "If I pull
            this trade off, good luck to the rest of the league".
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Headlines;
