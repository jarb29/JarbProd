import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import Info from "@material-ui/icons/Info";
import HelpOutline from "@material-ui/icons/HelpOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

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

export default function CortePanels() {
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
                tabButton: "Linea 1",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Description about product
                      </h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                      <br />
                      <br />
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI.
                    </CardBody>
                  </Card>
                )
              },
              {
                tabButton: "Linea 2",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Location of the product
                      </h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                      <br />
                      <br />
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions.
                    </CardBody>
                  </Card>
                )
              },
              {
                tabButton: "Linea 3",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Legal info of the product
                      </h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </CardBody>
                  </Card>
                )
              },
              {
                tabButton: "Linea 4",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Legal info of the product
                      </h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </CardBody>
                  </Card>
                )
              },
              {
                tabButton: "Linea 5",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Legal info of the product
                      </h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </CardBody>
                  </Card>
                )
              },
              {
                tabButton: "Linea 6",
                tabIcon: Info,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Legal info of the product
                      </h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </CardBody>
                  </Card>
                )
              },
              {
                tabButton: "Total",
                tabIcon: HelpOutline,
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>Help center</h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      From tdededededeedwhile its display is
                      larger, the phone feels just right.
                      <br />
                      <br />
                      Anothdkdoekdoekdoedededededeized aluminum
                      enclosure in a remarkable, simplified design.
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
