import React, { Component } from "react";
import { useState } from "react";
import styled from "styled-components";
import { categoryItems, menuItems } from "../data/footer_data";
import { device } from '../ResponsiveBreakpoint';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const FooterWrap = styled.div`
  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
  flex-grow: 1;
  display: flex; 
  height: 100%;
  padding: 40px;
  background-color: #ffdb00;
`
const Wrap = styled.div`
  @media ${device.mobile} {
    width: 100%;
    align-items: center;
    border: solid 0.5px #6b4b27;
    border-radius: 10px;
  }
  @media ${device.laptop} {
    border: none;
    align-items: baseline;
    width: calc(50% / 3);
  }
  gap: 1.25rem;
  flex-direction: column;
  bottom: 0;
  display: flex;
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
  @media ${device.mobile}{
    max-width: 60%;
  }
  @media ${device.laptop}{
    max-width: calc(100%/2);
  }
  color: black;
  padding: 20px;
  border: 0.5px solid black;
  opacity: 0.2;
  width: 100%;
  flex:2;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  ::placeholder {
    color: black;
  }
`;
const SignUpBtn = styled.button`
  @media ${device.mobile} {
    max-width: calc(100%/2 - 10%);
    
  }
  @media ${device.laptop} {
    max-width: calc(100%/2 - 20%);
  }
  color: #333;
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
            {categoryItems.map((item, idx) => (
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
