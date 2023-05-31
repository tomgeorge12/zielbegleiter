import React from "react";
import sec1 from "../../../sec1.jpeg";
// import { Img, DetailsContainer } from './Elements';
import { Box, Container, Typography } from "@mui/material";

const General = (props: any) => {
  return (
    <Container>
      {props.title && (
        <Box
          sx={{
            padding: "20px 20px 0 20px",
            margin: "auto",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">{props.title}</Typography>
        </Box>
      )}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          padding: "20px",
          margin: "auto",
          alignItems: "center",
        }}
      >
        {props.children}
      </Box>
    </Container>
  );
};

export default General;
