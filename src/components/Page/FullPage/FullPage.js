import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";
import Banner from "../../Banner";
const FullPage = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
};

export default FullPage;
