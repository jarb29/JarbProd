import React, { useContext } from "react";
import { Context } from "../../AppContext";
import classNames from "classnames";
import PropTypes from "prop-types";
// import { Manager, Target, Popper } from "react-popper";
import { NavLink } from "react-router-dom";
import cx from "classnames";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
//import Fingerprint from "@material-ui/icons/Fingerprint";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import Person from "@material-ui/icons/Person";
import Dashboard from "@material-ui/icons/Dashboard";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const [openProfile, setOpenProfile] = React.useState(null);
  const { actions } = useContext(Context);

  const activeRoute = routeName => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };

  const classes = useStyles();
  const { rtlActive } = props;
  const dropdownItem = classNames(classes.dropdownItem, classes.primaryHover, {
    [classes.dropdownItemRTL]: rtlActive
  });
  return (
    <ListItem className={classes.listItem}>
      <NavLink
        to={"/admin/dashboard"}
        className={cx(classes.navLink, {
          [classes.navLinkActive]: activeRoute("/admin/dashboard")
        })}
      >
        <Dashboard
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          muiClasses={{
            label: rtlActive ? classes.labelRTL : ""
          }}
          style={{ color: "gray" }}
        />
      </NavLink>

      <Button
        color="transparent"
        aria-label="Person"
        justIcon
        aria-owns={openProfile ? "profile-menu-list" : null}
        aria-haspopup="true"
        onClick={handleClickProfile}
        className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
        muiClasses={{
          label: rtlActive ? classes.labelRTL : ""
        }}
      >
        <Person
          className={
            classes.headerLinksSvg +
            " " +
            (rtlActive ? classes.links + " " + classes.linksRTL : classes.links)
          }
        />
      </Button>
      <Popper
        open={Boolean(openProfile)}
        anchorEl={openProfile}
        transition
        disablePortal
        placement="bottom"
        className={classNames({
          [classes.popperClose]: !openProfile,
          [classes.popperResponsive]: true,
          [classes.popperNav]: true
        })}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            id="profile-menu-list"
            style={{ transformOrigin: "0 0 0" }}
          >
            <Paper className={classes.dropdown}>
              <ClickAwayListener >
                <MenuList role="menu">
                  <MenuItem
                    onClick={e => actions.logout(e, props.history)}
                    className={dropdownItem}
                  >
                    <NavLink
                      to={"/auth/login-page"}
                      className={cx(classes.navLink, {
                        [classes.navLinkActive]: activeRoute("/auth/login-page")
                      })}
                    >
                      <ListItemText
                        primary={"Log out"}
                        disableTypography={true}
                        className={classes.listItemText}
                      />
                    </NavLink>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </ListItem>
  );
}

HeaderLinks.propTypes = {
  rtlActive: PropTypes.bool
};
