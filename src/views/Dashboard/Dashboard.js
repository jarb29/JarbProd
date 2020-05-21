import React from "react";
import VistaGeneralPanels from "components/VistaGeneral/VistaGeneralPanels";
import LineaGeneral from "../../components/Linea1/LineaProductoDisponible/LineaGeneral";

export default function Dashboard() {
  return (
    <div>
      <LineaGeneral />
      <VistaGeneralPanels />
    </div>
  );
}
