import "../Components/cover/Cover";

import React from "react";
import coverVideo from "../Assets/video/video-cover.MOV";
import styled from "styled-components";

const Cover = () => {
  return (
    <>
      <VideoContainer>
        <VideoTitleContainer>
          <video className="video-surf" src={coverVideo} autoPlay loop muted />
          {/* <h1 className="primary-heading">Coming soon!</h1> */}
        </VideoTitleContainer>
        {/* <p>October ∼ 2023 </p> */}
      </VideoContainer>
    </>
  );
};

export default Cover;

const VideoTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: CENTER;
  gap: 2rem;

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

const VideoContainer = styled.div`
  .video-surf {
    object-fit: cover;
    width: 100%;
    height: 65vh;
    position: absolute;
    z-index: -1;
    opacity: 0.7;
  }
`;
