const getState = ({ getStore, getActions, setStore }) => {
  return {
    // base datos Angel
    store: {
      /////URL
      baseURL: "http://127.0.0.1:5000",

      //Variables para crear el Modelo
      numero_ot: [],
      nombre_programa: [],
      cantiadUnidadesFabricarEnLaOt: [],

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
      piezasDisponiles: [],
      modelosDisponibles: [],
      nesticsDisponibles: [],
      nesticsModelar: [],

      //  variables de la logica del toda la aplicacion
      modeloFiltrado: []
    },

    actions: {
      /////// Funcion para crear el modelo

      crearModelo: e => {
        setStore({
          nombre_programa: e
        });
      },

      crearOT: e => {
        setStore({
          numero_ot: e
        });
      },
      cantidadOT: e => {
        setStore({
          cantiadUnidadesFabricarEnLaOt: e
        });
      },

      /////// Funcion para crear el programa nestic
      crearModeloElegido: e => {
        setStore({
          modelo_elegido: e.target.value
        });
      },

      crearProgramaNestic: e => {
        setStore({
          programa_nestic: e
        });
      },

      crearCantidadPiezasCriticas: e => {
        setStore({
          numero_piezas_criticas: e
        });
      },

      crearTiempoCorte: e => {
        setStore({
          tiempo_corte: e
        });
      },

      crearEspesor: e => {
        setStore({
          espesor: e
        });
      },
      crearLongitudNestic: e => {
        setStore({
          longitud_nestic: e
        });
      },

      /////// Funcion para cargar las piezas

      crearNombrePieza: e => {
        setStore({
          nombre_pieza: e
        });
      },

      crearCantidadPiezasPorPlancha: e => {
        setStore({
          cantidadPiezasPorPlancha: e
        });
      },

      crearLongitudCortePieza: e => {
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
      //Filtro de modelo

      modeloFiltadroDos: e => {
        const store = getStore();
        setStore({
          modeloFiltrado: e
        });
        sessionStorage.setItem("modeloFiltrado", store.modeloFiltrado);
      },

      /////// fecthing data (POST, PUT)

      creandoModelo: () => {
        const store = getStore();

        let data = {
          numero_ot: store.numero_ot,
          nombre_programa: store.nombre_programa,
          cantiadUnidadesFabricarEnLaOt: store.cantiadUnidadesFabricarEnLaOt
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

        if (dato.msg) {
          setStore({
            errorModelo: dato
          });
        } else {
          setStore({
            piezasDisponiles: dato
          });
        }
      },

      creandoNestic: () => {
        const store = getStore();

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
        if (dato.msg) {
          setStore({
            errorModelo: dato
          });
        } else {
          setStore({
            piezasDisponiles: dato
          });
        }
      },

      creandoPiezas: () => {
        const store = getStore();

        let data = {
          nombre_pieza: store.nombre_pieza,
          cantidadPiezasPorPlancha: store.cantidadPiezasPorPlancha,
          crearLongitudCortePieza: store.crearLongitudCortePieza,
          nesticElegido: store.nesticElegido
        };

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
            piezasDisponiles: dato
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

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            modelosDisponibles: dato
          });
        }
      },

      obtenerNesticsDisponibles: async () => {
        const store = getStore();

        const { baseURL, modelo_elegido } = store;

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

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            nesticsDisponibles: [...dato]
          });
        }
      },

      obtenerNesticsFiltrados: async e => {
        const store = getStore();
        console.log(e, "lo que pasa directo");

        const { baseURL } = store;
        let nestic_elegido = e;

        const resp = await fetch(
          baseURL + `/api/nesticsmodelar/${nestic_elegido}`,
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
          store.nesticsModelar.push(dato);
        }
      }
    }
  };
};

export default getState;
