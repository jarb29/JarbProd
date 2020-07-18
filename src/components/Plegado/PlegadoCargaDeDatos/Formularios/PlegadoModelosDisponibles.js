import React, { useContext, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Context } from "../../../../AppContext";

const useStyles = makeStyles(theme =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 420
    }
  })
);

export default function PlegadoModelosDisponibles() {
  const classes = useStyles();
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.obtenerOtEnProduccion();
    actions.obtenerPiezasPlegadas();
    actions.obtenerPiezasPintadas();
    actions.obtenerProduccionDisponible();
  }, []);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Ot a Elegir</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          name="plegado_modelo_seleccionado"
          onChange={e => {
            actions.obtenerNesticEnProduccion(e);
            actions.obtenerPiezas(e);
            actions.cargarDatosPlegado(e);
            actions.obtenerSubProductosDisponible(e);
          }}
        >
          <option aria-label="None" value="" />
          {store.OtDisponiblesProduccion.map((ot, index) => {
            return (
              <option
                value={ot.ot_produccion}
                key={index}
                name={ot.modelo_produccion}
              >
                Programa: {ot.modelo_produccion}, Numero Ot: {ot.ot_produccion}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
