import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className=" grid grid-cols-3 justify-items-center pt-[100px]">
      <div>Socials</div>
      <div className=" relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words w-full hover:scale-110 hover:duration-500 shadow-[#1a1a1c]  border-[white] text-center mb-6 shadow-lg rounded-xl mt-16">
        <div className=" flex flex-col card p-[10px] border-[white]">
          <div className="card-header mx-4 -mt-6">
            <img
              className="w-auto rounded-lg"
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="tailwind-card-image"
            />
          </div>
          <div className="card-body">
            <h4 className="font-semibold">Material Design 3</h4>
            <p className="opcacity-60 mb-4">
              The time is now for it to be okay to be great. People in this
              world shun people for being great. For being a bright color. For
              standing out.
            </p>
            <button className="button button-pink" data-ripple-light="true">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div>Headlines</div>
    </div>
  );
};

export default Home;
