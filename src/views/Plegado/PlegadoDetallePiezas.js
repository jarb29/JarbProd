import React from "react";
import PlegadoDetallePorPiezas from "../../components/Plegado/PlegadoDetallePorPiezas/PlegadoDetallePorPiezas";
import PlegadoModalCargarDatos from "../../components/Plegado/PlegadoCargaDeDatos/PlegadoModalCargarDatos";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PanelOtEnUso from "components/VistaGeneral/PanelOtEnUso";

function PlegadoDetallePiezas() {
  return (
    <div className="App">
      <GridContainer>
        <GridItem xs={3} sm={3} md={3}>
          <PlegadoModalCargarDatos />
        </GridItem>
        <GridItem xs={9} sm={9} md={9}>
          <PanelOtEnUso />
        </GridItem>
      </GridContainer>
      <PlegadoDetallePorPiezas />
    </div>
  );
}

export default PlegadoDetallePiezas;
