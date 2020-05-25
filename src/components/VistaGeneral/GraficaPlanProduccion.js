import React, { useContext } from "react";
import ChartistGraph from "react-chartist";
import { Context } from "../../AppContext";
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

export default function GraficaPlanProduccion() {
  const { store } = useContext(Context);
  var delays2 = 80,
    durations2 = 500;

  const modelos = Object.keys(store.estufas_por_plan);

  const valores = Object.values(store.estufas_por_plan);
  const valores_diarios = Object.values(store.estufas_por_dia);

  console.log(store.estufas_por_dia, "veamos que llega");

  const nuevo_modelos_usados = [];
  const a = modelos.map((modelo, index) => {
    const data = {
      modelo: modelo,
      tiempo_faltate: valores[index] - valores_diarios[index],
      tiempo_total: valores[index],
      tiempo_cortado: valores_diarios[index]
    };
    return nuevo_modelos_usados.push(data);
  });

  const multipleBarsChart = {
    data: {
      labels: modelos,
      series: [valores, valores_diarios]
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
                <TableCell align="left">Estufas por Entregar</TableCell>
                <TableCell align="left">Estufas En el Plan</TableCell>
                <TableCell align="left">Estufas Entregadas</TableCell>
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
