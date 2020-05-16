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
import LineaSubProductosPorModelos from "./LineaSubProductosPorModelos";
import { Context } from '../../../../AppContext';
import PlegadoPiezasDisponiblesModelo from "components/Plegado/PlegadoCargaDeDatos/Formularios/PlegadoPiezasDisponiblesModelo";
const useStyles = makeStyles(styles);

export default function LineaSubProductoDisponible() {
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

  console.log(store.plegado_modelo_seleccionado, 
    store.SubProducto_seleccionado,
    store.plegadoPiezaSeleccionada, "all the values del botom")


  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <form>
              <PlegadoModelosDisponibles />
              <LineaSubProductosPorModelos />
              <PlegadoPiezasDisponiblesModelo />       
              <div className={classes.formCategory}>
                <small>*</small> Campos Requeridos
              </div>
              {store.plegado_modelo_seleccionado&&store.SubProducto_seleccionado&&store.plegadoPiezaSeleccionada?
                <Button
                  color="rose"
                  className={classes.registerButton}
                  onClick = {() => {actions.creandoPiezasIntegranSubProducto()}}
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
