import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import {
  faArrowRight,
  faXmark,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ listIndex, cardText, children, cardIndex }) => {
  const { data, removeItem, moveItem } = useContext(DataContext);
  console.log(data);
  const cardData = data[listIndex].listContents[cardIndex];
  return (
    <div className="card">
      <h2>Card: {cardData.itemText}</h2>
      {children}
      <div className="icon-bar">
        <button
          onClick={() => {
            moveItem(listIndex, cardIndex, listIndex - 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <button
          onClick={() => {
            removeItem(listIndex, cardIndex);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <button
          onClick={() => {
            moveItem(listIndex, cardIndex, listIndex + 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};
export default Card;
