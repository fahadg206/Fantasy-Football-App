import React, { useState } from "react";
import Standings from "./Redemption/Standings";
import HeadlinesRedemption from "./Redemption/HeadlinesRedemption";
import Poll from "react-polls";
import axios from "axios";
import KaboArticle from "../images/kaboarticle.png";

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
    { option: "Kabo", votes: 0 },
    { option: "Fahad", votes: 0 },
  ]);

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) {
        answer.votes++;
      }

      return answer;
    });
    axios.post("http://localhost:3001/update", {
      week: 1,
      question: "What's the best Framework?",
      answers: newPollAnswers,
    });
    setPollAnswers(newPollAnswers);
  };

  return (
    <div className="flex flex-col lg:grid grid-cols-2 items-center gap-x-5 gap-y-10 justify-items-center">
      <div className="w-[60vw] flex lg:flex flex-col items-center justify-center lg:w-[20vw] mt-5 bg-[#F9F9FB] shadow-lg shadow-black rounded-[10px]">
        <div className="w-[60%]">
          <img className="rounded-[10px] mt-3" src={KaboArticle} />
        </div>
        <Poll
          question={
            "After narrowly escaping relegation last season, is this the end of the road for Kabo's Champions League run?"
          }
          answers={pollAnswers}
          onVote={handleVote}
          customStyles={pollStyles1}
          noStorage={true}
        />
      </div>
      <div className="w-[60vw] lg:flex justify-center lg:w-[30vw] h-[55vh] bg-[#F9F9FB] shadow-lg shadow-black rounded-[10px] p-5">
        <HeadlinesRedemption />
      </div>
      <div className="w-[60vw] col-span-2">
        <Standings />
      </div>
    </div>
  );
};

export default RedemptionLeague;
