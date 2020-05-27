import React, { useEffect, useContext } from "react";
import PlegadoGeneral from "components/Plegado/PlegadoGeneral/PlegadoGeneral";
import PlegadoPiezasDisponibles from "components/Plegado/PlegadoGeneral/PlegadoPiezasDisponible";
import VistaGeneralPanels from "components/VistaGeneral/VistaGeneralPanels";
import { Context } from "../../AppContext";

function PlegadoVistaGeneral(props) {
  const { store } = useContext(Context);
  useEffect(() => {
    if (!store.isAuthenticated) props.history.push("/auth/login-page");
  });
  return (
    <div className="App">
      <PlegadoGeneral />
      <VistaGeneralPanels />
      <PlegadoPiezasDisponibles />
    </div>
  );
}

export default PlegadoVistaGeneral;
