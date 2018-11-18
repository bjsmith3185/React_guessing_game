import React from "react";
import "./Alert.css";

const Alert = props => (

  <div className="yess text-center">
    The dog likes you back!
    <span> you have {props.number} matches so far!</span>

  </div>
);

export default Alert;