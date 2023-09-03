import './Cover.css';

import BannerImage from '../../Assets/logo-wombats.png';
import Navbar from '../Navbar';
import React from 'react';
import TitleSection from '../TitleSection';
import coverVideo from '../../Assets/images-cover/background-1.jpg';
import styled from 'styled-components';

const Cover = () => {
  return (
    <>
      <CoverContainer>
        <Navbar />
        {/* <video className="video" src={coverVideo} autoPlay loop muted /> */}
        <img className="background" src={coverVideo} alt="" />
        <SurfingWombatsTitleContainer>
          <h1>Surfing</h1>
          <img className="primary-heading-image" src={BannerImage} alt="" />
          <h1>Wombats</h1>
        </SurfingWombatsTitleContainer>
        <p>Chillinguito ∼ Mirissa </p>
        <ComingSoonTitle>
          <h2> New season is Coming soon! October ∼ 2023 </h2>
        </ComingSoonTitle>
      </CoverContainer>
      <TitleSection
        title="new season is coming soon!  ∼ october 2023  ∼"
        inverse
        margintTop
      />
    </>
  );
};

export default Cover;

const CoverContainer = styled.div`
  height: 100vh;
  width: 100%;
  object-fit: contain;
  box-shadow: inset 0 0 0 1000px rgba(246, 247, 245, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;

  .background {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    opacity: 0.7;
  }

  p {
    margin-top: 1rem;
    color: #3e3e3d;
    font-size: 2.5rem;
  }

  @media (max-width: 960px) {
    text-align: center;
    p {
      text-align: center;
      font-size: 1.5;
      width: 85%;
    }
  }

  @media (max-width: 768px) {
    p {
      text-align: center;
      font-size: 22px;
      width: 70%;
    }
  }
`;

const SurfingWombatsTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 440px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
  }

  h1{
    font-size: clamp(3rem, 5vw, 5rem);
  color:#B95D5B;
  max-width: 800px;
  letter-spacing: 5px;
  font-weight: 300;
  }
`;

const ComingSoonTitle = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  text-align: left;
  width: 70%;
  h2 {
    font-size: 3rem;
    color: #3e3e3d;
    font-weight: 200;
  }

  @media (min-width: 440px) {
    display: none;
  }
`;
