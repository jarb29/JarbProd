import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Context } from "../../../AppContext";

export default function CorteTablaPlanchasCortadas() {
  const { store } = useContext(Context);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Modelo:</TableCell>
            <TableCell align="left">Programa de Corte</TableCell>
            <TableCell align="left">OT</TableCell>
            <TableCell align="left">Total de OT</TableCell>
            <TableCell align="left">Planchas Cortadas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.corteNesticCortados.map(row => (
            row.map((modelo, index) => {
                  return (
                <TableRow key={index}>
                  <TableCell component="th">{modelo.modelo}</TableCell>
                  <TableCell align="left">
                    {" "}
                    {modelo.nestic_produccion}
                  </TableCell>
                  <TableCell align="left"> # {modelo.ot_produccion}</TableCell>
                  <TableCell align="left"> # {modelo.total_ot}</TableCell>
                  <TableCell align="left">
                    {" "}
                    {modelo.total_planchas_cortadas}
                  </TableCell>
                </TableRow>
              );
            })
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
