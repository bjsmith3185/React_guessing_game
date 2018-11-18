import React from "react";
import "./Title.css";

const Title = props => (
    <div>
        <h1 className="title">{props.children}</h1>
        <h3>current score: {props.score}</h3>
        <h4>top score: {props.topScore}</h4>
    </div>
)

export default Title;
