import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Headline1 from "../images/Imran_title.png";
import Headline2 from "../images/faces_of_cl.jpg";
import Headline3 from "../images/RCL_article_homepage.jpg";
import { Link } from "react-router-dom";

const featuredArticles = [
  {
    img: Headline1,
    heading: "Imran's Historic Title Run",
    preview:
      "From roads to riches, Imran has found a way to win when it matters most putting together one of the most tantalizing title runs in Champions League History!",
  },
  {
    img: Headline2,
    heading: "Challengers Approaching",
    preview:
      "Meet the 4 new fantasy managers will be joining the Champions League for the 2022-2023 fantasy season",
  },
  {
    img: Headline3,
    heading: "Kabo",
    preview:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.",
  },
];

const CarouselView = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      showArrows={false}
      infiniteLoop={true}
      swipeable={true}
    >
      {featuredArticles.map((article, index) => (
        <div key={index} className="">
          <img className="rounded-[20px] p-5" src={article.img} />
          <div className="card-body">
            <h4 className="font-semibold sm:text-2xl">{article.heading}</h4>
            <p className="opcacity-60 mb-4 p-3 sm:text-lg">{article.preview}</p>
            <button
              className="mb-10 button hover:scale-125 hover:duration-500 rounded-[40px] p-[7px] bg-[#D1D5DB] text-[black] shadow-md shadow-black hover:bg-black hover:text-white"
              data-ripple-light="true"
            >
              <Link className="hover:text-white" to="/articles">
                Read More
              </Link>
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselView;
