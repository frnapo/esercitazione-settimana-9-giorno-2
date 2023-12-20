import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => (
  <Card className="h-100 shadow border-0 d-flex flex-column">
    <Card.Img variant="top" src={book.img} style={{ objectFit: "contain", height: "250px" }} />
    <Card.Body className="d-flex flex-column justify-content-between">
      <Card.Title>{book.title}</Card.Title>
    </Card.Body>
  </Card>
);

export default SingleBook;
