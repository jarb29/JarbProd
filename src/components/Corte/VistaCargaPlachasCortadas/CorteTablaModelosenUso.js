import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Context } from "../../../AppContext";

export default function CorteModelosenUso() {
  const { store } = useContext(Context);

  const a =
    store.nesticDisponiblesProduccion[0] === undefined
      ? "Seleccione modelo"
      : store.nesticDisponiblesProduccion[0].modelo_elegido;
  console.log(a);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Modelos en Uso:</TableCell>
            <TableCell align="left">Ordenes de Trabajo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.OtDisponiblesProduccion.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th">
              {row.id} : {row.modelo_produccion}
              </TableCell>
              <TableCell align="left"> # {row.ot_produccion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
