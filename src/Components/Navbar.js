import {
  Container,
  Menu,
  MenuItem,
  MobileIcon,
  Wrapper,
} from "./Navbar.elements";
import { FaBars, FaInstagram, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

import BannerImageGrey from "../Assets/logo-wombats-grey.png";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { Link as MenuItemLink } from "react-scroll";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <Menu open={showMobileMenu}>
            <img
              className="navbar-heading-image"
              src={BannerImageGrey}
              alt="logo-wombats"
            />
            <MenuItem>
              <div className="title-navbar">Surfing Wombats Mirissa</div>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="/home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={3000}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                role="link"
              >
                <div className="links-size">| Home |</div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="/about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={3000}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                role="link"
              >
                <div className="links-size"> | About |</div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="/menu"
                spy={true}
                smooth={true}
                offset={-100}
                duration={3000}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                role="link"
              >
                <div className="links-size">| Menu & Drinks |</div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                to="/location"
                spy={true}
                smooth={true}
                offset={-100}
                duration={4000}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                role="link"
              >
                <div className="links-size">| Location |</div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <Link
                to="https://www.instagram.com/surfingwombatsmirissa/?hl=es"
                target="_blank"
                rel="noreferrer"
                aria-label="Bookings"
              >
                <button className="nav-button" role="link" name="link">
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
