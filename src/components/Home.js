import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Poll from "react-polls";
import axios from "axios";
import Polls from "./Polls";

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
    questionColor: "red",
    theme: "purple",
  };

  return (
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="w-1/2 flex flex-col items-center mx-auto">
          <Poll
            question={"What's the best framework?"}
            answers={pollAnswers}
            onVote={handleVote}
          />
          {totalVotes}
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
