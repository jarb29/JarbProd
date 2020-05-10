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

      // Variables para las planchas cortadas
      planchas_cortadas: "",
      ot_cortada: "",
      operador: "",
      nestic_cortado: "",

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
      modelosAProduccion: [],
      errorModeloProduccion: [],
      OtDisponiblesProduccion: [],
      nesticDisponiblesProduccion: [],
      nesticCortados: [],

      //  variables de la logica del toda la aplicacion
      modeloFiltrado: [],
      modeloInputParaCaluloTiempo: [],
      inputUnidadesStufas: [],
      valorTiempoNesticCalculado: []
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
      //calculo de tiempo por producto

      handleToggleNestic: e => {
        setStore({
          modeloInputParaCaluloTiempo: e.target.id,
          inputUnidadesStufas: e.target.value
        });
      },

      handleToggleNesticValor: event => {
        const store = getStore();
        let sum = 0;
        store.nesticsDisponibles.map(nests => {
          // The math is no ok to calculate de number
          if (event.target.name === nests.modelo_elegido) {
            let nuevoValor = parseInt(event.target.value);
            let nuevoNumeroPiezas = nests.numero_piezas_criticas;
            let nuevoTiempoCorte = nests.tiempo_corte;
            const valorPorPieza = parseFloat(nuevoValor / nuevoNumeroPiezas);
            const valorFinal = valorPorPieza * (nuevoTiempoCorte + 0.7);
            sum = Math.round(parseInt(sum, 10) + parseInt(valorFinal, 10) / 60);
          }
          return sum;
        });

        store.modeloFiltrado.map(modelo => {
          if (modelo[3] === event.target.name) {
            modelo[5] = sum;
          }
          setStore({
            valorTiempoNesticCalculado: store.modeloFiltrado
          });
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
        setStore({
          nesticElegido: e.target.value
        });
      },
      // cargando numero de planchas cortadas
      cargarPlanchasCortadas: e => {
        setStore({
          [e.target.name]: e.target.value
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
          modeloFiltrado: e,
          valorTiempoNesticCalculado: e
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

      // Creandon programas a produccion
      programasAProduccion: event => {
        console.log(event[3], "modelos a produccion");

        let data = {
          modelo_produccion: event[3],
          ot_produccion: event[4],
          cantidad_producir: event[0]
        };
        getActions().registroProgramasProduccion(
          "/api/modelosproduccion",
          data
        );
      },

      registroProgramasProduccion: async (url, data) => {
        console.log(data, "data en el flux");
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
        console.log(dato, "retorno modelo a produccion creado");
        if (dato.msg) {
          setStore({
            errorModeloProduccion: dato
          });
        } else {
          setStore({
            modelosAProduccion: dato
          });
        }
      },

      // Crendo Nestics de produccion a corte
      nesticACorte: e => {
        const store = getStore();
        console.log(e, "antes del envio en el flux precent default");

        let data = {
          planchas_cortadas: store.planchas_cortadas,
          ot_cortada: store.ot_cortada,
          operador: store.operador,
          nestic_cortado: store.nestic_cortado
        };
        getActions().registroNestiProduccion("/api/plachascortadas", data);
      },

      registroNestiProduccion: async (url, data) => {
        console.log(
          data,
          "data en el flux para el registro de los programas nest en corte"
        );

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
        console.log(dato, "retorno nestic cortadas a produccion creado");
        if (dato.msg) {
          setStore({
            errorModeloProduccion: dato
          });
        } else {
          setStore({
            nesticCortados: dato
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

        const { baseURL } = store;

        const resp = await fetch(baseURL + `/api/Nesticsdisponibles`, {
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
            nesticsDisponibles: dato
          });
        }
      },

      obtenerNesticsFiltrados: async e => {
        const store = getStore();
        console.log(e.target.value, "en el flux nestic filtrado");

        const { baseURL } = store;
        let nestic_elegido = e.target.value;

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
        console.log(dato, "en el flux nestic filtrado despues del fetch");

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            nesticsModelar: dato
          });
          store.nesticsModelar.push(dato);
        }
      },

      obtenerOtEnProduccion: async () => {
        const store = getStore();

        const { baseURL } = store;
        const resp = await fetch(baseURL + `/api/otProduccion`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();
        console.log(dato, "retorno de la ot del flux");
        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            OtDisponiblesProduccion: dato
          });
        }
      },

      obtenerNesticEnProduccion: async e => {
        const store = getStore();
        let numeroOt = e.target.value;

        const { baseURL } = store;
        const resp = await fetch(
          baseURL + `/api/nesticProduccion/${numeroOt}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const dato = await resp.json();
        console.log(dato, "Nestis elegidos retorno de la ot del flux");
        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            nesticDisponiblesProduccion: dato
          });
        }
      }
    }
  };
};

export default getState;
