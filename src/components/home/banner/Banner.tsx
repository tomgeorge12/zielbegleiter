import React from "react";
import banner from "../../../images/banner.jpg";
import styled from "styled-components";
import BannerInfo from "./BannerInfo";
import { Grid } from "@mui/material";

const BannerContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  width: 1147px;
  &::before {
    content: "";
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
  }
`;
const Banner = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <BannerContainer>
        <BannerInfo />
      </BannerContainer>
    </Grid>
  );
};

export default Banner;
