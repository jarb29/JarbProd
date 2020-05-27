import Calendar from "views/Calendar/Calendar.js";
import Charts from "views/Charts/Charts.js";
import Dashboard from "views/Dashboard/Dashboard.js";
import LockScreenPage from "views/Pages/LockScreenPage.js";
import LoginPage from "views/Pages/LoginPage.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import VistaGeneralCorte from "views/Corte/VistaGeneralCorte";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import Image from "@material-ui/icons/Image";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";
import CargarProgramas from "views/Corte/CargarProgramas";
import PlegadoVistaGeneral from "views/Plegado/PlegadoVistaGeneral";
import PlegadoDetallePiezas from "views/Plegado/PlegadoDetallePiezas";
import CargarPlanchasCortadas from "views/Corte/CargarPlanchasCortadas";
import PinturaVistaGeneral from "views/Pintura/PinturaVistaGeneral";
import PinturaDetallePiezas from "views/Pintura/PinturaDetallePiezas";
import Linea1DetallePiezas from "views/Linea1/Linea1DetallePiezas";
import ProductoTerminado from "views/ProductoTerminado/ProductoTerminado";
import LineaVistaGeneral from "views/Linea1/LineaVistaGeneral";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "General",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Corte",
    icon: WidgetsIcon,
    state: "cortetablesCollapse",
    views: [
      {
        path: "/corte",
        name: "Corte - General",
        mini: "CV",
        component: VistaGeneralCorte,
        layout: "/admin"
      },
      {
        path: "/cargarprograma",
        name: "Cargar Programas",
        mini: "CP",
        component: CargarProgramas,
        layout: "/admin"
      },
      {
        path: "/cargarplanchas",
        name: "Cargar Planchas Cortadas",
        mini: "PC",
        component: CargarPlanchasCortadas,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Plegado",
    icon: WidgetsIcon,
    state: "plegadotablesCollapse",
    views: [
      {
        path: "/plegado",
        name: "Plegado- General",
        mini: "PL",
        component: PlegadoVistaGeneral,
        layout: "/admin"
      },
      {
        path: "/piezasporplegado",
        name: "Cargar Piezas",
        mini: "PM",
        component: PlegadoDetallePiezas,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Pintura",
    icon: Apps,
    state: "pinturatablesCollapse",
    views: [
      {
        path: "/pintura",
        name: "Pintura- General",
        mini: "PG",
        component: PinturaVistaGeneral,
        layout: "/admin"
      },
      {
        path: "/piezasporpintura",
        name: "Pintura Cargar Piezas",
        mini: "PCP",
        component: PinturaDetallePiezas,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Lineas Soldadura",
    icon: Timeline,
    state: "linea1tablesCollapse",
    views: [
      {
        path: "/lineageneral",
        name: "Lineas general",
        mini: "LG",
        component: LineaVistaGeneral,
        layout: "/admin"
      },
      {
        path: "/lineaunodetalles",
        name: "Cargar Datos Lineas",
        mini: "LP",
        component: Linea1DetallePiezas,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Producto Terminado",
    icon: Timeline,
    state: "ProductoTerminadotablesCollapse",
    views: [
      {
        path: "/productoTerminado",
        name: "Producto Terminado",
        mini: "PT",
        component: ProductoTerminado,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Pages",
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        path: "/login-page",
        name: "Login Page",
        mini: "L",
        component: LoginPage,
        layout: "/auth"
      },
      {
        path: "/register-page",
        name: "Register Page",
        mini: "R",
        component: RegisterPage,
        layout: "/auth"
      },
      {
        path: "/lock-screen-page",
        name: "Lock Screen Page",
        mini: "LS",
        component: LockScreenPage,
        layout: "/auth"
      }
    ]
  },
  {
    path: "/charts",
    name: "Charts",
    icon: Timeline,
    component: Charts,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: DateRange,
    component: Calendar,
    layout: "/admin"
  }
];
export default dashRoutes;
