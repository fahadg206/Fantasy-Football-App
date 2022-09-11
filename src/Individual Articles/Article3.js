import React from "react";
import Jefe from "../images/jefe_lesson.jpg";
import Hamsa from "../images/hamsa.png";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Article3 = () => {
  return (
    <div
      name="article3"
      className="flex flex-col items-center sm:grid grid-cols-2"
    >
      <div className="grid grid-cols-1 justify-items-center w-full sm:sticky top-20 self-start lg:top-5">
        {/** Make sure image dimensions are 364 x 607 */}
        <img className="rounded-[10px]" src={Jefe} />
      </div>
      <div className="grid grid-cols-1 gap-y-3 justify-items-center mt-10 ml-5 ">
        <p className="text-5xl font-bold">
          LESSONS LEARNED FROM THE 2021 FANTASY SEASON
        </p>
        <div className="flex w-[77vw] sm:flex sm:w-[35vw] md:flex items-center md:w-[25vw] justify-between border-b-2 border-black border-opacity-10">
          <div className="flex items-center">
            <img
              className="w-[40px] my-[5px] mr-[5px] rounded-full"
              src={Hamsa}
            />
            <div className="flex flex-col">
              <p>Hamsa Ahmed</p>
              <p className="text-[10px] font-bold">RCL Staff Writer</p>
            </div>
          </div>
          <p className="text-[12px]">Sep 6, 2022</p>
        </div>
        <p className="p-3 text-left text-[18px]">
          This last year of fantasy football has been quite the roller coaster.
          <br />
          <br />
          I saw the good:
          <br />
          <div className=" md:hidden xl:block w-[23vw] twitter">
            <TwitterTweetEmbed tweetId={"1465054595432861697"} />
          </div>
          <br />
          The bad:
          <br />
          <div className=" md:hidden xl:block w-[23vw] twitter">
            <TwitterTweetEmbed tweetId={"1452354370872516610"} />
          </div>
          <br />
          and the ugly:
          <br />
          <div className=" md:hidden xl:block w-[23vw] twitter">
            <TwitterTweetEmbed tweetId={"1471699920738390016"} />
          </div>
          <br />
          I started off the season quite rough. A record of 2-4, a team battling
          injuries and facing multiple power houses back to back weeks. If this
          kept up I would have faced possible relegation.
          <br />
          <br />
          I was in SHAMBLES, but I did not waver. I had a strong ideology that I
          made sure to not shy away from. That ideology was; to stay down till
          the come up! Wait till my team is completely healthy and fight every
          week like my life depended on it... which sounds good on paper but
          sadly there never came a point where my team was actually completely
          healthy.
          <br />
          <br />
          My 3 running backs who I had believed would take me to the promised
          land started dropping like flies. Saquon ankle sprain, Joe mixon ankle
          sprain, and zeke tearing his PCL?? I immediately started trading for
          their backups or getting their backups from waivers. This could only
          work for so long however. There came a time where I learned that even
          when you have the handcuff of the running back it does not guarantee
          that they will produce. They are backups for a reason. And trust me,
          relying on Samaje Perine to get me a dub isn't something I'd wish on
          my worse enemy.
          <br />
          <br />
          One thing that I wished I had done differently was instead of having a
          top heavy team where you rely heavily on 2 or 3 players (I'm looking
          at you Kabo) I would lean on the thought of having a deeper team with
          players who you are certain that will produce. I learned this in the
          playoffs because due to covid one of my star players was sick and was
          inactive. I had to start a scrub who was rotting on my bench.
          <br />
          <br />
          That scrub EXPLODED for a whopping 0 points making me flame out in a
          blaze of glory. Shout out Jerry Jeudy fr... maybe I was a year too
          early on him. So in conclusion the main thing I learned was balance.
          Handcuffs and being top heavy is not necessarily bad but down the road
          when you're in a pinch you need to be able to call on a couple guys'
          from the bench to give you quality minutes when it matters most.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default Article3;
