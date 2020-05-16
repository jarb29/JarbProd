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

export default function LineaSubProductosPorModelos() {
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
          {store.subProductosDisponibleslineas.map((ot, index) => {
            return (
              <option
                value={ot.Linea1NombreSubproducto}
                key={index}
                name="SubProducto_seleccionado"
              >
                Sub Producto disponible: {ot.Linea1NombreSubproducto}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
