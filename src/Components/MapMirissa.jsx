import { ContentProjects } from "../Components/Content/ContentProjects";
import { React } from "react";
import { mapMirissaData } from "./Content/services/MapMirissaData";
import styled from "styled-components";

const MapMirissa = () => {
  return (
    <MapSection id="location">
      <ContentProjects {...mapMirissaData} inverse />
    </MapSection>
  );
};

export default MapMirissa;

const MapSection = styled.section`
  margin: 10% auto 15% auto;
`;
