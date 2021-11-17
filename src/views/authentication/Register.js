import React, { useState } from "react";
import validators from "./Validators";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  CustomInput,
  FormGroup,
  Form,
  Row,
  Col,
  Label,
  Button,
} from "reactstrap";
import img2 from "../../assets/images/big/auth-bg.jpg";

import { register } from "../../redux/user/Action";

const sidebarBackground = {
  backgroundImage: "url(" + img2 + ")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};

const Register = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

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

  const isFormValid = () => {
    let status = true;
    Object.keys(validators).forEach((field) => {
      if (!validators[field].valid) {
        status = false;
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

  const doRegister = (event) => {
    const email1 = email;
    const password1 = password;
    // const username1 = username;
    dispatch(register(firstname, lastname, email, password));
    
    event.preventDefault();
  };
  return (
    <>
      {user.userId && <Redirect to="/" />}
      <div
        className="auth-wrapper  align-items-center d-flex"
        style={sidebarBackground}
      >
        {/*--------------------------------------------------------------------------------*/}
        {/*Login2 Cards*/}
        {/*--------------------------------------------------------------------------------*/}
        <div className="container">
          <div>
            <Row className="no-gutters justify-content-center">
              <Col md="6" lg="4" className="bg-dark text-white">
                <div className="p-4">
                  <h2 className="display-5">Сайн уу,</h2>
                  <p className="op-5 mt-4">
                    Та өөрийн мэдлэг чадвараа бусадтай хуваалцахад бэлэн үү?
                  </p>
                </div>
              </Col>
              <Col md="6" lg="4" className="bg-white">
                <div className="p-4">
                  <h3 className="font-medium mb-3">Sign Up to Admin</h3>
                  <Form className="mt-3" id="loginform" action="/dashbaord">
                    <FormGroup className="mb-3">
                      <Label for="firstname" className="font-medium">
                        Овог
                      </Label>
                      <Input
                        type="text"
                        value={lastname}
                        onChange={(e) => {
                          setLastname(e.target.value);
                          onInputChange(e);
                        }}
                        name="lastname"
                        id="lastname"
                        placeholder="Овог"
                        bsSize="lg"
                      />
                    </FormGroup>
                    {showErrors("lastname")}
                    <FormGroup className="mb-3">
                      <Label for="firstname" className="font-medium">
                        Нэр
                      </Label>

                      <Input
                        type="text"
                        value={firstname}
                        onChange={(e) => {
                          setFirstname(e.target.value);
                          onInputChange(e);
                        }}
                        name="firstname"
                        id="firstname"
                        placeholder="Нэр"
                        bsSize="lg"
                      />
                    </FormGroup>
                    {showErrors("firstname")}
                    <FormGroup className="mb-3">
                      <Label for="email" className="font-medium">
                        Email
                      </Label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          onInputChange(e);
                        }}
                        name="email"
                        id="email"
                        placeholder="Email"
                        bsSize="lg"
                      />
                    </FormGroup>
                    {showErrors("email")}
                    <FormGroup className="mb-3">
                      <Label for="password" className="font-medium">
                        Password
                      </Label>
                      <Input
                        type="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          onInputChange(e);
                        }}
                        name="password"
                        id="password"
                        placeholder="Password"
                        bsSize="lg"
                      />
                    </FormGroup>
                    {showErrors("password")}
                    <CustomInput
                      type="checkbox"
                      id="exampleCustomCheckbox"
                      label="I agree to all Terms"
                    />
                    <Row className="mb-3 mt-3">
                      <Col xs="12">
                        <Button
                          onClick={(event) => doRegister(event)}
                          className={`text-uppercase ${
                            isFormValid() ? "" : "disabled"
                          }`}
                          color="primary"
                          size="lg"
                          type="submit"
                          block
                        >
                          Sign Up
                        </Button>
                      </Col>
                    </Row>
                    <div className="text-center">
                      Already have an account?{" "}
                      <a
                        href="/authentication/login2"
                        className="text-info ml-1"
                      >
                        <b>Sign In</b>
                      </a>
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

export default Register;
