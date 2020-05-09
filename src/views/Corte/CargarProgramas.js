import React from "react";
import CorteCargarProgramas from "../../components/Corte/CorteCargarProgramas";
import CorteTablasModelosDisponibles from "../../components/Corte/CorteTablasModelosDisponibles";
import CorteTablasModeloSeleccionados from "components/Corte/CorteTablasModeloSeleccionados";
import CorteNesticTiempo from "../../components/Corte/CorteNesticTiempo";

function CargarPrograma() {
  return (
    <div className="App">
      <CorteCargarProgramas />
      <CorteTablasModelosDisponibles />
      <CorteTablasModeloSeleccionados />
      <CorteNesticTiempo />
    </div>
  );
}

export default CargarPrograma;
