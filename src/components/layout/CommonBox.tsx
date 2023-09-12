import { Box, Grid, Typography } from "@mui/material";
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
        "@media(min-width: 0px)": {
          justifyContent: "left",
        },
        "@media(min-width: 900px)": {
          padding: "5%",
          justifyContent: "center",
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
              sx={{
                "@media(min-width: 900px)": {
                  display: "flex",
                  justifyContent: "center",
                },
              }}
            >
              <Typography
                variant="h3"
                style={{
                  fontFamily: "Libre Baskerville",
                  padding: "20px",
                  borderBottom: "1px solid #000",
                }}
              >
                {props.title}
              </Typography>
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
