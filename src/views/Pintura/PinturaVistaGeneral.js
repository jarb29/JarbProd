import React from "react";
import PinturaGeneral from "../../components/Pintura/PinturaGeneral/PinturaGeneral"
import PinturaPanels from "../../components/Pintura/PinturaGeneral/PinturaPanels"
import PinturaPiezasDisponible from "../../components/Pintura/PinturaGeneral/PinturaPiezasDisponible"
function PinturaVistaGeneral() {
  return (
    <div className="App">
      <PinturaGeneral />
      <PinturaPanels />
      <PinturaPiezasDisponible />
    </div>
  );
}

export default PinturaVistaGeneral;
