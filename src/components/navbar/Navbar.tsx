import React from 'react';
import {
Nav,
NavLink,
// Bars,
NavMenu,
NavBtn,
NavBtnLink,
Img
} from './NavbarElements';
import logo from '../../zb-logo.png'
import { Typography } from '@mui/material';

const Navbar = () => {
return (
    <Nav>
        {/* <Bars /> */}
        <NavMenu>
            <Img src={logo} />
            <Typography variant="h5">
                ziel begleiter
            </Typography>
        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavMenu>
            <NavLink to='/home'>
                Home
            </NavLink>
            <NavLink to='/contact'>
                Contact Us
            </NavLink>     
        </NavMenu>
    </Nav>
);
};

export default Navbar;
