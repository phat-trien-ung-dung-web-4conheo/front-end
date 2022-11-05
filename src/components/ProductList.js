import { Grid } from "@mui/material";
import React, { useRef } from "react";
import styled from "styled-components";
import { dataProduct } from "../data/data";
import Button from "./Button";

const ProductListStyle = styled.ul``;

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
const ProductList = () => {
  const infoProduct = useRef();

  return (
    <ProductListStyle>
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
    </ProductListStyle>
  );
};

export default ProductList;
