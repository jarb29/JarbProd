import React from "react";
import CorteCargarProgramas from "../../components/Corte/CorteCargarProgramas";
import CorteTablasModelosDisponibles from "../../components/Corte/CorteTablasModelosDisponibles";
import CorteTablasModeloSeleccionados from "components/Corte/CorteTablasModeloSeleccionados";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CorteNesticTiempo from "components/Corte/CorteNesticTiempo";

function CargarPrograma() {
  return (
    <div className="App">
      <GridContainer>
        <GridItem xs={4} sm={4} md={4}>
          <CorteCargarProgramas />
        </GridItem>
        <GridItem xs={8} sm={8} md={8}>
          <CorteTablasModelosDisponibles />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={8} sm={8} md={18}>
          <CorteTablasModeloSeleccionados />
        </GridItem>
        <GridItem xs={4} sm={4} md={4}>
          <CorteNesticTiempo />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default CargarPrograma;
