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

export default function PlegadoMaquinasDisponibles() {
  const classes = useStyles();
  const { actions } = useContext(Context);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">
          Seleccione una Maquina
        </InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          name="plegadoMaquinaSeleccionada"
          onChange={e => actions.cargarDatosPlegado(e)}
        >
          <option aria-label="None" value="" />
          <option value="Plegadora 1">Plegadora 1</option>
          <option value="Plegadora 2">Plegadora 2</option>
          <option value="Plegadora 3">Plegadora 3</option>
          <option value="Durman">Durman</option>
          <option value="Plegadora 4">Plegadora 4</option>
          <option value="Plegadora 5">Plegadora 5</option>
        </Select>
      </FormControl>
    </div>
  );
}
