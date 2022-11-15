import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const fakeDataProduct = {
  name: "Nike Air Max 270 React",
  price: "200.000.000 VND",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  dimension: [{ size: 40 }, { size: 41 }, { size: 42 }, { size: 43 }],
  color: [{ color: "red" }, { color: "blue" }, { color: "green" }],
};

const ProductDetailContentStyles = styled.div`
  
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const ProductName = styled.div`
  color: #2a254b;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom:28px;
`;
const ProductPrice = styled.div`
  max-width:25%;
  text-align: center;
  margin-top: 15px;
  font-size: 16px;
  padding: 5px;
  padding:12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const ProductDescription = styled.div`
  margin-bottom: 50px;
`;
const ProductDimensionContainer = styled.div``;
const ProductDimensions = styled.ul`
  display:flex;
  gap: 40px;
  align-items: center;
`;
const ProductDimension = styled.li`
  box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
  padding: 25px 30px;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
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
  margin-top:10px;
  margin-bottom:10px;
  cursor: pointer;
  &:hover{
    transition: ease all 0.2s;
    scale: 1.2;
  }
`;
const ProductHeading = styled.h3`
  color: #2a254b;
  font-size:24px;
  font-weight: 700;
`
const ProductQuantities = styled.div``;
const ProductQuantityLabel = styled.div``;

const ProductQuantity = styled.div`
  width: 20%;
  box-shadow: rgba(99, 99, 99, 0.15) 0px 2px 10px 2px;
  background-color: #f9f9f9;
  margin-top:20px;
  padding:15px;
  display:flex;
  justify-content: space-between;
  align-items: center;
`;

const Quantities = styled.span``;
const ProductDetailContent = () => {
  return (
    <ProductDetailContentStyles>

      <ProductName>
        {fakeDataProduct.name}
        <ProductPrice>{fakeDataProduct.price}</ProductPrice>
      </ProductName>

      <ProductDescription>
        <ProductHeading style={{color:"#2a254b",fontSize:"24px",fontWeight:"700"}}>Product description</ProductHeading>
        <p style={{fontSize:"18px", color:"black"}}>{fakeDataProduct.desc}</p>
      </ProductDescription>

      <ProductDimensionContainer>
        <ProductHeading style={{color:"#2a254b",fontSize:"24px",fontWeight:"700", marginBottom:"16px"}}>Dimension</ProductHeading>
        <ProductDimensions>
          {fakeDataProduct.dimension.map((item) => (
            <ProductDimension 
            >{item.size}</ProductDimension>
          ))}
        </ProductDimensions>
      </ProductDimensionContainer>

      <ProductColorsContainer>
        <ProductHeading >Color</ProductHeading>
        <ProductColors>
          {fakeDataProduct.color.map((item) => (
            <ProductColor
              style={{ backgroundColor: `${item.color}` }}
            ></ProductColor>
          ))}
        </ProductColors>
      </ProductColorsContainer>

      <ProductQuantities>
        <ProductQuantityLabel>
          <ProductHeading>
            Quantity
          </ProductHeading>    
        </ProductQuantityLabel>

        <ProductQuantity>
          <RemoveIcon style={{cursor:"pointer"}}></RemoveIcon>
          <Quantities>1</Quantities>
          <AddIcon style={{cursor:"pointer"}}></AddIcon>
        </ProductQuantity>

      </ProductQuantities>

    </ProductDetailContentStyles>
  );
};

export default ProductDetailContent;
