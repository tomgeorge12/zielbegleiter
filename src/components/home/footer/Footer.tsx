import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import logo from "../../../zb-logo.png";
import { Logo } from "../../navbar/NavbarElements";
import { CommonTypography, LogoWrapper } from "./FooterElements";
import { StarList } from "../programmes/ProgrammesAndEligibility";

const Footer = () => {
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
        <Box sx={{ padding: "0 4% 0 45%" }}>
          <LogoWrapper>
            <Logo src={logo} />
            <Typography variant="h5">ziel begleiter</Typography>
          </LogoWrapper>
          <Box sx={{ padding: "30px 0px 0px 0px" }}>
            <Typography variant="h6">The Real Companionship</Typography>

            <StarList
              items={[
                "Course and University Selection",
                "Paper Works",
                "Application Processing",
                "Airport Pickups, Accommodation",
              ]}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={12} md={3}>
        <Box sx={{ padding: "0 4%" }}>
          <Typography variant="h6">Contact Details</Typography>
          <CommonTypography>
            Mannolikkal Building, Panamaram, Wayanad, Kerala, India. Pin: 670721
          </CommonTypography>
          <CommonTypography>info@zielbegleiter.org</CommonTypography>
          <CommonTypography>+91 96 45 828 929</CommonTypography>
          <CommonTypography>+91 97 45 828 929</CommonTypography>
          <CommonTypography>+91 49 35 220 929</CommonTypography>
        </Box>
      </Grid>
      <Grid item sm={12} md={4}>
        <Box sx={{ padding: "0 50% 0 4%" }}>
          <Typography variant="h6">Quick Links</Typography>
          <CommonTypography>Home</CommonTypography>
          <CommonTypography>Contact Us</CommonTypography>
        </Box>
      </Grid>
      <Typography variant="caption" sx={{ margin: "auto", color: "#d8d8d8" }}>
        ©Copyright | ziel begleiter 2023. All Right Reserved.
      </Typography>
    </Grid>
  );
};

export default Footer;
