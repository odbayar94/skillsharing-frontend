import { lazy } from "react";
// import AuthRoutes from "./AuthRoutes";

const FirstDashboard = lazy(() => import("../views/dashboards/Dashboard"));
const Email = lazy(() => import("../views/email/Email"));
const Notes = lazy(() => import("../views/notes/Notes"));

// var auths = [].concat(AuthRoutes);

var ThemeRoutes = [
  

  {
    path: "/dashboard",
    name: "Dashboard",
    mini: "B",
    icon: "mdi mdi-adjust",
    component: FirstDashboard,
  },
  {
    path: "/email",
    name: "Email",
    icon: "mdi mdi-email",
    component: Email,
  },
  {
    path: "/notes",
    name: "Notes",
    icon: "mdi mdi-note",
    component: Notes,
  },

];
export default ThemeRoutes;
