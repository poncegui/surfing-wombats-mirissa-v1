// import AboutBackground from '../Assets/images-food/dish-1.jpeg';

import AboutBackgroundImage from "../Assets/images-food/pizzas-mar.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import React from "react";

const About = () => {
  return (
    <div className="about-section-container" id="/about">
      <div className="about-background-image-container">
        {/* <img src={AboutBackground} alt="" />  */}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="pizza-on-the-sea" aria-label="about us" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-subheading">| About |</h1>
        <h2 className="primary-heading">food, drinks & surf</h2>
        <p className="primary-text">
          Our beach-front restaurant is perfect for people who wish to eat the
          best pizza in Sri Lanka. Located in the front of Mirissa Left surf
          break. It is perfect to enjoy amazing drinks with the sound of the
          waves. And eat the tastiest pizzas coming straight out from the
          wooden-fire pizza oven.
        </p>
        <p className="primary-text">Let the good times roll!</p>
        <div className="about-buttons-container">
          {/* <button className="secondary-button">Learn More</button> */}
          <a
            href="https://www.instagram.com/reel/Clfp_-bIVz3/?igshid=MTc4MmM1YmI2Ng=="
            target="_blank"
            rel="noreferrer"
            aria-label="go to instagram video of surfing wombats mirissa"
          >
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Watch Video
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
