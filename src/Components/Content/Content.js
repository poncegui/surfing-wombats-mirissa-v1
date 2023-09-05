import { Container, Section, Title } from "../../globalStyles";
import {
  ContentButton,
  ContentColumn,
  ContentRow,
  Heading,
  HomePage,
  Img,
  ImgWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./ContentStyles.js";
import React, { useState } from "react";

export const Content = ({
  alt,
  buttonLabel,
  description,
  headline,
  href,
  img,
  inverse,
  reverse,
  target,
  topLine,
  title,
  id,
}) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <Section id={id} inverse={inverse}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <Title>{title}</Title>
              <TopLine>{topLine.text}</TopLine>
              <Heading inverse={inverse}>{headline}</Heading>
              <Subtitle inverse={inverse}>{description}</Subtitle>
              <ContentButton
                transition={{ delay: 1, duration: 0.6 }}
                inverse={inverse}
              >
                <HomePage
                  onClick={handleClick}
                  href={href}
                  alt={alt}
                  target={target}
                >
                  {buttonLabel}
                </HomePage>
              </ContentButton>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
