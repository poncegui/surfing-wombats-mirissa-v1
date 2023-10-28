// import AboutBackground from '../Assets/images-food/dish-1.jpeg';

import AboutBackgroundImage from '../Assets/images-food/pizzas-mar.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <div className="about-section-container" id='about'>
      <div className="about-background-image-container">
        {/* <img src={AboutBackground} alt="" />  */}
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="pizza-on-the-sea" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          food, drinks & surf
        </h1>
        <p className="primary-text">
          Our beach-front restaurant is perfect for people who wish to eat the
          best pizza in Sri Lanka. Located in the front of Mirissa Left surf
          break. It is perfect to enjoy amazing drinks with the sound of the
          waves. And eat the tastiest pizzas coming straight out from the
          wooden-fire pizza oven.
        </p>
        <p className="primary-text">Let the good times roll!</p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

const AboutSectionContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h2 {
    font-size: 3rem;
    color: #3e3e3d;
    font-weight: 200;
  }

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 1.2rem;
    text-align: left;
    width: 70%;
  }
`;