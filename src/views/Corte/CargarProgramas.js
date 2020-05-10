import React from "react";
import CorteCargarProgramas from "../../components/Corte/VistaCargaProgramas/CorteCargarProgramas";
import CorteTablasModelosDisponibles from "../../components/Corte/VistaCargaProgramas/CorteTablasModelosDisponibles";
import CorteTablasModeloSeleccionados from "components/Corte/CargaProgramas/CorteTablasModeloSeleccionados";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CorteTablaNesticTiempo from "components/Corte/CargaProgramas/CorteTablaNesticTiempo";

function CargarPrograma() {
  return (
    <div className="App">
      <GridContainer>
        <GridItem xs={3} sm={3} md={3}>
          <CorteCargarProgramas />
        </GridItem>
        <GridItem xs={9} sm={9} md={9}>
          <CorteTablasModelosDisponibles />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={8} sm={8} md={18}>
          <CorteTablasModeloSeleccionados />
        </GridItem>
        <GridItem xs={4} sm={4} md={4}>
          <CorteTablaNesticTiempo />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default CargarPrograma;
