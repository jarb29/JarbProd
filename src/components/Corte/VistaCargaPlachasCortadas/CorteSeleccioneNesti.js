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

export default function CorteSeleccioneNesti() {
  const classes = useStyles();
  const { actions, store } = useContext(Context);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Nestic a Elegir</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          name="nestic_cortado"
          onChange={e => {
            actions.cargarPlanchasCortadas(e);
          }}
        >
          <option aria-label="None" value="" />
          {store.nesticDisponiblesProduccion.map((nestic, index) => {
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
