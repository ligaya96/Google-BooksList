import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import BookList from "../components/BookList"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function save() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks(id);
  }, [])

  // Loads all books and sets them to books
  function loadBooks(id) {
    API.getALLBooks()
      .then(res =>  setBooks(res.data))
      .catch(err => console.log(err));
  }
  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(book) {
    API.deleteBook(book.id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }
return (
<Container fluid>
      <Jumbotron />
      <Container >
        <Row>
          <h1>Your Saved Books</h1>
        </Row>
        <Row>
          {books.map((book) => (
            <BookList
              key={book._id}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              onClick={() => deleteBook(book)}
              label="Delete"
              display="none"
            ></BookList>
          ))}
        </Row>
      </Container>
    </Container>
  );
}


export default save;
