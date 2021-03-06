import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Context } from "../../../AppContext";

export default function CorteTablaModelosenUso() {
  const { store } = useContext(Context);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Modelos en Uso:</TableCell>
            <TableCell align="left">Ordenes de Trabajo</TableCell>
            <TableCell align="left">Total en OT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.OtDisponiblesProduccion.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th">
                {row.id} : {row.modelo_produccion}
              </TableCell>
              <TableCell align="left"> # {row.ot_produccion}</TableCell>
              <TableCell align="left"> # {row.cantidad_producir}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
