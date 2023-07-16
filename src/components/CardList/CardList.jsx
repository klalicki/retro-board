import React from "react";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CardList = (props) => {
  return (
    <div className="card-list">
      <article className="card-list-header">
        <h1>
          CardList {props.listIndex}: {props.listName}
        </h1>
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </article>

      {props.items.map((listItem) => {
        return <Card cardText={listItem.itemText}></Card>;
      })}
      {props.children}
    </div>
  );
};
export default CardList;
