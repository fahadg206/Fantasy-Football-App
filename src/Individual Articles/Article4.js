import React from "react";
import Sal from "../images/scary_imran.jpg";
import Fahad from "../images/fahad.jpg";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Article4 = () => {
  return (
    <div
      name="article4"
      className="flex flex-col items-center sm:grid grid-cols-2"
    >
      <div className="grid grid-cols-1 justify-items-center w-full sm:sticky top-20 self-start lg:top-5">
        {/** Make sure image dimensions are 364 x 607 */}
        <img className="rounded-[10px]" src={Sal} />
      </div>
      <div className="grid grid-cols-1 gap-y-3 justify-items-center mt-10 ml-5 ">
        <p className="text-5xl font-bold">A NEW ERA</p>
        <div className="flex w-[77vw] sm:flex sm:w-[35vw] md:flex items-center md:w-[25vw] justify-between border-b-2 border-black border-opacity-10">
          <div className="flex items-center">
            <img
              className="w-[40px] my-[5px] mr-[5px] rounded-full"
              src={Fahad}
            />
            <div className="flex flex-col">
              <p>Fahad Guled</p>
              <p className="text-[10px] font-bold">RCL Co-Founder</p>
            </div>
          </div>
          <p className="text-[12px]">Sep 7, 2022</p>
        </div>
        <p className="p-3 text-left text-[18px]">
          Taking fantasy football to a whole new level!
          <br />
          <br />
          We welcome you to the most interactive fantasy football experience one
          could ever hope for. The RainCity League.
          <br />
          <br />
          With the help of Sleeper, we offer cool
          <br />
          <br />
          "We weren't supposed to be here..." <br />
          <br />
          Imran said in an interview with our RCL reporters, "We literally got
          into the playoffs with a loss", reffering to his 7-7 regular season
          finish to secure the final spot in the Champions League playoffs.
          Every matchup he went into, he was the underdog. Every start he made,
          was met with criticism and mockery. No one believed he would win a
          game, yet alone multiple.
          <br />
          <br />
          <div className=" md:hidden xl:block w-[23vw] twitter">
            <TwitterTweetEmbed tweetId={"1566171882109693952"} />
          </div>
          However, calling Imran's historic title run a miracle would be a
          detriment to his gutsy plays and coaching decisions he's made
          throughout the playoffs. From starting Rex Burkhead to feeding the
          hothand in Rashaad Penny Imran galvanized his team and said all the
          right things in the lockerroom to give his team the morale boost they
          needed to keep going. <br />
          <br />
          In a run that included defeating multiple powerhouses and previous
          champions, Imran will look to continue that momentum in what is sure
          to be a monsterous title defense. Although he might not have his guys
          from last year with him, Imran has shown time and time again that he's
          able to find the diamonds in the rough and has already proven that he
          could win with a chip on his shoulder, now let's see if he can win
          with the chip in his hands. <br />
        </p>
        <img
          className="rounded-[10px] w-[200px]"
          src="https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/08/364/607/07.6.22_Is-Aaron-Rodgers-to-blame-for-Packers-lack-of-WR-depth.jpg?ve=1&tl=1"
        />
      </div>
    </div>
  );
};

export default Article4;
