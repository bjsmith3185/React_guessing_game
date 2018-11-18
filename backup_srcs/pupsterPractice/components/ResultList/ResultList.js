/*eslint no-unused-expressions: "error"*/
import React from "react";

const ResultList = props => (

  // {console.log(props.results)}
  <ul className="list-group">
    {props.results.map(result => (
      <li className="list-group-item" 
      key={result}
      >
        <img
          alt=""
          className="img-fluid"
          src={result}
        />
      </li>
    ))}
  </ul>
);

export default ResultList;
