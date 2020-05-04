/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";

// material ui icons
import MailOutline from "@material-ui/icons/MailOutline";
import Contacts from "@material-ui/icons/Contacts";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardText from "components/Card/CardText.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// style for this view
import styles from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.js";
import CorteSeleccioneNestic from "./CorteSeleccioneNestic";

const useStyles = makeStyles(styles);

export default function CorteFormularioPiezas() {
  // register form
  const [nombrePieza, setNombrePieza] = React.useState("");
  const [nombrePiezaState, setNombrePiezaState] = React.useState("");
  const [cantidadPiezas, setCantidadPiezas] = React.useState("");
  const [cantidadPiezasState, setCantidadPiezasState] = React.useState("");
  const [longitudPieza, setLongitudPieza] = React.useState("");
  const [longitudPiezaState, setLongitudPiezaState] = React.useState("");
  const [registerCheckbox, setregisterCheckbox] = React.useState(false);
  const [registerCheckboxState, setregisterCheckboxState] = React.useState("");
  // login form
  const [loginEmail, setloginEmail] = React.useState("");
  const [loginEmailState, setloginEmailState] = React.useState("");
  const [loginPassword, setloginPassword] = React.useState("");
  const [loginPasswordState, setloginPasswordState] = React.useState("");
  // type validation
  const [required, setrequired] = React.useState("");
  const [requiredState, setrequiredState] = React.useState("");
  const [typeEmail, settypeEmail] = React.useState("");
  const [typeEmailState, settypeEmailState] = React.useState("");
  const [number, setnumber] = React.useState("");
  const [numberState, setnumberState] = React.useState("");
  const [url, seturl] = React.useState("");
  const [urlState, seturlState] = React.useState("");
  const [equalTo, setequalTo] = React.useState("");
  const [whichEqualTo, setwhichEqualTo] = React.useState("");
  const [equalToState, setequalToState] = React.useState("");
  // range validation
  const [minLength, setminLength] = React.useState("");
  const [minLengthState, setminLengthState] = React.useState("");
  const [maxLength, setmaxLength] = React.useState("");
  const [maxLengthState, setmaxLengthState] = React.useState("");
  const [range, setrange] = React.useState("");
  const [rangeState, setrangeState] = React.useState("");
  const [minValue, setminValue] = React.useState("");
  const [minValueState, setminValueState] = React.useState("");
  const [maxValue, setmaxValue] = React.useState("");
  const [maxValueState, setmaxValueState] = React.useState("");
 
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
 

 

  
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <form>
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
                labelText="Longitud Pieza *"
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
              <Button
                color="rose"
                className={classes.registerButton}
              >
                Register
              </Button>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}