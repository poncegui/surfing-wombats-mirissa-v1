import { Row } from "../../globalStyles";
import Slider from "react-slick";
import styled from "styled-components";

export const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
  vertical-align: middle;
`;

export const ImageWrapper = styled.div`
  background-color: white;
  width: 90%;
  display: flex !important;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  outline: none;
  height:350px;
  border: solid 1px #B95D5B;

  @media (min-width: 440px) {
    border: 1px solid #bebebe;
  }
`;

export const ButtonContainer = styled(Row)`
  & svg {
    margin: 0 1rem;
    cursor: pointer;
  }

  & svg:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in;
  }
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

export const ReviewSlider = styled(Slider)`
  width: 100%;

  .slick-track {
    display: flex;
    padding: 30px;
    gap: 3rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    margin-bottom: 1;
    outline: none;
  }

  .slick-list {
    overflow: hidden;
  }
`;

export const Button = styled.button`
  background-color: #B95D5B;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: #f9efe4;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  margin: auto 0 0 0;
  border: solid 1px #B95D5B;
  border-radius: 0 0 10px 10px;

  &:hover {
    background-color: #112f4a;
    transition: background-color 0.2s ease-in;
  }
`;
export const ContainerButtonLink = styled.div`
  background-color: #B95D5B;
  font-size: 1.3rem;
  padding: 5px 10px;
  color: #f9efe4;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  margin: auto 0 0 0;
  border: solid 1px #B95D5B;
  border-radius: 0 0 10px 10px;

  &:hover {
    background-color: #112f4a;
    transition: background-color 0.2s ease-in;
  }
`;
