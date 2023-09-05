import {
  avisoLegalDataOne,
  avisoLegalDataThree,
  avisoLegalDataTwo,
} from "./services/avisoLegalData";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const AvisoLegal = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="Aviso Legal" />
      <TitleSection title="Politicas de Privacidad" size />
      <ContentProjects {...avisoLegalDataOne} inverse />
      <ContentProjects {...avisoLegalDataTwo} reverse />
      <ContentProjects {...avisoLegalDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default AvisoLegal;
