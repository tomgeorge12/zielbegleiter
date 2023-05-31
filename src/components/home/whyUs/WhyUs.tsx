import React from "react";
import sec3 from "../../../Sec3.jpeg";
import { Img, DetailsContainer } from "./WhyUsElements";
import { Typography } from "@mui/material";
import CommonBox from "../../layout/CommonBox";
import styled from "styled-components";

const ColoredCommonBox = styled(CommonBox)`
  background-color: #f1fbff;
`;

const WhyUs = () => {
  return (
    <>
      <ColoredCommonBox>
        <DetailsContainer>
          <Typography variant="h4">Why ziel begleiter...?</Typography>
          <Typography variant="body1">
            In your journey towards your dreams,
          </Typography>
          <ul>
            <li>ziel begleiter accompanies you like a real companion</li>
            <li>
              Provides support right from the beginning till the end of your
              education
            </li>
            <li>Provides assistance in each and every steps</li>
            <li>
              Complete assistance for selecting career goals, courses,
              university,...
            </li>
            <li>Help of experienced people</li>
            <li>
              Arranges airport pickups, accommodation facilities, city
              registration, account opening,...
            </li>
            <li>Provides job assistance</li>
          </ul>
        </DetailsContainer>
        <Img src={sec3} />
      </ColoredCommonBox>
    </>
  );
};

export default WhyUs;
