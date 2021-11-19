import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Collapse,
} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";


const Sidebar = (props) => {
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "selected" : "";
  };
  const [state, setState] = useState({
    authentication: activeRoute("/authentication") !== "" ? true : false,
    uicomponents: activeRoute("/ui-components") !== "" ? true : false,
    samplepages: activeRoute("/sample-pages") !== "" ? true : false,
    dashboardpages: activeRoute("/dashboards") !== "" ? true : false,
    iconsPages: activeRoute("/icons") !== "" ? true : false,
    formlayoutPages: activeRoute("/form-layouts") !== "" ? true : false,
    formpickerPages: activeRoute("/form-pickers") !== "" ? true : false,
  });
  const [cstate, csetState] = useState({
    extrapages: activeRoute("/sample-pages/extra-pages") !== "" ? true : false,
  });
  
  /*--------------------------------------------------------------------------------*/
  /*To Expand SITE_LOGO With Sidebar-Menu on Hover                                  */
  /*--------------------------------------------------------------------------------*/
  const expandLogo = () => {
    document.getElementById("logobg").classList.toggle("expand-logo");
  };
  /*--------------------------------------------------------------------------------*/
  /*Verifies if routeName is the one active (in browser input)                      */
  /*--------------------------------------------------------------------------------*/

  /*--------------------------------------------------------------------------------*/
  /*Its for scroll to to                    */
  /*--------------------------------------------------------------------------------*/

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showMobilemenu = () => {
    if (window.innerWidth < 800) {
      document.getElementById("main-wrapper").classList.toggle("show-sidebar");
    }
  };

  return (
    <aside
      className="left-sidebar"
      id="sidebarbg"
      data-sidebarbg="skin6"
      onMouseEnter={expandLogo.bind(null)}
      onMouseLeave={expandLogo.bind(null)}
    >
      <div className="scroll-sidebar">
        <PerfectScrollbar className="sidebar-nav">
          {/* Profile dropdowm */}

          {/*--------------------------------------------------------------------------------*/}
          {/* Sidebar Menus will go here                                                */}
          {/*--------------------------------------------------------------------------------*/}
          <Nav id="sidebarnav">
            <>
              <li
                onClick={scrollTop}
                className={activeRoute("/dashboard") + " sidebar-item"}
                key="2"
              >
                <NavLink
                  to="/dashboard"
                  onClick={showMobilemenu}
                  className="sidebar-link"
                  activeClassName="active"
                >
                  <i className="mdi mdi-adjust" />
                  <span className="hide-menu">Dashboard</span>
                </NavLink>
              </li>
              <li
                onClick={scrollTop}
                className={activeRoute("/posts") + " sidebar-item"}
                key="3"
              >
                <NavLink
                  to="/posts"
                  onClick={showMobilemenu}
                  className="sidebar-link"
                  activeClassName="active"
                >
                  <i className="mdi mdi-email" />
                  <span className="hide-menu">Email</span>
                </NavLink>
              </li>
            </>
          </Nav>
        </PerfectScrollbar>
      </div>
    </aside>
  );
};

export default Sidebar;
