import React from "react";
import YSL from "../images/YSL_Staff2.png";
import Poster from "../images/YSL_Poster.png";

const Article12 = () => {
  return (
    <div
      name="article12"
      className="flex flex-col items-center sm:grid grid-cols-2"
    >
      <div className="grid grid-cols-1 justify-items-center w-full sm:sticky top-20 self-start lg:top-5">
        <img className="rounded-[10px]" src={Poster} />
      </div>
      <div className="grid grid-cols-1 gap-y-3 justify-items-center mt-10 ml-5">
        <p className="text-5xl font-bold">WHO'S NERVOUS NOW?</p>
        <div className="flex w-[77vw] sm:flex sm:w-[35vw] md:flex items-center md:w-[25vw] justify-between border-b-2 border-black border-opacity-10">
          <div className="flex items-center">
            <img
              className="w-[40px] my-[5px] mr-[5px] rounded-full"
              src={YSL}
            />
            <div className="flex flex-col">
              <p>YSL Big Yak</p>
              <p className="text-[10px] font-bold">
                New Head of RCL Media Department
              </p>
            </div>
          </div>
          <p className="text-[12px]">Dec 03, 2022</p>
        </div>
        <p className="p-3 text-left text-[18px]">
          Looks like nothing is gonna get done around here unless I do it
          myself.
          <br />
          <br />
          <p className="font-bold">I’ll be taking over from here…</p> <br />
          YSL GOT Y'ALL BIG NERVOUS! All those articles written by these so
          called “experts” that wrote me off, I heard the noise… “RL” vet is
          sitting atop this joke of a league and there’s nothing you media folks
          can do about. I'm not gonna lie, I got hit by a couple of key
          injuries, and to be honest if those injuries didn't happen ya'll
          would've been TOAST, believe me. Just Imagine Breece Hall added to the
          team I have...
          <br />
          <br />
          Oh yeah my team organic too, all built from the draft! Everyone on my
          team has bought into the Big Yak Philosophy. What's that? Oh yeah Imma
          interview myself too... These mediocore reporters haven't done me
          justice all year. Who was my favorite win? It gotta be that fraud,
          Boogie Windhorst I made sure he gave up journaling for good after that
          Texas style WHOOPING. If he spent as much time building his team as he
          did writing these articles... he still probably would've lost cuz both
          are bad lets be honest. You write out paragraphs to send your message
          across, I get the same done with only one letter, we're not the same
          big feLLa.
          <br />
          <br />
          Kabo, Boogie, Jefe… I had easy pickings on the whole RCL journalism
          department. 10-2 top of the league! RL!!!! This is for you!!! And
          sorry Sal, I was gonna say something to put you down but I don’t think
          you can possibly get any lower. Ah man those folks back in Redemption
          are gonna LOVE seeing you down there! They’ll even hook you up with
          some veteran RL discounts. Just make sure to tell em BIG YAK sent ya!
          <br />
          <br />
        </p>
        <p className="flex w-[77vw] sm:flex sm:w-[35vw] md:flex items-center md:w-[25vw] justify-between border-b-2 border-black border-opacity-5"></p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Article12;
