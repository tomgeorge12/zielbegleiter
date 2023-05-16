import React from 'react';
import banner from '../../../banner.jpg';
import styled from 'styled-components';
import BannerInfo from './BannerInfo';

const BannerContainer = styled.div`
background-image: url(${banner});
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
// color: white;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
opacity: 0.5;
`
const Banner = () => {
  return (
    <BannerContainer>
        <BannerInfo />
    </BannerContainer>
  );
}

export default Banner;
