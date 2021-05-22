import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container";

function Jumbotron() {
  return (
    <Jumbotron
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
     <Container className="text-center">
        <h1 className="display-4">My Booklist (Google)</h1>
        <p className="lead"> Save Books Or Search for Books? </p>
      </Container>
    </Jumbotron>
  );
}

export default Jumbotron;
