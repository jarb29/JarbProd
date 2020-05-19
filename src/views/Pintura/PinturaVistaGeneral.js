import React from "react";
import PinturaGeneral from "../../components/Pintura/PinturaGeneral/PinturaGeneral"

import PinturaPiezasDisponible from "../../components/Pintura/PinturaGeneral/PinturaPiezasDisponible"
import VistaGeneralPanels from "components/VistaGeneral/VistaGeneralPanels";
function PinturaVistaGeneral() {
  return (
    <div className="App">
      <PinturaGeneral />
      <VistaGeneralPanels />
      <PinturaPiezasDisponible />
    </div>
  );
}

export default PinturaVistaGeneral;
