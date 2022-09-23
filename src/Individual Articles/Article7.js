import React from "react";
import Sal from "../images/RCL_sponsor.jpg";
import Kabo from "../images/kabo_headshot.jpg";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Score1 from "../images/score1.png";
import Score2 from "../images/score2.png";

const Article7 = () => {
  return (
    <div
      name="article7"
      className="flex flex-col items-center sm:grid grid-cols-2"
    >
      <div className="grid grid-cols-1 justify-items-center w-full sm:sticky top-20 self-start lg:top-5">
        {/** Make sure image dimensions are 364 x 607 */}
        <img className="rounded-[10px]" src={Sal} />
      </div>
      <div className="grid grid-cols-1 gap-y-3 justify-items-center mt-10 ml-5 ">
        <p className="text-5xl font-bold">LEAGUE'S FIRST SPONSOR</p>
        <div className="flex w-[77vw] sm:flex sm:w-[35vw] md:flex items-center md:w-[25vw] justify-between border-b-2 border-black border-opacity-10">
          <div className="flex items-center">
            <img
              className="w-[40px] my-[5px] mr-[5px] rounded-full"
              src={Kabo}
            />
            <div className="flex flex-col">
              <p>Mahad Fahiye</p>
              <p className="text-[10px] font-bold">RCL Staff Writer</p>
            </div>
          </div>
          <p className="text-[12px]">Sep 20, 2022</p>
        </div>
        <p className="p-3 text-left text-[18px]">
          We are excited to introduce our new sponsor.... SalTheMan!
          <br />
          <br />
          Sal has been an active member of the league since its founding and has
          consistently competed at the highest level. His competitive and
          winning culture truly exemplifies what this league is about, that’s
          why this year's hardware (Whether a belt or trophy, let us know on
          Twitter!) will be named after him!
          <br />
          <br />
          <div className=" rounded-[10px] flex flex-col items-center">
            <img className="rounded-[10px] w-[300px]" src={Score1} />
            <img className="rounded-[10px] w-[300px]" src={Score2} />
          </div>
          <br />
          <br />
          Everyone join me in thanking Sal for his gracious efforts and we wish
          him the best luck this season and in the many seasons to come! <br />
        </p>
        <p className="flex w-[77vw] sm:flex sm:w-[35vw] md:flex items-center md:w-[25vw] justify-between border-b-2 border-black border-opacity-5"></p>
      </div>
    </div>
  );
};

export default Article7;
