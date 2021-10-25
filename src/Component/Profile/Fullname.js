import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Fullname = () => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Enter your name</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>RAOUA OUESLATI</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default Fullname;
