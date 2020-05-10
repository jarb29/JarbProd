import React from "react";
import CorteNesticEnUso from "components/Corte/CorteNesticEnUso";
import CorteCargarPlanchas from "components/Corte/CorteCargarPlanchas";
import PanelProgramasProduccion from "components/Corte/PanelProgramasProduccion";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

function CorteCargarPlanchasUsadas() {
  return (
    <div className="App">
      <GridContainer>
        <GridItem xs={3} sm={3} md={3}>
          <CorteCargarPlanchas />
        </GridItem>
        <GridItem xs={9} sm={9} md={9}>
          <PanelProgramasProduccion />
        </GridItem>
      </GridContainer>
      <CorteNesticEnUso />
    </div>
  );
}

export default CorteCargarPlanchasUsadas;
