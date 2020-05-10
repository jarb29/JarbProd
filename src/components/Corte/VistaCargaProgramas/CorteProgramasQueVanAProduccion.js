/*eslint-disable*/
import React, { useContext } from "react";
import { Context } from "../../../AppContext";

// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import BugReport from "@material-ui/icons/BugReport";
import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";

const useStyles = makeStyles(styles);

export default function CorteProgramasQueVanAProduccion(props) {
  const { actions } = useContext(Context);
  const classes = useStyles();
  const {
    nestic
  } = props;
  const [alert, setAlert] = React.useState(null);

  
  const programas = () =>{
    actions.programasAProduccion(nestic);
  };


  const warningWithConfirmAndCancelMessage = (nestic) => {
    setAlert(
      <SweetAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Agregar el programa a produccion?"
        onConfirm={() => {successAgregado();
        programas()}}
        onCancel={() => cancelproceso()}
        confirmBtnCssClass={classes.button + " " + classes.success}
        cancelBtnCssClass={classes.button + " " + classes.danger}
        confirmBtnText="Si, agregar!"
        cancelBtnText="Cancelar"
        showCancel
      >
        No se puede deshacer esta opcion!
      </SweetAlert>
    );
  };

  const successAgregado = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Agregado!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        Su prograga fue agregado
      </SweetAlert>
    );
  };
  const cancelproceso = () => {
    setAlert(
      <SweetAlert
        danger
        style={{ display: "block", marginTop: "-100px" }}
        title="Cancelado"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        El programa no se agrego:)
      </SweetAlert>
    );
  };
  const hideAlert = () => {
    setAlert(null);
  };
  return (
     
      <GridContainer xs={4} sm={4} md={4}>
           {alert}
        <GridItem xs={4} sm={4} md={4}>
                <Button
                  color="rose"
                  onClick={warningWithConfirmAndCancelMessage}
                  size="sm" 
                >
                <BugReport className={classes.actionButtonRound} />
                </Button>
        </GridItem>
      </GridContainer>
  );
}
