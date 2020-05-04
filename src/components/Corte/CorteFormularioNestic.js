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
import { Context } from '../../AppContext';

// style for this view
import styles from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.js";
import CorteSeleccioneModelo from "./CorteSeleccioneModelo";

const useStyles = makeStyles(styles);

export default function CorteFormularioNestic() {
  const { actions, store } = useContext(Context);
  // register form
  const [nombrePrograma, setNombrePrograma] = React.useState("");
  const [nombreProgramaNesticState, setNombreProgramaNesticState] = React.useState("");
  const [piezaCritica, setPiezaCritica] = React.useState("");
  const [piezaCriticaState, setPiezaCriticaState] = React.useState("");
  const [tiempoCorte, setTiempoCorte] = React.useState("");
  const [tiempoCorteState, setTiempoCorteState] = React.useState("");
  const [espesor, setEspesor] = React.useState("");
  const [espesorState, setEspesorState] = React.useState("");
 
  
  
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

    actions.crearProgramaNestic(nombrePrograma)
    actions.crearCantidadPiezasCriticas(piezaCritica)
    actions.crearTiempoCorte(tiempoCorte)
    actions.crearEspesor(espesor)
  };

  

  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <CorteSeleccioneModelo />
              <CustomInput
                success={nombreProgramaNesticState === "success"}
                error={nombreProgramaNesticState === "error"}
                labelText="Nombre del Programa Nestic *"
                id="registeremail"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyLength(event.target.value, 6)) {
                      setNombreProgramaNesticState("success");
                    } else {
                      setNombreProgramaNesticState("error");
                    }
                    setNombrePrograma(event.target.value);
                  },
                  type: "email"
                }}
              />
              <CustomInput
                success={piezaCriticaState === "success"}
                error={piezaCriticaState === "error"}
                labelText="Numero de piezas Criticas *"
                id="piezas_criticas"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyNumber(event.target.value)) {
                      setPiezaCriticaState("success");
                    } else {
                      setPiezaCriticaState("error");
                    }
                    setPiezaCritica(event.target.value);
                  },
                  type: "piezas_criticas",
                }}
              />
              <CustomInput
                success={tiempoCorteState === "success"}
                error={tiempoCorteState === "error"}
                labelText="Tiempo de Corte en minutos *"
                id="tiempo_corte"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyNumber(event.target.value))  {
                      setTiempoCorteState("success");
                    } else {
                      setTiempoCorteState("error");
                    }
                    setTiempoCorte(event.target.value);
                  },
                  type: "tiempo_corte"
                }}
              />
              <CustomInput
                success={espesorState === "success"}
                error={espesorState === "error"}
                labelText="Espesor en mm *"
                id="espesor"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyNumber(event.target.value)) {
                      setEspesorState("success");
                    } else {
                      setEspesorState("error");
                    }
                    setEspesor(event.target.value);
                  },
                  type: "espesor"
                }}
              />
              <div className={classes.formCategory}>
                <small>*</small> Campos Requeridos
              </div>
              {
                (nombreProgramaNesticState === "success" &&
                piezaCriticaState === "success" &&
                tiempoCorteState === "success" &&
                espesorState === "success")? 
              <Button
                color="rose"
                className={classes.registerButton}
                type='submit'
              >
                Ingresar
              </Button>: null}
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}