import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/user/Action";
import {
  Nav,
  NavItem,
  NavLink,
  Button,
  Navbar,
  NavbarBrand,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from "../../../assets/images/logo-icon.png";
import logolighticon from "../../../assets/images/logo-light-icon.png";
import logodarktext from "../../../assets/images/logo-text.png";
import logolighttext from "../../../assets/images/logo-light-text.png";
import profilephoto from "../../../assets/images/users/1.jpg";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const showMobilemenu = () => {
    document.getElementById("main-wrapper").classList.toggle("show-sidebar");
  };

  const sidebarHandler = () => {
    let element = document.getElementById("main-wrapper");
    element.classList.toggle("mini-sidebar");
    if (element.classList.contains("mini-sidebar")) {
      element.setAttribute("data-sidebartype", "mini-sidebar");
    } else {
      element.setAttribute("data-sidebartype", "full");
    }
    
  };
  const systemLogOut = ()=>{
    dispatch(logOut());
  }

  return (
    <header className="topbar navbarbg" data-navbarbg="skin4">
      <Navbar className="top-navbar navbar-light" expand="md">
        <div className="navbar-header" id="logobg" data-logobg="skin4">
          {/*--------------------------------------------------------------------------------*/}
          {/* Mobile View Toggler  [visible only after 768px screen]                         */}
          {/*--------------------------------------------------------------------------------*/}
          <span
            className="nav-toggler d-block d-md-none"
            onClick={showMobilemenu.bind(null)}
          >
            <i className="ti-menu ti-close" />
          </span>
          {/*--------------------------------------------------------------------------------*/}
          {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
          {/*--------------------------------------------------------------------------------*/}
          <NavbarBrand href="/">
            <b className="logo-icon">
              <img src={logodarkicon} alt="homepage" className="dark-logo" />
              <img src={logolighticon} alt="homepage" className="light-logo" />
            </b>
            <span className="logo-text">
              <img src={logodarktext} alt="homepage" className="dark-logo" />
              <img src={logolighttext} className="light-logo" alt="homepage" />
            </span>
          </NavbarBrand>
          {/*--------------------------------------------------------------------------------*/}
          {/* Mobile View Toggler  [visible only after 768px screen]                         */}
          {/*--------------------------------------------------------------------------------*/}
          <span
            className="topbartoggler d-block d-md-none"
            onClick={toggle.bind(null)}
          >
            <i className="ti-more" />
          </span>
        </div>
        <Collapse
          className="navbarbg"
          isOpen={isOpen}
          navbar
          data-navbarbg="skin4"
        >
          <Nav className="float-left" navbar>
            <NavItem>
              <NavLink
                href="#"
                className="d-none d-md-block"
                onClick={sidebarHandler.bind(null)}
              >
                <i className="mdi mdi-menu" />
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto float-right" navbar>
            <UncontrolledDropdown nav inNavbar>
              {user.userId ? (
                <div>
                  <DropdownToggle nav caret className="pro-pic">
                    <img
                      src={profilephoto}
                      alt="user"
                      className="rounded-circle"
                      width="31"
                    />
                  </DropdownToggle>
                  <DropdownMenu right className="user-dd">
                    <span className="with-arrow">
                      <span className="bg-primary" />
                    </span>
                    <div className="d-flex no-block align-items-center p-3 bg-primary text-white mb-2">
                      <div className="">
                        <img
                          src={profilephoto}
                          alt="user"
                          className="rounded-circle"
                          width="60"
                        />
                      </div>
                      <div className="ml-2">
                        <h4 className="mb-0 text-white">{user.firstname}</h4>
                        <p className=" mb-0">{user.email}</p>
                      </div>
                    </div>

                    <DropdownItem divider />
                    <Button
                      color="danger"
                      className="btn-rounded ml-3 mb-2 mt-2"
                      onClick={systemLogOut}
                    >
                      <i className="fa fa-power-off mr-1 ml-1" /> Logout
                    </Button>
                  </DropdownMenu>
                </div>
              ) : (
                <Button
                  color="success"
                  className="btn-rounded ml-3 mb-2 mt-2"
                  href="/authentication/login"
                >
                  Нэвтрэх
                </Button>
              )}
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
