import { Grid, useMediaQuery } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { dataProduct } from "../data/data";
import { device } from "../ResponsiveBreakpoint";
import Button from "./Button";

const ProductListStyle = styled.ul``;

const ProductItem = styled.li`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 1px 8px;
  position: relative;
  cursor: pointer;
  @media ${device.laptop} {
    &:hover .product-info {
      transform: translate(-50%, -30%);
    }
  }
`;

const ProductImg = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

const Info = styled.div`
  z-index: 40;
  width: 100%;
  @media ${device.laptop} {
    padding: 10px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
    transition: transform 0.5s ease;
    &:hover {
      transform: translate(-50%, -100%) !important;
    }
  }
`;

const InfoDetail = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 8px 1px;
  padding: 15px;
  @media ${device.laptop} {
    border-radius: 10px;
  }
`;
const Title = styled.h3`
  border-bottom: 1px solid #ccc;
  padding: 0 0 10px 0;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
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
  const laptop = useMediaQuery("(min-width: 1024px)");
  return (
    <ProductListStyle>
      <Grid container spacing={4}>
        {filterdProducts.map((item) => (
          <Grid item xs={laptop ? 4 : 6} key={item._id}>
            <ProductItem onClick={() => navigate(`/product/${item._id}`)}>
              <ProductImg src={item.img}></ProductImg>
              <Info className="product-info" ref={infoProduct}>
                <InfoDetail>
                  <Title>INFO</Title>
                  <ProductContent>
                    <p className="self-start whitespace-nowrap overflow-hidden text-ellipsis w-full">
                      Name: {item.title}
                    </p>
                    <p className="self-start">Price: {item.price}</p>
                    <Button
                      content="Add to cart"
                      backgroundColor="#ffdb00"
                      className="mx-auto p-4 mt-1 rounded-lg"
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
