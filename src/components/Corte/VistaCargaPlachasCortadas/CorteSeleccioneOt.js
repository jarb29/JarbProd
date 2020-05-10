import React, { useContext, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Context } from "../../../AppContext";

const useStyles = makeStyles(theme =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 402
    }
  })
);

export default function CorteSeleccioneOt() {
  const classes = useStyles();
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.obtenerOtEnProduccion();
  }, []);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Modelo a Elegir</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          name="categoria"
          onChange={e => actions.obtenerOtEnProduccion(e)}
        >
          <option aria-label="None" value="" />
          {store.OtDisponiblesProduccion.map((ot, index) => {
            return (
              <option value={ot.ot_produccion} key={index}>
                Programa:{ot.modelo_produccion}, Numero Ot:{ot.ot_produccion}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
