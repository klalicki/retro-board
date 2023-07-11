import React from "react";

const CardList = (props) => {
  return (
    <>
      <h1>CardList: {props.listName}</h1>
      {props.children}
    </>
  );
};
export default CardList;
