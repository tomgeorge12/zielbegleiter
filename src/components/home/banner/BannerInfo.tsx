import React from "react";
import banner from "../../../banner.jpg";
import styled from "styled-components";
import { Grid, Paper, Typography } from "@mui/material";

const Container = styled.div`
  position: relative;
`;

const ParagraphContainer = styled(Paper)`
  marginTop: 40px,
  padding: 30px,
  &::before {
    content: "";
    opacity: 0.5;
  }
`;
const HeaderText = styled.span`
  color: ${(props) => props.color};
  font-weight: 500 !important;
  position: relative;
`;

const ParagraphText = styled(Typography)`
  color: #212730;
  text-align: center;
  line-height: 2 !important;
  font-weight: 500 !important;
`;
const MixParagraphText = styled.span`
  display: flex;
  justify-content: center;
`;

const BannerInfo = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "70%" }}
    >
      <Grid
        container
        component={Typography}
        variant="h2"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: "70px" }}
        columns={30}
      >
        {/* <Grid item xs={30} sm={30} md={19} lg={19}> */}
        <HeaderText color={"#212730"}>
          {"ziel "}
          <span style={{ color: "#ea7704" }}>{"colors "}</span>
          {"your dreams"}
        </HeaderText>
        {/* </Grid> */}
        {/* <Grid item xs={30} sm={30} md={19} lg={19}>
          <HeaderText color={"#212730"}>{"ziel "}</HeaderText>
        </Grid>
        <Grid item>
          <HeaderText color={"rgb(234, 119, 4)"}>{"colors "}</HeaderText>
        </Grid>
        <Grid item>
          <HeaderText color={"#212730"}>{"your dreams"}</HeaderText>
        </Grid> */}
      </Grid>
      <Grid sx={{ width: "100%" }}>
        <Paper
          elevation={0}
          sx={{
            marginTop: "40px",
            padding: "40px 0px",
            opacity: "0.7",
          }}
        >
          <ParagraphText>
            Are You Looking to Study or Work in Germany...
          </ParagraphText>
          <MixParagraphText>
            <ParagraphText>Here The Real&nbsp;</ParagraphText>
            <ParagraphText sx={{ color: "rgb(234, 119, 4)" }}>
              Companion&nbsp;
            </ParagraphText>
            <ParagraphText>is With You...</ParagraphText>
          </MixParagraphText>

          <ParagraphText>To Accompany You...</ParagraphText>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BannerInfo;
