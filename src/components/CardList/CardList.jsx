import React from "react";

const CardList = (props) => {
  return (
    <div className="card-list">
      <h1>CardList: {props.listName}</h1>
      {props.children}
    </div>
  );
};
export default CardList;
