import React from "react";
import PlegadoGeneral from "components/Plegado/PlegadoGeneral/PlegadoGeneral";
import PlegadoPiezasDisponibles from "components/Plegado/PlegadoGeneral/PlegadoPiezasDisponible";
import PlegadoPanels from "components/Plegado/PlegadoGeneral/PlegadoPanels";

function PlegadoVistaGeneral() {
  return (
    <div className="App">
      <PlegadoGeneral />
      <PlegadoPanels />
      <PlegadoPiezasDisponibles />
    </div>
  );
}

export default PlegadoVistaGeneral;
