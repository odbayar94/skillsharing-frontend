import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import {sendPost} from "../../redux/post/Action"

const EmailSidebar = () => {
  let title, context;
const dispatch = useDispatch();

const sumbitPost = function (e) {
  e.preventDefault();

  dispatch(
    sendPost({
      title: title.value,
      context: context.value,
    })
  );

  title.value = null;
  context.value = null;
  toggle.bind(null);
};


  const [composeModal, setComposeModal] = useState(false);

  const toggle = () => {
    setComposeModal(!composeModal);
  };

  return (
    <div>
      <div className="p-3">
        <span
          onClick={toggle.bind(null)}
          className="btn btn-danger d-block text-white"
        >
          Нийтлэл нэмэх
        </span>
      </div>
      <div className="divider"></div>

      <Modal isOpen={composeModal} toggle={toggle.bind(null)} size="lg">
        <ModalHeader toggle={toggle.bind(null)}>Нийтлэл бичих</ModalHeader>
        <Form onSubmit={sumbitPost}>
          <ModalBody>
            <div className="form-body">
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Label for="subject">Гарчиг</Label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      ref={(value) => (title = value)}
                    />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <Label for="msg">Текст</Label>
                    <input
                      type="textarea"
                      name="msg"
                      id="msg"
                      ref={(value) => (context = value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit">
              Хадгалах
            </Button>{" "}
            <Button color="danger" onClick={toggle.bind(null)}>
              Хаах
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default EmailSidebar;
