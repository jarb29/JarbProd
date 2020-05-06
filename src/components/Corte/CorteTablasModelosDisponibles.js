import React, { useContext, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Context } from "../../AppContext";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";
import CortePruebaTabla from "../Table/CortePruebaTabla";

const useStyles = makeStyles(styles);

export default function CorteTablasModelosDisponibles() {
  const { store } = useContext(Context);

  console.log(store.modeloFiltrado);

  const nueva = store.modelosDisponibles.map(obj => {
    return Object.values(obj);
  });

  const reversedItems = nueva
    .map(function iterateItems(item) {
      return item;
    })
    .reverse();

  useEffect(() => { }, [store.modeloFiltrado]);

  const classes = useStyles();
  const fillButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button color={prop.color} className={classes.actionButton} key={key}>
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  const simpleButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button
        color={prop.color}
        simple
        className={classes.actionButton}
        key={key}
      >
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  const roundButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button
        round
        color={prop.color}
        className={classes.actionButton + " " + classes.actionButtonRound}
        key={key}
      >
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Programas Disponibles</h4>
          </CardHeader>
          <CardBody>
            <CortePruebaTabla
              striped
              tableHead={["#", "Fecha de Creacion", "Modelo", "Numero OT"]}
              tableData={reversedItems}
              customCellClasses={[classes.center, classes.right, classes.right]}
              customClassesForCells={[0, 5, 6]}
              customHeadCellClasses={[
                classes.center,
                classes.right,
                classes.right
              ]}
              customHeadClassesForCells={[0, 5, 6]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
