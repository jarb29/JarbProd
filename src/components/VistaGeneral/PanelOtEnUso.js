import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import CorteTablaModelosenUso from "components/Corte/VistaCargaPlachasCortadas/CorteTablaModelosenUso";

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

export default function PanelOtEnUso() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader>
            <h4 className={classes.cardTitle}>
              Navegador <small> - Modelos en Uso</small>
            </h4>
          </CardHeader>
          <CardBody>
            <NavPills
              color="rose"
              horizontal={{
                tabsGrid: { xs: 12, sm: 12, md: 4 },
                contentGrid: { xs: 12, sm: 12, md: 8 }
              }}
              tabs={[
                {
                  tabButton: "Dashboard",
                  tabIcon: Dashboard,
                  tabContent: (
                    <span>
                      <CorteTablaModelosenUso />
                    </span>
                  )
                },
                {
                  tabButton: "Schedule",
                  tabIcon: Schedule,
                  tabContent: (
                    <span>
                      <p>Para Mostrar algo adicional</p>
                    </span>
                  )
                }
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
