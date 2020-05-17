import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";
import CortePanels from "./CortePanels";
import CorteTablaCorteDisponible from "./CorteTablaCorteDisponible";


const useStyles = makeStyles(styles);

export default function CorteGeneral() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <h1>L1</h1>
              </CardIcon>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Linea 1
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <h1>L2</h1>
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Linea 2
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <h1>L3</h1>
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Linea 3
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <h1>L4</h1>
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Linea 4
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <h1>L5</h1>
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Linea 5
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <Card>
            <CardHeader color="Info" stats icon>
              <CardIcon color="info">
                <h1>L6</h1>
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Linea 6
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <CortePanels />
      <CorteTablaCorteDisponible />
    </div>
  );
}
