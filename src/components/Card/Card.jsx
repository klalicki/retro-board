import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faXmark,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div className="card">
      <h2>Card: {props.cardText}</h2>
      {props.children}
      <div className="icon-bar">
        <FontAwesomeIcon icon={faArrowLeft} />
        <FontAwesomeIcon icon={faXmark} />
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
};
export default Card;
