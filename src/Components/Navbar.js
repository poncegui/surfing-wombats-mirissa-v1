import {
  Container,
  Menu,
  MenuItem,
  MobileIcon,
  Wrapper,
} from './Navbar.elements';
import { FaBars, FaInstagram, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';

import BannerImageGrey from '../Assets/logo-wombats-grey.png';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { Link as MenuItemLink } from 'react-scroll';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: '2em' } }}>
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <Menu open={showMobileMenu}>
            <img
              className="primary-heading-image"
              src={BannerImageGrey}
              alt="logo-wombats"
            />
            <MenuItem>
              <MenuItemLink>
                <div>Surfing Wombats Mirissa</div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={3000}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <div>| Home |</div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={3000}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                | About |
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="menu"
                spy={true}
                smooth={true}
                offset={-100}
                duration={3000}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <div>| Menu & Drinks |</div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="location"
                spy={true}
                smooth={true}
                offset={-100}
                duration={3000}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <div>| Location |</div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <Link
                to="https://www.instagram.com/surfingwombatsmirissa/?hl=es"
                target="_blank"
                rel="noreferrer"
              >
                <button className="nav-button">
                  <FaInstagram className="navbar-cart-icon" /> ∼ Bookings by DM
                </button>
              </Link>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
