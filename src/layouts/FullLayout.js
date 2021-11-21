import React, { useState, useEffect, Suspense } from "react";
import { lazy } from "react";
import { Route, Switch} from "react-router-dom";
import Header from "./layout-components/header/Header";
import Footer from "./layout-components/footer/Footer";
import Spinner from "./../views/spinner/Spinner";
import Cookies from "js-cookie";
import ViewPost from "../views/feed/ViewPost";

const Feed = lazy(() => import("../views/feed/Feed"));
const Email = lazy(() => import("../views/email/Email"));
const AddPost = lazy(() => import("../views/addpost/AddPost"));
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

      <div className="page-wrapper d-block">
        <div className="page-content container-fluid">
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/" exact={data} component={Feed} key="1" />
              <Route path="/post/:id" component={ViewPost} key="2" />

              {token && (
                <>
                  <Route
                    path="/dashboard"
                    exact={data}
                    component={FirstDashboard}
                    key="3"
                  />
                  <Route path="/posts" exact={data} component={Email} key="4" />
                  <Route
                    path="/add-post"
                    exact={data}
                    component={AddPost}
                    key="5"
                  />
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
