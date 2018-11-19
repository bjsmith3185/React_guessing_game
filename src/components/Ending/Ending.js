import React from "react";
import "./Ending.css";

const Ending = props => (
    <div>
        <h1 className="ending">Awesome Game! You Scored {props.children}</h1>
      
    </div>
)

export default Ending;
