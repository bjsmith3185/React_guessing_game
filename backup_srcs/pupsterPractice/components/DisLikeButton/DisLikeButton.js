import React from "react";

const DisLikeButton = props => (

  <button 
  id="dis-like-button"
  onClick={props.onClick}
  data-value={props.value}
  >
    Dislike
  </button>
);

export default DisLikeButton;