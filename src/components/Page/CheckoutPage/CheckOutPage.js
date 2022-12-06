import React from "react";
import CheckOutInformation from "./CheckOutInformation";
import CheckOutProduct from "./CheckOutProduct";

const CheckOutPage = () => {
  return (
    <div className="w-screen h-screen relative overflow-x-hidden">
      <section className="w-full h-full  fixed top-0 z-10">
        <img
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1255,c_limit/1e0c96a1-1b57-48fe-bf16-d65a668d57a7/nike-just-do-it.jpg"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="w-full h-full bg-black/70 backdrop-blur-lg absolute top-0 left-0 z-20"></div>
      </section>
      <section className="w-full  flex relative z-30 justify-center items-start laptop:pt-8 pb-16">
        <CheckOutInformation></CheckOutInformation>
        <CheckOutProduct></CheckOutProduct>
      </section>
    </div>
  );
};

export default CheckOutPage;
