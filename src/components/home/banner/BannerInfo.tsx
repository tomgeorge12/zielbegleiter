import styled from "styled-components";
import { Grid, Paper, Typography } from "@mui/material";
import AnimateIn, { AnimateTypes } from "../animate/AnimateIn";
import useLocale from "../../../hooks/useLocale";

const HeaderText = styled.span`
  color: ${(props) => props.color};
  font-weight: 500 !important;
  position: relative;
  font-family: Libre Baskerville;
`;

const ParagraphText = styled(Typography)`
  color: #212730;
  text-align: center;
  line-height: 2 !important;
  font-weight: 500 !important;
  font-family: "Poppins" !important;
`;

const BannerInfo = () => {
  const { translate } = useLocale();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ width: "70%" }}
    >
      <Grid
        container
        component={Typography}
        variant="h2"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginBottom: "70px" }}
        columns={30}
      >
        <AnimateIn type={AnimateTypes.FADE_IN}>
          <HeaderText color={"#212730"}>
            {`${translate("ZIEL")} `}
            <span style={{ color: "#ea7704" }}>{`${translate(
              "COLORS"
            )} `}</span>
            {`${translate("YOUR_DREAMS")}`}
          </HeaderText>
        </AnimateIn>
      </Grid>
      <Grid sx={{ width: "100%" }}>
        <AnimateIn type={AnimateTypes.FADE_IN}>
          <Paper
            elevation={0}
            sx={{
              "@media(min-width: 0px)": {
                padding: "40px 34px",
              },
              "@media(min-width: 900px)": {
                padding: "40px 0px",
              },
              marginTop: "40px",
              opacity: "0.7",
              fontFamily: "Poppins",
            }}
          >
            <ParagraphText>{translate("BANNER_PARA_1")}</ParagraphText>
            <ParagraphText sx={{ color: "rgb(234, 119, 4)" }}>
              {translate("BANNER_PARA_2")}
            </ParagraphText>
            <ParagraphText>{translate("BANNER_PARA_3")}</ParagraphText>
          </Paper>
        </AnimateIn>
      </Grid>
    </Grid>
  );
};

export default BannerInfo;
