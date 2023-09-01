import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import PickMeals from "../Assets/pick-meals-image.png";
import React from "react";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Menu",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      url:'',
    },
    {
      image: ChooseMeals,
      title: "Kids Menu",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
      url:'',
    },
    {
      image: DeliveryMeals,
      title: "Drinks",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
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
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
