import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Poll from "react-polls";
import axios from "axios";

const Home = () => {
  const [pollAnswers, setPollAnswers] = useState([
    { option: "React", votes: 0 },
    { option: "Vue", votes: 0 },
  ]);

  axios.post("https://http://localhost:3001/update", {
    week: 1,
    question: "What's the best Framework?",
    answers: [
      {
        option: "React",
        voteCount: 23,
      },
    ],
  });

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) {
        answer.votes++;
      }
      return answer;
    });
    setPollAnswers(newPollAnswers);
    axios.post("https://http://localhost:3001/update", {
      week: 1,
      question: "What's the best Framework?",
      answers: [
        {
          option: "React",
          voteCount: 23,
        },
      ],
    });
  };

  return (
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="w-1/2 flex mx-auto">
          <Poll
            question={"What's the best framework?"}
            answers={pollAnswers}
            onVote={handleVote}
            noStorage={true}
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
