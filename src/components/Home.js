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
  const [totalVotes, setTotalVotes] = useState(0);
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

  const getVotes = async () => {
    const response = await axios.get("http://localhost:3001/get");
    setTotalVotes(
      response.data.answers[1].votes + response.data.answers[0].votes
    );
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
    questionSeparatorWidth: "polls",
    align: "center",
  };

  return (
    <div className="min-h-screen ">
      <div className="flex flex-col lg:grid grid-cols-3 justify-items-center gap-y-[30px]">
        <div className="w-1/2 flex flex-col items-center mx-auto">
          <Poll
            question={"What's the best framework?"}
            answers={pollAnswers}
            onVote={handleVote}
            customStyles={pollStyles1}
            noStorage={false}
          />
          {totalVotes}
        </div>
        <div className="mx-auto w-3/4">
          <Carousel />
        </div>

        <div className="mx-auto w-3/4">
          <Headlines />
        </div>
        <div className="flex justify-center">
          <TrendingAdds />
        </div>
        <div className="flex justify-center">
          <HighestScorer />
        </div>
        <div className="flex justify-center">
          <TrendingDrops />
        </div>
        <div className="col-span-3">
          <VideoDisplay />
        </div>
      </div>
    </div>
  );
};

export default Home;
