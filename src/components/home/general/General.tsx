import { Box, Divider, Grid, Typography } from "@mui/material";
import { useRef } from "react";
import sec1 from "../../../assets/images/sec1.jpg";
import CommonBox from "../../layout/CommonBox";
import AnimateIn, {
  AnimateTypes,
  ElementPositionTypes,
} from "../animate/AnimateIn";
import { DetailsContainer, Img } from "./GeneralElements";
import useLocale from "../../../hooks/useLocale";

const General = () => {
  const ref = useRef<HTMLImageElement>(null);
  const { translate } = useLocale();

  return (
    <CommonBox>
      <Grid item sm={12} md={6}>
        <AnimateIn
          type={AnimateTypes.SLIDE_IN}
          elementPosition={ElementPositionTypes.LEFT}
          childRef={ref}
        >
          <Img src={sec1} ref={ref} />
        </AnimateIn>
      </Grid>
      <Grid item sm={12} md={6} sx={{ padding: "20px 0px" }}>
        <AnimateIn
          type={AnimateTypes.SLIDE_IN}
          elementPosition={ElementPositionTypes.RIGHT}
        >
          <DetailsContainer>
            <Box
              sx={{
                "@media(min-width: 0px)": {
                  padding: "18px",
                },
                "@media(min-width: 900px)": {
                  padding: "30px",
                },
                backgroundColor: "#b6e1e7",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  fontWeight: "500",
                  fontFamily: "Libre Baskerville",
                }}
              >
                {translate("HIGHER_ED_IN_GERMANY")}
              </Typography>
              <Divider />
              <Typography
                variant="body1"
                sx={{
                  paddingTop: "10px",
                  fontFamily: "Poppins",
                }}
              >
                {translate("HIGHER_ED_IN_GERMANY_PARA_1")}
              </Typography>
              <ul style={{ fontWeight: "600", fontFamily: "Poppins" }}>
                <li>{translate("HIGHER_ED_IN_GERMANY_LIST_1")}</li>
                <li>{translate("HIGHER_ED_IN_GERMANY_LIST_2")}</li>
                <li>{translate("HIGHER_ED_IN_GERMANY_LIST_3")}</li>
                <li>{translate("HIGHER_ED_IN_GERMANY_LIST_4")}</li>
                <li>{translate("HIGHER_ED_IN_GERMANY_LIST_5")}</li>
              </ul>
              <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
                {translate("HIGHER_ED_IN_GERMANY_PARA_2")}
              </Typography>
            </Box>
          </DetailsContainer>
        </AnimateIn>
      </Grid>
    </CommonBox>
  );
};

export default General;
