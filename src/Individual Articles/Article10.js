import React from "react";
import Imran from "../images/imran.png";
import Recap from "../images/week10_recap.jpg";

const Article10 = () => {
  return (
    <div
      name="article10"
      className="flex flex-col items-center sm:grid grid-cols-2"
    >
      <div className="grid grid-cols-1 justify-items-center w-full sm:sticky top-20 self-start lg:top-5">
        <img className="rounded-[10px]" src={Recap} />
      </div>
      <div className="grid grid-cols-1 gap-y-3 justify-items-center mt-10 ml-5">
        <p className="text-5xl font-bold">RCL RECAP</p>
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
          <p className="text-[12px]">Nov 10, 2022</p>
        </div>
        <p className="p-3 text-left text-[18px]">
          It's been an exciting 9 weeks of fantasy football! Let's take a look
          at how the league's been shaping up so far! <br />
          <br />
          <p className="font-bold">Nomu:</p> <br />
          Last year’s runner up finds himself right where he wants to be, atop
          of the ECW Division. After jumping off to an impressive 4-1 start, he
          found himself 6-3 at the 10 week mark of the season. But, Nomu’s
          numbers check out, as he’s the highest scoring team in his division
          while also giving up the least amount of points. In light of the
          latest wide receiver injuries, Nomu might just have himself the
          hottest WR commodity in the league…..Tee Higgins. Already led by what
          some call the most dangerous backfield in football (Jalen Hurts, Alvin
          Kamara, Saquon Barkley), the emergence of Higgins could pay off big
          for Nomu. Another thing to monitor is James Robinson being traded to
          the Jets. Could this catapult Nomu to a division title?
          <br />
          <br />
          <p className="font-bold">Kabo</p> <br />
          Another guy in the ECW Division who got off to a hot start, but has
          since cooled down. Once bolstering a 3-1 record, Kabo finds him 4-5
          and under .500 at the halfway mark. Itching to always make the next
          trade, people around the league have started to dub him “Wiretap Kabo”
          since he works the phones so much. The commissioner should look into
          replacing his defensive coordinator as he has sole possession of most
          points given up in the season. If you want an ‘ole fashion shootout,
          Kabo is the guy to play. Owner of a fresh and healthy D’Andre Swfit
          (and Dalvin Cook) along with the best WR trio in the league (Cooper
          “The Great White Hope” Kupp, Devante “I abuse cameramen” Adams, and
          Amon-Ra “I wish I had a normal first name” Brown), Kabo aims to come
          for the division crown and make a strong playoff push.A very rough
          start to the season for Akhjefe. After losing a heartbreaker by the
          virtue of decimals last week, Akhjefe received a TEXAS STYLE LYNCHING
          in Week 2. His opponent, Odd Jobs, is off to an impressive start.
          Being only one of two teams to start the season 2-0. Despite Odd Job’s
          RB1 and RB2 combining for 10 points, he was able to come out
          victorious. Kooper “Konsistent” Kupp had himself a prototypical Kupp
          game, dropping 26 point, and Slant Boy contributed with a solid 15.
          Stay tuned, these two teams are heading in completely opposite
          directions.
          <br />
          <br />
          <p className="font-bold">Edo</p> <br />
          Edo has had an up and down year thus far, never truly finding his
          footing just yet as he currently sits on the wrong side of .500. But
          remarkably, Edo has found a way to stay competitive after being hit
          with so many injuries. Now with his team finally starting to get
          healthy, paired with a favorable schedule the rest of the way, Edo
          might just be the biggest dark horse to claim the division throne. The
          versatile and electric Cordarrelle Patterson returned Week 9 and
          should give Edo a much need boost. Pair that with the leagues best
          quarterback (Josh Allen) who has a cupcake schedule down the stretch,
          Edo is primed to make things really interesting in this division.
          Allen
          <br />
          <br />
          <p className="font-bold">Akhjefe:</p> <br />
          Things are starting to look real ugly in JefeLand. After starting the
          season off on a three-game skid, Jefe won the next two, then proceeded
          to lose the following two after that. Now, sitting at 4-5 and tied for
          the worst league in the league, Jefe is at a fork road. Does he stand
          pat and roll the dice with the way his team is currently constructed?
          Or does he swing some trades and get himself back in the division
          picture? On paper, Jefe should not be 4-5. His team rosters three
          great receivers (Justin Jefferson, Mike Evans and DeAndre Hopkins)
          along with two highly drafted running backs (Aaron Jones and Joe
          Mixon). Underperformances have been Jefe’s kryptonite, and things
          better start turning around quickly before the reality of relegation
          starts to settle in……
          <br />
          <br />
          <p className="font-bold">YSLBigNervous:</p> <br />
          From rags to riches. From straight out of the gutter, slums and
          tranches of the Redemption League to atop the Champions League
          standings. What a year it has been for YSL, who many thought at the
          beginning of the season he would finish last in the division and
          possibly get relegated. Now he laughs at those same fools. YSL is
          currently head and shoulders above the league with an imposing 6-1
          record. He was been STEAMROLLING the competition and this past week
          put up a WHOPPING 169 points. But now YSL is faced with adversity,
          Breece Hall has been lost for the season with a torn ACL. And stud WR
          Ja’marr chase is slated to miss 4-6 with a hip injury. How will YSL
          bounce back from this hardship? He at least has a little bit a cushion
          to experiment with his starting lineups.
          <br />
          <br />
          <p className="font-bold">FG:</p> <br />
          FG has a surprising 1-2 start to the season, but has since rattled off
          6 straight victories. FG remains undefeated outside of the toughest
          division in the league. Only one game behind YSL, FG aims to take
          advantage of YSL’s tough injury luck and overtake him. FG is led by
          his dynamic duo at WR (Deebo Samuel and Jaylen Waddle). Two guys who
          can take a 5 yard pitch and catch and turn it into a 75 yard
          touchdown. Although FG doesn’t have the best record in the league, his
          team has been the most dominant team. With an astonishing point
          differential of +166.64. I’m not a mathematician, but that means FG is
          winning by an average margin of 23.8057143 points per game. FG looks
          to sweep the next 6 weeks before divisional games return.
          <br />
          <br />
          <p className="font-bold">Denji</p> <br />
          “Super Bowl Hangover” is what they called it after Denji got off to a
          slow 1-3 start. But the Champ then immediately rattled off a 3 game
          win streak to bring his record to 4-3. Denji has been one of the most
          active teams in the trade market, as he has made countless trades
          throughout this young season. One of the trades reunited Denji with an
          old friend and last season’s war hero, “Scary” Terry McLaurin.
          Opponents in the first half of the season often founded themselves in
          an ugly slugfest when playing Denji. Without a lack of star power
          outside of Stefon Diggs, The Champ must fight in the mud with scores
          in the 70’s and 80’s. The Champ aims to continue his hot streak and
          make a push for a repeat.
          <br />
          <br />
          <p className="font-bold">SalTheMan:</p>
          <br />
          Sal has had an interesting season up to this point. Sitting at 4-3,
          Sal has had a repetitive pattern of wins and loss. Lose one game, then
          win the next two. And now with his most current loss, is a quick two
          game win streak expected? Sal is at the moment last in the Smackdown
          divison, but not because of lack of talent on his roster. Sal would
          actually be in first place if he was to be in the lousy RAW division,
          because every team in that division is under .500 (YIKES). 3 out of
          the net 4 games for Sal will be again the ECW division. This could be
          a great time for Sal to get back in the division race as YSL’s team is
          greatly wounded.
          <br />
          <br />
          <p className="font-bold">Gojo Sleep:</p>
          <br />
          The most mysterious man in the league, Gojo, leads the way in a
          division that many consider uninspiring and lackluster. Gojo started
          the season 2-1 before going on a 3 game skid. He was able to bring
          that to a holt as he won his last outing to bring his record to 3-4.
          Gojo is lead by his dynamic trio of Lamar Jackson, Derrick Henry and
          A.J Brown. Those three alone might be able to push him to a divisional
          crown, considering how vanilla the division is. But if Gojo wants to
          make some serious noise, he might want to swing a deal or two to
          surround those guys with some more (Moore?) firepower.
          <br />
          <br />
          <p className="font-bold">School Threat:</p>
          <br />
          What in the world happened here? A once promising season is beginning
          to unravel right before our eyes. After getting off to a BLAZING 3-0
          start, Kobra has not won a game since Week 3. That’s an entire month
          without winning folks, 0-6 since Week 3. And what’s even crazier is
          Kobra only cracked 80 points just once in the 4-game skid. Is this a
          blimp on the radar? Can Kobra turn things around? Was the 3-0 start a
          fluke? So many questions surrounding Kobra that it's difficult to
          gauge what kind of team he has. Sources are saying Kobra is attempting
          to delete and uninstall the Sleeper app due to frustration over the
          last month. Kobra had better turn things around quickly because it
          seems as though he’s headed back to the hellhole people call RL.
          <br />
          <br />
          <p className="font-bold">Ganay:</p>
          <br />
          Mr. Great Guy Ganay is certainly not having the season he envisioned
          he would have at the start of the season. Unfortunately, Ganay is dead
          last in points in the entire league. The brotha simply can’t put up
          the points to compete on a week-to-week basis. BUT! Ganay has one
          thing working for him in his favor: he’s in the right division. After
          going on a 4-game losing streak himself, Ganay is still in the hunt to
          compete for the division title. As one of the league’s busiest owners,
          it wouldn’t be far fetched to imagine Ganay striking a deal to power
          his push to climb the divisional ladder. Whether it’s a
          head-scratching trade or a head, I believe Ganay will make the right
          trade to get his team right. That’s my dark horse to take this
          division.
          <br />
          <br />
          <p className="font-bold">….Enough Saaid:</p>
          <br />
          Has Enough been said about how terrible this division is? Saaid is 2-5
          and yet still VERY alive in the division race. Saaid has had a very
          unfortunate season so far. He has the most points in the division, yet
          has given up the most points in the entire league. One has to wonder,
          would his fate have been different if he had a different schedule? You
          could make a very compelling case that it would be. On paper, Saaid
          might actually have the best team in the division. Now the question is
          can he put it all together and go on a run to turn his season around?
          It wouldn’t be a total shocker to see Saaid at the top of RAW once the
          season is over.
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

export default Article10;
