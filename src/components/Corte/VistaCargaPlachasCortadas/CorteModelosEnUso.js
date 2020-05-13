import React, { useContext } from "react";
import { Context } from "../../../AppContext";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import TabladePiezasEnCorte from "./TabladePiezasEnCorte";

const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: "#3C4858",
    textDecoration: "none",
    textAlign: "center"
  },
  cardCategory: {
    margin: "0",
    color: "#999999"
  }
};

const useStyles = makeStyles(styles);

export default function CorteNesticEnUso() {
  const classes = useStyles();
  const { store } = useContext(Context);
  const modelos = Object.keys(store.estufasEnProduccion_datos_totales);
  const valores = Object.values(store.estufasEnProduccion_datos_totales);
  let nombre_piezas_disponibles = [];
  let valores_piezas = [];

  const piezas = valores.map(valor => {
    nombre_piezas_disponibles.push(Object.keys(valor));
  });

  const valoresPorPieza = valores.map(valor => {
    console.log(valor, "despues del objecto por valores");
    valores_piezas.push(Object.values(valor));
  });

  console.log(modelos, "modelos despues del aplicaicon");

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          {modelos.map((valor, index) => {
            return (
              <Card key={index}>
                <CardHeader key={index}>
            <h4 className={classes.cardTitle}>{valor}</h4>
                </CardHeader>
                <CardBody key={index}>
                  <TabladePiezasEnCorte  />
                </CardBody>
              </Card>
            );
          })}
        </GridItem>
      </GridContainer>
    </div>
  );
}
