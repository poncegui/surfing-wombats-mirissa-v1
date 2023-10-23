import { ApiCarousel, sliderSettings } from "./Carousel.Data";
import {
  Button,
  ButtonContainer,
  CarouselImage,
  ContainerButtonLink,
  ImageWrapper,
  ReviewSlider,
} from "./CarouselStyles";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Heading, Row, Section, TextWrapper } from "../../globalStyles";
import React, { useState } from "react";

import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [news, setNews] = useState(ApiCarousel);

  const handleUrl = (ev) => {
    setNews(ev.currentTarget);
  };

  return (
    <Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
      <Row justify="center" margin="1rem" wrap="wrap" align="center">
        <Heading width="auto" inverse margin="2rem">
         Hungry? 
        </Heading>
        <ButtonContainer>
          <IconContext.Provider value={{ size: "2rem", color: "#B95D5B" }}>
            <FaArrowCircleLeft onClick={sliderRef?.slickPrev} />
            <FaArrowCircleRight onClick={sliderRef?.slickNext} />
          </IconContext.Provider>
        </ButtonContainer>
      </Row>

      <ReviewSlider {...sliderSettings} ref={setSliderRef}>
        {ApiCarousel.map((el, index) => (
          <ImageWrapper key={index}>
            <CarouselImage src={el.image} alt={el.alt} />
            {/* <TextWrapper
              size="1.5rem"
              margin="1rem 0 0"
              weight="bold"
              align="center"
            >
              {el.title}
            </TextWrapper>
            <TextWrapper
              size="1.2rem"
              margin="1.5rem"
              color="#4f4f4f"
              align="center"
            >
              {el.description}
            </TextWrapper> */}
            <ContainerButtonLink>
              <Link to={el.url}>
                <Button onClick={handleUrl}>Lorem ipsum</Button>
              </Link>
            </ContainerButtonLink>
          </ImageWrapper>
        ))}
      </ReviewSlider>
    </Section>
  );
};

export default Carousel;
