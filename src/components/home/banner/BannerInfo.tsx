import React from 'react';
import banner from '../../../banner.jpg';
import styled from 'styled-components';
import { Typography } from '@mui/material';

const Container = styled.div`
display: flex;  
`
const BannerInfo = () => {
  return (
    <Container>
        <Typography variant='h3' >
           ziel
        </Typography>
        <Typography variant='h3' >
          colors
        </Typography>
        <Typography variant='h3' >
          your dreams
        </Typography>
    </Container>
  );
}

export default BannerInfo;
