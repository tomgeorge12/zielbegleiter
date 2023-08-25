import image1 from "../../../images/Capture3.png";
import image2 from "../../../images/Capture4.png";
import image3 from "../../../images/Capture5.png";
import image4 from "../../../images/Capture6.png";
import image5 from "../../../images/Capture7.png";
import image6 from "../../../images/Capture8.png";
import image7 from "../../../Capture9.png";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Grid, Typography } from "@mui/material";
import CommonBox from "../../layout/CommonBox";
import AnimateIn, { AnimateTypes } from "../animate/AnimateIn";

const ImageContainer = styled.div`
  padding: 5px;
`;

const CarouselWrapper = styled.div`
  @media (min-width: 0px) {
    padding: 5%;
  }
  @media (min-width: 900px) {
    padding: 5% 26%;
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
      {/* <CommonBox>
        <Grid>
          <Typography>{"Photo Booth"}</Typography>
        </Grid>
        <Grid> */}
      <AnimateIn type={AnimateTypes.FADE_IN}>
        <ImageGallery
          items={images}
          showNav={true}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          // thumbnailPosition={"right"}
        />
        {/* </Grid>
      </CommonBox> */}
      </AnimateIn>
    </CarouselWrapper>
  );
};

export default Photos;
