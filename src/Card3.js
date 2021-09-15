import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Card3() {
  return (
    <Card className="card">
      <Card.Text className="center version">PRO</Card.Text>
      <Card.Header className="center">
        <span className="dark">$49</span>/month
      </Card.Header>
      <Card.Body>
        <Card.Text className="bold">
          <FontAwesomeIcon icon={faCheck} /> Unlimited Users
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faCheck} /> 150GB Storage
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faCheck} /> Unlimited Public Projects
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faCheck} /> Community Access
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faCheck} /> Unlimited Private Projects
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faCheck} /> Dediacated Phone Support
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faCheck} />{" "}
          <span className="bold">Unlimited </span>Free Subdomain
        </Card.Text>
        <Card.Text>
          <FontAwesomeIcon icon={faCheck} /> Monthly Status Reports
        </Card.Text>
        <Button className="but" variant="primary">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
