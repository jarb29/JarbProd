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
import { Context } from '../../AppContext';

// style for this view
import styles from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.js";


const useStyles = makeStyles(styles);

export default function CorteFormularioModelo() {
  const { actions, store } = useContext(Context);
  
  // register form
  const [registerEmail, setregisterEmail] = React.useState("");
  const [registerEmailState, setregisterEmailState] = React.useState("");
  const [registerPassword, setregisterPassword] = React.useState("");
  const [registerPasswordState, setregisterPasswordState] = React.useState("");
  const [registerConfirmPassword, setregisterConfirmPassword] = React.useState(
    ""
  );
  const [
    registerConfirmPasswordState,
    setregisterConfirmPasswordState
  ] = React.useState("");


  

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
    actions.crearModelo(registerConfirmPassword)
    actions.crearOT(registerEmail)
  };


 
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <form onSubmit={handleSubmit}>
              <CustomInput
                success={registerEmailState === "success"}
                error={registerEmailState === "error"}
                labelText="Numero de OT *"
                id="numero_ot"
                name="numero_ot"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyNumber(event.target.value)) {
                      setregisterEmailState("success");
                    } else {
                      setregisterEmailState("error");
                    }
                    
                    setregisterEmail(event.target.value);
                  },
                  type: "numero_ot"
                }}
              />
              <CustomInput
                success={registerPasswordState === "success"}
                error={registerPasswordState === "error"}
                labelText="Nombre del Programa *"
                id="nombredelprograma"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyLength(event.target.value, 1)) {
                      setregisterPasswordState("success");
                    } else {
                      setregisterPasswordState("error");
                    }
                    setregisterPassword(event.target.value);
                  },
                  type: "nombre_programa",
                 
                }}
              />
              <CustomInput
                success={registerConfirmPasswordState === "success"}
                error={registerConfirmPasswordState === "error"}
                labelText="Repetir nombre del Programa *"
                value = "repetir_nombre_programa"
                id="repetir_nombre_programa"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (registerPassword === event.target.value) {
                      setregisterConfirmPasswordState("success");
                    } else {
                      setregisterConfirmPasswordState("error");
                    }
                    setregisterConfirmPassword(event.target.value);
                  },
                  type: "nombre_programa",
                  
                }}
              />
              <div className={classes.formCategory}>
                <small>*</small> Campos Requeridos
              </div>
              {
              (registerConfirmPasswordState === "success" && registerEmailState ==="success")?<Button
                color="rose"
                className={classes.registerButton}
                onClick = {handleSubmit}
                //type='submit'
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
