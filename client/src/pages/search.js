import React, { useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import Search from "../components/Search";
import API from "../../utils/API";
import BookList from "../components/BookList"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// trying to intialize our state
function Search() {
    const [books, setBooks] = useState([]);
    const [ query, setQuery] = useState("");
    function handleInputChange(event) {
        setQuery(event.target.value);
      }
}
// saving book data. 
function handleFormSubmit(event){
    event.preventDefault();
    API.getBooks(query).then((res) => {
        setBooks(res.data.items);
    })
    .catch((err) => console.log(err));
}
// Saved book
function saveBook(id){
    const book = books.find((book) => book.id === id);
    // if no author
    if (book.volumeInfo.authors === undefined) {
      book.volumeInfo.authors = ["No Authors found"];
    }
    API.saveBook({
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors[0],
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail,
        link: book.volumeInfo.infoLink,
      })
}
return (
  <Container fluid>
    <Jumbotron />
    <Search
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
    />
    <Container fluid id="book-box">
      <Row>
        <h1>Your Results </h1>
      </Row>
      <Row>
        {books.map((book) => (
          <BookList
            key={book.id}
            title={book.volumeInfo.title}
            subtitle={book.volumeInfo.subtitle}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLink }
            link={book.volumeInfo.infoLink}
            rating={book.volumeInfo.averageRating}
            onClick={() => saveBook(book.id)}
            label="Save"
            bgColor="#f4a451"
          />
        ))}
      </Row>
    </Container>
  </Container>
);

export default Search;