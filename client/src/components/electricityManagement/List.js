import React from "react";
import "../../css/List.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function AdminList() {
  return (
    <div>
      <div className="container">
        {/* <div className="d-flex text-end">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </div> */}
        <div className="text-end mt-5">
          <Button variant="primary">Add a New Room</Button>{" "}
          <Button variant="primary ms-3">Generate a Report</Button>{" "}
        </div>
        <div className="row card-row p-5 align-items-center mt-5">
          <div className="col-md-8">
            <h3 className="fw-bold">Presidential Suite</h3>
            <p className="mt-3 fs-5">
              The most expensive room is provided by a hotel. Usually, only one
              president suite is available in one single hotel property. Similar
              to the normal suites, a president suite always has one or more
              bedrooms and living space with a strong emphasis on grand in-room
              decoration, high-quality amenities and supplies, and tailor-made
              services
            </p>
            <p className="text-muted mt-3">
              Price : Rs<span>150000</span>
            </p>
          </div>
          <div className="col-md-4">
            <Button variant="success" className="btn-set">
              Edit
            </Button>{" "}
            <br></br>
            <Button variant="danger" className="mt-3 btn-set">
              Delete
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
