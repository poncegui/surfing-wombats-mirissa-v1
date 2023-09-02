import "./Cover.css";

import React from "react";
import coverVideo from "./Assets/video/video-cover.MOV";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h3>Marta Ponce de León</h3>
      <p>Web Developer | Project Engineer </p>
    </div>
  );
};

export default Cover;
