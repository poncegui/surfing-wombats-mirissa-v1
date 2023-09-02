import BannerBackground from '../Assets/images-dron/dron-2.png';
import BannerImage from '../Assets/logo-wombats.png';
import { FiArrowRight } from 'react-icons/fi';
import Navbar from './Navbar';
import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Surfing</h1>
          <img src={BannerImage} alt="" />
          <h1 className="primary-heading">Wombats</h1>
          <h4 className="secondary-heading">Chillinguito ∼ Mirissa</h4>
          {/* <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p> */}
          <button className="secondary-button">
            Order Now <FiArrowRight />{' '}
          </button>
        </div>
        <div className="home-image-section">
          {/* <img src={BannerImage} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
