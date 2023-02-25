import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import homepagebanner from '../homepage.png';
import { fontWeight } from '@mui/system';
import ScrollSectionFirst from '../components/MainPageScrollSections/ScrollSectionFirst';
import ScrollSectionSecond from '../components/MainPageScrollSections/ScrollSectionSecond';
import ScrollSectionThird from '../components/MainPageScrollSections/ScrollSectionThird';

const Main = () => {
  return (
  <Box sx={{ flexGrow: 1 }}>
    <div>
      <ScrollSectionFirst />
    </div>
    <div>
      <ScrollSectionSecond />
    </div>
    <div>
      <ScrollSectionThird />
    </div>
  </Box>
  );
}

export default Main;
