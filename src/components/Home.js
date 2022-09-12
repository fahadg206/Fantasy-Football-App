import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Poll from "react-polls";
import axios from "axios";
import Headlines from "./Headlines";
import HighestScorer from "./HighestScorer";
import VideoDisplay from "./VideosSection/VideoDisplay";
import TrendingAdds from "./TrendingAdds";
import TrendingDrops from "./TrendingDrops";
import KaboArticle from "../images/kaboarticle.png";

const Home = () => {
  const [pollAnswers, setPollAnswers] = useState([
    { option: "Yes", votes: 0 },
    { option: "NOPE", votes: 0 },
    { option: "Yes, but not this year", votes: 0 },
  ]);

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) {
        answer.votes++;
      }

      return answer;
    });
    axios.post("https://raincityserver.herokuapp.com/update", {
      league: "CL",
      question:
        "After narrowly escaping relegation last season, is this the end of the road for Kabo's Champions League run?",
      answers: newPollAnswers,
    });
    setPollAnswers(newPollAnswers);
  };

  const getVotes = async () => {
    const response = await axios.get(
      "https://raincityserver.herokuapp.com/getCL"
    );

    setPollAnswers(response.data.answers);
  };
  getVotes();
  useEffect(() => {
    getVotes();
  }, []);

  const pollStyles1 = {
    questionBold: true,
    questionColor: "black",
    theme: "black",
    questionSeparator: false,
    questionSeparatorWidth: "question",
    align: "center",
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:grid grid-cols-6 justify-items-center gap-y-[30px] grid-rows-2 mt-8">
        <div className="flex flex-col items-center justify-around  rounded-[10px] mx-auto w-3/4 bg-[#F9F9FB] col-span-2 shadow-lg shadow-black">
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
        <div className="w-[70vw] col-span-2 mx-auto bg-[#F9F9FB] lg:w-full rounded-[10px] shadow-lg shadow-black">
          <Carousel />
        </div>

        <div className="mx-auto w-3/4 col-span-2 bg-[#F9F9FB] p-10 h-full shadow-lg shadow-black rounded-[10px]">
          <Headlines />
        </div>
        {/* <div className="flex justify-center w-[90%] ml-5 col-span-2 self-center">
          <TrendingAdds />
        </div> */}
        {/* <div className="col-span-2 rounded-[10px] self-center lg: lg:mx-auto col-start-3  shadow-lg shadow-black">
          <HighestScorer />
        </div> */}
        {/* <div className="col-span-2 flex justify-center w-[90%] self-center">
          <TrendingDrops />
        </div> */}
        {/* <div className="col-start-2 col-end-6 mb-4">
          <VideoDisplay />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
