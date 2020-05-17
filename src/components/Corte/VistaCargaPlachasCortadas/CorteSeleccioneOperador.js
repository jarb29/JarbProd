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

export default function CorteSeleccioneOperador() {
  const classes = useStyles();
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.obtenerOtEnProduccion();
    actions.obtenerPiezasPintadas();
    actions.obtenerTodoLoDisponibleLineas();
  }, []);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">
          Operador a Elegir
        </InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          name="operador"
          onChange={e => {
            actions.cargarPlanchasCortadas(e);
          }}
        >
          <option aria-label="None" value="" />
          <option value="Juan Aedo" name="operador">
            Juan Aedo
          </option>
          <option value="Guillermo Cariaco" name="operador">
            Guillermo Cariaco
          </option>
          <option value="Francisco Venegas" name="operador">
            Francisco Venegas
          </option>
          <option value="Luis Olea" name="operador">
            Luis Olea
          </option>
          <option value="Jose Rubio" name="operador">
            Jose Rubio
          </option>
        </Select>
      </FormControl>
    </div>
  );
}
