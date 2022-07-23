import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Carousel from "./Carousel";
import Poll from "react-polls";

// let count = 0;

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="w-1/2 flex mx-auto">
          <Poll
            question={"What's the best framework?"}
            answers={[
              { option: "React", votes: 23 },
              { option: "Vue", votes: 2 },
            ]}
            onVote={(answer) => <p>{answer}</p>}
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
