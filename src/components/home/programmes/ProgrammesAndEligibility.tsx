import AdjustIcon from "@mui/icons-material/Adjust";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import { useRef } from "react";
import sec2 from "../../../assets/images/Sec2.jpg";
import CommonBox from "../../layout/CommonBox";
import AnimateIn, {
  AnimateTypes,
  ElementPositionTypes,
} from "../animate/AnimateIn";
import {
  DetailsContainer,
  Img,
  StyledListItemText,
} from "./ProgrammesAndEligibilityElements";
import useLocale from "../../../hooks/useLocale";

export const StarList = (props: any) => {
  const { items } = props;
  return (
    <List
      sx={{
        "@media(min-width: 0px)": {
          paddingLeft: "0px",
        },
        "@media(min-width: 900px)": {
          paddingLeft: "20px",
        },
        fontFamily: "'Poppins' !important",
      }}
    >
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
      sx={{
        "@media(min-width: 0px)": {
          padding: "18px",
        },
        "@media(min-width: 900px)": {
          padding: "30px",
        },
        margin: "20px 0px",
        backgroundColor: "#b6e1e7",
      }}
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
    </Box>
  );
};

const ProgrammesAndEligibility = () => {
  const ref = useRef<HTMLImageElement>(null);
  const { translate } = useLocale();

  return (
    <CommonBox title={translate("PROGRAMMES_ELIGIBILITY")}>
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
              title={translate("BACHELORS_DEGREE")}
              listItems={[
                translate("13_YRS_EDU"),
                translate("12_TH_60_MARKS"),
                translate("IELTS_5_5"),
                translate("GERMAN_A2"),
                translate("AGE_30"),
                translate("COMPLETED_BACHELORS"),
                translate("COMPLTED_BACHELORS_TESTAS"),
                translate("ATTEND_STUDIENKOLLEG"),
              ]}
            />
            <DetailSection
              title={translate("MASTERS_DEGREE")}
              listItems={[
                translate("BACHELORS_76_MARKS"),
                translate("IELTS_6"),
                translate("GERMAN_A2"),
                translate("AGE_30"),
              ]}
            />
            <DetailSection
              title={translate("AUSBILUNG_PROGRAMMES")}
              listItems={[
                translate("12_TH_60_MARKS"),
                translate("GERMAN_B2"),
                translate("AGE_30"),
                translate("DURATION_2_4"),
              ]}
            />
            <DetailSection
              title={translate("DIPLOMA_PROGRAMMES")}
              listItems={[
                translate("12_TH_60_MARKS"),
                translate("GERMAN_B2"),
                translate("AGE_30"),
                translate("DURATION_3"),
              ]}
            />
          </DetailsContainer>
        </AnimateIn>
      </Grid>
    </CommonBox>
  );
};

export default ProgrammesAndEligibility;
