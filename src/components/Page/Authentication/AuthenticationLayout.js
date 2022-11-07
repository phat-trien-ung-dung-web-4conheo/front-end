import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  padding-top: 100px;
`;

const Authentication = styled.div`
  max-width: 350px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const AuthenticationLayout = ({ children }) => {
  return (
    <Container>
      <Authentication
        
      >
        {children}
        
      </Authentication>
      <section>
      </section>
    </Container>
  );
};

export default AuthenticationLayout;
