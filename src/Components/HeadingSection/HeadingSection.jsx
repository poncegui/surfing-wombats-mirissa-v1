import React from "react";
import styled from "styled-components";

const HeadingSection = ({ title }) => {
  return (
    <HeadingStyles>
      <h2>{title}</h2>
    </HeadingStyles>
  );
};
export default HeadingSection;

const HeadingStyles = styled.div`
  border-radius: 5px;
  margin: 30px 0;
  height: 50px;
  background-position: center;
  margin-top: 15%;

  h2 {
    font-weight: 400;
    background: #b95d5b;
    color: #f9efe4;
    height: 50px;
    width: 100%;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 24px;

    @media (max-width: 768px) {
      background-color: transparent;
      color: #b95d5b;
      font-size: 28px;
    }
  }
`;
