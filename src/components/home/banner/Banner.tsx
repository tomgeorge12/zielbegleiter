import { Grid } from "@mui/material";
import styled from "styled-components";
import BannerInfo from "./BannerInfo";

const BannerContainer = styled.div`
  min-height: 100vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  width: 1147px;
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
