import React from "react";
import PlegadoGeneral from "components/Plegado/PlegadoGeneral/PlegadoGeneral";
import PlegadoPiezasDisponibles from "components/Plegado/PlegadoGeneral/PlegadoPiezasDisponible";
import VistaGeneralPanels from "components/VistaGeneral/VistaGeneralPanels";

function PlegadoVistaGeneral() {
  return (
    <div className="App">
      <PlegadoGeneral />
      <VistaGeneralPanels />
      <PlegadoPiezasDisponibles />
    </div>
  );
}

export default PlegadoVistaGeneral;
