import { Container, Section } from "../../globalStyles";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn,
} from "./ContentStyles.js";

export const Content = ({
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  reverse,
  inverse,
}) => {
  return (
    <Section inverse={inverse}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine>{topLine.text}</TopLine>
              <Heading inverse={inverse}>{headline}</Heading>
              <Subtitle inverse={inverse}>{description}</Subtitle>
              <ContentButton
                transition={{ delay: 1, duration: 0.6 }}
                inverse={inverse}
              >
                {buttonLabel}
              </ContentButton>
              <ContentButton
                transition={{ delay: 1, duration: 0.6 }}
                inverse={inverse}
              >
                {buttonLabel}
              </ContentButton>
              <ContentButton
                transition={{ delay: 1, duration: 0.6 }}
                inverse={inverse}
              >
                {buttonLabel}
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
