import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLink,
  // Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
} from "./NavbarElements";
import logo from "../../images/zb-logo.png";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useScrollListener from "../../hooks/useScrollListener";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [hideNavBar, setHideNavBar] = useState<boolean>(false);
  const [route, setRoute] = useState<string>("home");
  const scroll = useScrollListener();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // update classList of nav on scroll
  useEffect(() => {
    let isNavHidden = false;

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0) isNavHidden = true;

    setHideNavBar(isNavHidden);
  }, [scroll.y, scroll.lastY]);

  const getSelectedStyle = (item: string) => {
    if (route == item) {
      return {
        borderBottom: "2px solid rgb(11, 56, 102)",
        color: "rgb(0, 0, 0)",
      };
    }
    return {};
  };

  return (
    <Nav hidden={hideNavBar}>
      <NavMenu>
        <Logo src={logo} />
        <Typography variant="h5">ziel begleiter</Typography>
      </NavMenu>
      <NavMenu>
        <Box
          sx={{ flexGrow: 1, display: { sm: "flex", xs: "flex", md: "none" } }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <NavLink to="/home">Home</NavLink>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <NavLink to="/contact">Contact Us</NavLink>
            </MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{ flexGrow: 1, display: { xs: "none", sm: "none", md: "flex" } }}
        >
          <NavLink
            to="/home"
            onClick={() => setRoute("home")}
            style={getSelectedStyle("home")}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setRoute("contact")}
            style={getSelectedStyle("contact")}
          >
            Contact Us
          </NavLink>
        </Box>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
