// import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  // background: #63D471;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 80vw) / 2);
  z-index: 12;
  position: fixed;
  width: -webkit-fill-available;
  /* Third Nav */
  /* justify-content: flex-start; */
  transition: 0.5s linear;
  transform: ${(props) => (props.hidden ? "translateY(-100%)" : "")};
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

// export const Bars = styled(FaBars)`
// display: none;
// color: #808080;
// @media screen and (max-width: 768px) {
// 	display: block;
// 	position: absolute;
// 	top: 0;
// 	right: 0;
// 	transform: translate(-100%, 75%);
// 	font-size: 1.8rem;
// 	cursor: pointer;
// }
// `;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
width: 100vw; */
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const Img = styled.img`
  height: 52px;
  margin-right: 10px;
  // @media screen and (max-width: 768px) {
  //   display: none;
  // }
`;
