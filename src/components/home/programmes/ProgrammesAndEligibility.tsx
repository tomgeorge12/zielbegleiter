import React, { useRef } from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import sec2 from "../../../images/Sec2.jpg";
import {
  Img,
  DetailsContainer,
  StyledListItemText,
} from "./ProgrammesAndEligibilityElements";
import { Box, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import CommonBox from "../../layout/CommonBox";
import styled from "styled-components";
import AnimateIn, {
  AnimateTypes,
  ElementPositionTypes,
} from "../animate/AnimateIn";

const Icon = styled.div`
  width: 10px;
`;

export const StarList = (props: any) => {
  const { icon, items } = props;
  return (
    <List sx={{ paddingLeft: "20px", fontFamily: "'Poppins' !important" }}>
      {items.map((item: any) => {
        return (
          <ListItem key={item} disablePadding>
            <AdjustIcon sx={{ width: "12px" }} />
            <StyledListItemText primary={item} />
          </ListItem>
        );
      })}
    </List>
  );
};

const DetailSection = ({ title, listItems }: any) => {
  return (
    <Box
      sx={{ padding: "30px", margin: "20px 0px", backgroundColor: "#b6e1e7" }}
    >
      {title && (
        <Typography
          variant="h4"
          sx={{ fontFamily: "'Libre Baskerville' !important" }}
        >
          {title}
        </Typography>
      )}
      <StarList items={listItems} />
      {/* <Divider light sx={{ borderColor: "white", opacity: "0.6" }} /> */}
    </Box>
  );
};

const ProgrammesAndEligibility = () => {
  const ref = useRef<HTMLImageElement>(null);

  return (
    <CommonBox title={"Programmes & Eligibility"}>
      <Grid item sm={12} md={6}>
        <AnimateIn
          type={AnimateTypes.FADE_IN}
          elementPosition={ElementPositionTypes.LEFT}
          childRef={ref}
        >
          <Img src={sec2} ref={ref} />
        </AnimateIn>
      </Grid>
      <Grid item sm={12} md={6} sx={{ padding: "20px 0px" }}>
        <AnimateIn
          type={AnimateTypes.FADE_IN}
          elementPosition={ElementPositionTypes.RIGHT}
        >
          <DetailsContainer>
            <DetailSection
              title={"Bachelors Degree"}
              listItems={[
                "13 years of education",
                "12th Grade: 60% Marks",
                "IELTS Score: Minimum 5.5 Band",
                "German Language: A2 Level",
                "Age Limit: 30 Years",
                "Completed Bachelors from a Reputed University",
                "Completed 2 Semesters of Bachelors Degree and attend Testas Examination",
                "Attend Studienkolleg Course",
              ]}
            />
            <DetailSection
              title={"Masters Degree"}
              listItems={[
                "Bachelors Degree with 76% marks from a reputed university",
                "IELTS Score: Minimum 6 Band",
                "German Language: A2 Level",
                "Age Limit: 30 Years",
              ]}
            />
            <DetailSection
              title={"Ausbildung Programmes"}
              listItems={[
                "12th Grade: 60% Marks",
                "German Language: B2 Level",
                "Age Limit: 30 Years",
                "Duration: 2-4 Years",
              ]}
            />
            <DetailSection
              title={"Diploma Programmes"}
              listItems={[
                "12th Grade: 60% Marks",
                "German Language: B2 Level",
                "Age Limit: 30 Years",
                "Duration: 3 Years",
              ]}
            />
          </DetailsContainer>
        </AnimateIn>
      </Grid>
    </CommonBox>
  );
};

export default ProgrammesAndEligibility;
