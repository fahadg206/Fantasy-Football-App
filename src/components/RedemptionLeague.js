import React, { useState, useEffect } from "react";
import Standings from "./RedemptionLeague/Standings";
import HeadlinesRedemption from "./RedemptionLeague/HeadlinesRedemption";
import TopScorerRL from "./RedemptionLeague/TopScorerRL";
import Poll from "react-polls";
import axios from "axios";
import TopPlayers from "../images/RL_top_players.jpg";

const RedemptionLeague = () => {
  const pollStyles1 = {
    questionBold: true,
    questionColor: "black",
    theme: "black",
    questionSeparator: false,
    questionSeparatorWidth: "question",
    align: "center",
  };

  const [pollAnswers, setPollAnswers] = useState([
    { option: "Contenders", votes: 0 },
    { option: "Pretenders", votes: 0 },
  ]);

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) {
        answer.votes++;
      }

      return answer;
    });
    axios.post("https://raincityserver.herokuapp.com/update", {
      league: "RL",
      question:
        "RCL Analyst rank these 3 contenders as the favorites to make it out of RL this year, while their fellow leaguemates beg to differ. Are they contenders? or pretenders?",
      answers: newPollAnswers,
    });
    setPollAnswers(newPollAnswers);
  };

  const getVotes = async () => {
    const response = await axios.get(
      "https://raincityserver.herokuapp.com/getRL"
    );

    setPollAnswers(response.data.answers);
  };

  useEffect(() => {
    getVotes();
  }, [JSON.stringify(pollAnswers)]);

  return (
    <div className="flex flex-col lg:grid grid-cols-3 items-center gap-x-5 gap-y-10 justify-items-center">
      <div className="w-[67vw] flex lg:flex flex-col items-center justify-center lg:w-[25vw] lg:ml-10 mt-5 bg-[#F9F9FB] shadow-lg shadow-black rounded-[10px]">
        <div className="w-[60%]">
          <img className="rounded-[10px] mt-3" src={TopPlayers} />
        </div>
        <Poll
          question={
            "RCL analysts rank these 3 contenders as the favorites to make it out of RL this year, while their fellow leaguemates beg to differ. Are they contenders? or pretenders?"
          }
          answers={pollAnswers}
          onVote={handleVote}
          customStyles={pollStyles1}
          noStorage={true}
        />
      </div>
      <div className="w-[67vw] lg:flex justify-center  lg:w-[30vw] h-[55vh] bg-[#F9F9FB] shadow-lg shadow-black rounded-[10px]">
        <TopScorerRL />
      </div>
      <div className="w-[67vw] lg:flex justify-center lg:w-[30vw] h-[55vh] bg-[#F9F9FB] shadow-lg shadow-black rounded-[10px] p-5">
        <HeadlinesRedemption />
      </div>
      <div className="w-[67vw] col-span-3">
        <Standings />
      </div>
    </div>
  );
};

export default RedemptionLeague;
