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
  const { row, nombre, total } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

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
          {nombre}
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          {total}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Historia
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Ot</TableCell>
                    <TableCell align="rigth">Sub_Producto</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Fecha</TableCell>
                    <TableCell align="left">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.map(historyRow => (
                    <TableRow key={historyRow.OT}>
                      <TableCell align="left">{historyRow.ot_produccion}</TableCell>
                      <TableCell align="left">{historyRow.nombre_subproducto}</TableCell>
                      <TableCell align="right">{historyRow.cantidad_fabricada_por_dia}</TableCell>
                      <TableCell align="right">
                        {historyRow.fecha === undefined
                          ? null
                          : historyRow.fecha.split("2020")[0]}
                      </TableCell>
                      <TableCell align="left">
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

export default function PinturaPiezasDisponibles(props) {
  const { piezas, valores } = props;


  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nombre de la Pieza</TableCell>
            <TableCell align="left">Disponible</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {piezas.map((row, index) => {
            const b = valores[index];
            let largo = b.length;
            let total_por_pieza = b[largo - 1].total_disponlie;

            return (
              <Row key={row} nombre={row} row={b} total={total_por_pieza} />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

PinturaPiezasDisponibles.propTypes = {
  piezas: PropTypes.array,
  valores: PropTypes.array,
  modelos: PropTypes.array,
  row: PropTypes.array
};

Row.propTypes = {
  valores: PropTypes.array,
  modelos: PropTypes.array,
  row: PropTypes.array,
  total: PropTypes.number,
  nombre: PropTypes.array
};
