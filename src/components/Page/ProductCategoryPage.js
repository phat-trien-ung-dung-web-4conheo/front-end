import React, { useState } from "react";
import Header from "../Header";
import styled from "styled-components";
import ProductList from "../ProductList";
import { useLocation } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Container = styled.div`
  padding: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 12px;
  padding: 10px 15px;
  border-radius: 5px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const FilterTitle = styled.h3`
  font-size: 18px;
  margin-right: 10px;
  white-space: nowrap;
`;
const FilterSelect = styled.select``;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const FilterOption = styled.option``;
const ProductCategoryPage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <FilterContainer>
        <Right>
          <FilterTitle>Filter Product:</FilterTitle>
          <FormControl fullWidth className="">
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="color"
              label="Color"
              onChange={handleFilters}
              className="w-[90px]"
              sx={{
                "&.MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 219, 0)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(255, 219, 0)",
                  },
                },
              }}
            >
              <MenuItem selected value="all">
                All
              </MenuItem>
              <MenuItem value="white">White</MenuItem>
              <MenuItem value="grey">Grey</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="size"
              label="Size"
              onChange={handleFilters}
              className="w-[90px]"
              sx={{
                "&.MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 219, 0)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(255, 219, 0)",
                  },
                },
              }}
            >
              <MenuItem selected value="all">
                all
              </MenuItem>
              <MenuItem value={6.5}>6.5</MenuItem>
              <MenuItem value={7}>7</MenuItem>
            </Select>
          </FormControl>
        </Right>
        <Left>
          <FilterTitle>Sort Product:</FilterTitle>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Newest</InputLabel>
            <Select
              onChange={(e) => {
                setSort(e.target.value);
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="size"
              label="Size"
              className="w-[100px]"
              sx={{
                "&.MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 219, 0)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(255, 219, 0)",
                  },
                },
              }}
            >
              <MenuItem selected value="newest">
                Newest
              </MenuItem>
              <MenuItem value="desc">Price (desc)</MenuItem>
              <MenuItem value="asc">Price (asc)</MenuItem>
            </Select>
          </FormControl>
        </Left>
      </FilterContainer>

      <ProductList cat={cat} sort={sort} filters={filters}></ProductList>
    </Container>
  );
};

export default ProductCategoryPage;
