import React from "react";
import CorteNesticEnUso from "components/Corte/CorteNesticEnUso";
import CorteCargarPlanchas from "components/Corte/CorteCargarPlanchas";

function CorteCargarPlanchasUsadas() {
  return (
    <div className="App">
      <CorteCargarPlanchas />
      <CorteNesticEnUso />
    </div>
  );
}

export default CorteCargarPlanchasUsadas;
