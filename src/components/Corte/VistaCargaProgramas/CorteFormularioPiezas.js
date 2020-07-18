/*eslint-disable*/
import React, {useContext}  from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { Context } from '../../../AppContext';

// style for this view
import styles from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.js";
import CorteSeleccioneNestic from "./CorteSeleccioneNestic";
import CorteSeleccioneModelo from "./CorteSeleccioneModelo";

const useStyles = makeStyles(styles);

export default function CorteFormularioPiezas(props) {
  const { actions, store } = useContext(Context);
  // register form
  const [nombrePieza, setNombrePieza] = React.useState("");
  const [nombrePiezaState, setNombrePiezaState] = React.useState("");
  const [cantidadPiezas, setCantidadPiezas] = React.useState("");
  const [cantidadPiezasState, setCantidadPiezasState] = React.useState("");
  const [longitudPieza, setLongitudPieza] = React.useState("");
  const [longitudPiezaState, setLongitudPiezaState] = React.useState("");
  
 
  // function that verifies if a string has a given length or not
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  // function that verifies if value contains only numbers
  const verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {

    actions.crearNombrePieza(nombrePieza)
    actions.crearCantidadPiezasPorPlancha(cantidadPiezas)
    actions.crearLongitudCortePieza(longitudPieza)
  };


   
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <form onSubmit={e => actions.creandoPiezas(e,  props.history)}>
              <CorteSeleccioneModelo />
              <CorteSeleccioneNestic />
              <CustomInput
                success={nombrePiezaState === "success"}
                error={nombrePiezaState === "error"}
                labelText="Nombre de la Pieza *"
                id="nombre_pieza"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyLength(event.target.value, 5)) {
                      setNombrePiezaState("success");
                    } else {
                      setNombrePiezaState("error");
                    }
                    setNombrePieza(event.target.value);
                  },
                  type: "nombre_pieza"
                }}
              />
              <CustomInput
                success={cantidadPiezasState === "success"}
                error={cantidadPiezasState === "error"}
                labelText="Cantidad piezas por Plancha *"
                id="cantidad"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyNumber(event.target.value)) {
                      setCantidadPiezasState("success");
                    } else {
                      setCantidadPiezasState("error");
                    }
                    setCantidadPiezas(event.target.value);
                  },
                  type: "cantidad"
                }}
              />
              <CustomInput
                success={longitudPiezaState === "success"}
                error={longitudPiezaState === "error"}
                labelText="Longitud de la Pieza en cm*"
                id="longitud_pieza"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyNumber(event.target.value)) {
                      setLongitudPiezaState("success");
                    } else {
                      setLongitudPiezaState("error");
                    }
                    setLongitudPieza(event.target.value);
                  },
                  type: "longitudPieza"
                }}
              />
              <div className={classes.formCategory}>
                <small>*</small> Required fields
              </div>
              {
              (nombrePiezaState === "success" &&
              cantidadPiezasState === "success" &&
              longitudPiezaState === "success")?
              <Button
                color="rose"
                className={classes.registerButton}
                onMouseOver = {handleSubmit}
                type='submit'
              >
                Register
              </Button>: null } 
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}