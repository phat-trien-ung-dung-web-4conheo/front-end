import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../MainHomePage/MainHomePage.css";
import { dataSliderImg } from "../../data/data";
import Slider from "react-slick";
import ProductHomePage from "./ProductHomePage";

const MainHomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    lazyLoad: true,
  };
  return (
    <div>
      <Slider {...settings} className="slider__adjust">
        {dataSliderImg.map((item, index) => (
          <div key={index} className=" p-5 w-[600px] h-[600px] object-cover">
            <img
              className="rounded-lg shadow-3xl object-cover w-full h-full"
              src={item.src}
              alt=""
            />
          </div>
        ))}
      </Slider>
      <ProductHomePage></ProductHomePage>
    </div>
  );
};

export default MainHomePage;
