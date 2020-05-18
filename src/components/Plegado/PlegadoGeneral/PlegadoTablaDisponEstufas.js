import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Context } from "../../../AppContext";

export default function PlegadoTablaDisponEstufas() {
  const { store } = useContext(Context);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Modelo:</TableCell>
            <TableCell align="left">OT</TableCell>
            <TableCell align="left">Nombre Pieza</TableCell>
            <TableCell align="left">Piezas Disponible</TableCell>
            <TableCell align="left">Cantidad Usada Sub-Prod</TableCell>
            <TableCell align="left">Nombre Sub-Prod</TableCell>
            <TableCell align="left">Disponibilidad Estufas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.piezasEstufasAfabrica.map((modelo, index) => {
            return (
              <TableRow key={index}>
                  {console.log(modelo, "dentro del map")}
                <TableCell component="th">{modelo.modelo}</TableCell>

                <TableCell align="left"> {modelo.ot}</TableCell>
                <TableCell align="left"> {modelo.pieza}</TableCell>
                <TableCell align="left"> # {modelo.valor_minimo}</TableCell>
                <TableCell align="left">
                  {" "}
                  # {modelo.cantidad_usada_por_subproducto}
                </TableCell>
                <TableCell align="left"> # {modelo.sub_producto}</TableCell>
                <TableCell align="left">
                  {" "}
                  {modelo.disponibilidad_estufas}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
