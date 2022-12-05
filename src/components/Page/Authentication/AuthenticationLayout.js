import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  position: relative;

`;

const Authentication = styled.div`
  max-width: 350px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 2px 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
`;

const AuthenticationLayout = ({ children }) => {
  return (
    <Container>
      <img
        src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1255,c_limit/30afe174-1232-4fa5-8bd2-c8d5c4140ea7/nike-just-do-it.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        alt=""
      />
      <div className="bg-black opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
      <div
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        className="pt-12"
      >
        <Authentication>{children}</Authentication>
      </div>
    </Container>
  );
};

export default AuthenticationLayout;
