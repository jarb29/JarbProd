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
import CorteSeleccioneOt from "./CorteSeleccioneOt";
import CorteSeleccioneNesti from "./CorteSeleccioneNesti";
import CorteSeleccioneOperador from "./CorteSeleccioneOperador";


const useStyles = makeStyles(styles);

export default function CorteCargarPlanchasCortadas() {
  const { actions, store } = useContext(Context);
  
  // register form

  const [registerPlanchas, setregisterPlanchas] = React.useState("");
  const [registerPlanchasState, setregisterPlanchasState] = React.useState("");


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
            <form /*onSubmit={e => actions.nesticACorte(e)}*/>
              <CorteSeleccioneOt />
              <CorteSeleccioneNesti />
              <CorteSeleccioneOperador />
              <CustomInput
                success={registerPlanchasState === "success"}
                error={registerPlanchasState === "error"}
                labelText="Cantidad de planchas cortadas *"
                id="planchas_cortadas"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event => {
                    if (verifyNumber(event.target.value)) {
                      setregisterPlanchasState("success");
                    } else {
                      setregisterPlanchasState("error");
                    }
                    setregisterPlanchas(event.target.value);
                    actions.cargarPlanchasCortadas(event);
                  },
                  name: "planchas_cortadas",
                }}
              />
              <div className={classes.formCategory}>
                <small>*</small> Campos Requeridos
              </div>
              {store.ot_cortada&& 
                  store.nestic_cortado &&
              registerPlanchasState === "success"?
              <Button
                color="rose"
                className={classes.registerButton}
                //type = "submit"
                onClick = {e => actions.nesticACorte(e)}
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
