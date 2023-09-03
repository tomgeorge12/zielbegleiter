import banner from "../../../images/banner.jpg";
import styled from "styled-components";
import BannerInfo from "./BannerInfo";
import { Grid } from "@mui/material";

// linear-gradient(
//   to bottom,
//   rgba(249, 184, 114, 1),
//   rgba(255, 255, 255, 0.1)
// ),
const BannerContainer = styled.div`
  // @media (min-width: 0px) {
  //   min-height: auto;
  // }
  // @media (min-width: 900px) {
  //   min-height: 100vh;
  // }
  min-height: 100vh;

  height: fit-content;
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
    background-position: center center;
    back
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
