import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "../Assets/logo-wombats.png";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsInstagram />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Contact</span>
          <span> Bandaramulla, Mirissa 81740</span>
          <span> surfingwombatsmirissa@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          {/* <span>Qualtiy</span>
          <span>Help</span>
        <span>Testimonials</span>
          <span>About</span> */}
        </div>
        <div className="footer-section-columns">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
