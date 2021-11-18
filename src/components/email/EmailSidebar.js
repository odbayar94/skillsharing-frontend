import React, { useState } from "react";
import {
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import FilterEmail from "../../components/email/FilterLinks";
import { EmailVisibilityFilters } from "../../redux/email/Action";

const EmailSidebar = () => {
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
          Compose
        </span>
      </div>
      <div className="divider"></div>
     
      <Modal isOpen={composeModal} toggle={toggle.bind(null)} size="lg">
        <ModalHeader toggle={toggle.bind(null)}>
          Compose New Message
        </ModalHeader>
        <ModalBody>
          <Form>
            <div className="form-body">
              <Row>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="to">To</Label>
                    <Input type="text" id="to" name="to" />
                  </FormGroup>
                </Col>
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label for="cc">CC</Label>
                    <Input type="text" id="cc" name="cc" />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <Label for="subject">Subject</Label>
                    <Input type="text" id="subject" name="subject" />
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup>
                    <Label for="msg">Email Message</Label>
                    <Input type="textarea" name="msg" id="msg" />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label>Attachment</Label>
                <Input
                  type="file"
                  className="form-control-file"
                  id="projectinput8"
                />
              </FormGroup>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle.bind(null)}>
            Send
          </Button>{" "}
          <Button color="secondary" onClick={toggle.bind(null)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EmailSidebar;
