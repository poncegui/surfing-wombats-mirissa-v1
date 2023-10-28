import './cover/Cover';

import React from 'react';
import realPizza from '../Assets/images-food/real-pizza.jpg';
import styled from 'styled-components';

const RealPizza = () => {
  return (
    <RealPizzaContainer>
      <img className="video" src={realPizza} alt='real-pizza' />
      <TextContainer>
        <h3>TRUE ITALIAN PIZZA</h3>
        <p>Our owner, being a proud and passionate Italian, has the highest of standards for pizza!! So We decided to open an authentic Italian restaurant with wood fired pizzas, salads, specialty desserts and appetizers all made from scratch. The restaurant is also open for breakfast with a variety of fresh juices, smoothies and healthy meals to power you though another day of Wombat adventures.
        </p>
      </TextContainer>
    </RealPizzaContainer>
  );
};

export default RealPizza;

const RealPizzaContainer = styled.div`
  height: 100vh;
  width: 100%;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  .video {
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    opacity: 0.6;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  width: 50%;
  margin-right: 50px;
  text-align: right;

  h3 {
    color: #f9efe4;
    font-size: 3rem;
    letter-spacing: 2px;
    font-weight: 200;
  }
  p {
    margin-top: 1rem;
    color: black;
    font-size: 1.5rem;
    letter-spacing: 2px;
    font-weight: 100;
  }

  @media (max-width: 960px) {
    h3 {
      font-size: 70px;
      text-align: center;
    }
    p {
      text-align: center;
      font-size: 26px;
      width: 85%;
    }
  }
  @media (max-width: 440px) {
    align-items: start;
    justify-content: end;
    margin-right: 0px;
    text-align: center;
    width: 90%;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    h3 {
      font-size: 2.5rem;
      text-align: center;
    }

    p {
      display: none;
    }
  }
`;
