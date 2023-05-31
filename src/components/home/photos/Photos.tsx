import React from "react";
import sec3 from "../../../Sec3.jpeg";
import { Typography } from "@mui/material";
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

const Photos = () => {
  return (
    <CommonBox>
      <Carousel
        centerMode
        autoPlay
        centerSlidePercentage={50}
        infiniteLoop
        // width={100}
      >
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image4} />
        </div>
        <div>
          <img src={image5} />
        </div>
        <div>
          <img src={image6} />
        </div>
        {/* <div>
          <img src={image7} />
        </div> */}
      </Carousel>
    </CommonBox>
  );
};

export default Photos;
