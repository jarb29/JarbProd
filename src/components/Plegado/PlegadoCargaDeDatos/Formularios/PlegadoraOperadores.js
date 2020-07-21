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

export default function PlegadoraOperadores() {
  const classes = useStyles();
  const { actions } = useContext(Context);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">
          Seleccione un Operador
        </InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          name="plegadoOperadorSeleccionado"
          onChange={e => actions.cargarDatosPlegado(e)}
        >
          <option aria-label="None" value="" />
          <option value="Raul oliva">Raul oliva</option>
          <option value="Ganllo">Ganllo</option>
          <option value="Andres Huala">Andres Huala</option>
          <option value="Rodrigo Hernandez">Rodrigo Hernandez</option>
          <option value="Sergio Valdez">Sergio Valdez</option>
          <option value="Marco Fuentes">Marco Fuentes</option>
          <option value="Brian Guarda">Brian Guarda</option>
          <option value="Roberto Diaz">Roberto Diaz</option>
          <option value="Joaquin Morales">Joaquin Morales</option>
          <option value="Hugo Toledo">Hugo Toledo</option>
          <option value="Luiz Diaz">Luiz Diaz</option>
          <option value="Victor Ribera">Victor Ribera</option>
        </Select>
      </FormControl>
    </div>
  );
}
