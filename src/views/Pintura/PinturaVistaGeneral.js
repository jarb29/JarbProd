import React, { useEffect, useContext } from "react";
import PinturaGeneral from "../../components/Pintura/PinturaGeneral/PinturaGeneral";
import { Context } from "../../AppContext";
import PinturaPiezasDisponible from "../../components/Pintura/PinturaGeneral/PinturaPiezasDisponible";
import VistaGeneralPanels from "components/VistaGeneral/VistaGeneralPanels";

function PinturaVistaGeneral(props) {
  const { store } = useContext(Context);
  useEffect(() => {
    if (!store.isAuthenticated) props.history.push("/auth/login-page");
  });
  return (
    <div className="App">
      <PinturaGeneral />
      <VistaGeneralPanels />
      <PinturaPiezasDisponible />
    </div>
  );
}

export default PinturaVistaGeneral;
