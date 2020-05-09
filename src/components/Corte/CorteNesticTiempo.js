import React, { useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Context } from "../../AppContext";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";
import CortePruebaTiempo from "components/Table/CortePruebaTiempo";

const useStyles = makeStyles(styles);

export default function CorteNesticTiempo() {
  const { store } = useContext(Context);
  const classes = useStyles();

  console.log(store.valorTiempoNesticCalculado, "En el timepo");

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Tiempo</h4>
          </CardHeader>
          <CardBody>
            <CortePruebaTiempo
              tableHead={["Modelo", "Tiempo Requerido"]}
              tableData={store.valorTiempoNesticCalculado}
              customCellClasses={[classes.center, classes.right, classes.right]}
              customClassesForCells={[0, 4, 5]}
              customHeadCellClasses={[
                classes.center,
                classes.right,
                classes.right
              ]}
              customHeadClassesForCells={[0, 4, 5]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
