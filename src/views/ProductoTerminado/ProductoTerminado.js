import React, { useEffect, useContext } from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PanelOtEnUso from "components/VistaGeneral/PanelOtEnUso";
import ProduccionDetallePorSubProducto from "components/ProductoTerminado/ProductoTerminadoDetallePiezas/ProduccionDetallePorSubProducto";
import VistaGeneralPanels from "components/VistaGeneral/VistaGeneralPanels";
import ProductoTerminadoModalCargarDatos from "components/ProductoTerminado/ProductoTerminadoCargaDatos/ProductoTerminadoModalCargarDatos";
import { Context } from "../../AppContext";

function ProductoTerminado(props) {
  const { store } = useContext(Context);
  useEffect(() => {
    if (!store.isAuthenticated) props.history.push("/auth/login-page");
  });
  return (
    <div className="App">
      <GridContainer>
        <GridItem xs={4} sm={4} md={4}>
          <ProductoTerminadoModalCargarDatos />
        </GridItem>
        <GridItem xs={8} sm={8} md={8}>
          <PanelOtEnUso />
        </GridItem>
      </GridContainer>
      <VistaGeneralPanels />
      <ProduccionDetallePorSubProducto />
    </div>
  );
}

export default ProductoTerminado;
