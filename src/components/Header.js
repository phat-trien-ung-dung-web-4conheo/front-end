import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import dataNav from "../data/data";
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
`;

const LightMode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 5%;
  transform: translateX(50%);
  top: 5px;
`;

const AdjustMode = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 4;
  position: relative;
`;

const HeaderContainer = styled.div`
  transform: translate(0);
  transition: transform 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  padding: 10px 40px;
  top: 0;
  width: ${(props) => props.widthHeader}px;
`;

const HeaderMain = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  width: 100%;
`;

const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const NavItem = styled.li`
  padding: 2px 40px;
  position: relative;
  cursor: pointer;
  transform: all 0.7s linear;
  &::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }
  &:hover {
    color: #fff;
  }
  &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: hsl(200 100% 80%);
    z-index: -1;
    transition: transform 0.3s ease;
  }
`;

const Search = styled.div`
  cursor: pointer;
`;

const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.div``;
const Cart = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const User = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;

const CartRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  cursor: pointer;
  top: 5px;
  right: calc(5% + 15px);
  transition: transform 0.5s ease;
`;

const CartRightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Header = (props) => {
  const headerScroll = useRef();
  const widthCenter = useRef();
  const cartRight = useRef();
  //GET WIDTH OF CENTER
  const [widthHeader, setWidthHeader] = useState(
    widthCenter.current?.offsetWidth
  );
  useEffect(() => {
    const widthGet = widthCenter.current?.offsetWidth;
    setWidthHeader(widthGet);
  }, []);

  //GET SCROLL
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 1) {
      headerScroll.current.style.transform = "translateY(-50px)";
      cartRight.current.style.transform = "translateY(2px)";
    } else {
      headerScroll.current.style.transform = "translateY(0)";
      cartRight.current.style.transform = "translateY(-50px)";
    }
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
  //END GET SCROLL
  return (
    <Container>
      <Left>
        <LightMode>
          <AdjustMode>
            <Brightness7Icon
              style={{ width: "20px", height: "20px" }}
            ></Brightness7Icon>
          </AdjustMode>
        </LightMode>
      </Left>
      <Center ref={widthCenter}>
        <HeaderContainer ref={headerScroll} widthHeader={widthHeader}>
          <HeaderMain>
            <SearchIcon></SearchIcon>
            <Logo>Logo</Logo>
            <RightHeader>
              <Cart>
                <ShoppingCartIcon></ShoppingCartIcon>{" "}
              </Cart>
              <User>
                <AccountCircleIcon></AccountCircleIcon>{" "}
              </User>
            </RightHeader>
          </HeaderMain>
          <Nav>
            {dataNav.map((item) => (
              <NavItem key={item.id}>{item.name}</NavItem>
            ))}
          </Nav>
        </HeaderContainer>
      </Center>
      <Right>
        <CartRight ref={cartRight}>
          <CartRightBox>
            <ShoppingCartOutlinedIcon
              style={{ width: "20px", height: "20px" }}
            ></ShoppingCartOutlinedIcon>
          </CartRightBox>
        </CartRight>
      </Right>
    </Container>
  );
};

Header.propTypes = {};

export default Header;
