import { Box, Grid, Typography } from "@mui/material";
import logo from "../../../assets/logo/zb-logo.png";
import { Logo } from "../../navbar/NavbarElements";
import FloatingSocialContent from "../floatingSocialContent/FloatingSocialContent";
import { StarList } from "../programmes/ProgrammesAndEligibility";
import { CommonTypography, Link, LogoWrapper } from "./FooterElements";
import useLocale from "../../../hooks/useLocale";

const Footer = () => {
  const { translate } = useLocale();

  return (
    <Grid
      container
      direction="row"
      sx={{
        "@media(min-width: 900px)": {
          padding: "2% 5%",
        },
      }}
    >
      <Grid item sm={12} md={5}>
        <Box
          sx={{
            "@media(min-width: 900px)": {
              padding: "0 4% 0 45%",
            },
            padding: "25px",
          }}
        >
          <LogoWrapper>
            <Logo src={logo} />
            <Typography variant="h5" sx={{ fontFamily: "Inter" }}>
              {translate("ZIEL_BEGLEITER")}
            </Typography>
          </LogoWrapper>
          <Box
            sx={{
              padding: "30px 0px 0px 0px",
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "Poppins" }}>
              {translate("REAL_COMPANIONSHIP")}
            </Typography>
            <StarList
              items={[
                translate("REAL_COMPANIONSHIP_PT_1"),
                translate("REAL_COMPANIONSHIP_PT_2"),
                translate("REAL_COMPANIONSHIP_PT_3"),
                translate("REAL_COMPANIONSHIP_PT_4"),
              ]}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={12} md={3}>
        <Box
          sx={{
            "@media(min-width: 900px)": {
              padding: "0 4%",
            },
            padding: "25px",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "Poppins" }}>
            {translate("CONTACT_DETAILS")}
          </Typography>
          <CommonTypography>{translate("FULL_ADDRESS")}</CommonTypography>
          <CommonTypography>{translate("MAIL_INFO")}</CommonTypography>
          <CommonTypography>{translate("PHONE1")}</CommonTypography>
          <CommonTypography>{translate("PHONE2")}</CommonTypography>
          <CommonTypography>{translate("PHONE3")}</CommonTypography>
          <FloatingSocialContent />
        </Box>
      </Grid>
      <Grid item sm={12} md={4}>
        <Box
          sx={{
            "@media(min-width: 900px)": {
              padding: "0 50% 0 4%",
            },
            padding: "25px",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "Poppins" }}>
            {translate("QUICK_LINKS")}
          </Typography>
          <Link to="/home">{translate("HOME")}</Link>
          <Link to="/contact">{translate("CONTACT_US")}</Link>
        </Box>
      </Grid>
      <Typography
        variant="caption"
        sx={{
          margin: "auto",
          color: "#d8d8d8",
          display: "block",
          fontFamily: "Poppins",
        }}
      >
        {translate("COPY_RIGHT")}
      </Typography>
    </Grid>
  );
};

export default Footer;
