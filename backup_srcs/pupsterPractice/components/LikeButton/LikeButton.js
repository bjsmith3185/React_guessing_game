import React from "react";

const LikeButton = props => (

  <button 
  id="like-button"
  onClick={props.onClick}
  data-value={props.value}
  >
  Like
  </button>
);

export default LikeButton;