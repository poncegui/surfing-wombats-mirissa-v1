import ChooseMeals from "../Assets/images-food/langostinos.png";
import DeliveryMeals from "../Assets/images-food/menu-kids.png";
import PickMeals from "../Assets/images-drinks/coktail-2.png";
import React from "react";

const Work = () => {
  const workInfoData = [
    {
      id:1,
      image: ChooseMeals,
      title: "Menu",
      button: "download",
      url:'',
    },
    {
      id:2,
      image: DeliveryMeals,
      title: "Kids Menu",
      button: "download",
      url:'',
    },
    {
      id:3,
      image: PickMeals,
      title: "Drinks",
      button: "download",
      url:'',
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Discover our Menu</p>
        <h1 className="primary-heading">Food & Drinks</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title} id={data.id}>
            {/* <img src={data.image} alt="" /> */}
            <div className="info-boxes-img-container">
              {/* <img src={data.image} alt="" /> */}
            </div>
            <h2>{data.title}</h2>
            <button>{data.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
