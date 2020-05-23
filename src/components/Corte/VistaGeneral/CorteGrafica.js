import React, { useContext } from "react";
import ChartistGraph from "react-chartist";
import { Context } from "../../../AppContext";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function CorteGrafica() {
  const { store } = useContext(Context);
  var delays2 = 80,
    durations2 = 500;

  const modelos = Object.keys(store.tiempoEstufa);

  const valores = Object.values(store.tiempoEstufa);
  const valores_diarios = Object.values(store.tiempo_diario_estufa);
  const valores_tiempo = [];

  const valores_diarios_estufa = [];

  const valoresPorPieza = valores.map(valor => {
    valor.map(val => {
      valores_tiempo.push(val.total_suma);
    });
  });

  const valoresPorPieza_diarios = valores_diarios.map(valor => {
    valor.map(val => {
      valores_diarios_estufa.push(val.total_suma);
    });
  });

  console.log(valores_diarios_estufa, "valores diario");
  console.log(valores_tiempo, "valores tiempo");

  const nuevo_modelos_usados = [];

  const a = modelos.map((modelo, index) => {
    const data = {
      modelo: modelo,
      tiempo_faltate: valores_tiempo[index] - valores_diarios_estufa[index],
      tiempo_total: valores_tiempo[index],
      tiempo_cortado: valores_diarios_estufa[index]
    };
    return nuevo_modelos_usados.push(data);
  });

  console.log(nuevo_modelos_usados, "veamos que sale");

  const multipleBarsChart = {
    data: {
      labels: modelos,
      series: [valores_tiempo, valores_diarios_estufa]
    },
    options: {
      seriesBarDistance: 10,
      axisX: {
        showGrid: false
      },
      height: "300px"
    },
    responsiveOptions: [
      [
        "screen and (max-width: 640px)",
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value[0];
            }
          }
        }
      ]
    ],
    animation: {
      draw: function(data) {
        if (data.type === "bar") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: "ease"
            }
          });
        }
      }
    }
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <CardBody>
          <ChartistGraph
            data={multipleBarsChart.data}
            type="Bar"
            options={multipleBarsChart.options}
            listener={multipleBarsChart.animation}
          />
        </CardBody>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Modelo</TableCell>
                <TableCell align="left">Tiempo Faltante (minutos)</TableCell>
                <TableCell align="left">Tiempo total (minutos)</TableCell>
                <TableCell align="left">Tiempo Consumido (minutos)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nuevo_modelos_usados.map((model, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component="th">{model.modelo}</TableCell>
                    <TableCell align="left"> {model.tiempo_faltate}</TableCell>
                    <TableCell align="left"> {model.tiempo_total}</TableCell>
                    <TableCell align="left"> {model.tiempo_cortado}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </GridItem>
    </GridContainer>
  );
}
