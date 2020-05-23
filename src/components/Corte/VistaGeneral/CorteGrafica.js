import React, { useContext } from "react";
import ChartistGraph from "react-chartist";
import { Context } from "../../../AppContext";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";

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
      </GridItem>
    </GridContainer>
  );
}
