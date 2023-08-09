import React from "react";
import sec1 from "../../../sec1.jpg";
import { Img, DetailsContainer } from "./GeneralElements";
import { Grid, Typography } from "@mui/material";
import CommonBox from "../../layout/CommonBox";

const General = () => {
  return (
    <CommonBox>
      <Grid item sm={12} md={6}>
        <Img src={sec1} />
      </Grid>
      <Grid item sm={12} md={6}>
        <DetailsContainer>
          <Typography
            variant="h4"
            sx={{
              paddingTop: "10px",
              paddingBottom: "10px",
              fontWeight: "600",
            }}
          >
            Higher Education in Germany...
          </Typography>
          <Typography variant="body1">
            Pursuing education from a technically and technologically developed
            country and improving the living standards are the very basic dreams
            of a student. Germany offers a higher education system which is
            specially renowned for its high quality standards and excellent
            reputations. Thus an eligible student finds great oppurtunity to do
            higher education programmes from the Top Ranked Universities with:
          </Typography>
          <ul style={{ fontWeight: "500" }}>
            <li>100% scholarship opportunities</li>
            <li>Tution fees free education</li>
            <li>Part time job opportunities (20 hours per week)</li>
            <li>Monthly stipend for Ausbildung and Diploma programmes</li>
            <li>Intercultural communication</li>
          </ul>
          <Typography variant="body1">
            Moreover, students could find attractive job opportunities and get
            into job based on the educational eligibility.
          </Typography>
        </DetailsContainer>
      </Grid>
    </CommonBox>
  );
};

export default General;
