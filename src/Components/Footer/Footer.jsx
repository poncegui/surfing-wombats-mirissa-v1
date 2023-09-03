import './styles/Footer.css';

import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>contact</h4>
            <ul>
              <li>
                <a
                  href="tel:926532749"
                  target="_blank"
                  title="phone"
                  rel="noreferrer"
                >
                  (+xx) xxx xxx xxx
                </a>
              </li>
              <li>
                <a
                  href="mailto:surfingwombatsmirissa@gmail.com"
                  target="_blank"
                  title="e-mail surfing-wombats-mirisa"
                  rel="noreferrer"
                >
                  {/* surfingwombatsmirissa@gmail.com */}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>location</h4>
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps/place/C.+Pedro+Arias,+87,+13630+Socu%C3%A9llamos,+Ciudad+Real/@39.285737,-2.7934746,17z/data=!3m1!4b1!4m6!3m5!1s0xd68f559a43eaaab:0x2895536363daa787!8m2!3d39.285737!4d-2.7908997!16s%2Fg%2F11fx7fcy55?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                >
                  Bandaramulla, Mirissa 81740
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Privacy Policy</h4>
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
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a
                href="https://www.instagram.com/surfingwombatsmirissa/?hl=es"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100078093587035"
                target="_blank"
                rel="noreferrer"
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
