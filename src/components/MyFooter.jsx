import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class MyFooter extends Component {
  render() {
    return (
      <footer className="bg-dark text-light py-4 mt-4">
        <Container>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <h5>Contatti</h5>
              <p>
                Indirizzo: Via Esempio 912, 00100 Città
                <br />
                Telefono: 123-456-7890
                <br />
                Email: epibooks@gmail.com
              </p>
            </Col>
            <Col md={4}></Col>
          </Row>
          <Row>
            <Col className="text-center py-3">© 2023 EpiBooks!</Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default MyFooter;
