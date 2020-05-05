const getState = ({ getStore, getActions, setStore }) => {
  return {
    // base datos Angel
    store: {
      /////URL
      baseURL: "http://127.0.0.1:5000",

      //Variables para crear el Modelo
      numero_ot: [],
      nombre_programa: [],

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
      nesticElegido: [],

      // Variables para plegado
      plegadoModeloSeleccionado: [],
      plegadoPiezaSeleccionada: [],
      plegadoMaquinaSeleccionada: [],
      plegadoOperadorSeleccionado: [],
      plegadoCantidadPiezas: [],

      // variables de retornodel back
      errorModelo: [],
      infoCargandoMoldeo: [],
      modelosDisponibles: [],
      nesticsDisponibles: []
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
        console.log(e);
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
      },

      //Plegado

      cargarDatosPlegado: e => {
        setStore({
          [e.target.name]: e.target.value
        });
      },

      cargarDatosPlegadoformulario: e => {
        setStore({
          plegadoCantidadPiezas: e
        });
      },

      /////// fecthing data (POST, PUT)

      creandoModelo: () => {
        const store = getStore();
        console.log(store.numero_ot);

        let data = {
          numero_ot: store.numero_ot,
          nombre_programa: store.nombre_programa
        };

        getActions().registro("/api/cargarprograma", data);
      },

      registro: async (url, data) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();
        console.log(dato);
        if (dato.msg) {
          setStore({
            errorModelo: dato
          });
        } else {
          setStore({
            infoCargandoMoldeo: dato
          });
        }
      },

      creandoNestic: () => {
        const store = getStore();
        console.log(store.modelo_elegido);

        let data = {
          modelo_elegido: store.modelo_elegido,
          programa_nestic: store.programa_nestic,
          numero_piezas_criticas: store.numero_piezas_criticas,
          tiempo_corte: store.tiempo_corte,
          espesor: store.espesor,
          longitud_nestic: store.longitud_nestic
        };

        getActions().registroNestic("/api/crearnesctic", data);
      },

      registroNestic: async (url, data) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();
        console.log(dato);
        if (dato.msg) {
          setStore({
            errorModelo: dato
          });
        } else {
          setStore({
            infoCargandoMoldeo: dato
          });
        }
      },

      creandoPiezas: () => {
        const store = getStore();
        console.log(store.nesticElegido);

        let data = {
          nombre_pieza: store.nombre_pieza,
          cantidadPiezasPorPlancha: store.cantidadPiezasPorPlancha,
          crearLongitudCortePieza: store.crearLongitudCortePieza,
          nesticElegido: store.nesticElegido
        };
        console.log(data);

        getActions().registroNestic("/api/crearpieza", data);
      },

      registroPiezas: async (url, data) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();
        console.log(dato);
        if (dato.msg) {
          setStore({
            errorModelo: dato
          });
        } else {
          setStore({
            infoCargandoMoldeo: dato
          });
        }
      },

      ////// PARTE PARA OBTENER LA INFORMACION (GET)

      obtenerModelosDisponibles: async () => {
        const store = getStore();

        const { baseURL } = store;
        const resp = await fetch(baseURL + `/api/modelodisponibles`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();
        console.log(dato);
        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            modelosDisponibles: [...dato]
          });
        }
      },

      obtenerNesticsDisponibles: async () => {
        const store = getStore();

        const { baseURL, modelo_elegido } = store;
        console.log(modelo_elegido);
        const resp = await fetch(
          baseURL + `/api/Nesticsdisponibles/${modelo_elegido}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const dato = await resp.json();
        console.log(dato);
        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            nesticsDisponibles: [...dato]
          });
        }
      }
    }
  };
};

export default getState;
