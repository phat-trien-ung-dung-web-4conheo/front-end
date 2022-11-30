import React, { useEffect, useState } from "react";
import Header from "../Header";
import styled from "styled-components";
import ProductList from "../ProductList";
import { useLocation } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { device } from "../../ResponsiveBreakpoint";

const Container = styled.div`
  padding: 20px;
`;
const FilterContainer = styled.div`
  margin: 40px 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 12px;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  @media ${device.mobile} {
    flex-direction: column;
    gap: 20px;
  }
  @media ${device.tablet} {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
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
  @media ${device.mobile} {
    gap: 30px;
  }
`;
const FilterOption = styled.option``;
const ProductCategoryPage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const [reRender, setReRender] = useState(false);
  const handleRender = () => {
    setReRender(!reRender);
  };
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    handleRender();
  };
  // console.log(filters);
  //automatic scroll to top when change page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Container>
      <FilterContainer>
        <Right>
          <FilterTitle>Filter Product:</FilterTitle>
          <FormControl fullWidth className="">
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              defaultValue=""
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
              <MenuItem value="black">Black</MenuItem>
              <MenuItem value="grey">Grey</MenuItem>
              <MenuItem value="orange">Orange</MenuItem>
              <MenuItem value="yellow">Yellow</MenuItem>
              <MenuItem value="pink">Pink</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="green">Green</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Size</InputLabel>
            <Select
              defaultValue=""
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
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="4.5">4.5</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="5.5">5.5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="6.5">6.5</MenuItem>
              <MenuItem value="7">7</MenuItem>
            </Select>
          </FormControl>
        </Right>
        <Left>
          <FilterTitle>Sort Product:</FilterTitle>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Newest</InputLabel>
            <Select
              defaultValue=""
              onChange={(e) => {
                setSort(e.target.value);
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="newest"
              label="Newest"
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
              <MenuItem value="newest">Newest</MenuItem>
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
