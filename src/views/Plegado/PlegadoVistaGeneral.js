import React from "react";
import PlegadoGeneral from "components/Plegado/PlegadoGeneral/PlegadoGeneral";
import PlegadoPiezasDisponibles from "components/Plegado/PlegadoGeneral/PlegadoPiezasDisponible";

function PlegadoVistaGeneral() {
  return (
    <div className="App">
      <PlegadoGeneral />
      <PlegadoPiezasDisponibles />
    </div>
  );
}

export default PlegadoVistaGeneral;
