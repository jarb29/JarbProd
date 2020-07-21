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
          <option value="HJO 52">HJO 52</option>
          <option value="HJO 53">HJO 53</option>
          <option value="Plegadora CHINA CNC">Plegadora CHINA CNC</option>
          <option value="Plegadora CHINA 3">Plegadora CHINA 3</option>
          <option value="Plegadora CHINA 2">Plegadora CHINA 2</option>
          <option value="Plegadora CHINA 41">Plegadora CHINA 41</option>
          <option value="Plegadora HJO 13">Plegadora 11</option>
          <option value="Plegadora HJO 13">Plegadora HJO 13</option>
          <option value="Durman">Durman</option>
          <option value="Plegadora 8">Plegadora 8</option>
          <option value="Plegadora 9">Plegadora 9</option>
          <option value="Paneladora">Paneladora</option>
        </Select>
      </FormControl>
    </div>
  );
}
