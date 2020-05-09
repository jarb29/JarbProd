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
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";
import CorteProgramasQueVanAProduccion from "components/Corte/CorteProgramasQueVanAProduccion";
import CorteNesticTiempo from "components/Corte/CorteNesticTiempo";


const useStyles = makeStyles(styles);

export default function CortePruebaTablaII(props) {
  const { actions, store } = useContext(Context);
  const classes = useStyles();

  console.log(store.modeloFiltrado, "valor del object en el componente");

  const {
    tableHead,
    tableData,
    tableHeaderColor,
    hover,
    striped,
    tableShopping,
    customHeadCellClasses,
    customHeadClassesForCells
  } = props;

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
                <TableCell key={key}>
                  <CorteProgramasQueVanAProduccion />
                </TableCell>
                <TableCell>
                  <CustomInput
                    key={key}
                    labelText="Unidades a Modelar"
                    id={key}
                    name={prop[3]}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        console.log(event.currentTarget);
                        console.log(event.target.id, "deberia ser el key");
                        actions.handleToggleNesticValor(event);
                      },
                      name: prop[3]
                    }}
                  />
                </TableCell>
                {prop.map((prop, index) => {
                  return index === 0 || index === 3 || index === 4 ? (
                    <TableCell key={index}>{prop}</TableCell>
                  ) : null;
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CortePruebaTablaII.defaultProps = {
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

CortePruebaTablaII.propTypes = {
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
