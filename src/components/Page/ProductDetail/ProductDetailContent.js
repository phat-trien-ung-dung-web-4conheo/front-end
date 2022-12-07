import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "../../Button";
import { device } from "../../../ResponsiveBreakpoint";
import { addProduct } from "../../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { addProductToCart } from "../../../redux/apiCalls";
import { addFavoriteProduct } from "../../../redux/wishListSlice";
import { toast } from "react-toastify";
const ProductDetailContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
`;
const ProductName = styled.div`
  color: #2a254b;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
`;
const ProductPrice = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  padding: 5px 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: inline-block;
`;
const ProductDescription = styled.div``;
const ProductDimensionContainer = styled.div``;
const ProductDimensions = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;
`;
const ProductDimension = styled.li`
  box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;
const ProductColorsContainer = styled.div``;
const ProductColors = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
`;
const ProductColor = styled.li`
  box-shadow: rgba(99, 99, 99, 0.4) 0px 2px 10px 2px;
  padding: 20px;
  border-radius: 50%;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    transition: ease all 0.2s;
    scale: 1.2;
  }
`;
const ProductHeading = styled.h3`
  color: #2a254b;
  font-size: 24px;
  font-weight: 700;
`;
const ProductQuantities = styled.div``;
const ProductQuantityLabel = styled.div``;

const ProductQuantity = styled.div`
  box-shadow: rgba(99, 99, 99, 0.15) 0px 2px 10px 2px;
  background-color: #f9f9f9;
  margin-top: 10px;
  padding: 15px;
  display: inline-block;
`;

const Quantities = styled.p`
  display: inline-block;
  padding: 0 10px;
`;
const ButtonBox = styled.div`
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
  }
  gap: 30px;
`;
const ProductDetailContent = ({ data }) => {
  //COUNTER
  const [counter, setCounter] = useState(1);
  const handleCounter = (type) => {
    if (type === "inc") {
      setCounter(counter + 1);
    } else {
      if (counter > 1) {
        setCounter(counter - 1);
      }
    }
  };
  //GET SIZE
  const [size, setSize] = useState("");

  const getSize = (item) => {
    if (item === "") {
      setSize(data?.size[0]);
    } else {
      setSize(item);
    }
  };
  //GET COLOR
  const [color, setColor] = useState("");
  //ADD TO CART FUNCTION
  //SWEAT ALERT
  const currentUser = useSelector((state) => state.user.login.currentUser);
  const dispatch = useDispatch();
  const addToCart = (data) => {
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
      { ...data, quantity: counter, size, color },
      currentUser
    );
    toast.success("Add product to cart successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  //WISH LIST
  const addToWishList = () => {
    console.log("success");
    const wishData = {
      ...data,
      userId: currentUser._id,
    };
    dispatch(addFavoriteProduct(wishData));
    toast.success("Add your favorite product successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const wishList = useSelector((state) => state.wishList);

  console.log(
    "🚀 ~ file: ProductDetailContent.js:147 ~ ProductDetailContent ~ wishList",
    wishList
  );
  return (
    <ProductDetailContentStyles>
      <ProductName>
        <p>{data?.title}</p>
        <ProductPrice>{data?.price}$</ProductPrice>
      </ProductName>

      <ProductDescription>
        <ProductHeading
          style={{ color: "#2a254b", fontSize: "24px", fontWeight: "700" }}
        >
          Product description
        </ProductHeading>
        <p style={{ fontSize: "18px", color: "black" }}>{data?.desc}</p>
      </ProductDescription>

      <ProductDimensionContainer>
        <ProductHeading
          style={{
            color: "#2a254b",
            fontSize: "24px",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          Dimension
        </ProductHeading>
        <ProductDimensions>
          {data?.size?.map((item, idx) => (
            <ProductDimension
              className={`${size === item ? "bg-[#ccc]" : ""} transition-all`}
              onClick={() => getSize(item)}
              key={idx}
            >
              {item}
            </ProductDimension>
          ))}
        </ProductDimensions>
      </ProductDimensionContainer>

      <ProductColorsContainer>
        <ProductHeading>Color</ProductHeading>
        <ProductColors>
          {data?.color?.map((item, idx) => (
            <ProductColor
              className={`${color === item ? "scale-75" : ""} transition-all`}
              onClick={() => setColor(item)}
              key={idx}
              style={{ backgroundColor: `${item}` }}
            ></ProductColor>
          ))}
        </ProductColors>
      </ProductColorsContainer>
      <ProductQuantities>
        <ProductHeading>Quantity</ProductHeading>

        <ProductQuantity>
          <RemoveIcon
            onClick={() => handleCounter("dec")}
            style={{ cursor: "pointer" }}
            className="inline-block"
          ></RemoveIcon>
          <Quantities>{counter}</Quantities>
          <AddIcon
            onClick={() => handleCounter("inc")}
            style={{ cursor: "pointer" }}
            className="inline-block"
          ></AddIcon>
        </ProductQuantity>
      </ProductQuantities>
      <ButtonBox className="">
        <Button
          handleClick={() => addToCart(data)}
          content="Add to cart"
          className="w-full py-3 laptop:p-4 rounded-lg !bg-primary "
        ></Button>
        <Button
          content="Save to favorite"
          className="w-full py-3 laptop:p-4 rounded-lg hover:bg-primary hover:bg-opacity-10 transition-all"
          handleClick={addToWishList}
        ></Button>
      </ButtonBox>
    </ProductDetailContentStyles>
  );
};

export default ProductDetailContent;
