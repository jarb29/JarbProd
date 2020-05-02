import React from "react";
import CorteCargarProgramas from "../../components/Corte/CorteCargarProgramas";
import CorteTablas from "../../components/Corte/CorteTablas";

function CargarPrograma() {
  return (
    <div className="App">
      <CorteCargarProgramas />
      <CorteTablas />
    </div>
  );
}

export default CargarPrograma;
