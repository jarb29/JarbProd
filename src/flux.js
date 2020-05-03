const getState = ({ getStore, getActions, setStore }) => {
  return {
    // base datos Angel
    store: {
      ///// Alex URL
      baseURL: "frrfreerfrfwefefw"
    },

    actions: {
      /////// Funcion para crear el modelo

      crearModelo: e => {
        console.log(e.target.name, "nombre");
        console.log(e.target.value, "valor");
      }
    }
  };
};

export default getState;
