import "./styles/Footer.css";

import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h2>contact</h2>
            <ul>
              <li>
                <Link
                  to="tel:+94412254766"
                  target="_blank"
                  title="phone"
                  rel="noreferrer"
                  aria-label="go to telephone number"
                >
                  (+94) 412 25 47 66
                </Link>
              </li>
              <li>
                <Link
                  to="mailto:surfingwombatsmirissa@gmail.com"
                  target="_blank"
                  title="e-mail surfing-wombats-mirisa"
                  rel="noreferrer"
                  aria-label="go to e-mail"
                >
                  {/* surfingwombatsmirissa@gmail.com */}
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h2>location</h2>
            <ul>
              <li>
              <Link
                  to="https://www.google.com/maps/place/Surfing+Wombats+Mirissa/@5.9428195,80.4611778,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae13ff371739699:0x62393379e7a1f5d8!8m2!3d5.9428195!4d80.4637527!16s%2Fg%2F11j8qvphr3?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="go to surfing wombats mirissa location at googleMaps"
                >
                  Bandaramulla, <br></br>Mirissa 81740
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="footer-col">
            <h2>Privacy Policy</h2>
            <ul>
              <li>
                <Link
                  to="/politica-privacidad"
                  target="_blank"
                  rel="noreferrer"
                >
                  cookies
                </Link>
              </li>
              <li>
                <Link to="/aviso-legal" target="_blank" rel="noreferrer">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div> */}
          <div className="footer-col">
            <h2>follow us</h2>
            <div className="social-links">
              <a
                href="https://www.instagram.com/surfingwombatsmirissa/?hl=es"
                target="_blank"
                rel="noreferrer"
                aria-label="go to instagram"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100078093587035"
                target="_blank"
                rel="noreferrer"
                aria-label="go to facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
