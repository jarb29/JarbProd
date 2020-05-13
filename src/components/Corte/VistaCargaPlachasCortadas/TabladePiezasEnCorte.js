import React, { useContext } from "react";
import { Context } from "../../../AppContext";
import { makeStyles } from "@material-ui/core/styles";
import Assignment from "@material-ui/icons/Assignment";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import PropTypes from "prop-types";
import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";
import CorteParaModelosEnUso from "components/Table/CorteParaModelosUso";

const useStyles = makeStyles(styles);

export default function TabladePiezasEnCorte(props) {
  const classes = useStyles();
  //const { store } = useContext(Context);
  const { piezas, valores, modelos } = props;

  console.log(piezas, "piezas por el props");
  console.log(valores, "valores por el props");
  console.log(modelos, "modelos que llegan");
  //let nombre_piezas_disponibles = [];
  //let valores_piezas = [];

  //const piezas = valores.map(valor => {
  // nombre_piezas_disponibles.push(Object.keys(valor));
  //});

  //const valoresPorPieza = valores.map(valor => {
  //console.log(valor, "despues del objecto por valores");
  //valores_piezas.push(Object.values(valor));
  //});

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Simple Table</h4>
          </CardHeader>
          <CardBody>
            <CorteParaModelosEnUso
              tableHead={["#", "Name", "Job Position", "Since", "Salary"]}
              tableData={[
                ["1", "Andrew Mike", "Develop", "2013", "€ 99,225"],
                ["2", "John Doe", "Design", "2012", "€ 89,241"],
                ["3", "Alex Mike", "Design", "2010", "€ 92,144"],
                ["4", "Mike Monday", "Marketing", "2013", "€ 49,990"],
                ["5", "Paul Dickens", "Communication", "2015", "€ 69,201"]
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
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

TabladePiezasEnCorte.propTypes = {
  piezas: PropTypes.array,
  valores: PropTypes.array,
  modelos: PropTypes.array
};
