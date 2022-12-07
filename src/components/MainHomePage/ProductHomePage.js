import { Grid, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dataProduct, dataChoiceUs } from "../../data/data";
import { device } from "../../ResponsiveBreakpoint";
import Button from "../Button";
import ProductList from "../ProductList";
import ProductListCategory from "../ProductListCategory/ProductListCategory";

const ChoiceUs = styled.div`
  margin: 30px 0;
`;

const ChoiceUsItem = styled.div`
  padding: 20px;
  background-color: #ffdb00;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  transition: transform 1s ease;
  &:hover .choice-icon {
    transition: transform 1s ease;

    transform: translateX(90%);
  }
  @media ${device.laptop} {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ChoiceUsIcon = styled.div``;

const GetIdeaCollection = styled.div`
  margin-top: 10%;
`;
const LeftIdea = styled.div`
  background-color: #ffdb00;
  padding: 30px;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 10px 2px;
  height: 100%;
`;

const RightIdea = styled.div``;
const GetIdeaImg = styled.img`
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 10px 2px;
`;
const ProductHomePage = () => {
  const navigate = useNavigate();
  const tablet = useMediaQuery("(min-width:768px)");
  const laptop = useMediaQuery("(min-width:1024px)");
  const wishList = useSelector((state) => state.wishList);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  localStorage.clear();
  return (
    <div className="p-5 mt-20">
      <ChoiceUs>
        <h2 className="text-3xl text-center mb-[25px] mt-[60px]">
          What make our brand different
        </h2>
        <Grid container spacing={3}>
          {dataChoiceUs.map((item, index) => (
            <Grid key={index} item xs={tablet ? (laptop ? 3 : 6) : 12}>
              <ChoiceUsItem>
                <ChoiceUsIcon className="choice-icon">{item.icon}</ChoiceUsIcon>
                <h3 className="text-xl">{item.title}</h3>
                <p>{item.desc}</p>
              </ChoiceUsItem>
            </Grid>
          ))}
        </Grid>
      </ChoiceUs>
      <h1
        className="text-2xl px-4 py-3 my-4 bg-[#333] text-white rounded-lg inline-block"
        style={{ textAlign: "left", fontWeight: "400" }}
      >
        All product
      </h1>
      <ProductList></ProductList>
      <ProductListCategory categoryName="men"></ProductListCategory>
      <ProductListCategory categoryName="women"></ProductListCategory>
      <ProductListCategory categoryName="kid"></ProductListCategory>
      <GetIdeaCollection>
        <Grid container spacing={4}>
          <Grid item xs={laptop ? 6 : 12}>
            <LeftIdea>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl py-5">It started with a small idea</h2>
                <p>
                  A global brand with local beginnings, our story begain in a
                  small studio in South London in early 2014{" "}
                </p>
              </div>
              <Button
                navigate="/products"
                content="View collection"
                className="w-full p-3 rounded-lg laptop:mt-auto mobile:mt-5 bg-white !text-black"
              ></Button>
            </LeftIdea>
          </Grid>
          <Grid item xs={laptop ? 6 : 12}>
            <RightIdea className="w-full">
              <GetIdeaImg
                className="w-full"
                src="https://fapxy.info/wp-content/uploads/2022/01/nike-store.jpg"
              ></GetIdeaImg>
            </RightIdea>
          </Grid>
        </Grid>
      </GetIdeaCollection>
    </div>
  );
};

export default ProductHomePage;
