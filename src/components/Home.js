import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Carousel from "./Carousel";
import Polls from "./Polls";

// let count = 0;

const Home = () => {
  // const [article, setArticle] = useState(0);

  // const slideRef = useRef();

  // const removeAnimation = () => {
  //   slideRef.current.classList.remove("fade-anim");
  // };

  // useEffect(() => {
  //   // slideRef.current.addEventListener("animationend", removeAnimation);
  //   //startSlider();
  // }, []);

  // const startSlider = () => {
  //   setInterval(() => {
  //     handleOnNextClick();
  //   }, 5000);
  // };

  // const handleOnPreviousClick = () => {
  //   count = (count <= 0 ? 0 : count - 1) % featuredArticles.length;
  //   setArticle(count);
  //   slideRef.current.classList.add("fade-anim");
  // };
  // const handleOnNextClick = () => {
  //   count = (count + 1) % featuredArticles.length;
  //   setArticle(count);
  //   slideRef.current.classList.add("fade-anim");
  // };

  return (
    <div className="min-h-screen">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="w-1/2 flex mx-auto">
          <Polls />
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
