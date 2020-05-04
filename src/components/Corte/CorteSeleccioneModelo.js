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
      minWidth: 402
    }
  })
);

export default function CorteSeleccioneModelo() {
  const classes = useStyles();
  const { actions, store } = useContext(Context);

  console.log(store.nombre_programa);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Modelo a Elegir</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          name="categoria"
          onChange={e => actions.crearModeloElegido(e)}
        >
          <option aria-label="None" value="" />
          {store.nombre_programa.map((programa, index) => {
            return (
              <option value={programa} key={index}>
                {programa}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
