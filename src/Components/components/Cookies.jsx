import "./Cookies.css";

import React from "react";
import styled from "styled-components";

const Cookies = ({ title, size, inverse, marginBottom, display }) => {
  //     const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
  // const avisoCookies = document.getElementById('aviso-cookies');
  // const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

  // let dataLayer = [];

  // if(!localStorage.getItem('cookies-aceptadas')){
  // 	avisoCookies.classList.add('activo');
  // 	fondoAvisoCookies.classList.add('activo');
  // } else {
  // 	dataLayer.push({'event': 'cookies-aceptadas'});
  // }

  // botonAceptarCookies.addEventListener('click', () => {
  // 	avisoCookies.classList.remove('activo');
  // 	fondoAvisoCookies.classList.remove('activo');

  // 	localStorage.setItem('cookies-aceptadas', true);

  // 	dataLayer.push({'event': 'cookies-aceptadas'});
  // });
  return (
    <div class="aviso-cookies" id="aviso-cookies">
      <img class="galleta" src="./img/cookie.svg" alt="Galleta" />
      <h3 class="titulo">Cookies</h3>
      <p class="parrafo">
        Utilizamos cookies propias y de terceros para mejorar nuestros
        servicios.
      </p>
      <button class="boton" id="btn-aceptar-cookies">
        De acuerdo
      </button>
      <a class="enlace" href="aviso-cookies.html">
        Aviso de Cookies
      </a>
    </div>
  );
};
export default Cookies;

const CookiesSectionContainer = styled.div`
  display: none;
  background: #fff;
  padding: 20px;
  width: calc(100% - 40px);
  max-width: 300px;
  line-height: 150%;
  border-radius: 10px;
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 100;
  padding-top: 60px;
  box-shadow: 0px 2px 20px 10px rgba(222, 222, 222, 0.25);
  text-align: center;

  img {
    max-width: 100px;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
  }
`;
