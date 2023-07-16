import React from "react";
import Card from "../Card/Card";

const CardList = (props) => {
  return (
    <div className="card-list">
      <h1>
        CardList {props.listIndex}: {props.listName}
      </h1>
      {props.items.map((listItem) => {
        return <Card cardText={listItem.itemText}></Card>;
      })}
      {props.children}
    </div>
  );
};
export default CardList;
