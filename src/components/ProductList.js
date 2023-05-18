import { Grid, useMediaQuery } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { device } from "../ResponsiveBreakpoint";
import Button from "./Button";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { addProductToCart } from "../redux/apiCalls";
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
const Color = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
const Size = styled.div``;
const ProductList = ({ data, catHome, cat, sort, filters }) => {
  const infoProduct = useRef();
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilterdProducts] = useState([]);
  const currentUser = useSelector((state) => state.user.login.currentUser);
  // console.log(currentUser);
  //GET PRODUCT
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat || catHome
            ? // `http://localhost:3003/api/products?category=${cat || catHome}`
              `https://back-end-webdevis207.up.railway.app/api/products?category=${
                cat || catHome
              }`
            : // "http://localhost:3003/api/products"
              "https://back-end-webdevis207.up.railway.app/api/products"
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
    cat &&
      setFilterdProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            if (value === "all") {
              return item;
            } else {
              // console.log(value);
              return item[key].includes(value);
            }
          })
        )
      );
  }, [cat, products, filters]);

  // console.log("🚀 ~ file: ProductList.js:118 ~ ProductList ~ filters", filters);

  useEffect(() => {
    !cat &&
      setFilterdProducts(
        products.filter((item) =>
          Object.entries(filters || {}).every(([key, value]) => {
            if (value === "all") {
              return item;
            } else {
              // console.log(value);
              return item[key].includes(value);
            }
          })
        )
      );
  }, [filters, products, cat]);
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
  //NAVIGATE
  const navigate = useNavigate();
  //RESPONSIVE
  const laptop = useMediaQuery("(min-width: 1024px)");
  //GET SIZE
  const [id, setId] = useState("");
  const [size, setSize] = useState("");
  const sizeRef = useRef();
  const onSetSize = (id, sizeItem) => {
    setId(id);
    setSize(sizeItem);
  };
  //GET COLOR
  const [color, setColor] = useState("");
  const onSetColor = (id, sizeItem) => {
    setId(id);
    setColor(sizeItem);
  };
  //ADD TO CART FUNCTION
  //SWEAT ALERT
  const dispatch = useDispatch();
  const addToCart = (item) => {
    if (!currentUser) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `You must login to add product to cart!`,
      });
    }
    if (size === "" || color === "") {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `You must choose ${size ? "" : "size"} ${
          !size && !color ? "and" : ""
        } ${color ? "" : "color"}!`,
      });
    }
    addProductToCart(
      dispatch,
      { ...item, quantity: 1, size, color },
      currentUser
    );
  };
  // localStorage.clear();
  return (
    <ProductListStyle>
      <Grid container spacing={4}>
        {catHome
          ? filterdProducts.slice(0, 3).map((item) => (
              <Grid item xs={laptop ? 4 : 6} key={item._id}>
                <ProductItem>
                  <ProductImg
                    onClick={() => navigate(`/product/${item._id}`)}
                    src={item.img[0]}
                  ></ProductImg>
                  <Info className="product-info" ref={infoProduct}>
                    <InfoDetail>
                      <Title className="hidden laptop:block">INFO</Title>
                      <ProductContent>
                        <p className="self-start whitespace-nowrap overflow-hidden text-ellipsis w-full">
                          <span className="font-bold">Name: </span>
                          {item.title}
                        </p>
                        <p className="self-center my-1">
                          <span className="font-bold">Price: </span>
                          {item.price}$
                        </p>
                        <div className="flex gap-3 laptop:mb-1">
                          {item?.color.map((colorItem, idx) => (
                            <Color
                              key={idx}
                              className={`border my-3 laptop:my-0 hover:scale-110 transition-all ${
                                item._id === id && colorItem === color
                                  ? "border-black"
                                  : ""
                              }`}
                              onClick={() => onSetColor(item._id, colorItem)}
                              style={{ backgroundColor: `${colorItem}` }}
                            ></Color>
                          ))}
                        </div>
                        <Size className="my-3 laptop:mt-2 laptop:mb-2">
                          <span className="font-semibold">Size: </span>
                          {item?.size.map((sizeItem, idx) => (
                            <span
                              key={idx}
                              ref={sizeRef}
                              className={`${
                                item._id === id && sizeItem === size
                                  ? "bg-[#ccc]"
                                  : ""
                              } mr-2 p-2 border rounded-lg hover:bg-slate-300 transition-all duration-200`}
                              onClick={() => {
                                onSetSize(item._id, sizeItem);
                              }}
                            >
                              {sizeItem}
                            </span>
                          ))}
                        </Size>
                        <Button
                          content="Add to cart"
                          handleClick={() => addToCart(item)}
                          backgroundColor="#ffdb00"
                          className="mx-auto p-4 mt-1 rounded-lg"
                        ></Button>
                      </ProductContent>
                    </InfoDetail>
                  </Info>
                </ProductItem>
              </Grid>
            ))
          : filterdProducts.map((item) => (
              <Grid
                item
                xs={laptop ? 4 : 6}
                key={item._id}
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <ProductItem>
                  <ProductImg
                    onClick={() => navigate(`/product/${item._id}`)}
                    src={item.img[0]}
                  ></ProductImg>
                  <Info className="product-info" ref={infoProduct}>
                    <InfoDetail>
                      <Title className="hidden laptop:block">INFO</Title>
                      <ProductContent>
                        <p className="self-start whitespace-nowrap overflow-hidden text-ellipsis w-full">
                          <span className="font-bold">Name: </span>
                          {item.title}
                        </p>
                        <p className="self-center my-1">
                          <span className="font-bold">Price: </span>
                          {item.price}$
                        </p>
                        <div className="flex gap-3 laptop:mb-1">
                          {item?.color.map((colorItem, idx) => (
                            <Color
                              key={idx}
                              className={`border my-3 laptop:my-0 hover:scale-110 transition-all ${
                                item._id === id && colorItem === color
                                  ? "border-black"
                                  : ""
                              }`}
                              onClick={() => onSetColor(item._id, colorItem)}
                              style={{ backgroundColor: `${colorItem}` }}
                            ></Color>
                          ))}
                        </div>
                        <Size className="my-3 laptop:mt-2 laptop:mb-2">
                          <span className="font-semibold">Size: </span>
                          {item?.size.map((sizeItem, idx) => (
                            <span
                              key={idx}
                              ref={sizeRef}
                              className={`${
                                item._id === id && sizeItem === size
                                  ? "bg-[#ccc]"
                                  : ""
                              } mr-2 p-2 border rounded-lg hover:bg-slate-300 transition-all duration-200`}
                              onClick={() => {
                                onSetSize(item._id, sizeItem);
                              }}
                            >
                              {sizeItem}
                            </span>
                          ))}
                        </Size>
                        <Button
                          content="Add to cart"
                          handleClick={() => addToCart(item)}
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
