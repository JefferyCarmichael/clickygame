import React from "react";
import "./ClickCard.css";

const ClickCard = props => (
  <div className="card">
    <div className="img-thumbnail">
      <img alt={props.name} src={props.image} onClick={() => props.selectPhoto(props.id)} />

    </div>
    
    {/* <span className="remove">𝘅</span> */}
  </div>
);

export default ClickCard;
