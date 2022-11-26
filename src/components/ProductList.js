import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
const ProductList = ({ cat, sort, filters }) => {
  const infoProduct = useRef();
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilterdProducts] = useState([]);
  //GET PRODUCT
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3000/api/products?category=${cat}`
            : "http://localhost:3000/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  //FILTER
  useEffect(() => {
    cat
      ? setFilterdProducts(
          products.filter((item) =>
            Object.entries(filters).every(([key, value]) => {
              if (value === "all") {
                return item;
              } else {
                return item[key].includes(value);
              }
            })
          )
        )
      : setFilterdProducts(products);
  }, [cat, products, filters]);
  //SORT
  useEffect(() => {
    if (sort === "newest") {
      setFilterdProducts((prev) => {
        return [...prev].sort((a, b) => {
          return a.createdAt.localeCompare(b.createdAt);
        });
      });
    } else if (sort === "asc") {
      setFilterdProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === "desc") {
      setFilterdProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort, filters]);
  const navigate = useNavigate();
  return (
    <ProductListStyle>
      <Grid container spacing={4}>
        {filterdProducts.map((item) => (
          <Grid item xs={4} key={item._id}>
            <ProductItem onClick={() => navigate(`/product/${item._id}`)}>
              <ProductImg src={item.img}></ProductImg>
              <Info className="product-info" ref={infoProduct}>
                <InfoDetail>
                  <Title>INFO</Title>
                  <ProductContent>
                    <p className="self-start">Name: {item.title}</p>
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
