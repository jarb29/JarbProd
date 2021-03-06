import React, { useContext } from "react";
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

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Ot a Elegir</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          name="ot_cortada"
          onChange={e => {
            actions.obtenerNesticEnProduccion(e);
            actions.cargarPlanchasCortadas(e);
          }}
        >
          <option aria-label="None" value="" />
          {store.OtDisponiblesProduccion.map((ot, index) => {
   
            return (
              <option value={ot.ot_produccion} key={index} name="ot_cortada" >
                Programa:{ot.modelo_produccion}, Numero Ot:{ot.ot_produccion}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
