import React, { useState, useEffect } from "react";
import Standings from "./Redemption/Standings";
import HeadlinesRedemption from "./Redemption/HeadlinesRedemption";
import TopScorerRL from "./Redemption/TopScorerRL";
import Poll from "react-polls";
import axios from "axios";
import Fahmi from "../images/fahmi.jpg";

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
    { option: "Yes", votes: 0 },
    { option: "No", votes: 0 },
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
        "With Unc entering his 5th season in the RL, can we continue to trust the process?",
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

  getVotes();
  useEffect(() => {
    getVotes();
  }, []);

  return (
    <div className="flex flex-col lg:grid grid-cols-3 items-center gap-x-5 gap-y-10 justify-items-center">
      <div className="w-[67vw] flex lg:flex flex-col items-center justify-center lg:w-[25vw] lg:ml-10 mt-5 bg-[#F9F9FB] shadow-lg shadow-black rounded-[10px]">
        <div className="w-[60%]">
          <img className="rounded-[10px] mt-3" src={Fahmi} />
        </div>
        <Poll
          question={
            "With Unc entering his 5th season in the RL, can we continue to trust the process?"
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
