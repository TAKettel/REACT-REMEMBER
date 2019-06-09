import React from "react";
import "./index.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.checkForDupe(props.id)}>
        <img alt={props.name} src={props.image} className="characterImage" />
      </div>
    </div>
  );
}

export default FriendCard;
