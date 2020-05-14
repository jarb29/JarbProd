import React, { useContext } from "react";
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

export default function PlegadoPiezasDisponiblesModelo() {
  const classes = useStyles();
  const { store, actions } = useContext(Context);
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Pieza a Elegir</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          name="plegadoPiezaSeleccionada"
          onChange={e => {
            actions.cargarDatosPlegado(e);
          }}
        >
          <option aria-label="None" value="" />
          {store.piezasDisponiblesPlegado.map((ot, index) => {
            return (
              <option value={ot.nombre_pieza} key={index} name="ot_cortada">
                Pieza disponible: {ot.nombre_pieza}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
