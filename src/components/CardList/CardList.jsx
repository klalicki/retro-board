import React from "react";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const CardList = ({ listIndex }) => {
  const { data, addItem } = useContext(DataContext);
  const items = data[listIndex].listContents;

  return (
    <div
      className="card-list"
      style={{ "--accent-color": data[listIndex].listColor }}
    >
      <article className="card-list-header">
        <h1>{data[listIndex].listName}</h1>
        <button
          onClick={() => {
            addItem(listIndex);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </article>
      <section className="card-list-body">
        {items.map((_listItem, cardIndex) => {
          return (
            <Card
              key={items[cardIndex].cardId}
              listIndex={listIndex}
              cardIndex={cardIndex}
            ></Card>
          );
        })}
      </section>
    </div>
  );
};
export default CardList;
