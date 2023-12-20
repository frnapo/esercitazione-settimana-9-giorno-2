import SingleBook from "./SingleBook";

const BookList = ({ books }) => (
  <div>
    {books.map((book) => (
      <SingleBook key={book.asin} book={book} />
    ))}
  </div>
);

export default BookList;
