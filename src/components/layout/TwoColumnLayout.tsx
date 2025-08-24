import { Box, Container } from "@mui/material";

const General = (props: any) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: "#cfe8fc" }}>{props.children}</Box>
    </Container>
  );
};

export default General;
