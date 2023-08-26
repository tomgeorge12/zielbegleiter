import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import ContactForm from "../contactForm/ContactForm";

const FloatingSection = styled.div`
  position: fixed;
  margin: 0;
  right: 20px;
  top: auto;
  left: auto;
  bottom: 20px;
`;

export default function FloatingContactForm() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <FloatingSection>
      <Fab color="primary" aria-label="add" onClick={handleClick}>
        <AddIcon />
      </Fab>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <ContactForm />
      </Menu>
    </FloatingSection>
  );
}
