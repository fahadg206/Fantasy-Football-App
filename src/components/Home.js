import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Poll from "react-polls";
import axios from "axios";

const Home = () => {
  const [totalVotes, setTotalVotes] = useState([]);
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
    console.log("Here", pollAnswers);
  };

  const getVotes = async () => {
    const response = await axios.get("http://localhost:3001/get");
    setTotalVotes(response.data.answers);
  };
  useEffect(() => {
    getVotes();
  }, []);

  let voteCount = totalVotes[1].votes + totalVotes[0].votes;
  return (
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="w-1/2 flex flex-col items-center mx-auto">
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
          {voteCount}
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
