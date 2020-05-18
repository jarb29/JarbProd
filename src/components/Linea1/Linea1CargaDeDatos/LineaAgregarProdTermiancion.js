/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Heading from "components/Heading/Heading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";

const useStyles = makeStyles(styles);

export default function LineaAgregarProdTermiancion() {
  const classes = useStyles();
  const [alert, setAlert] = React.useState(null);
  const [inputValue, setInputValue] = React.useState(null);
  const basicAlert = () => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Here's a message!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      />
    );
  };




  const hideAlert = () => {
    setAlert(null);
  };
  return (
    <div>
      {alert}
      <GridContainer>
      
          <Card>
            <CardBody>
              <div className={classes.center}>
                <h5>Produccion Terminacion</h5>
                <Button color="rose" onClick={basicAlert}>
                  Try me!
                </Button>
              </div>
            </CardBody>
          </Card>
       
      </GridContainer>
    </div>
  );
}
