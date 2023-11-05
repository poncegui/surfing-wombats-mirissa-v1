import "./styles/Footer.css";

import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>contacto</h4>
            <ul>
              <li>
                <a
                  href="mailto:afymos@gmail.com"
                  target="_blank"
                  title="e-mail afymos"
                  rel="noreferrer"
                >
                  afymos@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:926532749"
                  target="_blank"
                  title="Teléfono afymos"
                  rel="noreferrer"
                >
                  (+34) 926 532 749
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>dirección</h4>
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps/place/C.+Pedro+Arias,+87,+13630+Socu%C3%A9llamos,+Ciudad+Real/@39.285737,-2.7934746,17z/data=!3m1!4b1!4m6!3m5!1s0xd68f559a43eaaab:0x2895536363daa787!8m2!3d39.285737!4d-2.7908997!16s%2Fg%2F11fx7fcy55?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                >
                  c. Pedro Arias 87, 13630 Socuéllamos (Ciudad Real)
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>política de privacidad</h4>
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
                  aviso legal
                </Link>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>síguenos</h4>
            <div class="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=100067093413028"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/tv/CKKQgBcIW_Z/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
