import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container" onClick={() => props.clickImage(props.id)}>
      <img alt={props.id} src={props.image} />
    </div>
    
   <div>{props.id}</div>
  </div>
);

export default Card;
