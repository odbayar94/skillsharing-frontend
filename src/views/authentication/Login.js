import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  CustomInput,
  Form,
  Row,
  Col,
  Label,
  Button,
} from "reactstrap";
import validators from "./Validators";
import img2 from "../../assets/images/big/auth-bg.jpg";

import {loginUser} from "../../redux/user/Action"

const sidebarBackground = {
  backgroundImage: "url(" + img2 + ")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};

const Login = (props) => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onInputChange = (e) => {
    formValidators([e.target.name], e.target.value);
  };

  const formValidators = (fieldName, value) => {
    validators[fieldName].errors = [];
    validators[fieldName].state = value;
    validators[fieldName].valid = true;
    validators[fieldName].rules.forEach((rule) => {
      if (rule.test instanceof RegExp) {
        if (!rule.test.test(value)) {
          validators[fieldName].errors.push(rule.message);
          validators[fieldName].valid = false;
        }
      } else if (typeof rule.test === "function") {
        if (!rule.test(value)) {
          validators[fieldName].errors.push(rule.message);
          validators[fieldName].valid = false;
        }
      }
    });
  };

  const validForm = () => {
    let status = true;
    Object.keys(validators).forEach((field) => {
      if (field === "email" || field === "password") {
        if (!validators[field].valid) {
          status = false;
        }
      }
    });
    return status;
  };

  const showErrors = (fieldName) => {
    const validator = validators[fieldName];
    const result = "";
    if (validator && !validator.valid) {
      const errors = validator.errors.map((info, index) => {
        return (
          <span className="error" key={index}>
            * {info}
            <br />
          </span>
        );
      });
      return <div className="error mb-2">{errors}</div>;
    }
    return result;
  };

  const doLogin = (event) => {

    if (validForm()) {

      dispatch(loginUser(email, password));
    }
    
    event.preventDefault();
  };

  return (
    <>
      {user.userId && <Redirect to="/" />}
      <div
        className="auth-wrapper  align-items-center d-flex"
        style={sidebarBackground}
      >
        <div className="container">
          <div>
            <Row className="no-gutters justify-content-center">
              <Col md="6" lg="4" className="bg-dark text-white">
                <div className="p-4">
                  <h2 className="display-5">Сайн байна уу,</h2>
                  <p className="op-5 mt-4">
                    Мэдлэгийн санд тавтай морил. Та доорх нууц үгийг ашиглаж
                    системд нэвтрэх боломжтой
                  </p>
                  <p className="mt-5">Username: demo@demo.com</p>
                  <p className="align-items-end">Password: demo123</p>
                </div>
              </Col>
              <Col md="6" lg="4" className="bg-white">
                <div className="p-4">
                  <Form className="mt-3" id="loginform" action="/dashbaord">
                    <Label for="email" className="font-medium">
                      И-мэйл хаяг
                    </Label>
                    <InputGroup className="mb-2" size="lg">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ti-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          onInputChange(e);
                        }}
                        placeholder="И-мэйл"
                      />
                    </InputGroup>
                    {showErrors("email")}
                    <Label for="password" className="mt-3 font-medium">
                      Нууц үг
                    </Label>
                    <InputGroup className="mb-3" size="lg">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ti-pencil"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          onInputChange(e);
                        }}
                        placeholder="Нууц үг"
                      />
                    </InputGroup>
                    {showErrors("password")}
                    <div className="d-flex no-block align-items-center mb-4 mt-4">
                      <CustomInput
                        type="checkbox"
                        id="exampleCustomCheckbox"
                        label="Намайг сана"
                      />
                    </div>
                    <Row className="mb-3">
                      <Col xs="12">
                        <Button
                          color="primary"
                          onClick={(event) => doLogin(event)}
                          className={`${validForm() ? "" : "disabled"}`}
                          size="lg"
                          type="submit"
                          block
                        >
                          Нэвтрэх
                        </Button>
                      </Col>
                    </Row>
                    <div className="text-center">
                      Бүртгүүлж амжаагүй бол{" "}
                      <a
                        href="/authentication/register"
                        className="text-info ml-1"
                      >
                        <b>Бүртгүүлэх</b>{" "}
                      </a>
                      дарна уу.
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
