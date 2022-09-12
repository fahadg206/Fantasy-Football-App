import React from "react";
import Faces from "../images/cl_new_faces.jpg";
import Kabo from "../images/kabo_headshot.jpg";
import { Tweet } from "react-twitter-widgets";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Article4 = () => {
  return (
    <div
      name="article4"
      className="flex flex-col items-center sm:grid grid-cols-2"
    >
      <div className="grid grid-cols-1 justify-items-center w-full sm:sticky top-20 self-start lg:top-5">
        {/** Make sure image dimensions are 364 x 607 */}
        <img className="rounded-[20px]" src={Faces} />
      </div>
      <div className="grid grid-cols-1 gap-y-3 justify-items-center mt-10 ml-5 ">
        <p className="text-5xl font-bold">
          THE NEW FACES OF THE CHAMPIONS LEAGUE
        </p>
        <div className="flex w-[77vw] sm:flex sm:w-[35vw] md:flex items-center md:w-[25vw] justify-between border-b-2 border-black border-opacity-10">
          <div className="flex items-center">
            <img
              className="w-[40px] my-[5px] mr-[5px] rounded-full"
              src={Kabo}
            />
            <div className="flex flex-col">
              <p>Mahad Fahiye</p>
              <p className="text-[10px] font-bold">RCL Founder</p>
            </div>
          </div>
          <p className="text-[12px]">Sep 5, 2022</p>
        </div>
        <p className="p-3 text-left text-[18px]">
          As we kickoff the new fantasy season, let's take a look at this year's
          newcomers! <br />
          <br />
          One and done... Edo and Khader bounced back IMMEDIATLY after only
          spending a total of one season in the Redemption League. Their short
          tenure sparked some controversy however, raising questions about the
          potential glaring difference in competition between both leagues, as
          they dominated their way through the regular season, clinching the #1
          and #2 seeds respectively.
          <br />
          <br />
          With a second chance at glory and new found confidence, Edo and Khader
          are eager to silence the critics and dominate in the Champions League
          this season. And now that their losing days are behind them, the
          league better be weary... <br />
          <br />
          With all the media and hype surrounding Edo and Khader, we can't
          forget about the two guys that BEAT THEM in the Redemption League
          playoffs last year!
          <br />
          <br />
          Former Redemption League veteran YSL, who denounced the title of the
          longest tenured Redemption League member*, finally clinched that
          elusive ticket to the Champions League that he has sought after for so
          long. YSL will be punching above his weight class as he draws a tough
          matchup week 1, facing the defending champ Imran himself, and will
          look to put all his experiences slugging it out in RL to the test,
          Vegas has him as a 76 point underdog with a "puncher's chance".
          <br />
          <br />
          Besting YSL in the RL title game, Reiging Redemption League Champion
          King K0bra stormed through the competition during his dominant
          post-season performance to cement his place in the Champions League.
          King K0bra ensured our reporters that his winning formula will indeed
          translate well into the big leagues. When asked about his message to
          his fellow fantasy managers, King K0bra said "The real fantasy champ
          is here. I'm going back to back like I'm Jordan 96-97, both RL and CL
          titles in hand, what do you call that? A double crown?" ....well his
          head is definitely big enough to wear a double crown that's for sure.
          <br />
          <br />
          Sharpened by the harsh conditions in the Redemption League, both YSL
          and King K0bra will look to claw their way to the top of the league
          and establish themselves as a force to be reckoned with. <br />
          <br />
          <p className="text-[12px]">
            *The title now belongs to Unc, as it'll be his 5th year in the
            Redemption League if he doesn't qualify this season, breaking YSL's
            previous league record of 4 years.
          </p>
        </p>
        <p className="flex w-[77vw] sm:flex sm:w-[35vw] md:flex items-center md:w-[25vw] justify-between border-b-2 border-black border-opacity-5"></p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Article4;
