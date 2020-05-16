import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Language from "@material-ui/icons/Language";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

const us_flag = require("assets/img/flags/US.png");
const de_flag = require("assets/img/flags/DE.png");
const au_flag = require("assets/img/flags/AU.png");
const gb_flag = require("assets/img/flags/GB.png");
const ro_flag = require("assets/img/flags/RO.png");
const br_flag = require("assets/img/flags/BR.png");

const useStyles = makeStyles(styles);

export default function Linea1Resumen() {
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
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Card>
            <CardHeader color="success" icon>
              <CardIcon color="success">
                <Language />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Plegado - Piezas Criticas
              </h4>
            </CardHeader>
            <CardBody>
              <Table
                tableData={[
                  [
                    <img src={us_flag} alt="us_flag" key={"flag"} />,
                    "USA",
                    "2.920",
                    "53.23%"
                  ],
                  [
                    <img src={de_flag} alt="us_flag" key={"flag"} />,
                    "Germany",
                    "1.300",
                    "20.43%"
                  ],
                  [
                    <img src={au_flag} alt="us_flag" key={"flag"} />,
                    "Australia",
                    "760",
                    "10.35%"
                  ],
                  [
                    <img src={gb_flag} alt="us_flag" key={"flag"} />,
                    "United Kingdom",
                    "690",
                    "7.87%"
                  ],
                  [
                    <img src={ro_flag} alt="us_flag" key={"flag"} />,
                    "Romania",
                    "600",
                    "5.94%"
                  ],
                  [
                    <img src={br_flag} alt="us_flag" key={"flag"} />,
                    "Brasil",
                    "550",
                    "4.34%"
                  ]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
