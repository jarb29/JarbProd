/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import MailOutline from "@material-ui/icons/MailOutline";
import CardIcon from "components/Card/CardIcon.js";

// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
import Close from "@material-ui/icons/Close";

// core components
import Heading from "components/Heading/Heading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Button from "components/CustomButtons/Button.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import Instruction from "components/Instruction/Instruction.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-pro-react/views/notificationsStyle.js";

import noticeModal1 from "assets/img/card-1.jpeg";
import noticeModal2 from "assets/img/card-2.jpeg";
import CorteFormularioModelo from "./CorteFormularioModelo";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function CorteCargarProgramas() {
  const classes = useStyles();
  const [tl, setTL] = React.useState(false);
  const [tc, setTC] = React.useState(false);
  const [tr, setTR] = React.useState(false);
  const [bl, setBL] = React.useState(false);
  const [bc, setBC] = React.useState(false);
  const [br, setBR] = React.useState(false);
  const [classicModal, setClassicModal] = React.useState(false);
  const [noticeModal, setNoticeModal] = React.useState(false);
  const [smallModal, setSmallModal] = React.useState(false);
  React.useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  const showNotification = place => {
    switch (place) {
      case "tl":
        if (!tl) {
          setTL(true);
          setTimeout(function () {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function () {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function () {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function () {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function () {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function () {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };
  return (
    <Card>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} className={classes.center}>
          <div
            className={
              classes.cardHeader +
              " " +
              classes.center +
              " " +
              classes.modalSectionTitle
            }
          >
            <h4 className={classes.cardTitle}>Modal</h4>
          </div>
          <Button
            color="primary"
            round
            className={classes.marginRight}
            onClick={() => setClassicModal(true)}
          >
            Classic modal
          </Button>
          <Dialog
            classes={{
              root: classes.center + " " + classes.modalRoot,
              paper: classes.modal
            }}
            open={classicModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setClassicModal(false)}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
          >
            <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
            <CardIcon color="rose">
              <MailOutline />
            </CardIcon>

              <Button
                justIcon
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="transparent"
                onClick={() => setClassicModal(false)}
              >
                <Close className={classes.modalClose} />
              </Button>
              <h4 className={classes.modalTitle}>Modal title</h4>
            </DialogTitle>
            <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
            >
              <CorteFormularioModelo />
            </DialogContent>
          </Dialog>
          <Button
            color="info"
            round
            className={classes.marginRight}
            onClick={() => setNoticeModal(true)}
          >
            Notice Modal
                    </Button>
          <Dialog
            classes={{
              root: classes.center + " " + classes.modalRoot,
              paper: classes.modal
            }}
            open={noticeModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setNoticeModal(false)}
            aria-labelledby="notice-modal-slide-title"
            aria-describedby="notice-modal-slide-description"
          >
            <DialogTitle
              id="notice-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <Button
                justIcon
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="transparent"
                onClick={() => setNoticeModal(false)}
              >
                <Close className={classes.modalClose} />
              </Button>
              <h4 className={classes.modalTitle}>Notice Modal</h4>
            </DialogTitle>
            <DialogContent
              id="notice-modal-slide-description"
              className={classes.modalBody}
            >
              <Instruction
                title="1. Register"
                text={
                  <span>
                    The first step is to create an account at{" "}
                    <a href="https://www.creative-tim.com/?ref=mdpr-notifications-page">
                      Creative Tim
                              </a>
                              . You can choose a social network or go for the
                              classic version, whatever works best for you.
                            </span>
                }
                image={noticeModal1}
                className={classes.instructionNoticeModal}
                imageClassName={classes.imageNoticeModal}
              />
              <Instruction
                title="2. Apply"
                text={
                  <span>
                    The first step is to create an account at{" "}
                    <a href="https://www.creative-tim.com/?ref=mdpr-notifications-page">
                      Creative Tim
                              </a>
                              . You can choose a social network or go for the
                              classic version, whatever works best for you.
                            </span>
                }
                image={noticeModal2}
                className={classes.instructionNoticeModal}
                imageClassName={classes.imageNoticeModal}
              />
              <p>
                If you have more questions, don{"'"}t hesitate to
                          contact us or send us a tweet @creativetim. We{"'"}
                          re here to help!
                        </p>
            </DialogContent>
            <DialogActions
              className={
                classes.modalFooter + " " + classes.modalFooterCenter
              }
            >
              <Button
                onClick={() => setNoticeModal(false)}
                color="info"
                round
              >
                Sounds Good
                        </Button>
            </DialogActions>
          </Dialog>
          <Button
            color="rose"
            round
            className={classes.marginRight}
            onClick={() => setSmallModal(true)}
          >
            Small alert modal
                    </Button>
          <Dialog
            classes={{
              root: classes.center + " " + classes.modalRoot,
              paper: classes.modal + " " + classes.modalSmall
            }}
            open={smallModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setSmallModal(false)}
            aria-labelledby="small-modal-slide-title"
            aria-describedby="small-modal-slide-description"
          >
            <DialogTitle
              id="small-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <Button
                justIcon
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="transparent"
                onClick={() => setSmallModal(false)}
              >
                <Close className={classes.modalClose} />
              </Button>
            </DialogTitle>
            <DialogContent
              id="small-modal-slide-description"
              className={
                classes.modalBody + " " + classes.modalSmallBody
              }
            >
              <h5>Are you sure you want to do this?</h5>
            </DialogContent>
            <DialogActions
              className={
                classes.modalFooter + " " + classes.modalFooterCenter
              }
            >
              <Button
                onClick={() => setSmallModal(false)}
                color="transparent"
                className={classes.modalSmallFooterFirstButton}
              >
                Never Mind
                        </Button>
              <Button
                onClick={() => setSmallModal(false)}
                color="success"
                simple
                className={
                  classes.modalSmallFooterFirstButton +
                  " " +
                  classes.modalSmallFooterSecondButton
                }
              >
                Yes
                        </Button>
            </DialogActions>
          </Dialog>
        </GridItem>
      </GridContainer>
    </Card>
  );
}
