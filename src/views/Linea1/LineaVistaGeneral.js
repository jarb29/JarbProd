import React, { useEffect, useContext } from "react";
import LineaGeneral from "../../components/Linea1/LineaProductoDisponible/LineaGeneral";
import { Context } from "../../AppContext";
import VistaGeneralPanels from "components/VistaGeneral/VistaGeneralPanels";
import LineaPiezasDisponible from "../../components/Linea1/LineaProductoDisponible/LineaPiezasDisponible";

function LineaVistaGeneral(props) {
  const { store } = useContext(Context);
  useEffect(() => {
    if (!store.isAuthenticated) props.history.push("/auth/login-page");
  });
  return (
    <div className="App">
      <LineaGeneral />
      <VistaGeneralPanels />
      <LineaPiezasDisponible />
    </div>
  );
}

export default LineaVistaGeneral;
