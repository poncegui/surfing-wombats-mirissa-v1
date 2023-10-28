import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./SliderDisplay.css"

import HeadingSection from "../components/HeadingSection/HeadingSection"
import { Link } from "react-router-dom"
import React from "react"
import Slider from "react-slick"
import Ucard from "./Ucard"
// import arrowLeft from '../../Assets/left.svg'
// import arrowRight from '../../Assets/right.svg'
import styled from 'styled-components';

const SampleNextArrow =props => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
      {/* <img src={arrowRight} alt='go right'/> */}
      </button>
    </div>
  )
}
const SamplePrevArrow =props => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        {/* <img src={arrowLeft} alt='go'/> */}
      </button>
    </div>
  )
}
const SliderDisplay = ({ items, title , slides, buttons}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slides,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    //   speed: 2300,
    //   autoplaySpeed: 2300,
    //   cssEase: "linear",
    responsive: [
      {
        breakpoint: 867,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <SliderDisplaySection>
      <HeadingSection title={title}/>
        <SliderDisplayContainer>
          <div className='heading flexSB'>
          </div>
          <div className='content'>
            <Slider {...settings}>
              {items.map((item) => {
                return (
                  <>
                    <Ucard key={item.id} item={item} />
                  </>
                )
              })}
            </Slider>
          </div>
          <SliderDisplayContainerButtons>
            {buttons.map((button) => (
            <Link to={button.url}>
            <button className="secondary-button">{button.button}</button>
            </Link>
        ))}
         </SliderDisplayContainerButtons>
        </SliderDisplayContainer>
      </SliderDisplaySection>
    </>
  )
}

export default SliderDisplay


const SliderDisplaySection = styled.section`
  margin:10% auto;
`;

const SliderDisplayContainer = styled.div`
  max-width: 90%;
  margin: 5% auto;
`;

const SliderDisplayContainerButtons = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  gap: 10%;
  margin-top: 5%;

  @media (max-width: 840px) {
      font-size: ${({ size }) => (size ? "1.2rem" : "1rem")};
      margin-top: 10%;
    }

  @media (max-width: 440px) {
      font-size: ${({ size }) => (size ? "1.2rem" : "1rem")};
      margin-top: 15%;
    }
`;
