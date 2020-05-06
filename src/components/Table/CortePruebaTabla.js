import React, { useContext } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Context } from "../../AppContext";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";

import styles from "assets/jss/material-dashboard-pro-react/components/tableStyle";
import stylesII from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

const useStyles = makeStyles(styles);
const useStylesII = makeStyles(stylesII);

export default function CustomTable(props) {
  const { actions } = useContext(Context);
  const classes = useStyles();
  const classesII = useStylesII();
  const [checked, setChecked] = React.useState([]);
  const [
    modelosFiltradosComponente,
    setmodelosFiltradosComponente
  ] = React.useState([]);

  const {
    tableHead,
    tableData,
    tableHeaderColor,
    hover,
    colorsColls,
    coloredColls,
    customCellClasses,
    customClassesForCells,
    striped,
    tableShopping,
    customHeadCellClasses,
    customHeadClassesForCells
  } = props;

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value[1]);
    const currentIndexModeloSeleccionado = modelosFiltradosComponente.indexOf(
      value[1]
    );
    const newChecked = [...checked];
    const newModeloFiltrado = [...modelosFiltradosComponente];
    if (currentIndex === -1) {
      newChecked.push(value[1]);
      newModeloFiltrado.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
      newModeloFiltrado.splice(currentIndexModeloSeleccionado, 1);
    }
    setChecked(newChecked);
    setmodelosFiltradosComponente(newModeloFiltrado);
    actions.modeloFiltadroDos(newModeloFiltrado);
  };

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor]}>
            <TableRow className={classes.tableRow + " " + classes.tableRowHead}>
              {tableHead.map((prop, key) => {
                const tableCellClasses =
                  classes.tableHeadCell +
                  " " +
                  classes.tableCell +
                  " " +
                  cx({
                    [customHeadCellClasses[
                      customHeadClassesForCells.indexOf(key)
                    ]]: customHeadClassesForCells.indexOf(key) !== -1,
                    [classes.tableShoppingHead]: tableShopping,
                    [classes.tableHeadFontSize]: !tableShopping
                  });
                return (
                  <TableCell className={tableCellClasses} key={key}>
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            var rowColor = "";
            var rowColored = false;
            if (prop.color !== undefined) {
              rowColor = prop.color;
              rowColored = true;
              prop = prop.data;
            }
            const tableRowClasses = cx({
              [classes.tableRowBody]: true,
              [classes.tableRowHover]: hover,
              [classes[rowColor + "Row"]]: rowColored,
              [classes.tableStripedRow]: striped && key % 2 === 0
            });
            return (
              <TableRow
                key={key}
                hover={hover}
                className={classes.tableRow + " " + tableRowClasses}
              >
                {prop[1]}
                <Checkbox
                  key="key"
                  className={classes.positionAbsolute}
                  tabIndex={-1}
                  onClick={() => handleToggle(prop)}
                  checkedIcon={<Check className={classesII.checkedIcon} />}
                  icon={<Check className={classesII.uncheckedIcon} />}
                  classes={{
                    checked: classesII.checked,
                    root: classesII.checkRoot
                  }}
                />
                {prop.map((prop, key) => {
                  const tableCellClasses =
                    classes.tableCell +
                    " " +
                    cx({
                      [classes[colorsColls[coloredColls.indexOf(key)]]]:
                        coloredColls.indexOf(key) !== -1,
                      [customCellClasses[customClassesForCells.indexOf(key)]]:
                        customClassesForCells.indexOf(key) !== -1
                    });
                  return (
                    (key !== 1)?
                    <TableCell className={tableCellClasses} key={key}>
                      {prop}
                    </TableCell>
                  : null );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
  hover: false,
  colorsColls: [],
  coloredColls: [],
  striped: false,
  customCellClasses: [],
  customClassesForCells: [],
  customHeadCellClasses: [],
  customHeadClassesForCells: []
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  // Of(PropTypes.arrayOf(PropTypes.node)) || Of(PropTypes.object),
  tableData: PropTypes.array,
  hover: PropTypes.bool,
  coloredColls: PropTypes.arrayOf(PropTypes.number),
  // Of(["warning","primary","danger","success","info","rose","gray"]) - colorsColls
  colorsColls: PropTypes.array,
  customCellClasses: PropTypes.arrayOf(PropTypes.string),
  customClassesForCells: PropTypes.arrayOf(PropTypes.number),
  customHeadCellClasses: PropTypes.arrayOf(PropTypes.string),
  customHeadClassesForCells: PropTypes.arrayOf(PropTypes.number),
  striped: PropTypes.bool,
  // this will cause some changes in font
  tableShopping: PropTypes.bool
};
