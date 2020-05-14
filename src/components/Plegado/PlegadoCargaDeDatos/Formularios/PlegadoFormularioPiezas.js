/*eslint-disable*/
import React, {useContext} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

// style for this view
import styles from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.js";
import PlegadoModelosDisponibles from "./PlegadoModelosDisponibles";
import PlegadoPiezasDisponiblesModelo from "./PlegadoPiezasDisponiblesModelo";
import PlegadoMaquinasDisponibles from "./PlegadoMaquinasDisponibles";
import PlegadoraOperadores from "./PlegadoraOperadores";
import { Context } from '../../../../AppContext';
const useStyles = makeStyles(styles);

export default function PlegadoFormularioPiezas() {
  const { actions, store } = useContext(Context);
  // register form
  const [piezaPlegada, setPiezaPlegada] = React.useState("");
  const [piezaPlegadaState, setPiezaPlegadaState] = React.useState("");


  // function that verifies if value contains only numbers
  const verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };


  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <form>
              <PlegadoModelosDisponibles />
              <PlegadoPiezasDisponiblesModelo />
              <PlegadoMaquinasDisponibles />
              <PlegadoraOperadores />
              <CustomInput
                success={piezaPlegadaState === "success"}
                error={piezaPlegadaState === "error"}
                labelText="Piezas Plegadas *"
                id="pieza_plegada"
                name="plegadoCantidadPiezas"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyNumber(event.target.value)) {
                      setPiezaPlegadaState("success");
                    } else {
                      setPiezaPlegadaState("error");
                    }
                    setPiezaPlegada(event.target.value);
                    actions.cargarDatosPlegado(event)
                  },
                  type: "pieza_plegada",
                  name: "plegadoCantidadPiezas"
                }}
              />
              <div className={classes.formCategory}>
                <small>*</small> Campos Requeridos
              </div>
              {(piezaPlegadaState === "success" &&
              store.plegado_modelo_seleccionado &&
              store.plegadoPiezaSeleccionada&&
              store.plegadoMaquinaSeleccionada&&
              store.plegadoOperadorSeleccionado&&
              store.plegadoCantidadPiezas)?
                <Button
                  color="rose"
                  className={classes.registerButton}
                  onClick = {() => {actions.piezasEnPlegado()}}
                >
                  Register
              </Button> : null}
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
