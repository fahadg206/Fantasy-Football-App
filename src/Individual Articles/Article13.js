import React from "react";
import YSL from "../images/YSL_Staff2.png";
import Poster from "../images/YSL_Poster.png";

const Article13 = () => {
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
          "Mark my words, if I get in this year, I'm going to win it all"
          <br />
          <br />
          <p className="font-bold">
            Some might of laughed at that quote towards the end of the season...
            but GojoSleep meant everyword
          </p>{" "}
          <br />
          With two games left in the regular season, GojoSleep was at .500, one
          loss away from a disappointing return to the champions league after
          his promotion from redemption league last season. Things were looking
          quite bleak, as a loss not only meant that he missed the playoffs, but
          he would've been relagated back to redemption league as well. Everyone
          slept on Gojo, many of our experts here at RCL had his odds at a mere
          6.8% to make the playoffs, it seemed that everyone wrote him off, but
          Gojo woke up and was able to string together a couple of tight wins,
          with a total victory margin of 2.02 points! Punching his playoff
          ticket and a chance to compete for the ultimate prize.
          <br />
          <br />
          <br />
          It's the ultimate underdog story: the sixth seed, despite having one
          of the worst teams on paper, GojoSleep somehow managed to come out on
          top and win the champions league, becoming the new fantasy king. This
          marked the second year in champions league history that the
          championship game featured the 5th vs 6th seed, Baseboogie having won
          it last year as the 6th seed and now GojoSleep.
          <br />
          <br />
          What makes this championship win all the more impressive is that
          GojoSleep beat the savy and clutch Baseboogie! Who was eyeing back to
          back titles after going on yet another stellar playoff run. Imran was
          holding an undefeated record in games where "He wasn't supposed to be
          here" and it seemed that he finally met his match on championship
          Sunday as it was the firt time this playoffs that he wasn't the
          underdog.
          <br />
          <br />
          In the end, it was a team effort that led to GojoSleep winning it all.
          Despite missing their best player, Derrick Henry, and having one of
          the worst teams on paper, his team played as a cohesive unit, and it
          paid off in the form of a fantasy football championship. GojoSleep's
          victory serves as a reminder that anything is possible in fantasy
          football. With the right approach, strategic thinking and a bit of
          luck, anything is possible as long as you believe.
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

export default Article13;
