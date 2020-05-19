import React from "react";
import Linea1ModalCargarDatos from "../../components/Linea1/Linea1CargaDeDatos/Linea1ModalCargarDatos";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PanelOtEnUso from "components/VistaGeneral/PanelOtEnUso";
import LineaDetallePorSubProducto from "components/Linea1/Linea1DetallePorPiezas/LineaDetallePorSubProducto";
import CortePanels from "components/Corte/VistaGeneral/CortePanels";

function Linea1DetallePiezas() {
  return (
    <div className="App">
      <GridContainer>
        <GridItem xs={4} sm={4} md={4}>
          <Linea1ModalCargarDatos />
        </GridItem>
        <GridItem xs={8} sm={8} md={8}>
          <PanelOtEnUso />
        </GridItem>
      </GridContainer>
      <CortePanels />
      <LineaDetallePorSubProducto />
    </div>
  );
}

export default Linea1DetallePiezas;
