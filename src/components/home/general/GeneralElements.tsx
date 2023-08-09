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
    width: 85%;
    float: right;
  }
`;
export const DetailsContainer = styled.div`
  padding: 40px;
  @media (min-width: 0px) {
    margin-inline-start: 0px;
  }
  @media (min-width: 900px) {
    margin-inline-start: -50px;
    max-width: 500px;
  }
  position: relative;
  background-color: #ffffffe6;
  border-style: solid;
  border-width: 1px;
  border-radius: 1px;
  border-color: #000000;
`;
