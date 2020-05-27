import React, { useEffect, useContext } from "react";
import CorteModelosEnUso from "components/Corte/VistaCargaPlachasCortadas/CorteModelosEnUso";
import CorteCargarPlanchas from "components/Corte/VistaCargaPlachasCortadas/CorteCargarPlanchas";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CorteCalculoPlanchas from "components/Corte/VistaCargaPlachasCortadas/CorteCalculoPlanchas";
import { Context } from "../../AppContext";

function CorteCargarPlanchasUsadas(props) {
  const { store } = useContext(Context);
  useEffect(() => {
    if (!store.isAuthenticated) props.history.push("/auth/login-page");
  });
  return (
    <div className="App">
      <GridContainer>
        <GridItem xs={3} sm={3} md={3}>
          <CorteCargarPlanchas />
        </GridItem>
        <GridItem xs={9} sm={9} md={9}>
          <CorteCalculoPlanchas />
        </GridItem>
      </GridContainer>
      <CorteModelosEnUso />
    </div>
  );
}

export default CorteCargarPlanchasUsadas;
