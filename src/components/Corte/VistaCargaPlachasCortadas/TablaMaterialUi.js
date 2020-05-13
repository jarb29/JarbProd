import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import PropTypes from "prop-types";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset"
    }
  }
});


function Row(props) {
  const { row, piezas } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  console.log(row, "en la seguna funcion")

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.nombre_pieza}
        </TableCell>
        <TableCell align="right">{row.calories} </TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Programa</TableCell>
                    <TableCell align="right">Operador</TableCell>
                    <TableCell align="right">Ot</TableCell>
                    <TableCell align="right">Cortado por Turno</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.map(historyRow => (
                    <TableRow key={historyRow.cantidad_fabricada_por_corte}>
                      <TableCell component="th" scope="row">
                        {historyRow.nestic_produccion}
                      </TableCell> 
                      <TableCell align="right">{historyRow.operador}</TableCell>
                      <TableCell align="right">{historyRow.ot_produccion}</TableCell>
                      <TableCell align="right">{historyRow.cantidad_fabricada_por_corte}</TableCell>
                      <TableCell align="right">
                        {historyRow.total_pieza}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TablaMaterialUi(props) {
  const { piezas, valores, modelos } = props;

  console.log(piezas, "piezas por el props");
  console.log(valores, "valores por el props");
  console.log(modelos, "modelos que llegan");

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre de la Pieza</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {piezas.map((row, index) => {
            const b = valores[index];
            return <Row key={row} row={b} piezas={piezas} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

TablaMaterialUi.propTypes = {
  piezas: PropTypes.array,
  valores: PropTypes.array,
  modelos: PropTypes.array,
  row: PropTypes.array
};
