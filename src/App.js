import React from "react";
import injectContext from "./AppContext";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import ErrorPage from "../src/views/Pages/ErrorPage";


import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";
import CargarProgramas from "views/Corte/CargarProgramas";


const hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/auth" component={AuthLayout} />
        <Route path="/admin" component={AdminLayout} />
        <Redirect from="/" to="/admin/dashboard" />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default injectContext(App);
