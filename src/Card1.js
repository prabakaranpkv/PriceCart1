import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Card1() {
  return (
    <Card className="card">
      <Card.Text className="center version">FREE</Card.Text>
      <Card.Header className="center">
        <span className="dark">$0</span>/month
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <FontAwesomeIcon icon={faCheck} /> Single User
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faCheck} /> 5GB Storage
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faCheck} /> Unlimited Public Projects
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faCheck} /> Community Access
        </Card.Text>
        <Card.Text className="display">
          <FontAwesomeIcon icon={faTimes} /> Unlimited Private Projects
        </Card.Text>
        <Card.Text className="display">
          <FontAwesomeIcon icon={faTimes} /> Dediacated Phone Support
        </Card.Text>
        <Card.Text className="display">
          <FontAwesomeIcon icon={faTimes} /> Free Subdomain
        </Card.Text>
        <Card.Text className="display">
          <FontAwesomeIcon icon={faTimes} /> Monthly Status Reports
        </Card.Text>
        <Button className="but" variant="primary">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
