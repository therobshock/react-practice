import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={require(`../../images/${props.image}.png`) } />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Price:</strong> {props.price}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
