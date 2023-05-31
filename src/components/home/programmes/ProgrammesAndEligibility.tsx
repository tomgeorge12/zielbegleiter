import React from "react";
import sec2 from "../../../Sec2.jpeg";
import { Img, DetailsContainer } from "./ProgrammesAndEligibilityElements";
import { Typography } from "@mui/material";
import CommonBox from "../../layout/CommonBox";
import styled from "styled-components";

const ColoredCommonBox = styled(CommonBox)`
  background-color: #f1fbff;
`;

const ProgrammesAndEligibility = () => {
  return (
    <>
      <ColoredCommonBox title={"Programmes & Eligibility"}>
        <Img src={sec2} />
        <DetailsContainer>
          <Typography variant="h5">Bachelors Degree</Typography>
          <ul>
            <li>13 years of education</li>
            <li>12th Grade: 60% Marks</li>
            <li>IELTS Score: Minimum 5.5 Band</li>
            <li>German Language: A2 Level</li>
            <li>Age limit: 30 Years</li>
            <li>Completed Bachelors from a Reputed University</li>
            <li>
              Completed 2 Semesters of Bachelors Degree and attend Testas
              Examination
            </li>
            <li>Attend Studienkolleg Course</li>
          </ul>
          <Typography variant="h5">Masters Degree</Typography>
          <ul>
            <li>Bachelors Degree with 76% marks from a reputed university</li>
            <li>IELTS Score: Minimum 6 Band</li>
            <li>German Language: A2 Level</li>
            <li>Age Limit: 30 Years</li>
          </ul>
          <Typography variant="h5">Ausbildung Programmes</Typography>
          <ul>
            <li>12th Grade: 60% Marks</li>
            <li>German Language: B2 Level</li>
            <li>Age Limit: 30 Years</li>
            <li>Duration: 2-4 Years</li>
          </ul>
          <Typography variant="h5">Diploma Programmes</Typography>
          <ul>
            <li>12th Grade: 60% Marks</li>
            <li>German Language: B2 Level</li>
            <li>Age Limit: 30 Years</li>
            <li>Duration: 3 Years</li>
          </ul>
        </DetailsContainer>
      </ColoredCommonBox>
    </>
  );
};

export default ProgrammesAndEligibility;
