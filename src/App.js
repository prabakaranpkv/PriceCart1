import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Container className="container">
        <Row className="row1">
          <Col className="head" sm={10}>
            PriceCart
          </Col>
          <Col sm={1}>
            <Button variant="primary">Cart</Button>
          </Col>
          <Col sm={1}>
            <Button variant="primary">SignIn</Button>
          </Col>
        </Row>
        <Row className="row2">
          <Col>
            <Card1 />
          </Col>
          <Col>
            <Card2 />
          </Col>
          <Col>
            <Card3 />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
