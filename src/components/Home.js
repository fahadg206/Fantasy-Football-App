import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Poll from "react-polls";
import axios from "axios";
import Headlines from "./Headlines";
import HighestScorer from "./HighestScorer";
import VideoDisplay from "./VideosSection/VideoDisplay";
import TrendingAdds from "./TrendingAdds";
import TrendingDrops from "./TrendingDrops";

const Home = () => {
  const [pollAnswers, setPollAnswers] = useState([
    { option: "Kabo", votes: 1 },
    { option: "Fahad", votes: 1 },
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

  const getVotes = async () => {
    const response = await axios.get("http://localhost:3001/get");

    setPollAnswers(response.data.answers);
  };

  useEffect(() => {
    getVotes();
  }, []);

  const pollStyles1 = {
    questionBold: true,
    questionColor: "purple",
    theme: "blue",
    questionSeparator: false,
    questionSeparatorWidth: "question",
    align: "center",
  };

  return (
    <div className="min-h-screen bg-[url('file:///C:/Users/fahad/OneDrive/Desktop/portfolio/src/images/wesbite%20background.png')]">
      <div className="flex flex-col lg:grid grid-cols-5 justify-items-center gap-y-[30px] grid-rows-2">
        <div className="flex flex-col items-center justify-evevnly rounded-[10px] mx-auto bg-white w-[90%] col-start-2">
          <Poll
            question={"What's the best framework?"}
            answers={pollAnswers}
            onVote={handleVote}
            customStyles={pollStyles1}
            noStorage={false}
          />
        </div>
        <div className="w-[90%] mx-auto bg-white lg:w-full rounded-[10px]">
          <Carousel />
        </div>

        <div className="mx-auto w-[90%] col-end-5 h-full">
          <Headlines />
        </div>
        <div className="flex justify-center col-start-2 w-[90%]">
          <TrendingAdds />
        </div>
        <div className="flex justify-center w-[90%] h-[87%] mx-20">
          <HighestScorer />
        </div>
        <div className="flex justify-center w-[90%] ">
          <TrendingDrops />
        </div>
        <div className="col-start-2 col-end-5">
          <VideoDisplay />
        </div>
      </div>
    </div>
  );
};

export default Home;
