import React from "react";
import CorteGeneral from "../../components/Corte/VistaGeneral/CorteGeneral";
import CortePanels from "components/Corte/VistaGeneral/CortePanels";
import CorteTablaCorteDisponible from "components/Corte/VistaGeneral/CorteTablaCorteDisponible";

function CargarPrograma() {
  return (
    <div className="App">
      <CorteGeneral />
      <CortePanels />
      <CorteTablaCorteDisponible />
    </div>
  );
}

export default CargarPrograma;
