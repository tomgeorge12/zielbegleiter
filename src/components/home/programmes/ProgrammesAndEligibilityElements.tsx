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
  @media (min-width: 0px) {
    width: 100%;
    float: initial;
  }
  @media (min-width: 900px) {
    width: 80%;
    float: right;
  }
`;
export const DetailsContainer = styled.div`
  padding: 40px;
  @media (min-width: 0px) {
    margin-inline-start: 0px;
  }
  @media (min-width: 900px) {
    max-width: 500px;
    margin-inline-start: 20px;
  }
  margin-inline-start: 20px;
  position: relative;
  border-style: solid;
  border-color: #000000 !important;
  border-width: 1px;
  border-radius: 1px;
  background-color: #0b3866;
  color: white;
`;
