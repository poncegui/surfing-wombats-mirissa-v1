import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./SliderDisplay.css"

import { Link } from "react-router-dom"
import React from "react"
import Slider from "react-slick"
import Ucard from "./Ucard"
import styled from 'styled-components';

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i class='fa fa-chevron-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i class='fa fa-chevron-left'></i>
      </button>
    </div>
  )
}
const SliderDisplay = ({ items, title , slides}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <SliderDisplaySection>
        <SliderDisplayContainer>
          <div className='heading flexSB'>
            <h1>{title}</h1>
            <Link to='/'>View All</Link>
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
        </SliderDisplayContainer>
      </SliderDisplaySection>
    </>
  )
}

export default SliderDisplay


const SliderDisplaySection = styled.section`

  margin:15% auto;
`;

const SliderDisplayContainer = styled.div`
  max-width: 90%;
  margin: auto;
`;
