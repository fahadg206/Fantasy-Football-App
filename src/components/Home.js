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
      <div className="flex flex-col lg:grid grid-cols-6 justify-items-center gap-y-[30px] grid-rows-2">
        <div className="flex flex-col items-center justify-around  rounded-[10px] mx-auto w-3/4 bg-white col-span-2">
          <div className="w-[60%]">
            <img src="https://blacksportsonline.com/wp-content/uploads/2016/12/LeBron-Block.jpg" />
          </div>
          <Poll
            question={"What's the best framework?"}
            answers={pollAnswers}
            onVote={handleVote}
            customStyles={pollStyles1}
            noStorage={false}
          />
        </div>
        <div className="w-[90%] col-span-2 mx-auto bg-white lg:w-full rounded-[10px]">
          <Carousel />
        </div>

        <div className="mx-auto w-3/4 col-span-2 h-full">
          <Headlines />
        </div>
        <div className="flex justify-center w-[90%] ml-5 col-span-2 self-center">
          <TrendingAdds />
        </div>
        <div className="col-span-2 bg-white rounded-[10px] self-center lg:w-[90%] lg:mx-auto col-start-3 h-full">
          <HighestScorer />
        </div>
        <div className="col-span-2 flex justify-center w-[90%] self-center">
          <TrendingDrops />
        </div>
        <div className="col-start-2 col-end-6">
          <VideoDisplay />
        </div>
      </div>
    </div>
  );
};

export default Home;
