import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import VistaGeneralPanels from "components/VistaGeneral/VistaGeneralPanels";
import LineaGeneral from "../../components/Linea1/LineaProductoDisponible/LineaGeneral"


export default function Dashboard() {

  return (
    <div>
        <LineaGeneral />
      <VistaGeneralPanels />
    </div>
  );
}
