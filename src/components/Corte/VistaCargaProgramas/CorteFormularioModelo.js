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


const useStyles = makeStyles(styles);

export default function CorteFormularioModelo() {
  const { actions, store } = useContext(Context);
  
  // register form
  const [numeroOt, setNumeroOt] = React.useState("");
  const [numeroOtState, setNumeroOtState] = React.useState("");
  const [nombrePrograma, setNombrePrograma] = React.useState("");
  const [nombreProgramaState, setNombreProgramaState] = React.useState("");
  const [confirmNombrePrograma, setConfirmNombrePrograma] = React.useState(
    ""
  );
  const [
    confirmNombredelProgramaState,
    setConfirmNombreProgramaState
  ] = React.useState("");
  const [cantidadOt, setCantidadOt] = React.useState("");
  const [cantidadOtState, setCantidadOtState] = React.useState("");


  

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
    actions.crearModelo(nombrePrograma)
    actions.crearOT(numeroOt)
    actions.cantidadOT(cantidadOt)
  };


 
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <form onSubmit={e => actions.creandoModelo(e)}>
              <CustomInput
                success={numeroOtState === "success"}
                error={numeroOtState === "error"}
                labelText="Numero de OT *"
                id="numero_ot"
                name="numero_ot"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyNumber(event.target.value)) {
                      setNumeroOtState("success");
                    } else {
                      setNumeroOtState("error");
                    }
                    setNumeroOt(event.target.value);
                  },
                  type: "numero_ot"
                }}
              />
              <CustomInput
                success={nombreProgramaState === "success"}
                error={nombreProgramaState === "error"}
                labelText="Nombre del Programa *"
                id="nombredelprograma"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyLength(event.target.value, 1)) {
                      setNombreProgramaState("success");
                    } else {
                      setNombreProgramaState("error");
                    }
                    setNombrePrograma(event.target.value);
                  },
                  type: "nombre_programa",
                 
                }}
              />
              <CustomInput
                success={confirmNombredelProgramaState === "success"}
                error={confirmNombredelProgramaState === "error"}
                labelText="Repetir nombre del Programa *"
                value = "repetir_nombre_programa"
                id="repetir_nombre_programa"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (nombrePrograma === event.target.value) {
                      setConfirmNombreProgramaState("success");
                    } else {
                      setConfirmNombreProgramaState("error");
                    }
                    setConfirmNombrePrograma(event.target.value);
                  },
                  type: "nombre_programa",
                  
                }}
              />
              <CustomInput
                success={cantidadOtState === "success"}
                error={cantidadOtState === "error"}
                labelText="Cantidad a fabricar en la OT *"
                value = "Cantidad en la Ot"
                id="COT"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyNumber(event.target.value)) {
                      setCantidadOtState("success");
                    } else {
                      setCantidadOtState("error");
                    }
                    setCantidadOt(event.target.value);
                  },
                  type: "cantidadOt",
                }}
              />
              <div className={classes.formCategory}>
                <small>*</small> Campos Requeridos
              </div>
              {
              (confirmNombredelProgramaState === "success" && 
              numeroOtState ==="success"&& 
              cantidadOtState === "success")?
              <Button
                color="rose"
                className={classes.registerButton}
                onMouseOver = {handleSubmit}
                type = "submit"
              >
                Agregar
              </Button>: null }
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
