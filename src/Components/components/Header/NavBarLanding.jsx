import React, { useState } from "react";

import BurguerBtn from "./navBar/BurguerBtn";
import { Link as Contact } from "react-scroll";
import Header from "../../views/Landing/components/Header";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer id="menu-principal">
        <h3>
          Menú <span>Principal</span>
        </h3>
        <div className={`links ${clicked ? "active" : ""}`}>
          <Link onClick={handleClick} to="/nosotros">
            nosotros
          </Link>
          <Link onClick={handleClick} to="/terapias">
            terapias
          </Link>
          <Link onClick={handleClick} to="/donaciones">
            donaciones
          </Link>
          <Contact
            to="contacto"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={handleClick}
          >
            contacto
          </Contact>
          {/* <Contact
            to="contacto"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={handleClick}
          >
            hazte socio
          </Contact> */}
        </div>
        <div className="burguer">
          <BurguerBtn clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
      <Header />
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  background-color: #071c2f;
  height: 10vh;
  width: 100%;
  z-index: 50;

  h3 {
    color: #ffc0bc;
    font-weight: 400;
    margin-left: 5%;
    font-size: 2.2rem;
    span {
      font-weight: bold;
    }
  }
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #ffc0bc;
    text-decoration: none;
    margin-right: 5%;
    font-weight: 400;
  }

  @media (max-width: 440px) {
    h3 {
      font-size: 1.6rem;
    }
  }

  .links {
    position: absolute;
    width: 60%;
    top: -700px;
    left: -2000px;
    right: 0;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: #ffc0bc;
      font-size: 1.2rem;
      display: block;
    }

    @media (min-width: 1090px) {
      position: initial;
      margin: 0;
      a {
        font-size: 18px;
        margin-left: 30px;
        color: white;
        display: inline;

        &:hover {
          transition: all 0.5s ease-out;
          text-decoration: underline;
        }
      }
      display: block;
    }
  }

  .links.active {
    @media (max-width: 1090px) {
      background-color: #071c2f;
      height: 45%;
      width: 100%;
      display: block;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      top: 11%;
      left: 0;
      right: 0;
      text-align: center;

      a {
        font-size: 3rem;
        margin-top: 5%;
        color: #ffc0bc;
        cursor: pointer;

        &:hover {
          color: gray;
          font-weight: bold;
          transition: all 0.5s ease-out;
        }
      }
    }
  }

  .burguer {
    width: 50px;
    height: 50px;
    margin: 3%;

    @media (min-width: 1090px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 30%;
  height: 30%;
  margin-left: 30px;
  z-index: -1;
  transition: all 0.8s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
  }
`;
