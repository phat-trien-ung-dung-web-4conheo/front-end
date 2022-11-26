import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const ButtonStyle = styled.button`
  box-shadow: rgba(0, 0, 0, 0.6) 0px 7px 5px 0px;
  transform: translateY(0);
  transition: all 0.3s ease;
  background-color: white;
  font-size: 20px;
  &:hover {
    transform: translateY(-4px);

    box-shadow: rgba(0, 0, 0, 0.6) 0px 10px 10px 0px;
  }
`;

const Button = ({
  handleClick,
  content,
  radius,
  color,
  fontSize,
  borderColor,
  backgroundColor,
  width,
  height,
  navigate = "",
  type = "submit",
  className,
}) => {
  return (
    <>
      {navigate === "" ? (
        <ButtonStyle
          style={{
            fontSize: `${fontSize}px`,
            borderRadius: `${radius}px`,
            color: color,
            border: `1px solid ${borderColor}`,
            backgroundColor: backgroundColor,
            width: width,
            height: height,
          }}
          className={className}
          type={type}
          onClick={handleClick}
        >
          {content}
        </ButtonStyle>
      ) : (
        <NavLink
          style={{
            fontSize: `${fontSize}px`,
            borderRadius: `${radius}px`,
            color: color,
            border: `1px solid ${borderColor}`,
            backgroundColor: backgroundColor,
            width: width,
            height: height,
          }}
          className={`${className} mx-auto p-4 rounded-lg text-white inline-block hover:-translate-y-1 hover:shadow-2xl shadow-3xl transition-all text-center`}
          to={navigate}
        >
          {content}
        </NavLink>
      )}
    </>
  );
};

Button.propTypes = {
  content: PropTypes.string,
  radius: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

Button.defaultProps = {
  content: "",
  radius: null,
  color: null,
  fontSize: 16,
  borderColor: null,
  backgroundColor: null,
  width: null,
  height: null,
};

export default Button;
