import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export default function AddElectricityType() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="container">
      <div className="text-center fs-4 fw-bold text-white">
        Add A New Electricity Type
      </div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="add-form p-5 text-center"
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label className="text-dark fw-bold">
              Electricity Number
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Electricity Number"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label className="text-dark fw-bold">
              Electricity Type
            </Form.Label>
            <Form.Control required type="text" placeholder="Electricity Type" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label className="text-dark fw-bold">Cost</Form.Label>
            <Form.Control type="text" placeholder="Cost" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label className="text-dark fw-bold">Description</Form.Label>
            <Form.Control
              type="text"
              row="10"
              placeholder="Description"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit" className="mt-5">
          Submit form
        </Button>
      </Form>
    </div>
  );
}
