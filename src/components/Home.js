import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

let count = 0;

const featuredArticles = [
  {
    img: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    heading: "Material Design",
    preview:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.",
  },
  {
    img: "https://www.si.com/.image/t_share/MTY4MDI3MjY2NTY5MDIwNjg5/deshaun-watsonjpg.jpg",
    heading: "Fahad",
    preview:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.",
  },
  {
    img: "https://images2.minutemediacdn.com/image/fetch/c_fill,g_auto,f_auto,h_2133,w_3200/https://thesmokingcuban.com/wp-content/uploads/getty-images/2017/07/1209457657.jpeg",
    heading: "Kabo",
    preview:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.",
  },
];

const Home = () => {
  const [article, setArticle] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    //startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 5000);
  };

  const handleOnPreviousClick = () => {
    count = (count <= 0 ? 0 : count - 1) % featuredArticles.length;
    setArticle(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnNextClick = () => {
    count = (count + 1) % featuredArticles.length;
    setArticle(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div className=" grid grid-cols-1 justify-items-center md:flex justify-evenly pt-[100px]">
      <div className="flex md:grid grid-cols-1 items-center justify-center polls text-[white] p-[20px] rounded-[40px] bg-[#1A4AAC]">
        <h2>POLLS</h2>
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
          <input type="radio" />
          <input type="radio" />
        </div>
        <div className="poll4">
          <p>1. Do you care about Hamsa?</p>
          <input type="radio" />
          <input type="radio" />
        </div>
        <div className="poll4">
          <p>1. Do you care about Hamsa?</p>
          <input type="radio" />
          <input type="radio" />
        </div>
        <div className="poll4">
          <p>1. Do you care about Hamsa?</p>
          <input type="radio" />
          <input type="radio" />
        </div>
        <div className="poll4">
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
      <div
        ref={slideRef}
        className="relative max-w-md  xl:max-w-2xl min-w-0 break-words shadow-[#1a1a1c] border-[white] text-center mb-6 shadow-lg rounded-xl mt-16 flex items-center bg-[#1A4AAC]"
      >
        <div>
          <FaArrowLeft
            onClick={handleOnPreviousClick}
            className="w-[25px] h-[25px] hover:scale-150 hover:duration-500 ml-[10px]"
          />
        </div>
        <div className=" flex flex-col card p-[10px] border-[white]">
          <div className="card-header mx-4 -mt-6">
            <img
              className="w-auto rounded-lg"
              src={featuredArticles[article].img}
              alt="tailwind-card-image"
            />
          </div>
          <div className="card-body">
            <h4 className="font-semibold">
              {featuredArticles[article].heading}
            </h4>
            <p className="opcacity-60 mb-4">
              {featuredArticles[article].preview}
            </p>
            <button
              className="button hover:scale-125 hover:duration-500 rounded-[40px] p-[7px] bg-[#01ECF2] text-[#0046FF] "
              data-ripple-light="true"
            >
              Read More
            </button>
          </div>
        </div>
        <div>
          <FaArrowRight
            onClick={handleOnNextClick}
            className="w-[25px] h-[25px] hover:scale-150 hover:duration-500 mr-[10px]"
          />
        </div>
      </div>
      <div>Headlines</div>
    </div>
  );
};

export default Home;
