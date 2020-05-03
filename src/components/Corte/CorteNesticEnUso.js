import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Accordion from "components/Accordion/Accordion.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import CortePlanchasPorNestic from "./CortePlanchasPorNestic";

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
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader>
              <h4 className={classes.cardTitle}>Modelo</h4>
            </CardHeader>
            <CardBody>
              <Accordion
                active={0}
                collapses={[
                  {
                    title: "Collapsible group Item #1",
                    content: <CortePlanchasPorNestic />
                  },
                  {
                    title: "Collapsible group Item #2",
                    content: <CortePlanchasPorNestic />
                  },
                  {
                    title: "Collapsible group Item #3",
                    content: <CortePlanchasPorNestic />
                  }
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader>
              <h4 className={classes.cardTitle}>Modelo</h4>
            </CardHeader>
            <CardBody>
              <Accordion
                active={0}
                collapses={[
                  {
                    title: "Collapsible group Item #1",
                    content: <CortePlanchasPorNestic />
                  },
                  {
                    title: "Collapsible group Item #2",
                    content: <CortePlanchasPorNestic />
                  },
                  {
                    title: "Collapsible group Item #3",
                    content: <CortePlanchasPorNestic />
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
