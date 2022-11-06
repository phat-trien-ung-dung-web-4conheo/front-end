import { Grid } from "@mui/material";
import React, { useRef } from "react";
import styled from "styled-components";
import { dataProduct, dataChoiceUs } from "../../data/data";
import Button from "../Button";
import ProductList from "../ProductList";

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
  return (
    <div className="p-5">
      <ChoiceUs>
        <h2 className="text-3xl text-center mb-[25px] mt-[60px]">
          What make our brand different
        </h2>
        <Grid container spacing={3}>
          {dataChoiceUs.map((item, index) => (
            <Grid key={index} item xs={3}>
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

      <ProductList></ProductList>

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
              <GetIdeaImg src="https://gbl-sc9u2-prd-cdn.azureedge.net/-/media/aboutikea/images/contact/how-to-buy-ikea-products-from-a-different-country/a-man-setting-a-table-ai2001-02-ph156953-ikea-l.jpg?rev=5d9ca4cf1a7b402fb98dfac9d10f3f79"></GetIdeaImg>
            </RightIdea>
          </Grid>
        </Grid>
      </GetIdeaCollection>
    </div>
  );
};

export default ProductHomePage;