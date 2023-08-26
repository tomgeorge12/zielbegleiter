import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const CommonTypography = styled(Typography)`
  padding: 5px 0px;
  font-family: "Poppins" !important;
`;

export const Link = styled(NavLink)`
  padding: 5px 0px;
  display: flex;
  text-decoration: none;
  color: white;
  line-height: normal;
`;
