import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/style.scss";
import Spinner from "./views/spinner/Spinner";
import { CookiesProvider } from "react-cookie";
import "./data";

const App = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./app")), 0);
    })
);

ReactDOM.render(
  <CookiesProvider>
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  </CookiesProvider>,
  document.getElementById("root")
);
