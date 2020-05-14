import React, { useEffect, useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Context } from "../../../AppContext";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import CorteTablaCalculoPlanchas from "./CorteTablaCalculoPlanchas";
import CorteTablaModelosenUso from "./CorteTablaModelosenUso";


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

export default function CorteCalculoPlanchas() {
  const { actions } = useContext(Context);
  const classes = useStyles();

  useEffect(() => {
    actions.estufasEnProduccion();
  }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader>
              <h4 className={classes.cardTitle}>
                Navegador <small>Modelar Calculos</small>
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
                    tabButton: "Calculo plachas",
                    tabContent: (
                      <span>
                        <CorteTablaCalculoPlanchas />
                      </span>
                    )
                  },
                  {
                    tabButton: "Modelos en Corte",
                    tabContent: (
                      <span>
                        <CorteTablaModelosenUso />
                      </span>
                    )
                  },
                  {
                    tabButton: "Calculo de tiempo",
                    tabContent: (
                      <span>
                        <p>
                       
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
