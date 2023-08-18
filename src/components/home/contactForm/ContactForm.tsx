import React from "react";
import sec3 from "../../../Sec3.jpeg";
import { FieldContainer, DetailsContainer } from "./FormElements";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import CommonBox from "../../layout/CommonBox";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <CommonBox
      boxStyle={{
        "@media(min-width: 900px)": {
          height: "30vh",
          padding: "20px 100px",
          minHeight: "300px",
        },
        backgroundColor: "#F1FBFF",
        borderRadius: "5px",
        border: "2px dashed black",
      }}
    >
      <Box
        sx={{
          "& > :not(style)": { m: 1, width: "100%", display: "flex" },
        }}
      >
        <Typography variant={"h4"}>Let us get in touch with you</Typography>
        <TextField
          id="zb-name"
          label="Name"
          variant="standard"
          color={"warning"}
        />
        <TextField
          id="zb-phone"
          label="Email"
          variant="standard"
          color={"warning"}
        />
        <TextField
          id="zb-email"
          label="Phone"
          variant="standard"
          color={"warning"}
        />
        {/* </Box> */}

        <Box>
          <Button variant="contained" sx={{ margin: "20px 20px 0 0" }}>
            Submit
          </Button>
          <Button variant="outlined" sx={{ margin: "20px 20px 0 0" }}>
            Reset
          </Button>
        </Box>
      </Box>
    </CommonBox>
  );
};

export default ContactForm;
