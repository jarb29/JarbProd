import React, { useEffect, useContext } from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CorteCargarProgramas from "components/Corte/VistaCargaProgramas/CorteCargarProgramas";
import CorteTablasModelosDisponibles from "components/Corte/VistaCargaProgramas/CorteTablasModelosDisponibles";
import CorteTablasModeloSeleccionados from "components/Corte/VistaCargaProgramas/CorteTablasModeloSeleccionados";
import CorteTablaNesticTiempo from "components/Corte/VistaCargaProgramas/CorteTablaNesticTiempo";
import { Context } from "../../AppContext";

function CargarPrograma(props) {
  const { store } = useContext(Context);
  useEffect(() => {
    if (!store.isAuthenticated) props.history.push("/auth/login-page");
  });
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
