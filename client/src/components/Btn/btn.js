import React from "react";
import "./Btn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Btn(props) {
  return (
    <span className="btn" {...props} role="button" onClick={props.onClick}>{props.children}</span>

  )
}

export default Btn;
