import React from "react";
import Header from "../Header";
import styled from "styled-components";
import ProductList from "../ProductList";

const Container = styled.div`
  padding: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
`;
const Right = styled.div`
  display: flex;
`;
const FilterTitle = styled.h3`
  font-size: 20px;
`;
const FilterSelect = styled.select``;
const Left = styled.div`
  display: flex;
`;
const FilterOption = styled.option``;
const ProductCategoryPage = () => {
  return (
    <Container>
      <FilterContainer>
        <Right>
          <FilterTitle>Filter Product:</FilterTitle>
          <FilterSelect>
            <FilterOption disabled selected>
              Color
            </FilterOption>
            <FilterOption>White</FilterOption>
            <FilterOption>Red</FilterOption>
            <FilterOption>Black</FilterOption>
          </FilterSelect>
        </Right>
        <Left>
          <FilterTitle>Sort Product:</FilterTitle>
          <FilterSelect>
            <FilterOption disabled selected>
              Newest
            </FilterOption>
            <FilterOption>Price (asc)</FilterOption>
            <FilterOption>Price (desc)</FilterOption>
          </FilterSelect>
        </Left>
      </FilterContainer>

      <ProductList></ProductList>
    </Container>
  );
};

export default ProductCategoryPage;
