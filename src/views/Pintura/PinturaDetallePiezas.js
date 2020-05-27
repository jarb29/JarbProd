import React, { useEffect, useContext } from "react";
import PinturaModalCargarDatos from "../../components/Pintura/PinturaCargaDeDatos/PinturaModalCargarDatos";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PanelOtEnUso from "components/VistaGeneral/PanelOtEnUso";
import PinturaDetallePorPiezas from "../../components/Pintura/PinturaDetallePorPiezas/PinturaDetallePorPiezas";
import { Context } from "../../AppContext";

function PinturaDetallePiezas(props) {
  const { store } = useContext(Context);
  useEffect(() => {
    if (!store.isAuthenticated) props.history.push("/auth/login-page");
  });
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

export default PinturaDetallePiezas;
