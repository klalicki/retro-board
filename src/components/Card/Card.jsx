import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h2>Card: {props.cardText}</h2>
      {props.children}
    </div>
  );
};
export default Card;
