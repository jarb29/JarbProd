import React from "react";
import PlegadoDetalle from "components/Plegado/PlegadoDetalle";
import PlegadoResumenLineas from "components/Plegado/PlegadoResumenLineas";

function PlegadoVistaGeneral() {
  return (
    <div className="App">
      <PlegadoResumenLineas />
      <PlegadoDetalle />
    </div>
  );
}

export default PlegadoVistaGeneral;
