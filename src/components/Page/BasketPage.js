import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 50px;
  max-width: 1200px;
  margin: 0 auto;
`;
const Left = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const Right = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const BasketPage = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Left></Left>
        </Grid>
        <Grid item xs={4}>
          <Right></Right>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BasketPage;
