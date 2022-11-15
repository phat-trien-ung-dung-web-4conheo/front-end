import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ProductDetailContent from "./ProductDetailContent";

const Container = styled.div``;
const Left = styled.div`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const Right = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: sticky;
  word-wrap: break-word;
  margin-top: 20px;
  top: 70px;
  width: 100%;
  margin-bottom: 50px;
`;

const ProductImg = styled.img`
  box-shadow: rgba(99, 99, 99, 0.6) 0px 2px 10px 0px;
  border-radius: 10px;
`;

const ProductDetailPage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Left>
            <ProductImg src="https://images.unsplash.com/photo-1667392267120-d3bc9a16dc1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"></ProductImg>
            <ProductImg src="https://images.unsplash.com/photo-1667392267120-d3bc9a16dc1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"></ProductImg>
          </Left>
        </Grid>
        <Grid item xs={5} style={{ position: "relative" }}>
          <Right>
            <ProductDetailContent></ProductDetailContent>
          </Right>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailPage;
