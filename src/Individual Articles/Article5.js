import React from "react";
import Imran from "../images/imran.png";
import Divisions from "../images/division logos.jpg";

const Article5 = () => {
  return (
    <div
      name="article5"
      className="flex flex-col items-center sm:grid grid-cols-2"
    >
      <div className="grid grid-cols-1 justify-items-center w-full sm:sticky top-20 self-start lg:top-5">
        <img className="rounded-[10px]" src={Divisions} />
      </div>
      <div className="grid grid-cols-1 gap-y-3 justify-items-center mt-10 ml-5">
        <p className="text-5xl font-bold">RCL SEASON OUTLOOK: ECW DIVISION</p>
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
          It is with great honor, that I present you the Extreme Championship
          Wrestling Division, also known as ECW. Although many people call this
          division the “Walmart version” of SmackDown and Raw, this division is
          home to four interesting owners. Things in this division could get
          extremely interesting as all four members are eyeing the divisional
          throne. <br />
          <br />
          SleepyKey: <br />
          <br />
          Starting off with last year’s runner up and the 2021 CL champion,
          SleepKey aims to make a 3rd consecutive finals appearance. But that
          won’t be easy, given the stiffness of competition in the ECW division.
          SleepyKey is led by two of the most elite running backs in the league.
          But both face consequential concerns... <br />
          <br />
          Can Saquon Barkley stay healthy for the duration of the season? Is
          Alvin Kamara going to get disciplined by the league for his off-field
          hiccups? All that remains to be unseen. League sources are getting the
          sense that SleepyKey is sniffing around, looking to obtain a top tier
          wide receiver to compliment his star running backs. <br />
          <br />
          A lot of pressure will also be on the young quarterback at the helm,
          Jalen Hurts. Can he shoulder the load, or will he crumble under the
          expectations?
          <br />
          <br />
          Season Projection: 5-9, misses playoffs, potential relegation. <br />
          <br /> <br />
          <br />
          <br />
          <br />
          Kaboweyne: <br />
          <br />
          The Man. The Myth. The Legend. The Commissioner. Many call Kaboweyne
          “the most aggressive man in fantasy”. Kaboweyne is down to $48 FAAB
          and there hasn't even been a single snap of football yet.
          <br />
          <br /> The self-proclaimed “Deal Maker” somehow managed to pull the
          trigger on trades that allowed him to secure three picks in the first
          13 selections. (Which has been met with it's fair share of ridicule
          and scrutiny)
          <br />
          <br />
          Coming away with the likes of Cooper Kupp, Dalvin Cook and Davante
          Adams. Kaboweyne also did a nice job of surrounding his three stars
          with solid role players such as Chase Edmonds and Michael Thomas.{" "}
          <br />
          <br />
          The commissioner also struck a deal landing a guy he’s been eyeballing
          since spring mini-camp back in March, Dameon “DEMON” Pierce. Now,
          Kaboweyne faces the same issue as SleepyKey; a young and inexperienced
          quarterback under center. Can Trey Lance take a leap and lead this
          team to the championship? We’ll have to wait and see.
          <br />
          <br />
          Season Projection: 8-6, playoffs, safe from relegation. <br />
          <br /> <br />
          <br />
          <br />
          <br />
          AkhJefe: <br />
          <br />
          Here is a guy who leads the league every year in sauce, the one and
          only, Ahkjefe. Looking to bounce back after taking a tough loss to the
          eventual champ, Ahkjefe made an aggressive trade to land his guy,
          Justin Jefferson.
          <br />
          <br /> They both are looking to griddy their way to success this
          season. Once DeAndre Hopkins returns from suspension, Ahkjefe might
          very well have the best trio of receivers in Hopkins, Jefferson and
          Mike Evans.
          <br />
          <br />
          With that being said, the running backs are very sketchy on this
          roster (to put it politely). Can Elljah Mitchell and AJ Dillion carry
          the load if the star receivers are having an off day or are on bye?
          That remains to be seen. <br />
          <br />
          But Ahkjefe does have the GOAT at quarterback, Tom Brady. And we all
          know Brady brings championship pedigree to the table.
          <br />
          <br />
          Season Projection: 7-7, fringe playoff team, safe from relegation.{" "}
          <br />
          <br /> <br />
          <br />
          <br />
          <br />
          ED: <br />
          <br />
          The new kid on the block. On paper, ED appears to have the most
          balanced team in the division.
          <br />
          <br /> ED has stars at every position. Josh Allen at quarterback. “The
          Great White Hope” Christian McCaffrey at running back. The
          electrifying Tyreek Hill at wide receiver. And the most complete tight
          end in the game, George Kittle.
          <br />
          <br />
          ED drafted like a guy who has zero intentions of returning to the
          wastelands of the Redemption League. ED also has a bench filled with
          guys that can be plugged in and contribute right away.
          <br />
          <br />
          Fresh off promotion, ED is not only looking to keep his head above
          water in the Champions League, he’s looking to make some serious noise
          and ruffle a few feathers.
          <br />
          <br />
          Season Projection: 10-4, playoffs, here to stay.
          <br />
          <br /> <br />
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default Article5;
