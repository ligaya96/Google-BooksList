import React from "react";
import Button from "react-bootstrap/button"
import "./Btn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Btn(props) {
  return (
    <Button className="btn" {...props} role="button" onClick={props.onClick}>{props.children}</Button>

  );
}

export default Btn;
