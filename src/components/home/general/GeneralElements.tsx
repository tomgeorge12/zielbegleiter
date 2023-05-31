import { Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const Container = styled(Paper)`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;
export const Img = styled.img`
  height: 80%;
`;
export const DetailsContainer = styled.div`
  padding: 40px;
  width: 500px;
  margin-inline-start: -75px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.95);
  border-style: solid;
  border-color: #000000 !important;
  border-width: 1px;
  border-radius: 1px;
`;
