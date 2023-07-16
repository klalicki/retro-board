import React from "react";
import Card from "../Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
const CardList = ({ listIndex }) => {
  const { data } = useContext(DataContext);
  const items = data[listIndex].listContents;
  console.log(items);
  return (
    <div className="card-list">
      <article className="card-list-header">
        <h1>CardList {listIndex}:</h1>
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </article>

      {items.map((listItem, cardIndex) => {
        return <Card listIndex={listIndex} cardIndex={cardIndex}></Card>;
      })}
    </div>
  );
};
export default CardList;
