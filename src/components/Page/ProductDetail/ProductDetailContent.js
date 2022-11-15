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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 25px 30px;
  border-radius: 10px;
  cursor: pointer;
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
`;

const ProductQuantities = styled.div``;
const ProductQuantityLabel = styled.div``;

const ProductQuantity = styled.div``;

const Quantities = styled.span``;
const ProductDetailContent = () => {
  const [sizeSelected, isSizeSelect] = useState("#fff");
  return (
    <ProductDetailContentStyles>

      <ProductName>
        {fakeDataProduct.name}
        <ProductPrice>{fakeDataProduct.price}</ProductPrice>
      </ProductName>

      <ProductDescription>
        <h3 style={{color:"#2a254b",fontSize:"24px",fontWeight:"700"}}>Product description</h3>
        <p style={{fontSize:"18px", color:"black"}}>{fakeDataProduct.desc}</p>
      </ProductDescription>

      <ProductDimensionContainer>
        <h3 style={{color:"#2a254b",fontSize:"24px",fontWeight:"700", marginBottom:"16px"}}>Dimension</h3>
        <ProductDimensions>
          {fakeDataProduct.dimension.map((item) => (
            <ProductDimension 
            onClick={()=>{
              isSizeSelect("#ffdb00")
            }}
            style={{backgroundColor:sizeSelected}}>{item.size}</ProductDimension>
          ))}
        </ProductDimensions>
      </ProductDimensionContainer>
      <ProductColorsContainer>
        <h3>Color</h3>
        <ProductColors>
          {fakeDataProduct.color.map((item) => (
            <ProductColor
              style={{ backgroundColor: `${item.color}` }}
            ></ProductColor>
          ))}
        </ProductColors>
      </ProductColorsContainer>
      <ProductQuantities>
        <ProductQuantityLabel>Quantity</ProductQuantityLabel>
        <ProductQuantity>
          <RemoveIcon></RemoveIcon>
          <Quantities>1</Quantities>
          <AddIcon></AddIcon>
        </ProductQuantity>
      </ProductQuantities>
    </ProductDetailContentStyles>
  );
};

export default ProductDetailContent;
