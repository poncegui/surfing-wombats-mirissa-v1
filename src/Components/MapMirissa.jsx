import { ContentProjects } from "../Components/Content/ContentProjects";
import { React } from "react";
import {mapMirissaData} from "./Content/services/MapMirissaData";

const MapMirissa = () => {
    return (
        <ContentProjects {...mapMirissaData} inverse />
    );
  };

  export default MapMirissa;