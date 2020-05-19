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
import PlegadoModelosDisponibles from "../../../Plegado/PlegadoCargaDeDatos/Formularios/PlegadoModelosDisponibles";
import { Context } from '../../../../AppContext';
const useStyles = makeStyles(styles);

export default function PinturaFormularioPiezas() {
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
  const verifyLength = (value, length) => {
    if (value.length >= length) {
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
              <CustomInput
                success={piezaPlegadaState === "success"}
                error={piezaPlegadaState === "error"}
                labelText="Nombre del Sub-Producto *"
                id="nombre_subproducto"
                name="nombre_subproducto"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyLength(event.target.value, 6)) {
                      setPiezaPlegadaState("success");
                    } else {
                      setPiezaPlegadaState("error");
                    }
                    setPiezaPlegada(event.target.value);
                    actions.cargarDatosPlegado(event)
                  },
                  type: "sub_producto",
                  name: "nombre_subproducto"
                }}
              />
              <div className={classes.formCategory}>
                <small>*</small> Campos Requeridos
              </div>
              {(piezaPlegadaState === "success" &&
              store.nombre_subproducto )?
                <Button
                  color="rose"
                  className={classes.registerButton}
                  onClick = {() => {actions.creandoSubProductos()}}
                >
                  Ingresar
              </Button> : null}
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
