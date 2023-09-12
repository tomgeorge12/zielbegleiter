import { Box, Grid, Typography } from "@mui/material";
import { useRef } from "react";
import sec3 from "../../../assets/images/Sec3.jpg";
import CommonBox from "../../layout/CommonBox";
import AnimateIn, {
  AnimateTypes,
  ElementPositionTypes,
} from "../animate/AnimateIn";
import { StarList } from "../programmes/ProgrammesAndEligibility";
import { DetailsContainer, Img } from "./WhyUsElements";
import useLocale from "../../../hooks/useLocale";

const WhyUs = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const { translate } = useLocale();

  return (
    <>
      <CommonBox title={translate("OUR_SPECIALITIES")}>
        <Grid item sm={12} md={6} sx={{ padding: "20px 0px" }}>
          <AnimateIn
            type={AnimateTypes.SLIDE_IN}
            elementPosition={ElementPositionTypes.RIGHT}
            childRef={detailsRef}
          >
            <DetailsContainer ref={detailsRef}>
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
                    paddingBottom: "20px",
                    fontFamily: "Libre Baskerville",
                  }}
                >
                  {translate("WHY_ZB")}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
                  {translate("WHY_ZB_PARA_1")}
                </Typography>
                <Box sx={{ padding: "15px 0px" }}>
                  <StarList
                    items={[
                      translate("WHY_ZB_LIST_PT_1"),
                      translate("WHY_ZB_LIST_PT_2"),
                      translate("WHY_ZB_LIST_PT_3"),
                      translate("WHY_ZB_LIST_PT_4"),
                      translate("WHY_ZB_LIST_PT_5"),
                      translate("WHY_ZB_LIST_PT_6"),
                      translate("WHY_ZB_LIST_PT_7"),
                    ]}
                  />
                </Box>
              </Box>
            </DetailsContainer>
          </AnimateIn>
        </Grid>
        <Grid item sm={12} md={6}>
          <AnimateIn
            type={AnimateTypes.SLIDE_IN}
            elementPosition={ElementPositionTypes.LEFT}
            childRef={imgRef}
          >
            <Img src={sec3} ref={imgRef} />
          </AnimateIn>
        </Grid>
      </CommonBox>
    </>
  );
};

export default WhyUs;
