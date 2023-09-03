import {
  politicaPrivacidadDataOne,
  politicaPrivacidadDataThree,
  politicaPrivacidadDataTwo,
} from "./services/politicaPrivacidad";

import { ContentProjects } from "../../components/Content/ContentProjects";
import Footer from "../../components/Footer/Footer";
import NavBarViews from "../../components/Header/NavBarViews";
import PartnersList from "../../components/Partners/PartnerList";
import { React } from "react";
import ScrollToTop from "../../components/ScrollToUp";
import TitleSection from "../../components/TitleSection";

const PoliticaPrivacidad = () => {
  return (
    <>
      <ScrollToTop />
      <NavBarViews title="politica Privacidad" />
      <TitleSection title="Cookies y Privacidad" size />
      <ContentProjects {...politicaPrivacidadDataOne} inverse />
      <ContentProjects {...politicaPrivacidadDataTwo} reverse />
      <ContentProjects {...politicaPrivacidadDataThree} inverse />
      <PartnersList />
      <Footer />
    </>
  );
};

export default PoliticaPrivacidad;
