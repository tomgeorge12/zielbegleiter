import React from "react";
import banner from "../../../banner.jpg";
import styled from "styled-components";
import { Paper, Typography } from "@mui/material";

const Container = styled.div`
  position: relative;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
`;
const HeaderText = styled(Typography)`
  color: #212730;
  font-weight: 500 !important;
`;

const ParagraphText = styled(Typography)`
  color: #212730;
  text-align: center;
  line-height: 2 !important;
`;
const MixParagraphText = styled.div`
  display: flex;
  justify-content: center;
`;

const BannerInfo = () => {
  return (
    <Container>
      <Header>
        <HeaderText variant="h3">ziel&nbsp;</HeaderText>
        <HeaderText variant="h3" sx={{ color: "rgb(234, 119, 4)" }}>
          colors&nbsp;
        </HeaderText>
        <HeaderText variant="h3">your&nbsp;dreams</HeaderText>
      </Header>
      <Paper
        elevation={0}
        sx={{
          marginTop: "40px",
          padding: "30px",
          minWidth: "600px",
          opacity: "0.6",
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
    </Container>
  );
};

export default BannerInfo;
