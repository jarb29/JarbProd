import React, { useEffect, useContext } from "react";
import CorteGeneral from "../../components/Corte/VistaGeneral/CorteGeneral";
import CortePanels from "components/Corte/VistaGeneral/CortePanels";
import CorteTablaCorteDisponible from "components/Corte/VistaGeneral/CorteTablaCorteDisponible";
import { Context } from "../../AppContext";

function CargarPrograma(props) {
  const { store } = useContext(Context);
  useEffect(() => {
    if (!store.isAuthenticated) props.history.push("/auth/login-page");
  });
  return (
    <div className="App">
      <CorteGeneral />
      <CortePanels />
      <CorteTablaCorteDisponible />
    </div>
  );
}

export default CargarPrograma;
