import React, { useState, useEffect, Suspense } from "react";
import { lazy } from "react";
import { Route, Switch} from "react-router-dom";
import Header from "./layout-components/header/Header";
import Sidebar from "./layout-components/sidebar/Sidebar";
import Footer from "./layout-components/footer/Footer";
import ThemeRoutes from "../routes/Router";
import Spinner from "./../views/spinner/Spinner";
import Cookies from "js-cookie";

const Feed = lazy(() => import("../views/feed/Feed"));
const Email = lazy(() => import("../views/email/Email"));
const Notes = lazy(() => import("../views/notes/Notes"));
const FirstDashboard = lazy(() => import("../views/dashboards/Dashboard"));

const FullLayout = (props) => {
  const token = Cookies.get("token");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth);
      
    };
    if (document.readyState === "complete") {
      updateDimensions();
    }
    window.addEventListener("load", updateDimensions.bind(null));
    window.addEventListener("resize", updateDimensions.bind(null));
    return () => {
      window.removeEventListener("load", updateDimensions.bind(null));
      window.removeEventListener("resize", updateDimensions.bind(null));
    };
  }, [width]);
const data = true;
  return (
    <div
      id="main-wrapper"
      dir="ltr"
      data-theme="light"
      data-layout="vertical"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
      data-boxed-layout="full"
    >
      <Header {...props} />

      {token && <Sidebar {...props} routes={ThemeRoutes} />}

      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/" exact={data} component={Feed} key="1" />
              <Route
                path="/dashboard"
                exact={data}
                component={FirstDashboard}
                key="2"
              />
              {token && (
                <>
                  <Route path="/posts" exact={data} component={Email} key="3" />
                </>
              )}
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FullLayout;
