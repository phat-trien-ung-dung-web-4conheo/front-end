import { Grid, useMediaQuery } from "@mui/material";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import { publicRequest } from "../../../data/requestMethod";
import useClientRect from "../../../hooks/useClientRect";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { device } from "../../../ResponsiveBreakpoint";
import ProductDetailContent from "./ProductDetailContent";

const Container = styled.div``;
const Left = styled.div`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const Right = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  word-wrap: break-word;
  margin-top: 20px;
  @media ${device.tablet} {
    position: sticky;
    top: -200px;
  }
  @media ${device.laptop} {
    top: 10px;
  }
  width: 100%;
  margin-bottom: 50px;
`;

const ProductImg = styled.img`
  box-shadow: rgba(99, 99, 99, 0.6) 0px 2px 10px 0px;
  border-radius: 10px;
`;
const SliderImg = styled.div``;
const ProductDetailPage = () => {
  //RESPONSIVE

  const mobile = useMediaQuery("(min-width: 320px)");
  const tablet = useMediaQuery("(min-width: 768px)");
  //SLIDER FOR MOBILE SLIDERIMG SETTING
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: false,
    lazyLoad: true,
  };
  //GET ELEMENT API
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, []);
  //GET SCROLL POSITION
  const scrollY = useScrollPosition();
  //get element height
  const { rect: leftRect, ref: leftDiv } = useClientRect();
  const imgFake = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1667392267120-d3bc9a16dc1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1667392267120-d3bc9a16dc1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1667392267120-d3bc9a16dc1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1667392267120-d3bc9a16dc1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    },
  ];
  //Scroll to index image when click on image item
  const scrollToImg = (index) => {
    console.log(index);
    console.log("Asdsad");
    window.scrollTo({
      top: index * (leftRect?.height / 4) + 80,
      left: 0,
      behavior: "smooth",
    });
  };
  // console.log(leftRect?.height);
  return (
    <Container>
      <Grid container spacing={2}>
        {/* TABLET RESPONSIVE FOR SLIDER IMG */}
        {tablet && (
          <Grid item xs={7}>
            <Left ref={leftDiv}>
              {imgFake.map((item) => (
                <div className="w-full h-[calc(100vh-144px)] laptop:h-[calc(100vh-80px)] rounded-xl overflow-hidden shadow-lg shadow-gray-800/40">
                  <ProductImg
                    className="w-full m-h-full object-cover"
                    src={item.src}
                  ></ProductImg>
                </div>
              ))}
              <SliderImg
                className={`fixed bottom-0 left-1/4 w-72 h-20 flex gap-2  ${
                  scrollY <= (leftRect?.height / 4) * 3 + 80 && scrollY > 0
                    ? "translate-y-0 z-30"
                    : "translate-y-full"
                } transition-all duration-200 -translate-x-1/3 laptop:-translate-x-1/4 p-2 rounded-lg bg-black`}
              >
                {imgFake.map((item, idx) => (
                  <div className="h-full w-full">
                    <ProductImg
                      className="h-full w-full cursor-pointer object-cover"
                      src={item.src}
                      onClick={() => scrollToImg(idx)}
                    ></ProductImg>
                  </div>
                ))}
              </SliderImg>
            </Left>
          </Grid>
        )}
        {/* MOBILE RESPONSIVE FOR SLIDER IMG */}
        {!tablet && (
          <Grid item xs={12}>
            <Slider {...settings} className="slider__adjust">
              {imgFake.map((item, index) => (
                <div
                  key={index}
                  className=" p-5 w-[600px] h-[600px] object-cover"
                >
                  <img
                    className="rounded-lg shadow-3xl object-cover w-full h-full"
                    src={item.src}
                    alt=""
                  />
                </div>
              ))}
            </Slider>
          </Grid>
        )}
        <Grid item xs={tablet ? 5 : 12} style={{ position: "relative" }}>
          <Right>
            <ProductDetailContent data={product}></ProductDetailContent>
          </Right>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailPage;
