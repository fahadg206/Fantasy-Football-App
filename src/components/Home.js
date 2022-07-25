import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Poll from "react-polls";
import axios from "axios";

const Home = () => {
  const [pollAnswers, setPollAnswers] = useState([
    { option: "Kabo", votes: 0 },
    { option: "Fahad", votes: 0 },
  ]);

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) {
        answer.votes++;
        axios.post("http://localhost:3001/update", {
          week: 1,
          question: "What's the best Framework?",
          answers: [
            {
              option: voteAnswer,
              voteCount: answer.votes,
            },
          ],
        });
      }

      return answer;
    });
    setPollAnswers(newPollAnswers);
    //What data gets sent to the MongoDB
  };

  const getVotes = () => {
    axios.get("");
  };

  useEffect(() => {}, []);
  console.log(pollAnswers);

  return (
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="w-1/2 flex mx-auto">
          <Poll
            question={"What's the best framework?"}
            answers={pollAnswers}
            onVote={handleVote}
            noStorage={true}
            customSytles={{
              theme: "cyan",
              questionColor: "#1A4AAC",
              questionBold: true,
            }}
          />
        </div>
        <div className="mx-auto w-3/4">
          <Carousel />
        </div>
      </div>

      <div>Headlines</div>
    </div>
  );
};

export default Home;
