import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components";
import { categoryItems, menuItems, ourCom } from "../data/footer_data";
import device from '../ResponsiveBreakpoint'
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const FooterWrap = styled.div`
  display: flex; 
  padding: 40px;
  height: 100%;
  background-color: #ffdb00;
  flex-grow: 1;
`
const Wrap = styled.div`
  width: calc(50% / 3);
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;
const FooterItems = styled.ul`
  color: black;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Items = styled.li`
  padding: 0 5px;
  row-gap: 10px;
  width: 100%;
  font-weight: 400;
  cursor: pointer;
`;
const LiText = styled.a`
  &:hover {
    border-bottom: solid 3px white;
  }
`;
const Heading = styled.h3`
  color: black;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
`;
const EmailForm = styled.div`
  
`;
const Form = styled.input`
  color: black;
  padding: 20px;
  border: 0.5px solid black;
  opacity: 0.2;
  max-width: calc(100%/2);
  width: 100%;
  flex:2;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  ::placeholder {
    color: black;
  }
`;
const SignUpBtn = styled.button`
  color: #333;
  max-width: calc(100%/2 - 20%);
  width: 100%;
  padding: 20.5px ;
  background-color: #fff;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
`;
const LicenseWrap = styled.div`
  background-color: #ffdb00;
  width: 100%;
`;
const Line = styled.hr`
  border-color: black;
  width: 95%;
  margin: auto auto;
`;
const LicenseContent = styled.div`
  padding: 20px 32px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
`;
const LicenseText = styled.p`
  font-weight: 600;
`;
const LicenseIcon = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Footer = (probs) => {
  return (
    <div>
      <FooterWrap id="footer_container">
        <Wrap>
          <Heading>Category</Heading>
          <FooterItems>
            {categoryItems.map((item, idx) => (
              <Items key={idx}>
                <LiText>{item.content}</LiText>
              </Items>
            ))}
          </FooterItems>
        </Wrap>
        <Wrap>
          <Heading>Menu</Heading>
          <FooterItems>
            {menuItems.map((item, idx) => (
              <Items key={idx}>
                <LiText>{item.content}</LiText>
              </Items>
            ))}
          </FooterItems>
        </Wrap>
        <Wrap>
          <Heading>Our Company</Heading>
          <FooterItems>
            {ourCom.map((item, idx) => (
              <Items key={idx}>
                <LiText>{item.content}</LiText>
              </Items>
            ))}
          </FooterItems>
        </Wrap>
        <Wrap id="footer_form">
          <Heading>Join our mailing list</Heading>
          <EmailForm>
            <Form type="text" placeholder="Your Email here..." />
            <SignUpBtn>Sign up now</SignUpBtn>
          </EmailForm>
        </Wrap>
      </FooterWrap>
      <LicenseWrap>
        <Line></Line>
        <LicenseContent>
          <LicenseText>Copyright 2022</LicenseText>
          <LicenseIcon>
            <InstagramIcon id="license-icon" fontSize="medium"></InstagramIcon>
            <LinkedInIcon id="license-icon" fontSize="medium"></LinkedInIcon>
            <FacebookIcon id="license-icon" fontSize="medium"></FacebookIcon>
            <TwitterIcon id="license-icon" fontSize="medium"></TwitterIcon>
          </LicenseIcon>
        </LicenseContent>
      </LicenseWrap>
    </div>
  );
};

export default Footer;
