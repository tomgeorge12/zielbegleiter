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
    // width: 70%;
    // float: right;
  }
  // height: 80%;
  // margin-inline-start: 20px;
`;
export const DetailsContainer = styled.div`
  padding: 40px;
  @media (min-width: 900px) {
    margin-right: 20px;
    // margin-inline-start: 20px;
    margin-inline-start: 40px;
  }
  position: relative;
  background-color: #f1fbff;
  border-style: solid;
  border-color: #000000 !important;
  border-width: 1px;
  border-radius: 1px;
`;
