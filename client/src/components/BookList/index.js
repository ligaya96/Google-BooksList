// For Book List
import React from "react";
import Btn from "../Btn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

function Booklist (props) {
 return( 
   <Col> 
  <Row key = {props.id} className = "card">
    <Col> 
     {/* author column */}
    <Row sm= {8} md = {8}>
        <h1>{props.title}</h1>
          <p>Author {""} {props.authors ? props.authors.join(`, `) : "Author not found"}</p> 
    </Row>
    </Col>
    {/* Button to display book */}
     <Col md = {5} xs = {12}>
     <Row>
      <Btn className="d-flex justify-content-end button-ctn"> <a href={props.link} target="_blank" rel="noopener noreferrer"> View? </a> </Btn>
     </Row>
      </Col>
     </Row>
    <Row>
     <Col xs={12} md={2}>
     <img  className="img-thumbnail img-fluid w-35" src={props.image} alt={props.title} />
     </Col>
    <Col xs={12} sm={10} md={10}> <p className="description">{props.description}</p></Col>
     </Row>
    </Col>
    )
}
export default Booklist;