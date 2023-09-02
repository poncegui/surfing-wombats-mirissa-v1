import './Cover.css';

import BannerImage from '../../Assets/logo-wombats.png';
import Navbar from '../Navbar';
import React from 'react';
import coverVideo from '../../Assets/video/video-cover.MOV';

const Cover = () => {
  return (
    <>
      <div className="cover-container">
        <Navbar />
        <video className="video" src={coverVideo} autoPlay loop muted />
        <h1 className="primary-heading">Surfing</h1>
        <img className="primary-heading-image" src={BannerImage} alt="" />
        <h1 className="primary-heading">Wombats</h1>
        {/* <h4 className="secondary-heading">Chillinguito ∼ Mirissa</h4> */}
        <p>Chillinguito ∼ Mirissa </p>
      </div>
    </>
  );
};

export default Cover;
