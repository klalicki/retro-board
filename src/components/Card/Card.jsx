import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { useState } from "react";
import VoteBar from "../VoteBar/VoteBar";
import {
  faArrowRight,
  faXmark,
  faArrowLeft,
  faPen,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ listIndex, cardText, children, cardIndex }) => {
  const { data, removeItem, moveItem, setItemText } = useContext(DataContext);
  const [isEditing, setIsEditing] = useState(false);
  const cardData = data[listIndex].listContents[cardIndex];
  const [newText, setNewText] = useState(cardData.itemText);
  return (
    <div className="card">
      <form className="card-header">
        {isEditing ? (
          <>
            <input
              autoFocus
              value={newText}
              onChange={(e) => {
                setNewText(e.target.value);
              }}
            ></input>

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setItemText(listIndex, cardIndex, newText);
                setIsEditing(false);
              }}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </>
        ) : (
          <>
            <h2>{cardData.itemText}</h2>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setIsEditing(true);
              }}
            >
              <FontAwesomeIcon icon={faPen} />
            </button>
          </>
        )}
      </form>

      {children}
      <VoteBar {...{ listIndex, cardIndex }} />
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
