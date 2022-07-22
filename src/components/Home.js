import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Carousel from "./Carousel";

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
    // slideRef.current.addEventListener("animationend", removeAnimation);
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
      <div>
        <Carousel />
      </div>
      <div>Headlines</div>
    </div>
  );
};

export default Home;
