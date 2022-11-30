import React from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../ProductList";

const ProductListCategory = ({ categoryName = "" }) => {
  const navigate = useNavigate();
  return (
    <>
      <h1
        className="capitalize text-2xl px-4 cursor-pointer hover:-translate-y-1 shadow-2xl hover:shadow-3xl transition-all py-3 my-4 bg-[#333] text-white rounded-lg inline-block"
        style={{ textAlign: "left", fontWeight: "400" }}
        onClick={() => navigate(`/products/${categoryName}`)}
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        {categoryName}
      </h1>
      <ProductList catHome={categoryName}></ProductList>
    </>
  );
};

export default ProductListCategory;
