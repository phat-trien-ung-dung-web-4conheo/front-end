import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { dataNav } from "../data/data";
import BasketPagePopup from "./Page/BasketPagePopup";
import { useNavigate } from "react-router-dom";
import { device } from "../responsiveBreakpoint";
import { useMediaQuery } from "@mui/material";
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 120px;
  position: relative;
`;

const Left = styled.div`
  flex: 1;
`;

const LightMode = styled.div`
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 5%;
  transform: translateX(50%);
  top: 5px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
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
  z-index: 99;
`;

const HeaderContainer = styled.div`
  width: 70%;
  transform: translate(0);
  transition: transform 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  padding: 10px 40px;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.9);
`;

const HeaderMain = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  width: 100%;
  z-index: 99;
`;

const Nav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  right: 0;
  left: 0;
`;

const NavItem = styled.li`
  font-weight: 600;
  padding: 2px 40px;
  position: relative;
  cursor: pointer;
  transform: all 0.7s linear;
  font-size: 16px;
  text-align: center;

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
    background: rgba(255, 219, 0, 0.5);
    z-index: -1;
    transition: transform 0.3s ease;
  }
`;

const Search = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(255, 219, 0, 0.5);
    border-radius: 50%;
  }
`;

const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.div`
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
`;
const Cart = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(255, 219, 0, 0.5);
    border-radius: 50%;
  }
  border: none;
`;

const User = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(255, 219, 0, 0.5);
    border-radius: 50%;
  }
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
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
`;

const CartRightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
`;

const Header = (props) => {
  //TEST
  const mobile = useMediaQuery("(max-width: 768px)");

  //
  const headerScroll = useRef();
  const cartRight = useRef();
  //GET SCROLL
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 1) {
      headerScroll.current.style.transform = "translateY(-62px)";
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

  //APPEAR BASKETPOPUP
  const [appear, setAppear] = useState(false);
  //END APPEAR BASKETPOPUP
  const navigate = useNavigate();
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
      <Center>
        <HeaderContainer ref={headerScroll}>
          <HeaderMain>
            <Search>
              <SearchIcon></SearchIcon>
            </Search>
            <Logo onClick={() => navigate("/")}>Ovion</Logo>
            <RightHeader>
              <Cart onClick={() => navigate("/basket")}>
                <ShoppingCartIcon></ShoppingCartIcon>{" "}
              </Cart>
              <User onClick={() => navigate("/user")}>
                <AccountCircleIcon></AccountCircleIcon>{" "}
              </User>
            </RightHeader>
          </HeaderMain>
          <Nav>
            {dataNav.map((item) => (
              <>
                <NavItem className="nav__item" key={item.id}>
                  {item.name}
                </NavItem>
              </>
            ))}
          </Nav>
        </HeaderContainer>
      </Center>
      <Right>
        <CartRight
          ref={cartRight}
          onClick={() => {
            setAppear(!appear);
          }}
        >
          <CartRightBox
            className={
              appear
                ? "bg-[#ffdb00] text-black"
                : "hover:bg-[#ffdb00] transition-all duration-500"
            }
          >
            <ShoppingCartOutlinedIcon
              style={{ width: "20px", height: "20px" }}
            ></ShoppingCartOutlinedIcon>
          </CartRightBox>
        </CartRight>
      </Right>
      <div
        onClick={() => {
          setAppear(!appear);
        }}
        className={`${
          appear ? "backdrop-blur  w-full h-[200vh] z-40" : ""
        } fixed`}
      ></div>
      <BasketPagePopup
        isAppear={appear}
        className="fixed top-0 left-0 w-full h-full "
      ></BasketPagePopup>
    </Container>
  );
};

Header.propTypes = {};

export default Header;
