import React, { useEffect, useContext } from "react";
import VistaGeneralPanels from "components/VistaGeneral/VistaGeneralPanels";
import LineaGeneral from "../../components/Linea1/LineaProductoDisponible/LineaGeneral";
import { Context } from "../../AppContext";
import { withRouter } from "react-router-dom";

function Dashboard(props) {
  const { store } = useContext(Context);

  useEffect(() => {
    if (!store.isAuthenticated) props.history.push("/auth/login-page");
  });

  return (
    <div>
      <LineaGeneral />
      <VistaGeneralPanels />
    </div>
  );
}

export default withRouter(Dashboard);
