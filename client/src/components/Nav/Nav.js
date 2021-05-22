import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Nav className="navbar-brand" href="/">
      <Link className="nav-item nav-link h5" to="/">Searched Book </Link>
          <Link className="nav-item nav-link h5" to="/save">Saved Books </Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
