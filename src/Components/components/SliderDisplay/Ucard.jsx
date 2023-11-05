import "./SliderDisplay.css";

import React from "react";

const Ucard = ({ item: { id, cover, title, subtitle } }) => {
  return (
    <>
      <div className="MovieBox" id={id}>
        <div className="img">
          <img src={cover} alt={title} />
        </div>
        <div className="text">
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
      </div>
    </>
  );
};

export default Ucard;
