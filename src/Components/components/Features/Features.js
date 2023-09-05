import "../../styles/layout/features.css";

import { Link } from "react-router-dom";
import { servicesData } from "./data/FeaturesData";
import styled from "styled-components";
import { useState } from "react";

const Features = () => {
  const [pictoData, setPictoData] = useState(servicesData);

  const handleUrl = (ev) => {
    setPictoData(ev.currentTarget);
  };

  return (
    <>
      <SectionFeatures>
        <ButtonContainer>
          {pictoData.map((picto) => (
            <Icons key={picto.id} value={picto.name}>
              <h3>{picto.name}</h3>
              <Link to={picto.url}>
                <img src={picto.img} alt={picto.alt} onClick={handleUrl} />
              </Link>
            </Icons>
          ))}
        </ButtonContainer>
      </SectionFeatures>
    </>
  );
};
export default Features;

export const SectionFeatures = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  @media (min-width: 768px) {
  }
`;
SectionFeatures.displayName = "SectionFeatures";

export const TitleContainer = styled.div`
  background-color: #ffc0bc;
  display: flex;
  width: 100%;
  height: 70px;
  margin: auto;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }
    @media (max-width: 400px) {
      h2 {
        font-size: 20px;
      }
    }
  }
`;
TitleContainer.displayName = "TitleContainer";

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5%;
  margin: 5% 30% 8% 30%;

  @media (max-width: 420px) {
    margin: 5% 10% 10% 10%;
  }
`;
ButtonContainer.displayName = "ButtonContainer";

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  background: #e0e0e0;
  box-shadow: 20px 20px 20px #949494, -20px -20px 20px #ffffff;
  gap: 1rem;

  :hover {
    background-color: #ffc0bc;
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 1rem;
    padding: 0 0.3rem;
  }

  img {
    height: 60px;
    width: 60px;
    cursor: pointer;
  }

  @media (max-width: 950px) {
    box-shadow: 20px 20px 40px #949494, -20px -20px 30px #ffffff;

    h3 {
      font-size: 0.8rem;
      padding: 0 0.3rem;
    }

    img {
      height: 50px;
      width: 50px;
      cursor: pointer;
    }
    @media (max-width: 420px) {
      gap: 0.6rem;
      border-radius: 10px;
      width: 90%;
      box-shadow: 10px 10px 20px #949494, -10px -10px 20px #ffffff;

      h3 {
        font-size: 1rem;
        padding: 0 0.3rem;
      }

      img {
        height: 30px;
        width: 30px;
        cursor: pointer;
      }
    }
  }
`;
Icons.displayName = "Icons";
