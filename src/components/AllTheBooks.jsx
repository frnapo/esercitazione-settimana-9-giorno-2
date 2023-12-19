import { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

class AllTheBoks extends Component {
  state = {
    selectedCategory: null,
  };

  render() {
    return (
      <Container className="mt-5">
        <Row>
          {fantasy.map((book) => (
            <Col lg={3}>
              <Card key={book.asin}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price}</Card.Text>
                  <Button variant="primary">Acquista</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBoks;
