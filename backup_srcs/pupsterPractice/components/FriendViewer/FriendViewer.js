
import React from "react";
import "./FriendViewer.css";
import LikeButton from "../LikeButton/LikeButton";
import DisLikeButton from "../DisLikeButton/DisLikeButton";



const FriendViewer = props => (


    <div className="viewer">Look Who Showed Up
        <div className="card"
      
        style={{
            backgroundImage: props.image ? `url(${props.image})` : "none"
          }}
            
        >

         

        </div>
        <LikeButton 
        onClick={props.click}
        value="like" 
        />

        <DisLikeButton 
        onClick={props.skip}
        value="skip" 
        />

    </div>
);

export default FriendViewer;
