const getState = ({ getStore, getActions, setStore }) => {
  return {
    // base datos Angel
    store: {
      /////URL
      baseURL: "frrfreerfrfwefefw",

      //Variables para crear el Modelo
      numero_ot: [],
      nombre_programa: ["clasica 500", "Itally 7000", "Itally 8100 +"],

      //Variables para crear el Nestic
      modelo_elegido: [],
      programa_nestic: [],
      numero_piezas_criticas: [],
      tiempo_corte: [],
      espesor: [],
      longitud_nestic: [],

      //Variables para crear las Piezas
      nombre_pieza: [],
      cantidadPiezasPorPlancha: [],
      crearLongitudCortePieza: [],
      nesticElegido: []
    },

    actions: {
      /////// Funcion para crear el modelo

      crearModelo: e => {
        console.log(e, "Nombre del Modelo");
        setStore({
          nombre_programa: e
        });
      },

      crearOT: e => {
        setStore({
          numero_ot: e
        });
      },

      /////// Funcion para crear el programa nestic
      crearModeloElegido: e => {
        console.log(e.target.value);
        setStore({
          modelo_elegido: e.target.value
        });
      },

      crearProgramaNestic: e => {
        console.log(e);
        setStore({
          programa_nestic: e
        });
      },

      crearCantidadPiezasCriticas: e => {
        console.log(e);
        setStore({
          numero_piezas_criticas: e
        });
      },

      crearTiempoCorte: e => {
        console.log(e);
        setStore({
          tiempo_corte: e
        });
      },

      crearEspesor: e => {
        console.log(e);
        setStore({
          espesor: e
        });
      },
      crearLongitudNestic: e => {
        console.log(e);
        setStore({
          longitud_nestic: e
        });
      },

      /////// Funcion para cargar las piezas

      crearNombrePieza: e => {
        console.log(e);
        setStore({
          nombre_pieza: e
        });
      },

      crearCantidadPiezasPorPlancha: e => {
        console.log(e);
        setStore({
          cantidadPiezasPorPlancha: e
        });
      },

      crearLongitudCortePieza: e => {
        console.log(e);
        setStore({
          crearLongitudCortePieza: e
        });
      },

      crearNesticElegido: e => {
        console.log(e.target.value);
        setStore({
          nesticElegido: e.target.value
        });
      }
    }
  };
};

export default getState;
