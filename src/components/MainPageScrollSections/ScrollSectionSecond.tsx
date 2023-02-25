import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import homepagebanner from '../../homepage.png';

const ScrollSectionSecond = () => {
  return (
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{ position: "relative"}}>
          
          <Box component="img" src={homepagebanner} sx={{ height:"700px", display: "block", marginLeft: "auto", marginRight: "auto",filter: "drop-shadow(-3px 3px 3px rgba(0, 0, 0, 0.25))", animation: "fade-bottom 1s" }} />

        </Grid>
        <Grid item xs={6} sx={{ position: "relative"}}>
        <Paper elevation={0} sx={{ margin: "auto", transform: "translate(0, -50%)", position: "absolute", left: 0, right: 0, top:"50%", bottom:0, width: "550px"}}>
            <Box sx={{ margin: "10px",animation: "fade-bottom 1s" }}>
              <Typography variant="h2" sx={{ color: "#030F4C", display: "inline", marginRight:"15px", fontWeight: 800}}>
                ziel 
              </Typography>
              <Typography variant="h2" sx={{ color: "#FD6102", display: "inline", marginRight:"15px", fontWeight: 800}} >
                    colors
                  </Typography>
                  <Typography variant="h2" sx={{ color: "#030F4C", display: "inline", fontWeight: 800}}>
                  your dreams
              </Typography>
              <Typography variant="h2" sx={{ color: "#FD6102", display: "inline", fontWeight: 800}} >
                  .
                </Typography>
            </Box>
            
            <Typography variant="body1" sx={{ color: "#000",  margin: "10px",animation: "fade-bottom 1s"}} >
              Solis helps you manage your calendar throughout the day. From events to tasks and meetings, it's all taken care of.
            </Typography>
            <Button sx={{  margin: "10px", padding: "10px", color: '#fff', textTransform: "capitalize", backgroundColor: "#030F4C",animation: "fade-bottom 1s" }} variant="contained">
              View Our Services
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ScrollSectionSecond;
