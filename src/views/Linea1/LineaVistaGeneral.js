import React from "react";
import LineaGeneral from "../../components/Linea1/LineaProductoDisponible/LineaGeneral";

import VistaGeneralPanels from "components/VistaGeneral/VistaGeneralPanels";
import LineaPiezasDisponible from "../../components/Linea1/LineaProductoDisponible/LineaPiezasDisponible";

function LineaVistaGeneral() {
  return (
    <div className="App">
      <LineaGeneral />
      <VistaGeneralPanels />
      <LineaPiezasDisponible />
    </div>
  );
}

export default LineaVistaGeneral;
