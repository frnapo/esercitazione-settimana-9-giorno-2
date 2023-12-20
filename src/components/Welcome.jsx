import { Col, Container, Row } from "react-bootstrap";

const Welcome = () => (
  <Container fluid="lg" className="mt-4">
    <Row>
      <Col md={12}>
        <div className="alert alert-primary" role="alert">
          Benvenuto su EpiBooks!
        </div>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <h2>Il tuo store online, riguardo il mondo della lettura, epico!</h2>
      </Col>
    </Row>
  </Container>
);

export default Welcome;
