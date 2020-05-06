import React from "react";
import CorteCargarProgramas from "../../components/Corte/CorteCargarProgramas";
import CorteTablasModelosDisponibles from "../../components/Corte/CorteTablasModelosDisponibles";
import CorteTablasModeloSeleccionados from "components/Corte/CorteTablasModeloSeleccionados";

function CargarPrograma() {
  return (
    <div className="App">
      <CorteCargarProgramas />
      <CorteTablasModelosDisponibles />
      <CorteTablasModeloSeleccionados />
    </div>
  );
}

export default CargarPrograma;
