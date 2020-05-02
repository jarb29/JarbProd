import React from "react";
import PlegadoDetallePorPiezas from "components/Plegado/PlegadoDetallePorPiezas";
import PlegadoCargarDatos from "components/Plegado/PlegadoCargarDatos";

function PlegadoDetallePiezas() {
  return (
    <div className="App">
      <PlegadoCargarDatos />
      <PlegadoDetallePorPiezas />
    </div>
  );
}

export default PlegadoDetallePiezas;
