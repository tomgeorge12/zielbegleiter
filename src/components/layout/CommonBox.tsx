import React from "react";
import sec1 from "../../../sec1.jpeg";
import { Box, Container, Grid, Typography } from "@mui/material";
import AnimateIn, {
  AnimateTypes,
  ElementPositionTypes,
} from "../home/animate/AnimateIn";

const General = (props: any) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        "@media(min-width: 900px)": {
          padding: "5%",
        },
      }}
    >
      {props.title && (
        <Grid item xs={7}>
          <AnimateIn
            type={AnimateTypes.FADE_IN}
            elementPosition={ElementPositionTypes.RIGHT}
          >
            <Box
              sx={
                {
                  // padding: "80px 20px 0 37px",
                  // margin: "auto",
                  // alignItems: "center",
                }
              }
            >
              <Typography variant="h3">{props.title}</Typography>
            </Box>
          </AnimateIn>
        </Grid>
      )}
      <Grid item>
        <Box
          sx={{
            minHeight: "calc(100vh-60px)",
            display: "flex",
            padding: "20px",
            margin: "auto",
            alignItems: "center",
            flexWrap: "wrap",
            ...props.boxStyle,
          }}
        >
          {props.children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default General;
