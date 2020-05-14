import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons

import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

const useStyles = makeStyles(styles);

export default function PlegadoTablasPiezasPersona() {
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
          <Table
            tableHead={[
              "#",
              "Name",
              "Job Position",
              "Since",
              "Salary",
              "Actions"
            ]}
            tableData={[
              ["1", "Andrew Mike", "Develop", "2013", "€ 99,225", fillButtons],
              ["2", "John Doe", "Design", "2012", "€ 89,241", roundButtons],
              ["3", "Alex Mike", "Design", "2010", "€ 92,144", simpleButtons],
              [
                "4",
                "Mike Monday",
                "Marketing",
                "2013",
                "€ 49,990",
                roundButtons
              ],
              [
                "5",
                "Paul Dickens",
                "Communication",
                "2015",
                "€ 69,201",
                fillButtons
              ]
            ]}
            customCellClasses={[classes.center, classes.right, classes.right]}
            customClassesForCells={[0, 4, 5]}
            customHeadCellClasses={[
              classes.center,
              classes.right,
              classes.right
            ]}
            customHeadClassesForCells={[0, 4, 5]}
          />
        </Card>
      </GridItem>
    </GridContainer>
  );
}
