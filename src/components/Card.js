import React from "react";
import "./Card.css";
import { AiOutlineGithub } from "react-icons/ai";

function Card(props) {
  return (
    <div className="card-container" style={props.anim}>
      <div className="card-title">
        <h3> {props.title} </h3>
      </div>
      <div className="card-body">
        <p>{props.body}</p>
      </div>
      <a href={props.route}>
        <AiOutlineGithub className="card-icon" size="4em" />
      </a>
    </div>
  );
}

export default Card;
