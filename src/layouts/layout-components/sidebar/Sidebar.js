import React from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";


const Sidebar = (props) => {
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "selected" : "";
  };
  
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
              <li
                onClick={scrollTop}
                className={activeRoute("/add-post") + " sidebar-item"}
                key="4"
              >
                <NavLink
                  to="/add-post"
                  onClick={showMobilemenu}
                  className="sidebar-link"
                  activeClassName="active"
                >
                  <i className="mdi mdi-email" />
                  <span className="hide-menu">Add post</span>
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
