import React from "react";
import Article1 from "../../Individual Articles/Article1";
import Article2 from "../../Individual Articles/Article2";
import Article3 from "../../Individual Articles/Article3";
import Article4 from "../../Individual Articles/Article4";
import Article5 from "../../Individual Articles/Article5";

const Week2 = () => {
  return (
    <div className="flex flex-col items-center sm:grid md:w-[70vw] lg:grid grid-cols-1 gap-x-24 bg-white rounded-[10px] p-[25px] text-center lg:w-[53vw]">
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <Article5 />
    </div>
  );
};

export default Week2;
