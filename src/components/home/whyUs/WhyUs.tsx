import React from "react";
import sec3 from "../../../Sec3.jpeg";
import { Img, DetailsContainer } from "./WhyUsElements";
import { Box, Grid, Typography } from "@mui/material";
import CommonBox from "../../layout/CommonBox";
import styled from "styled-components";
import { StarList } from "../programmes/ProgrammesAndEligibility";

const ColoredCommonBox = styled(CommonBox)`
  background-color: #f1fbff;
`;

const WhyUs = () => {
  return (
    <>
      <CommonBox>
        <Grid item sm={12} md={6}>
          <DetailsContainer>
            <Typography variant="h3" sx={{ paddingBottom: "20px" }}>
              Why ziel begleiter...?
            </Typography>
            <Typography variant="body1">
              In your journey towards your dreams,
            </Typography>
            <Box sx={{ padding: "15px 0px" }}>
              <StarList
                items={[
                  "ziel begleiter accompanies you like a real companion",
                  "Provides support right from the beginning till the end of your education",
                  "Provides assistance in each and every steps",
                  "Complete assistance for selecting career goals, courses, university,...",
                  "Help of experienced people",
                  "Arranges airport pickups, accommodation facilities, city registration, account opening,...",
                  "Provides job assistance",
                ]}
              />
            </Box>
            {/* <ul>
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
            </ul> */}
          </DetailsContainer>
        </Grid>
        <Grid item sm={12} md={6}>
          <Img src={sec3} />
        </Grid>
      </CommonBox>
    </>
  );
};

export default WhyUs;
