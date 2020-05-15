import React from "react";
import PinturaModalCargarDatos from "../../components/Pintura/PinturaCargaDeDatos/PinturaModalCargarDatos";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PanelOtEnUso from "components/VistaGeneral/PanelOtEnUso";
import PinturaDetallePorPiezas from "../../components/Pintura/PinturaDetallePorPiezas/PinturaDetallePorPiezas";

function PlegadoDetallePiezas() {
  return (
    <div className="App">
      <GridContainer>
        <GridItem xs={3} sm={3} md={3}>
          <PinturaModalCargarDatos />
        </GridItem>
        <GridItem xs={9} sm={9} md={9}>
          <PanelOtEnUso />
        </GridItem>
      </GridContainer>
      <PinturaDetallePorPiezas />
    </div>
  );
}

export default PlegadoDetallePiezas;
