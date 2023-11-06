import React from "react";

const Ucard = ({ item: { cover, alt, title } }) => {
  return (
    <>
      <div className="MovieBox">
        <div className="img">
          <img src={cover} alt={alt} />
        </div>
        <div className="text">
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};

export default Ucard;
