import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Context } from "../../../AppContext";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});


function createData(modelo: string, cantidad: number) {
  return { modelo, cantidad };
}

export default function CorteTablaCalculoPlanchas() {
  const { actions, store } = useContext(Context);
  const classes = useStyles();

  const a =
    store.nesticDisponiblesProduccion[0] === undefined
      ? "Seleccione modelo"
      : store.nesticDisponiblesProduccion[0].modelo_elegido;
  console.log(a);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nestic: (Modelo: {a})</TableCell>
            <TableCell align="right">Cantidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.modeloAModelar.map(row => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.nestic}</TableCell>
              <TableCell component="th" scope="row">
                {row.plancha}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
