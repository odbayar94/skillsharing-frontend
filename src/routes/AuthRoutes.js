import { lazy } from "react";
const Login = lazy(() => import("../views/authentication/Login"));
const Register = lazy(() => import("../views/authentication/Register"));
const Recoverpwd = lazy(() => import("../views/authentication/RecoverPwd"));

var authRoutes = [

  {
    path: "/authentication/login",
    name: "Login",
    icon: "mdi mdi-account-key",
    component: Login,
  },
  {
    path: "/authentication/register",
    name: "Register",
    icon: "mdi mdi-account-plus",
    component: Register,
  },
  {
    path: "/authentication/recover-pwd",
    name: "Recover Password",
    icon: "mdi mdi-account-convert",
    component: Recoverpwd,
  },
];
export default authRoutes;
