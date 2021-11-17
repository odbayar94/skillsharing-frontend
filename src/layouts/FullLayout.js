import React, { useState, useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./layout-components/header/Header";
import Sidebar from "./layout-components/sidebar/Sidebar";
import Footer from "./layout-components/footer/Footer";

import ThemeRoutes from "../routes/Router";
import Spinner from "./../views/spinner/Spinner";

const FullLayout = (props) => {
  const user = useSelector((state) => state.user);
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
  }, ["full", width]);

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
      {/*--------------------------------------------------------------------------------*/}
      {/* Header                                                                         */}
      {/*--------------------------------------------------------------------------------*/}
      <Header />
      {/*--------------------------------------------------------------------------------*/}
      {/* Sidebar                                                                        */}
      {/*--------------------------------------------------------------------------------*/}
      {user.userId && <Sidebar {...props} routes={ThemeRoutes} />}
      {/*--------------------------------------------------------------------------------*/}
      {/* Page Main-Content                                                              */}
      {/*--------------------------------------------------------------------------------*/}
      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          <Suspense fallback={<Spinner />}>
            <Switch>
              {user.userId &&
                ThemeRoutes.map((prop, key) => {
                  if (prop.navlabel) {
                    return null;
                  } else if (prop.collapse) {
                    return prop.child.map((prop2, key2) => {
                      if (prop2.collapse) {
                        return prop2.subchild.map((prop3, key3) => {
                          return (
                            <Route
                              path={prop3.path}
                              component={prop3.component}
                              key={key3}
                            />
                          );
                        });
                      }
                      return (
                        <Route
                          path={prop2.path}
                          component={prop2.component}
                          key={key2}
                        />
                      );
                    });
                  } else if (prop.redirect) {
                    return (
                      <Redirect from={prop.path} to={prop.pathTo} key={key} />
                    );
                  } else {
                    return (
                      <Route
                        path={prop.path}
                        exact={prop.exact}
                        component={prop.component}
                        key={key}
                      />
                    );
                  }
                })}
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FullLayout;
