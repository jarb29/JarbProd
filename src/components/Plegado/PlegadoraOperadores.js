import React, { useContext } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Context } from "../../AppContext";

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
          <option value="Bebidas">Luis</option>
          <option value="Dulces">Lucho</option>
          <option value="Charcuteria">Francisco</option>
          <option value="Verduras">Carlos</option>
        </Select>
      </FormControl>
    </div>
  );
}
