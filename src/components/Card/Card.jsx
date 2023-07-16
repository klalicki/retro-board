import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { useState } from "react";
import {
  faArrowRight,
  faXmark,
  faArrowLeft,
  faPen,
  faCheck,
  faL,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ listIndex, cardText, children, cardIndex }) => {
  const { data, removeItem, moveItem, setItemText } = useContext(DataContext);
  const [isEditing, setIsEditing] = useState(false);
  const cardData = data[listIndex].listContents[cardIndex];
  const [newText, setNewText] = useState(cardData.itemText);
  return (
    <div className="card">
      <div className="card-header">
        {isEditing ? (
          <>
            <input
              type="text"
              value={newText}
              onChange={(e) => {
                setNewText(e.target.value);
              }}
            />
            <button type="submit">
              <FontAwesomeIcon
                icon={faCheck}
                onClick={() => {
                  setItemText(listIndex, cardIndex, newText);
                  setIsEditing(false);
                }}
              />
            </button>
          </>
        ) : (
          <>
            <h2>Card: {cardData.itemText}</h2>
            <button
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <FontAwesomeIcon icon={faPen} />
            </button>
          </>
        )}
      </div>

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
