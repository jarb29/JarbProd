import React, { useContext, useEffect } from "react";
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

export default function CorteSeleccioneNestic() {
  const classes = useStyles();
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.obtenerModelosDisponibles();
    actions.obtenerNesticsDisponibles();
  }, [store.nombre_programa, store.modelo_elegido]);

  console.log(store.modelosDisponibles);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">
          Programa Nestic a Elegir
        </InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          name="categoria"
          onChange={e => actions.crearNesticElegido(e)}
        >
          <option aria-label="None" value="" />
          {store.nesticsDisponibles.map((nestic, index) => {
            return (
              <option value={nestic.programa_nestic} key={index}>
                {nestic.programa_nestic}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
