import styled from "styled-components";

export const ContentRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ContentColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media (max-width: 768px) {
    padding-bottom: 65px;
    > h1,
    p {
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > img {
    width: 300px;
    margin-left: -3px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: "flex-end";
  max-height: 1000px;
  justify-content: center;
  position: relative;
`;

export const TopLine = styled.div`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 550;
  letter-spacing: 1.4px;
  margin-bottom: 1.3rem;
  color: grey;
  text-decoration: none;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
  /* max-height: 700px; */
  z-index: 1;
  /* border-radius: 5%; */
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ inverse }) => (inverse ? "#071c2f" : "#FFC0BC")};

  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 440px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  font-size: 1.5rem;
  color: ${({ inverse }) => (inverse ? "#6a6a6a" : "#FFC0BC")};
`;

export const HomePage = styled.a`
  text-decoration: none;
  color: grey;
`;

export const ContentButton = styled.button`
  text-decoration: none;
  height: 4rem;
  padding: 1rem 32px;
  font-weight: 700;
  font-size: 3rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  color: ${({ inverse }) => (inverse ? "#071c2f" : "#FFC0BC")};
  border-radius: 4px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "0.6255rem 1.25rem")};
  font-size: ${({ fontBig }) => (fontBig ? "1.8rem" : "1.5rem")};
  outline: none;
  border: 2px solid ${({ inverse }) => (inverse ? "#071c2f" : "#FFC0BC")};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:before {
    background: ${({ inverse }) => (inverse ? "#071c2f" : "#FFC0BC")};
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.8s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    color: ${({ inverse }) => (inverse ? "white" : "black")};
  }
`;
