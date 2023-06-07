import React from "react";
import sec3 from "../../../Sec3.jpeg";
import { FieldContainer, DetailsContainer } from "./FormElements";
import { Box, Button, TextField, Typography } from "@mui/material";
import CommonBox from "../../layout/CommonBox";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <CommonBox>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* <FieldContainer> */}
        <TextField id="zb-name" label="Name" variant="standard" />
        <TextField id="zb-phone" label="Email" variant="standard" />
        <TextField id="zb-email" label="Phone" variant="standard" />
        {/* </FieldContainer> */}
        <Button variant="contained">Submit</Button>
        <Button variant="outlined">Reset</Button>
      </Box>
    </CommonBox>
  );
};

export default ContactForm;
