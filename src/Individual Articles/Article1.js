import React from "react";
import Sal from "../images/sal2cropped.jpg";

const Article1 = () => {
  return (
    <div
      name="article1"
      className="flex flex-col items-center sm:grid grid-cols-2"
    >
      <div className="grid grid-cols-1 justify-items-center w-full sm:sticky top-20 self-start lg:top-5">
        {/** Make sure image dimensions are 364 x 607 */}
        <img className="rounded-[10px]" src={Sal} />
      </div>
      <div className="grid grid-cols-1 gap-y-3 justify-items-center mt-10 ml-5">
        <p className="text-5xl text-bold">DESHAUN BEATS THE CASE</p>
        <p className="p-3 text-left text-[18px]">
          "Sal’s journey to enlightenment…." <br />
          <br />
          After starting the season 3-0 many speculated that his fluke wins
          would come to an end, and it did! Sal proceeded to lose his next 3
          games to go 3-3. As the anime opening resumed and Sal continued to
          sink in a lake of despair, things were looking bleak, however, just
          like any main protagonist, a power up was imminent.
          <br />
          <br />
          In the midst of those losses that weighed him down, Sal utilized his
          tried and true “Head empty” technique and soared above the
          competition, his fluke era ended that’s for sure, in reality his wins
          were never flukes at all, the league just couldn’t comprehend the
          masterplan at play. <br />
          <br />
          Bulletproof manager Saltheman has launched his way to an astonishing,
          league best, 8-3 record! He achieved what many folks spend an entire
          lifetime trying to attain, true and complete transcendence. Just like
          any main protagonist power up though, this awakened state must be
          putting a helluva strain on his body, it might even be consuming his
          life force for all we know. Will our hero be able to hold up and take
          his team to the promised land or will he run out of chakra before he
          crosses the finish line? Find out on the next Volume of; The League
          Tribune... <br />
        </p>
        <img
          className="rounded-[10px] w-[200px]"
          src="https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/08/364/607/07.6.22_Is-Aaron-Rodgers-to-blame-for-Packers-lack-of-WR-depth.jpg?ve=1&tl=1"
        />
        <p className="p-3 text-left text-[18px]">
          "Let's ride!!!" <br />
          <br />
          When Russell Wilson uttered the catchphrase at his introductory press
          conference with the Broncos, the football world assumed that the
          partnership between the nine-time Pro Bowl quarterback and the
          three-time Super Bowl-winning franchise would eventually become a
          "forever" relationship.
          <br />
          <br />
          With the Broncos agreeing to a five-year, $245 million contract
          extension that ties Wilson to the franchise through the 2028 season,
          the marriage provides the team with stability at the game's most
          important position. Remember, this franchise has operated a revolving
          door at the position since Peyton Manning led the team to a victory in
          Super Bowl 50. <br />
          <br />
          The team has started 11 different quarterbacks during the span,
          including Brock Osweiler, Trevor Siemian, Paxton Lynch, Joe Flacco,
          Case Keenum, Drew Lock and Teddy Bridgewater. Given their individual
          and collective struggles, it is easy to see why the Broncos were
          willing to hand Wilson the bag before he takes an official snap with
          the team. <br />
        </p>
      </div>
    </div>
  );
};

export default Article1;
