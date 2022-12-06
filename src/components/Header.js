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
import { device } from "../ResponsiveBreakpoint";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar/SearchBar";
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 120px;
  position: relative;
`;

const Left = styled.div`
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.laptop} {
    flex: 1;
    display: block;
  }
`;

const LightMode = styled.div`
  @media ${device.mobile} {
    position: fixed;
  }
  @media ${device.laptop} {
    position: fixed;
    z-index: 50;
    left: 5%;
    transform: translateX(50%);
    top: 5px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
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
  @media ${device.mobile} {
    flex: 1;
  }
  @media ${device.laptop} {
    flex: 4;
  }
  position: relative;
  z-index: 99;
`;

const HeaderContainer = styled.div`
  @media ${device.mobile} {
    width: 100%;
    padding: 5px 20px;
  }
  @media ${device.laptop} {
    width: 70%;
    padding: 10px 40px;
  }
  transform: translate(0);
  transition: transform 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.9);
`;

const HeaderMain = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  width: 100%;
  z-index: 99;
  @media ${device.laptop} {
    border-bottom: 1px solid #ccc;
  }
`;

const Nav = styled.ul`
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.laptop} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    right: 0;
    left: 0;
  }
`;

const NavItem = styled.a`
  font-weight: 600;
  padding: 2px 40px;
  position: relative;
  cursor: pointer;
  transform: all 0.7s linear;
  font-size: 16px;
  text-align: center;
  white-space: nowrap;
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
  /* @media ${device.mobile} {
    display: none;
  }
  @media ${device.laptop} {
  } */
  display: flex;
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 10px;
  align-items: center;
  transition: all 0.5s ease;
  &:hover {
    background-color: rgba(255, 219, 0, 0.5);
    border-radius: 50%;
  }
`;

const Menu = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 10px;
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
  position: relative;
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
  position: relative;
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.laptop} {
    flex: 1;
    display: block;
  }
`;

const CartQuantity = styled.div`
  position: absolute;
  border-radius: 100%;
  background-color: #ffdb00;
  width: 25px;
  height: 25px;
  left: 65%;
  bottom: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  transition: all 0.5s ease;
  transform: ${(props) => (props.quantity > 0 ? "scale(1)" : "scale(0)")};
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
  position: relative;
`;
const Header = (props) => {
  //responsive variables
  const laptop = useMediaQuery("(min-width: 1024px)");
  const mobile = useMediaQuery("(min-width: 320px)");
  const user = useSelector((state) => state.user.currentUser);
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
    // setScrollY(position);
  };
  useEffect(() => {
    laptop &&
      window.addEventListener("scroll", handleScroll, { passive: true });
    if (
      headerScroll.current.style.transform === "translateY(-62px)" &&
      !laptop
    ) {
      headerScroll.current.style.transform = "translateY(0)";
    }
    return () => {
      laptop && window.removeEventListener("scroll", handleScroll);
    };
  }, [laptop, mobile]);
  //END GET SCROLL
  //APPEAR BASKETPOPUP
  const [appear, setAppear] = useState(false);
  //END APPEAR BASKETPOPUP

  //GET QUANTITY PRODUCT
  const cart = useSelector((state) => state.cart.cart);
  const quantity = useSelector((state) => state.cart?.quantity);
  //GET CURRENT USER
  const currentUser = useSelector((state) => state.user.currentUser);

  console.log("🚀 ~ file: Header.js:327 ~ Header ~ currentUser", currentUser);
  // console.log(quantity);
  const navigate = useNavigate();

  const [appearSearchBar, setAppearSearchBar] = useState(false);
  const handleAppearSearchBar = () => {
    console.log("appearSearchBar");
    setAppearSearchBar(!appearSearchBar);
    setAppear(false);
  };
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
            {laptop && (
              <Search onClick={handleAppearSearchBar}>
                <SearchIcon></SearchIcon>
              </Search>
            )}

            <Logo onClick={() => navigate("/")}>Ovion</Logo>
            <RightHeader>
              {!laptop && (
                <Search onClick={handleAppearSearchBar}>
                  <SearchIcon></SearchIcon>
                </Search>
              )}
              <Cart onClick={() => navigate("/basket")}>
                <ShoppingCartIcon></ShoppingCartIcon>{" "}
                {currentUser?._id && (
                  <CartQuantity quantity={quantity}>{quantity}</CartQuantity>
                )}
              </Cart>
              {!laptop && (
                <Menu>
                  <MenuIcon></MenuIcon>
                </Menu>
              )}
              <User
                onClick={() =>
                  navigate(`${user ? "/user/profile" : "sign-in"}`)
                }
              >
                <AccountCircleIcon></AccountCircleIcon>{" "}
              </User>
            </RightHeader>
          </HeaderMain>
          <Nav>
            {dataNav.map((item) => (
              <NavItem
                className="nav__item"
                href={`/products/${item.navigate}`}
                key={item.id}
                // onClick={() => {
                //   return navigate(`/products/${item.navigate}`);
                // }}
              >
                {item.name}
              </NavItem>
            ))}
          </Nav>
        </HeaderContainer>
      </Center>
      <Right>
        <CartRight
          ref={cartRight}
          onClick={() => {
            setAppear(!appear);
            setAppearSearchBar(false);
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
            {currentUser?._id && (
              <CartQuantity quantity={quantity}>{quantity}</CartQuantity>
            )}
          </CartRightBox>
        </CartRight>
      </Right>
      <div
        onClick={() => {
          setAppear(false);
          setAppearSearchBar(false);
        }}
        className={`${
          appear || appearSearchBar
            ? "backdrop-blur cursor-pointer  w-full h-[200vh] z-40"
            : ""
        } fixed`}
      ></div>

      <SearchBar
        isAppear={appearSearchBar}
        className="fixed top-0 left-0 w-full h-full "
      ></SearchBar>
      <BasketPagePopup
        isAppear={appear}
        className="fixed top-0 left-0 w-full h-full "
      ></BasketPagePopup>
    </Container>
  );
};

Header.propTypes = {};

export default Header;
