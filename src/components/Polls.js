import React from "react";

const Polls = () => {
  return (
    <div>
      <div className="flex md:grid grid-cols-1 items-center justify-center polls text-[white] p-[20px] rounded-[40px] bg-[#1A4AAC]">
        <div className="poll1">
          <p>1. Do you care about Hamsa?</p>
          <input type="radio" />
          <input type="radio" />
        </div>
        <div className="poll12">
          <p>1. Do you care about Hamsa?</p>
          <input type="radio" />
          <input type="radio" />
        </div>
        <div className="poll3">
          <p>1. Do you care about Hamsa?</p>
          <input type="radio" />
          <input type="radio" />
        </div>
        <div className="poll4">
          <p>1. Do you care about Hamsa?</p>
          <input type="radio" /> YES
          <input type="radio" /> NO
        </div>
      </div>
    </div>
  );
};

export default Polls;
