import React from "react";
import banner from "../../../banner.jpg";
import styled from "styled-components";
import BannerInfo from "./BannerInfo";

const BannerContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
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
    opacity: 0.6;
  }
`;
const Banner = () => {
  return (
    <BannerContainer>
      <BannerInfo />
    </BannerContainer>
  );
};

export default Banner;
