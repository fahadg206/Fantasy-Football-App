import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Headline1 from "../images/RCL_sponsor_home.jpg";
import Headline2 from "../images/rcl_recap_home.jpg";
import Headline3 from "../images/trades_rumors.jpg";

import { Link } from "react-router-dom";

const featuredArticles = [
  {
    img: Headline1,
    heading: "New Sponsor Alert!",
    preview:
      "The RCL has a new sponser and we couldn't be more excited for this new partnership",
  },
  {
    img: Headline2,
    heading: "RCL Recap",
    preview:
      "With 2 weeks of football in the books, let's take a look at how the league is shaping up",
  },
  {
    img: Headline3,
    heading: "Trades and Rumors",
    preview:
      "Read about the latest news and storylines brewing in the Champions League",
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
      interval={5000}
    >
      {featuredArticles.map((article, index) => (
        <div key={index} className="">
          <img className="rounded-[20px] p-5" src={article.img} />
          <div className="card-body">
            <h4 className="font-semibold sm:text-2xl">{article.heading}</h4>
            <p className="opcacity-60 mb-4 p-3 sm:text-lg">{article.preview}</p>
            <button
              className="mb-10 button hover:scale-125 hover:duration-500 rounded-[40px] p-[7px] bg-[#D1D5DB] text-[black] shadow-md shadow-black hover:bg-black hover:text-white hover:border-b-2 hover:border-[#D1D5DB]"
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
