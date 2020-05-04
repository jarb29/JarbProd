const getState = ({ getStore, getActions, setStore }) => {
  return {
    // base datos Angel
    store: {
      /////URL
      baseURL: "frrfreerfrfwefefw",

      //Variables para crear el Modelo
      numero_ot: [],
      nombre_programa: []

      //Variables para crear el Nestic
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
        console.log(e, "Numero de la OT");
        setStore({
          numero_ot: e
        });
      }
    }
  };
};

export default getState;
