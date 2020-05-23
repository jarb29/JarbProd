import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Info from "@material-ui/icons/Info";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import CorteTablaDisponEstufas from "components/Corte/VistaGeneral/CorteTablaDisponEstufas";
import PlegadoTablaDisponEstufas from "components/Plegado/PlegadoGeneral/PlegadoTablaDisponEstufas";
import CorteGrafica from "components/Corte/VistaGeneral/CorteGrafica";
import PinturaTablaDisponEstufas from "components/Pintura/PinturaGeneral/PinturaTablaDisponEstufas";
import GraficaPlanProduccion from "./GraficaPlanProduccion";

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

export default function VistaGeneralPanels() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} stats>
          <h3 className={classes.pageSubcategoriesTitle}>
            Material en Proceso
          </h3>
          <br />
          <NavPills
            color="warning"
            alignCenter
            tabs={[
              {
                tabButton: "Corte",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Disponibilidad de estufas Criticas
                      </h4>
                      <p className={classes.cardCategory}>Desde Corte</p>
                    </CardHeader>
                    <CardBody>
                      <CorteTablaDisponEstufas />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabButton: "Plegado",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Disponibilidad de estufas Criticas
                      </h4>
                      <p className={classes.cardCategory}>Desde Plegado</p>
                    </CardHeader>
                    <CardBody>
                      <PlegadoTablaDisponEstufas />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabButton: "Pintura",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Disponibilidad de estufas Criticas
                      </h4>
                      <p className={classes.cardCategory}>Desde Pintura</p>
                    </CardHeader>
                    <CardBody>
                      <PinturaTablaDisponEstufas />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabButton: "Tiempo faltante",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Tiempo falta en corte.
                      </h4>
                      <p className={classes.cardCategory}>
                        Para completar el plan
                      </p>
                    </CardHeader>
                    <CardBody>
                      <CorteGrafica />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabButton: "Plan de Produccion",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>Estufas por linea.</h4>
                      <p className={classes.cardCategory}>
                        Para completar el plan
                      </p>
                    </CardHeader>
                    <CardBody>
                      <GraficaPlanProduccion />
                    </CardBody>
                  </Card>
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
