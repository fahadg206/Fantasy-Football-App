import React from "react";
import RCL from "../images/RCL_article.jpg";
import Fahad from "../images/fahad.jpg";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Article1 = () => {
  return (
    <div
      name="article1"
      className="flex flex-col items-center sm:grid grid-cols-2"
    >
      <div className="grid grid-cols-1 justify-items-center w-full sm:sticky top-20 self-start lg:top-5">
        {/** Make sure image dimensions are 364 x 607 */}
        <img className="rounded-[10px]" src={RCL} />
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
          <p className="text-[12px]">Sep 8, 2022</p>
        </div>
        <p className="p-3 text-left text-[18px]">
          <p className="italic font-bold">
            Welcome to the 2022-2023 Fantasy Football Season!
          </p>
          <br />
          It is our pleasure to introduce to you the RCL Website! Your one stop
          destination for all the latest news and headlines across both
          Champions League and Redemption League. Be sure to stop by throughout
          the season as we'll be constanly updating with content with plenty of
          new features on the way too!
          <br />
          <br />
          Furthermore, there have been many other changes that we made this
          offseason as well, most notably changing to the Sleeper platform,
          which we understand and acknowledge that it might take some time
          getting used to. <br />
          <br />
          However, we whole heartidly believe that Sleeper is a more modern and
          innovative fantasy football platform, and it will let our league grow
          and become more immersive than ever! By utilizing the Sleeper API, we
          were able to smoothly integrate the league onto the website and make
          the league even more interactive! <br />
          <br />
          I’d like to thank everyone that has helped along the way, it really
          was a team effort and we sincerely appreciate everyones hard work and
          feedback as we strive to make this league better than ever.
          <br />
          <br />
          Thank you everyone, Truly.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default Article1;
