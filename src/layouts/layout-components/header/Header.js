import React, { useState } from "react";
import { useSelector } from "react-redux";
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
  UncontrolledCarousel,
  Progress,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import * as data from "./Data";

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from "../../../assets/images/logo-icon.png";
import logolighticon from "../../../assets/images/logo-light-icon.png";
import logodarktext from "../../../assets/images/logo-text.png";
import logolighttext from "../../../assets/images/logo-light-text.png";
import profilephoto from "../../../assets/images/users/1.jpg";

const Header = () => {
  const session = false;
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
              {session && (
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
                        <h4 className="mb-0 text-white">Steave Jobs</h4>
                        <p className=" mb-0">varun@gmail.com</p>
                      </div>
                    </div>

                    <DropdownItem divider />
                    <Button
                      color="danger"
                      className="btn-rounded ml-3 mb-2 mt-2"
                    >
                      <i className="fa fa-power-off mr-1 ml-1" /> Logout
                    </Button>
                  </DropdownMenu>
                </div>
              )}
              {!session && (
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
