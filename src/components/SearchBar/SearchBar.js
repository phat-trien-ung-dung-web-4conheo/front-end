import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../../data/requestMethod";
import useDebounce from "../../hooks/useDebounce";
import SearchProduct from "../SearchProduct";

const Container = styled.div`
  margin: 0 auto;
  margin-top: auto;
  transform: ${(props) =>
    props.isAppear ? "translateY(0)" : "translateY(100%)"};
  transition: transform 0.5s ease;
  height: 85vh;
  bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.9) 0px 2px 12px 0px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 50px 20px;
  backdrop-filter: blur(10px);
  z-index: 999;
`;
const SearchBar = ({ className = "", isAppear, onClick = () => {} }) => {
  //SEARCH PRODUCT
  const [search, setSearch] = useState("");
  const filteredProducts = useDebounce(search, 500);
  const [products, setProducts] = useState([]);
  //NOT render variable
  const handleSearchProduct = async (e) => {
    let value = e.target.value;
    setSearch(value);
  };
  const getSearchProduct = async () => {
    try {
      const res = await publicRequest.get("/products/search/" + search);
      setProducts(res.data);
    } catch (err) {
      console.log("cart", err);
    }
  };
  useEffect(() => {
    if (filteredProducts) {
      getSearchProduct();
    } else {
      setProducts([]);
    }
  }, [filteredProducts]);
  return (
    <Container
      className={`${className} overflow-y-auto`}
      isAppear={isAppear}
      onClick={onClick}
    >
      <input
        className="block m-auto mb-4 w-full p-3 border border-gray-300 rounded-md"
        type="text"
        placeholder="search..."
        onChange={handleSearchProduct}
      />{" "}
      <SearchProduct data={products}></SearchProduct>
    </Container>
  );
};

export default SearchBar;
