import { Container, SectionProjects } from "../../globalStyles";
import {
  ContentColumn,
  ContentRow,
  Heading,
  Img,
  ImgWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./ContentStyles.js";

import { Link } from "react-router-dom";

export const ContentProjects = ({
  topLine,
  headline,
  description,
  img,
  alt,
  reverse,
  inverse,
  id,
  click,
}) => {
  return (
    <SectionProjects id={id} inverse={inverse}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine>{topLine.text}</TopLine>
              <Heading inverse={inverse}>{headline}</Heading>
              <Subtitle inverse={inverse}>{description}</Subtitle>
              <TopLine>{click}</TopLine>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn>
            <Link
              to="https://www.google.com/maps/place/Surfing+Wombats+Mirissa/@5.9428195,80.4611778,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae13ff371739699:0x62393379e7a1f5d8!8m2!3d5.9428195!4d80.4637527!16s%2Fg%2F11j8qvphr3?entry=ttu"
              alt="map-mirissa"
              target="_blank"
            >
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Link>
          </ContentColumn>
        </ContentRow>
      </Container>
    </SectionProjects>
  );
};
