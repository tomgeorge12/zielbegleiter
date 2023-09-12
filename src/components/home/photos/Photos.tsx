import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styled from "styled-components";
import image1 from "../../../assets/images/Capture3.png";
import image2 from "../../../assets/images/Capture4.png";
import image3 from "../../../assets/images/Capture5.png";
import image4 from "../../../assets/images/Capture6.png";
import image5 from "../../../assets/images/Capture7.png";
import image6 from "../../../assets/images/Capture8.png";
import AnimateIn, { AnimateTypes } from "../animate/AnimateIn";

const CarouselWrapper = styled.div`
  @media (min-width: 0px) {
    padding: 10% 5%;
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
      <AnimateIn type={AnimateTypes.FADE_IN}>
        <ImageGallery
          items={images}
          showNav={true}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
        />
      </AnimateIn>
    </CarouselWrapper>
  );
};

export default Photos;
