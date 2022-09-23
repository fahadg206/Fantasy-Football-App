import React from "react";
import Newcastle from "../images/newcastle.jpg";
import Kabo from "../images/kabo_headshot.jpg";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Score1 from "../images/score1.png";
import Score2 from "../images/score2.png";

const Article6 = () => {
  return (
    <div
      name="article6"
      className="flex flex-col items-center sm:grid grid-cols-2"
    >
      <div className="grid grid-cols-1 justify-items-center w-full sm:sticky top-20 self-start lg:top-5">
        {/** Make sure image dimensions are 364 x 607 */}
        <img className="rounded-[10px]" src={Newcastle} />
      </div>
      <div className="grid grid-cols-1 gap-y-3 justify-items-center mt-10 ml-5 ">
        <p className="text-5xl font-bold">NEWCASTLE</p>
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
          <p className="text-[12px]">Sep 19, 2022</p>
        </div>
        <p className="p-3 text-left text-[18px]">
          Everyone’s favorite legend might be on the move soon! Along with many
          other familiar faces.
          <br />
          <br />
          According to a source close to Ganay’s camp, the organization is
          heavily involved in trade talks and are “Trying to get him shipped” to
          the highest bidder. Barring any unexpected buffs, the Harris Valley
          hero might be a tough sell due to his recent performances, but Ganay
          is sure that the change of scenery will help him play up to his
          potential.
          <br />
          <br />
          Tensions are at an all time high between King K0bra and akhjefe as the
          two had to get physically separated after Sunday’s slate of games.
          “He’s gonna have something coming for him alright” JEFE told our
          reporters following Monday’s practice report, “He’s not even gonna
          know what hit him”. King K0bra has been on the fortunate side of Tua’s
          showing last week as he cruised to a convincing 2-0 start, when asked
          about the inevitable attention that comes with his recent wins King
          K0bra had this to say:
          <br />
          <br />
          “Winning ain't easy, I just make it look easy… That fraud akhjefe can
          only wish to emulate my success, he tried mirroring me and where did
          that take him, exactly where he belongs. 0-2 carry the **** on”
          <br />
          <br />
          Our RCL reporters caught wind of a developing 3 way trade that
          involves FG, Kabo and Ganay. This blockbuster trade has been deemed by
          our analysts as “League changing” as it’ll completely change the
          landscape of the league and how we play fantasy football. Some of the
          names brought up to the table have been Amon-ra st. Brown, Patrick
          Mahommes, Kyle Pitts, Dalvin Cook to name a few. This assortment of
          fantasy managers have been garnering some bad press however and
          regardless of how this deal shapes up the media will surely not take a
          liking to it, but they assure us that “everyone will walk away from
          this deal happy”.
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default Article6;
