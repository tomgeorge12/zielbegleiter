import React from "react";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import sec2 from "../../../Sec2.jpg";
import { Img, DetailsContainer } from "./ProgrammesAndEligibilityElements";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CommonBox from "../../layout/CommonBox";
import styled from "styled-components";

const Icon = styled.div`
  width: 10px;
`;

export const StarList = (props: any) => {
  const { icon, items } = props;
  return (
    <List sx={{ paddingLeft: "20px" }}>
      {items.map((item: any) => {
        return (
          <ListItem key={item} disablePadding>
            {/* <ListItemIcon> */}
            {/* <FiberManualRecordIcon /> */}
            {/* </ListItemIcon> */}
            {/* <Icon>{icon}</Icon> */}
            <AdjustIcon sx={{ width: "12px" }} />
            <ListItemText primary={item} sx={{ padding: "5px" }} />
          </ListItem>
        );
      })}
    </List>
  );
};

const DetailSection = ({ title, listItems }: any) => {
  return (
    <Box sx={{ padding: "15px 0px" }}>
      {title && <Typography variant="h4">{title}</Typography>}
      <StarList
        items={listItems}
        // icon={<AdjustIcon />}
      />
      <Divider light sx={{ borderColor: "white", opacity: "0.6" }} />
    </Box>
  );
};

const ProgrammesAndEligibility = () => {
  return (
    <CommonBox title={"Programmes & Eligibility"}>
      <Grid item sm={12} md={6}>
        <Img src={sec2} />
      </Grid>
      <Grid item sm={12} md={6}>
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
          {/* <Typography variant="h4">Bachelors Degree</Typography>
          <StarList
            items={[
              "13 years of education",
              "12th Grade: 60% Marks",
              "IELTS Score: Minimum 5.5 Band",
              "German Language: A2 Level",
              "Age Limit: 30 Years",
              "Completed Bachelors from a Reputed University",
              "Completed 2 Semesters of Bachelors Degree and attend Testas Examination",
              "Attend Studienkolleg Course",
            ]}
            // icon={<AdjustIcon />}
          /> */}
          {/* <ul>
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
          </ul> */}
          {/* <Divider />
          <Typography variant="h4">Masters Degree</Typography>
          <StarList
            items={[
              "Bachelors Degree with 76% marks from a reputed university",
              "IELTS Score: Minimum 6 Band",
              "German Language: A2 Level",
              "Age Limit: 30 Years",
            ]}
            // icon={<AdjustIcon />}
          /> */}
          {/* <ul>
            <li>Bachelors Degree with 76% marks from a reputed university</li>
            <li>IELTS Score: Minimum 6 Band</li>
            <li>German Language: A2 Level</li>
            <li>Age Limit: 30 Years</li>
          </ul> */}
          {/* <Divider />
          <Typography variant="h4">Ausbildung Programmes</Typography>
          <StarList
            items={[
              "12th Grade: 60% Marks",
              "German Language: B2 Level",
              "Age Limit: 30 Years",
              "Duration: 2-4 Years",
            ]}
            // icon={<AdjustIcon />}
          /> */}
          {/* <ul>
            <li>12th Grade: 60% Marks</li>
            <li>German Language: B2 Level</li>
            <li>Age Limit: 30 Years</li>
            <li>Duration: 2-4 Years</li>
          </ul> */}
          {/* <Divider />
          <Typography variant="h4">Diploma Programmes</Typography>
          <StarList
            items={[
              "12th Grade: 60% Marks",
              "German Language: B2 Level",
              "Age Limit: 30 Years",
              "Duration: 3 Years",
            ]}
            // icon={<AdjustIcon />}
          /> */}
          {/* <ul>
            <li>12th Grade: 60% Marks</li>
            <li>German Language: B2 Level</li>
            <li>Age Limit: 30 Years</li>
            <li>Duration: 3 Years</li>
          </ul> */}
          {/* <Divider /> */}
        </DetailsContainer>
      </Grid>
    </CommonBox>
  );
};

export default ProgrammesAndEligibility;
