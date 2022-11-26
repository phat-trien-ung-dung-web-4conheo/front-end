import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
  width: 20%;
  box-shadow: rgba(99, 99, 99, 0.15) 0px 2px 10px 2px;
  background-color: #f9f9f9;
  margin-top: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Quantities = styled.span``;
const ProductDetailContent = ({ data }) => {
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
  return (
    <ProductDetailContentStyles>
      <ProductName>
        <p>{data?.title}</p>
        <ProductPrice>{data?.price}</ProductPrice>
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
            <ProductDimension key={idx}>{item}</ProductDimension>
          ))}
        </ProductDimensions>
      </ProductDimensionContainer>

      <ProductColorsContainer>
        <ProductHeading>Color</ProductHeading>
        <ProductColors>
          {data?.color?.map((item, idx) => (
            <ProductColor
              key={idx}
              style={{ backgroundColor: `${item}` }}
            ></ProductColor>
          ))}
        </ProductColors>
      </ProductColorsContainer>

      <ProductQuantities>
        <ProductQuantityLabel>
          <ProductHeading>Quantity</ProductHeading>
        </ProductQuantityLabel>

        <ProductQuantity>
          <RemoveIcon
            onClick={() => handleCounter("dec")}
            style={{ cursor: "pointer" }}
          ></RemoveIcon>
          <Quantities>{counter}</Quantities>
          <AddIcon
            onClick={() => handleCounter("inc")}
            style={{ cursor: "pointer" }}
          ></AddIcon>
        </ProductQuantity>
      </ProductQuantities>
    </ProductDetailContentStyles>
  );
};

export default ProductDetailContent;
