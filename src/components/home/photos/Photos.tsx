import React from "react";
import sec3 from "../../../Sec3.jpeg";
import { Grid, Typography } from "@mui/material";
import CommonBox from "../../layout/CommonBox";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../../Capture3.png";
import image2 from "../../../Capture4.png";
import image3 from "../../../Capture5.png";
import image4 from "../../../Capture6.png";
import image5 from "../../../Capture7.png";
import image6 from "../../../Capture8.png";
import image7 from "../../../Capture9.png";
import styled from "styled-components";

const ImageContainer = styled.div`
  padding: 5px;
`;

const CarouselWrapper = styled.div`
  // & > .thumbs-wrapper ul: {
  //   text-align: center;
  // }
  // & div: {
  //   padding: 150px;
  // }
`;

const Photos = () => {
  return (
    <CarouselWrapper>
      <Carousel
        // centerMode
        autoPlay
        // centerSlidePercentage={50}
        infiniteLoop
        // width={100}
      >
        <ImageContainer>
          <img src={image1} />
        </ImageContainer>
        <ImageContainer>
          <img src={image2} />
        </ImageContainer>
        <ImageContainer>
          <img src={image3} />
        </ImageContainer>
        <ImageContainer>
          <img src={image4} />
        </ImageContainer>
        <ImageContainer>
          <img src={image5} />
        </ImageContainer>
        <ImageContainer>
          <img src={image6} />
        </ImageContainer>
      </Carousel>
    </CarouselWrapper>
  );
};

export default Photos;
