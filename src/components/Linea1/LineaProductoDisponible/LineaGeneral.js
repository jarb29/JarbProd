import React, { useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import { Context } from "../../../AppContext";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function PinturaGeneral() {
  const { store } = useContext(Context);
  const classes = useStyles();

  let colors = [
    "warning",
    "info",
    "danger",
    "success",
    "warning",
    "info",
    "danger",
    "success"
  ];
  return (
    <div>
      <GridContainer>
        {store.PiezasPintadasValoresMinimos.map((modelos, index) => {
          return (
            <GridItem xs={4} sm={4} md={4} lg={4} key={index}>
              <Card>
                <CardHeader color={colors[index]} stats icon>
                  <CardIcon color={colors[index]}>
                    <h1>{modelos.modelo}</h1>
                  </CardIcon>
                  <p className={classes.cardCategory}>{modelos.pieza}</p>
                  <h3 className={classes.cardTitle}>
                    {modelos.valor_minimo}
                    <small>UND</small>
                  </h3>
                </CardHeader>
                <CardFooter stats>
                  <div className={classes.stats}>
                    <Danger>
                      <Warning />
                    </Danger>
                    <a># Ot: {modelos.Ot}</a>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
}
