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
      button:  "Menu",
      url:'',
    },
    {
      id:2,
      image: DeliveryMeals,
      title: "Kids Menu",
      button: "Kids Menu",
      url:'',
    },
    {
      id:3,
      image: PickMeals,
      title: "Cocktails & Drinks",
      button:  "Cocktails & Drinks",
      url:'',
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Discover our Menu</p>
        <h1 className="primary-heading">Food, Drinks  & Cocktails</h1>
        <p className="primary-text">
        Download our menu cards and enjoy the wombats experience
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title} id={data.id}>
            <button>{data.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
