import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer";
import Header from "../../Header";

const FullPage = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default FullPage;
