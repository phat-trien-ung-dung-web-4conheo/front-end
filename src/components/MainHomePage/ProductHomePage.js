import { Grid } from "@mui/material";
import React, { useRef } from "react";
import styled from "styled-components";
import { dataProduct, dataChoiceUs } from "../../data/data";
import Button from "../Button";
const ProductList = styled.ul``;

const ProductItem = styled.li`
  height: 600px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 1px 8px;
  position: relative;
  cursor: pointer;
  &:hover .product-info {
    transform: translate(-50%, -50%);
  }
`;

const ProductImg = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px;
  position: absolute;
  z-index: 40;
  top: 100%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0);
  transition: transform 0.5s ease;
  &:hover {
    transform: translate(-50%, -120%) !important;
  }
  height: 23%;
`;

const InfoDetail = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 8px 1px;
  padding: 15px;
`;
const Title = styled.h3`
  border-bottom: 1px solid #ccc;
  padding: 0 0 10px 0;
  text-align: center;
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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

  &:hover .choice-icon {
    transition: transform 1s ease;
    transform: translateX(90%);
  }
`;

const ChoiceUsIcon = styled.div``;

const GetIdeaCollection = styled.div`
  margin-top: 50px;
`;
const LeftIdea = styled.div`
  background-color: #ffdb00;
  padding: 30px;
  display: flex;
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
  const infoProduct = useRef();
  return (
    <div className="p-5">
      <ChoiceUs>
        <h2 className="text-3xl text-center mb-[25px] mt-[60px]">
          What make our brand different
        </h2>
        <Grid container spacing={3}>
          {dataChoiceUs.map((item, index) => (
            <Grid item xs={3}>
              <ChoiceUsItem>
                <ChoiceUsIcon className="choice-icon">{item.icon}</ChoiceUsIcon>
                <h3 className="text-xl">{item.title}</h3>
                <p>{item.desc}</p>
              </ChoiceUsItem>
            </Grid>
          ))}
        </Grid>
      </ChoiceUs>
      <h1 className="text-2xl py-5">All product</h1>

      <ProductList>
        <Grid container spacing={4}>
          {dataProduct.map((item, index) => (
            <Grid item xs={4} key={item.id}>
              <ProductItem>
                <ProductImg src={item.src}></ProductImg>
                <Info className="product-info" ref={infoProduct}>
                  <InfoDetail>
                    <Title>INFO</Title>
                    <ProductContent>
                      <p className="self-start">Name: {item.name}</p>
                      <p className="self-start">Price: {item.price}</p>
                      <Button
                        content="Add to cart"
                        backgroundColor="#ffdb00"
                        className="mx-auto p-4 rounded-lg"
                      ></Button>
                    </ProductContent>
                  </InfoDetail>
                </Info>
              </ProductItem>
            </Grid>
          ))}
        </Grid>
      </ProductList>

      <GetIdeaCollection>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <LeftIdea>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl py-5">It started with a small idea</h2>
                <p>
                  A global brand with local beginnings, our story begain in a
                  small studio in South London in early 2014{" "}
                </p>
              </div>
              <Button
                content="View collection"
                className="w-full p-3 rounded-lg mt-auto"
              ></Button>
            </LeftIdea>
          </Grid>
          <Grid item xs={6}>
            <RightIdea>
              <GetIdeaImg src="https://ecommerce-website-omega.vercel.app/static/media/features2.0516b31e885bb8a1872b.png"></GetIdeaImg>
            </RightIdea>
          </Grid>
        </Grid>
      </GetIdeaCollection>
    </div>
  );
};

export default ProductHomePage;
