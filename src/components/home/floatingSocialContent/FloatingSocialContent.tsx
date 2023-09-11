import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import ContactForm from "../contactForm/ContactForm";
import Fb from "../../../images/fb.png";
import Insta from "../../../images/insta.png";
import Mail from "../../../images/mail.png";

const FloatingSection = styled.div`
  @media (min-width: 0px) {
    display: block;
    margin-top: 10px;
  }
  @media (min-width: 900px) {
    position: fixed;
    margin: 0;
    right: 0px;
    top: auto;
    left: 10px;
    bottom: 8px;
    display: inline-grid;
  }
  cursor: pointer;
`;

const Icon = styled.img`
  width: 30px;
  margin: 2px;
  &:hover {
    width: 32px;
  }
`;

const Links = {
  fb: "https://www.facebook.com/profile.php?id=100089271255318",
  mail: "mailto:info@zielbegleiter.org",
  insta: "https://instagram.com/zielbegleiterofficial?igshid=YmMyMTA2M2Y=",
};

export default function FloatingSocialContent() {
  const handleClick = (link: string) => {
    window.open(link);
  };

  return (
    <FloatingSection>
      {/* <Fab color="primary" aria-label="add" onClick={handleClick}> */}
      {/* <AddIcon /> */}
      <Icon
        src={Insta}
        onClick={() => {
          handleClick(Links.insta);
        }}
      />
      <Icon
        src={Mail}
        onClick={() => {
          handleClick(Links.mail);
        }}
      />
      <Icon
        src={Fb}
        onClick={() => {
          handleClick(Links.fb);
        }}
      />
      {/* </Fab> */}
    </FloatingSection>
  );
}
