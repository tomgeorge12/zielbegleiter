import React from "react";
import sec3 from "../../../Sec3.jpeg";
import { Grid, Typography } from "@mui/material";
import CommonBox from "../../layout/CommonBox";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../../Capture3.png";
import image2 from "../../../Capture4.png";
import image3 from "../../../Capture5.png";
import image4 from "../../../Capture6.png";
import image5 from "../../../Capture7.png";
import image6 from "../../../Capture8.png";
import image7 from "../../../Capture9.png";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageContainer = styled.div`
  padding: 5px;
`;

const CarouselWrapper = styled.div`
@media (min-width: 0px) {
  padding: 5%;
}
@media (min-width: 900px) {
  padding: 5% 30%;
}
`;

const Photos = () => {
  const images = [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image4,
      thumbnail: image4,
    },
    {
      original: image5,
      thumbnail: image5,
    },
    {
      original: image6,
      thumbnail: image6,
    },
  ];

  return (
    <CarouselWrapper>
      <ImageGallery items={images} showNav={true} showFullscreenButton={false} showPlayButton={false} autoPlay={true}/>
    </CarouselWrapper>
  );
};

export default Photos;


    //   <Carousel
    //     // centerMode
    //     autoPlay
    //     // centerSlidePercentage={50}
    //     infiniteLoop
    //     // width={100}
    //   >
    //     <ImageContainer>
    //       <img src={image1} />
    //     </ImageContainer>
    //     <ImageContainer>
    //       <img src={image2} />
    //     </ImageContainer>
    //     <ImageContainer>
    //       <img src={image3} />
    //     </ImageContainer>
    //     <ImageContainer>
    //       <img src={image4} />
    //     </ImageContainer>
    //     <ImageContainer>
    //       <img src={image5} />
    //     </ImageContainer>
    //     <ImageContainer>
    //       <img src={image6} />
    //     </ImageContainer>
    //   </Carousel>