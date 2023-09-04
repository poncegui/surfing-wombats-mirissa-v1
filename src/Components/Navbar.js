/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";

import Box from "@mui/material/Box";
import { BsInstagram } from 'react-icons/bs';
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { FaFacebookF } from 'react-icons/fa';
import { HiOutlineBars3 } from "react-icons/hi2";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalBarIcon from '@mui/icons-material/LocalBar';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Menu",
      icon: <RestaurantMenuIcon />,
    },
    {
      text: "Drinks & Coctails",
      icon: <LocalBarIcon />,
    },
    {
      text: "Bookings by DM",
      icon: <InstagramIcon />,
    },
  ];
  return (
    <nav>
      <div className="navbar-links-container">
        <a href="">| Home |</a>
        <a href=""> | About  |</a>
        <a href=""> | Menu  |</a>
        <a href=""> | Cocktails  |</a>
        <a href=""> | Contact  |</a>
         <a href="https://www.facebook.com/profile.php?id=10007809358703">
          <FaFacebookF className="navbar-cart-icon" />
        </a> 
        {/* <a href="">
          <BsInstagram className="navbar-cart-icon" />
        </a>  */}
        <Link to="https://www.instagram.com/surfingwombatsmirissa/?hl=es" target="_blank" rel="noreferrer">
        <button className="primary-button"><InstagramIcon className="navbar-cart-icon" /> ∼  Bookings by DM </button>
        </Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
