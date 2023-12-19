import { Component } from "react";
import { Alert, Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

class AllTheBoks extends Component {
  state = {
    selectedCategory: null,
  };

  selectCategory = (category) => {
    this.setState({ selectedCategory: category });
  };

  getBooksByCategory = () => {
    const { selectedCategory } = this.state; //destrutturazione

    switch (selectedCategory) {
      case "fantasy":
        return fantasy;
      case "history":
        return history;
      case "horror":
        return horror;
      case "romance":
        return romance;
      case "scifi":
        return scifi;
      default:
        return [];
    }
  };

  render() {
    const books = this.getBooksByCategory();

    return (
      <Container className="mt-4">
        <Button className="me-2" variant="outline-secondary" onClick={() => this.selectCategory("fantasy")}>
          Fantasy
        </Button>
        <Button className="me-2" variant="outline-secondary" onClick={() => this.selectCategory("history")}>
          Storia
        </Button>
        <Button className="me-2" variant="outline-secondary" onClick={() => this.selectCategory("horror")}>
          Horror
        </Button>
        <Button className="me-2" variant="outline-secondary" onClick={() => this.selectCategory("romance")}>
          Romance
        </Button>
        <Button className="me-2" variant="outline-secondary" onClick={() => this.selectCategory("scifi")}>
          Sci-Fi
        </Button>
        <Row className="mt-4">
          {this.state.selectedCategory ? (
            books.map((book) => (
              <Col lg={3} key={book.asin} className="mb-3">
                <Card className="h-100 shadow border-0 d-flex flex-column">
                  <Card.Img variant="top" src={book.img} style={{ objectFit: "contain", height: "250px" }} />
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>
                        {book.price}€ - <Badge bg="dark">{book.category}</Badge>
                      </Card.Text>
                    </div>
                    <div>
                      <Button variant="success w-100 mb-2 mt-3">Acquista</Button>
                      <Button className="w-100" variant="secondary">
                        Salva per dopo
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Alert variant="warning">Seleziona una categoria per mostrare i libri.</Alert>
          )}
        </Row>
      </Container>
    );
  }
}

export default AllTheBoks;
