import React from "react";
import sec1 from "../../../sec1.jpeg";
import { Box, Container } from "@mui/material";

const General = (props: any) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: "#cfe8fc" }}>{props.children}</Box>
    </Container>
  );
};

export default General;
