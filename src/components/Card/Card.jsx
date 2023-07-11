import React from "react";

const Card = (props) => {
  return (
    <>
      <h2>Card: {props.cardText}</h2>
      {props.children}
    </>
  );
};
export default Card;
