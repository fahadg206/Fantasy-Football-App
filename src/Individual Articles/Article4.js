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
          As we kickoff the new fantasy season, let's take a look at this years
          newcomers <br />
          <br />
          On one side you, you got Edo and Khader bouncing back after being
          relegated a couple of seasons ago. They make their Champions League
          return after they clinched the #1 and #2 seeds respectively. A great
          man once said “You can't win unless you learn how to lose” and both
          these managers have that experience under their belt now.
          <br />
          <br />
          With a second chance at glory Edo and Khader are eager to make noise
          in the Champions League this season and now that their losing days are
          behind them, the league better be weary... <br />
          <br />
          On the other side you got two hopefull managers that will be looking
          to make a splash in their Champions League Debut.
          <br />
          <br />
          Former Redemption League veteran YSL, who denounced the title of the
          longest tenured Redemption League member* after finally clinching that
          elusive ticket to the Champions League that he sought after for so
          long. And Reiging Redemption League Champion King K0bra who stormed
          through the competition during his dominant post season performance to
          cement his place in the big leagues.
          <br />
          <br />
          Sharpened by the harsh conditions in the Redemption League, both YSL
          and King K0bra will look to claw their way to the top of the league
          and establish themselves as a force to be reckoned with <br />
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
