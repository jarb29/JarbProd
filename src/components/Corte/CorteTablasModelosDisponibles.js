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
  const classes = useStyles();
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
              tableHead={[
                "#",
                "Unidades en la OT",
                "Fecha de Creacion",
                "Modelo",
                "Numero OT"
              ]}
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
