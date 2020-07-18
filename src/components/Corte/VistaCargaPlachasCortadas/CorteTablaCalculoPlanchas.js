import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Context } from "../../../AppContext";

export default function CorteTablaCalculoPlanchas() {
  const { store } = useContext(Context);

  const a =
    store.nesticDisponiblesProduccion[0] === undefined
      ? "Seleccione modelo"
      : store.nesticDisponiblesProduccion[0].modelo_elegido;


  var result_time = store.modeloAModelar.reduce(function(sum, item){
    return sum = sum+item.tiempo_para_esas_planchas;
  },0);
  
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nestic: (Modelo: {a})</TableCell>
            <TableCell align="left">Cantidad Planchas</TableCell>
            <TableCell align="left">Tiempo (Horas)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store.modeloAModelar.map(row => {
            return (
            <TableRow key={row.id}>
              <TableCell component="th">{row.nestic}</TableCell>
              <TableCell align="left">{row.plancha}</TableCell>
              <TableCell align="left">
                {Math.round(row.tiempo_para_esas_planchas/60, 2)}
              </TableCell>
            </TableRow>
          )})}
        </TableBody>
        {result_time?
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Total</TableCell>
          <TableCell align="left">{Math.round(result_time/60, 2)} Horas </TableCell>
        </TableRow>:
        null}
      </Table>  
    </TableContainer>
  );
}
