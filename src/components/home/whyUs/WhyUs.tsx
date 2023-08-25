import React, { useRef } from "react";
import sec3 from "../../../images/Sec3.jpg";
import { Img, DetailsContainer } from "./WhyUsElements";
import { Box, Grid, Typography } from "@mui/material";
import CommonBox from "../../layout/CommonBox";
import styled from "styled-components";
import { StarList } from "../programmes/ProgrammesAndEligibility";
import AnimateIn, {
  AnimateTypes,
  ElementPositionTypes,
} from "../animate/AnimateIn";

const WhyUs = () => {
  const ref = useRef<HTMLImageElement>(null);

  return (
    <>
      <CommonBox>
        <Grid item sm={12} md={6} sx={{ maxWidth: "610px !important" }}>
          <AnimateIn
            type={AnimateTypes.SLIDE_IN}
            elementPosition={ElementPositionTypes.RIGHT}
          >
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
            </DetailsContainer>
          </AnimateIn>
        </Grid>
        <Grid item sm={12} md={6}>
          <AnimateIn
            type={AnimateTypes.SLIDE_IN}
            elementPosition={ElementPositionTypes.LEFT}
            childRef={ref}
          >
            <Img src={sec3} ref={ref} />
          </AnimateIn>
        </Grid>
      </CommonBox>
    </>
  );
};

export default WhyUs;
