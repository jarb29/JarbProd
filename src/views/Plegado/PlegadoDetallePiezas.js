import React from "react";
import PlegadoDetallePorPiezas from "../../components/Plegado/PlegadoDetallePorPiezas/PlegadoDetallePorPiezas";
import PlegadoModalCargarDatos from "../../components/Plegado/PlegadoCargaDeDatos/PlegadoModalCargarDatos";

function PlegadoDetallePiezas() {
  return (
    <div className="App">
      <PlegadoModalCargarDatos />
      <PlegadoDetallePorPiezas />
    </div>
  );
}

export default PlegadoDetallePiezas;
