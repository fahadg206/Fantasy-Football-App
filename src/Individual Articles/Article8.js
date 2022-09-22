import React from "react";
import Imran from "../images/imran.png";
import Divisions from "../images/smackdown-breakdown.jpg";

const Article8 = () => {
  return (
    <div
      name="article8"
      className="flex flex-col items-center sm:grid grid-cols-2"
    >
      <div className="grid grid-cols-1 justify-items-center w-full sm:sticky top-20 self-start lg:top-5">
        <img className="rounded-[10px]" src={Divisions} />
      </div>
      <div className="grid grid-cols-1 gap-y-3 justify-items-center mt-10 ml-5">
        <p className="text-5xl font-bold">
          RCL SEASON OUTLOOK: SMACKDOWN DIVISION
        </p>
        <div className="flex w-[77vw] sm:flex sm:w-[35vw] md:flex items-center md:w-[25vw] justify-between border-b-2 border-black border-opacity-10">
          <div className="flex items-center">
            <img
              className="w-[40px] my-[5px] mr-[5px] rounded-full"
              src={Imran}
            />
            <div className="flex flex-col">
              <p>Imran Omar</p>
              <p className="text-[10px] font-bold">RCL Senior Insider</p>
            </div>
          </div>
          <p className="text-[12px]">Sep 5, 2022</p>
        </div>
        <p className="p-3 text-left text-[18px]">
          Get your popcorn ready folks, there’s about to be fireworks in the
          SmackDown division. This division consists of three heavyweight
          teams……….and YSLBigNervous. Many experts are dubbing this division
          “The Group of Death”. The winner of this division will certainly have
          earned it and will have the battle scars to show for it. <br />
          <br />
          <p className="font-bold">YSLBigNervous:</p> <br />
          Fresh out the gutter. The “Pen”. The slums. The trenches.
          YSLBigNervous is aiming to come out the gates firing on all cylinders.
          YSLBigNervous has vowed to avenge his fallen brothers Gunna and
          Thugger by dedicating this season to his YSL comrades.
          <br />
          <br />
          After finishing as the runner up in the Redemption League a season
          ago, YSLBigNervous drafted three runner ups from the Super Bowl,
          continuing that theme. Many are questioning the odd timing of
          YSLBigNervous “auto-draft-GATE” Antonio Gibson merely hours after
          rookie Brian Robinson got shot in an attempted robbery. No further
          comment on if YSL and his affiliates have claimed this attack... but
          is that a coincidence? I digress.
          <br />
          <br />
          YSLBigNervous is leaning heavily on Joe Shiesty and Ja’marr Chase. Is
          that enough to keep him in the Big Leagues?
          <br />
          <br />
          <p className="italic">
            Season Projection: 5-9, misses playoffs, relegation threat.
          </p>
          <br />
          <p className="font-bold">FG:</p> <br />
          he highest paid owner in the league. With pockets so deep, he could go
          out and essentially buy ANY player he wants. Giving us shades of
          modern-day slavery. FG gets his offseason wish, as he is placed in the
          same division with The Champ.
          <br />
          <br /> FG is laser focused on getting his revenge after falling victim
          to “The Catch” that put an end to a promising season. Now with a
          revamped roster that contains a stack of Patty Mahomes (‘bout to fall
          short a couple hunnid) and Travis Kelce, FG looks to make a serious
          run at the championship yet again.
          <br />
          <br />
          FG will have to face the questions surrounding his receivers. Can Tua
          Turntheballova get the ball consistency to Jalen Waddle? How is Cooper
          going to function without Watson? Can Amon-Ra St. Brown take a leap
          with Jared Goff throwing him the rock?
          <br />
          <br />
          <p className="italic">
            Season Projection: 6-8, misses playoffs, relegation bubble.
          </p>
          <br />
          <p className="font-bold">SalTheMan:</p>
          <br />
          The great Lil Wayne once said “Real G’s move in silence like Sal”. And
          that quote fits SalTheMan to a tee.You never know what or when his
          next move is going to be. In an era where owners are motivated and
          eager to get trades done, he sits back and observes. In fact, his
          transaction history is completely empty.
          <br />
          <br /> SalTheMan is relying tremendously on his two young studs are
          running back. We all know what Najee Harris is capable of, but what
          about Travis Etienne? He’s almost as mysterious as his owner. We
          haven't seem him earn a single blade of grass yet, but the
          opportunities will most certainly be there.
          <br />
          <br />
          SalTheMan also bolsters a stack of Russell Wilson and Courtland
          Sutton. And complimenting them with “Scary” Terry Mclaurin, who is
          always good for “a catch” or two.
          <br />
          <br />
          <p className="italic">
            Season Projection: 8-6, playoff bubble, safe from relegation.
          </p>
          <br />
          <p className="font-bold">Mikey:</p>
          <br />
          Coming off one of the most improbable championship runs you’ll ever
          see, Mikey is locked in on brining home a second trophy in as many
          years.
          <br />
          <br /> The reigning champ has been one of the most proactive owners in
          the league this offseason, completing a whopping NINE trades before
          the start of Week 1 (league record).
          <br />
          <br />
          Mikey traded back in the first round twice, before trading out of the
          first round completely while acquiring a treasure trove of picks in
          the middle rounds. Mikey emphasized depth and stockpiled on a flock of
          guys who be can plug and plays. A recipe that helped Mikey achieve the
          unthinkable just a season ago.
          <br />
          <br />
          Mikey continues the divisional theme as he is the 4th member to also
          have a stack of his own, Justin Herbert and Mike Williams. Although
          Mikey tried, he was unable to resign any members of the 2022
          championship team. Will this new cast of players reach the heights of
          their predecessors?
          <br />
          <br />
          <p className="italic">
            Season Projection: 9-5, playoffs, safe from relegation.
          </p>
        </p>
        <p className="flex w-[77vw] sm:flex sm:w-[35vw] md:flex items-center md:w-[25vw] justify-between border-b-2 border-black border-opacity-5"></p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Article8;
