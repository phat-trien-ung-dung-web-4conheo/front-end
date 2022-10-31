import React, { useRef } from "react";
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
  max-width: 1440px;
  margin: 0 auto;
  padding: 10px 40px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const HeaderMain = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
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

  cursor: pointer;
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
  const active = useRef();

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
            <NavItem key={item.id} ref={active}>
              {item.name}
            </NavItem>
          ))}
        </Nav>
      </Center>
      <Right>
        <CartRight>
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
