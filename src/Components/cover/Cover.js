import './Cover.css';

import BannerImage from '../../Assets/logo-wombats.png';
import Navbar from '../Navbar';
import React from 'react';
import coverVideo from '../../Assets/images-cover/background-1.jpg';
import styled from "styled-components";

const Cover = () => {
  return (
    <>
      <div className="cover-container">
        <Navbar />
          {/* <video className="video" src={coverVideo} autoPlay loop muted /> */}
          <img className="video" src={coverVideo} alt=''/>
          <SurfingWombatsTitleContainer>
          <h1 className="primary-heading">Surfing</h1>
          <img className="primary-heading-image" src={BannerImage} alt="" />
          <h1 className="primary-heading">Wombats</h1>
        </SurfingWombatsTitleContainer>
        <p>Chillinguito ∼ Mirissa </p>
      </div>
    </>
  );
};

export default Cover;


const  SurfingWombatsTitleContainer = styled.div `
display:flex;
flex-direction: row;
gap:2rem;


@media (max-width: 440px) {
  flex-direction: column;
  gap: 1.2rem;
}
`;