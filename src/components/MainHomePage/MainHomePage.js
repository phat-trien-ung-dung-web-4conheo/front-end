import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../MainHomePage/MainHomePage.css";
import { dataFloatNav, dataSliderImg } from "../../data/data";
import Slider from "react-slick";
import ProductHomePage from "./ProductHomePage";
import Button from "../Button";
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
    <>
      <Slider {...settings} dots={false} className="slider__adjust">
        {dataFloatNav.map((item, index) => (
          <div key={index} className="p-5 text-center bg-[#f5f5f5]">
            <h2>{item.name}</h2>
          </div>
        ))}
      </Slider>
      <div className="w-full">
        <video autoPlay muted loop className="m-auto ">
          <source src="/assets/videos/videoplaybacknike.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="w-full text-center p-10">
        <p className="text-lg">Discover our boldest legging yet</p>
        <h1 className="text-[60px] font-bold leading-[1] mb-5">
          NIKE GO SOCCERS
        </h1>
        <Button
          content="Shop now"
          navigate="/products"
          backgroundColor="#000"
          className="mx-auto p-4 rounded-lg text-white inline-block hover:-translate-y-1 hover:shadow-2xl shadow-3xl transition-all"
        ></Button>
      </div>
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
    </>
  );
};

export default MainHomePage;
