import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/user/Action";
import {
  Nav,
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
import logolighttext from "../../../assets/images/logo-text.png";
import profilephoto from "../../../assets/images/users/1.jpg";
import Cookies from "js-cookie";

const Header = (props) => {
  
  const token = Cookies.get("token");
  const userData =  JSON.parse(localStorage.getItem("userdata"));
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(true);

  const systemLogOut = ()=>{
    dispatch(logOut());
    props.history.push("/");
  }

  return (
    <header className="topbar navbarbg" data-navbarbg="skin4">
      <Navbar className="top-navbar navbar-light" expand="md">
        <div className="navbar-header" id="logobg" data-logobg="skin4">
          <NavbarBrand href="/">
            <span className="logo-text">
              <img src={logolighttext} className="light-logo" alt="homepage" />
            </span>
          </NavbarBrand>
          {/*--------------------------------------------------------------------------------*/}
          {/* Mobile View Toggler  [visible only after 768px screen]                         */}
          {/*--------------------------------------------------------------------------------*/}
        </div>
        <Collapse
          className="navbarbg"
          isOpen={isOpen}
          navbar
          data-navbarbg="skin4"
        >
          <Nav className="ml-auto float-right" navbar>
            <UncontrolledDropdown nav inNavbar>
              {token ? (
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
                        <h4 className="mb-0 text-white">
                          {userData.firstname}
                        </h4>
                        <p className=" mb-0">{userData.email}</p>
                      </div>
                    </div>

                    <DropdownItem divider />
                    <DropdownItem href="/dashboard">
                      <i className="fas fa-th mr-1 ml-1" />
                      Dashboard
                    </DropdownItem>
                    <DropdownItem href="/add-post">
                      <i className="fas fa-pencil-alt mr-1 ml-1" />
                      Бичвэр оруулах
                    </DropdownItem>
                    <DropdownItem href="/posts">
                      <i className="far fa-folder-open mr-1 ml-1" />
                      Миний бичвэрүүд
                    </DropdownItem>
                    <DropdownItem onClick={systemLogOut}>
                      <i className="fa fa-power-off mr-1 ml-1" /> Гарах
                    </DropdownItem>
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
