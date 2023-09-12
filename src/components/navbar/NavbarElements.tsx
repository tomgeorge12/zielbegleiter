import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  @media (min-width: 0px) {
    position: sticky;
  }
  @media (min-width: 900px) {
    position: fixed;
  }
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 80vw) / 2);
  z-index: 12;
  width: -webkit-fill-available;
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

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 52px;
  margin-right: 10px;
`;
