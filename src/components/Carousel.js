import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
          <img className="rounded-[20px]" src={article.img} />
          <div className="card-body">
            <h4 className="font-semibold">{article.heading}</h4>
            <p className="opcacity-60 mb-4 ">{article.preview}</p>
            <button
              className="mb-10 button hover:scale-125 hover:duration-500 rounded-[40px] p-[7px] bg-[#01ECF2] text-[#0046FF] "
              data-ripple-light="true"
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselView;
