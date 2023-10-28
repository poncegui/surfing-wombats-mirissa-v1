/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { FaFacebookF } from 'react-icons/fa';
import { HiOutlineBars3 } from 'react-icons/hi2';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { Link as NavLink } from "react-scroll";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const menuOptions = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      href: '/home',
    },
    {
      text: 'About',
      icon: <InfoIcon />,
      href: '/about',
    },
    {
      text: 'Menu',
      icon: <RestaurantMenuIcon />,
      href: '/food-menu',
    },
    {
      text: 'Drinks & Cocktails',
      icon: <LocalBarIcon />,
      href: '/drinks&cocktails',
    },
    {
      text: 'Bookings by DM',
      icon: <InstagramIcon />,
      href: 'https://www.instagram.com/surfingwombatsmirissa/?hl=es',
    },
    {
      text: 'Follow Us' ,
      icon: <FaFacebookF />,
      href: 'https://www.facebook.com/profile.php?id=10007809358703',
    },
  ];
  return (
    <nav>
      <div className="navbar-links-container">
      <a href="/home">| Home |</a>
      <NavLink
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={handleClick}
          >
           | About |
          </NavLink>
          <NavLink
            to="menu"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={handleClick}
          >
           | Menu |
          </NavLink>
          <NavLink
            to="drinks&cocktails"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={handleClick}
          >
          | Cocktails |
          </NavLink>
          <NavLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={handleClick}
          >
          | Contact |
          </NavLink>
        <a href="https://www.facebook.com/profile.php?id=10007809358703">
          <FaFacebookF className="navbar-cart-icon" />
        </a>
        <Link
          to="https://www.instagram.com/surfingwombatsmirissa/?hl=es"
          target="_blank"
          rel="noreferrer"
        >
          <button className="primary-button">
            <InstagramIcon className="navbar-cart-icon" /> ∼ Bookings by DM
          </button>
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
            {menuOptions.map(item => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                  <a to={item.href} target="_blank" rel="noreferrer">
                    <ListItemText primary={item.text} />
                  </a>
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

