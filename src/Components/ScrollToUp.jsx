import React, { useEffect, useState } from "react";

import { FaChevronCircleUp } from "react-icons/fa";
import styled from "styled-components";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton
      style={{ display: isVisible ? "block" : "none" }}
      onClick={goTop}
      aria-label="inicio"
    >
      <FaChevronCircleUp />
    </ScrollButton>
  );
};

export default ScrollToTop;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 40px;
  z-index: 1;
  cursor: pointer;
  color: #b95d5b;
  right: 2%;
  background: none;
  border-radius: 50px;
  padding: 0px;
  border: none;
  opacity: 0.8;
  font-size: 2.5rem;
  margin-right: 1.5rem;

  @media (max-width: 440px) {
    font-size: 2.1rem;
  }
`;
