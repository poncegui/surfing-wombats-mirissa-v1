import React, { useState } from "react";

import PartnersCard from "./components/Partners";
import TitleSection from "../TitleSection";
import { parnetsData } from "./services/ApiPartners";
import styled from "styled-components";

const PartnerList = ({ size, inverse }) => {
  const [partners] = useState(parnetsData);

  return (
    <>
      <TitleSection title="Cofinanciaciones" inverse={inverse} size={size} />
      <SectionPartners>
        <ContainerParnertList>
          {partners.map((partner) => {
            return (
              <PartnersCard
                key={partner.id}
                src={partner.src}
                alt={partner.alt}
                url={partner.url}
                target={partner.target}
              />
            );
          })}
        </ContainerParnertList>
      </SectionPartners>
    </>
  );
};

export default PartnerList;

export const SectionPartners = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 0 0 0px 0;
  padding: 2rem;

  section {
    background-color: #071c2f;
    height: 80px;
    width: 100%;
    color: #ffc0bc;
    display: grid;
    place-content: center;
  }

  h2 {
    font-size: 28px;
  }

  @media (max-width: 440px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0px;

    section {
      height: 60px;
    }
    h2 {
      font-size: 24px;
    }
  }
`;

export const ContainerParnertList = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 440px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    padding: 30px 0;
  }
`;
