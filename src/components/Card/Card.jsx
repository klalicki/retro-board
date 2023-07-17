import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { useState } from "react";
import VoteBar from "../VoteBar/VoteBar";
import { ModeContext } from "../../contexts/ModeContext";
import {
  faArrowRight,
  faXmark,
  faArrowLeft,
  faArrowUp,
  faArrowDown,
  faPen,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ listIndex, children, cardIndex }) => {
  const { data, removeItem, moveItem, setItemText } = useContext(DataContext);
  const { mode } = useContext(ModeContext);
  const cardData = data[listIndex].listContents[cardIndex];
  const [newText, setNewText] = useState(cardData.itemText);
  const [isEditing, setIsEditing] = useState(cardData.itemText === "");
  return (
    <article className="card">
      <form
        className="card-header"
        onSubmit={(e) => {
          e.preventDefault();
          if (isEditing) {
            setItemText(listIndex, cardIndex, newText);
            setIsEditing(false);
          } else {
            setIsEditing(true);
          }
        }}
      >
        {isEditing ? (
          <>
            <textarea
              autoFocus
              rows={1}
              cols={1}
              placeholder={"Type card text here"}
              value={newText}
              onKeyDown={(e) => {
                // intercept plain Enter key and use it to submit
                const modifiers = e.shiftKey || e.altKey || e.ctrlKey;
                if (e.key === "Enter" && !modifiers) {
                  e.preventDefault();
                  setItemText(listIndex, cardIndex, newText);
                  setIsEditing(false);
                }
              }}
              onFocus={(e) => {
                e.target.style.height = e.target.scrollHeight + "px";
              }}
              onChange={(e) => {
                e.target.style.height = e.target.scrollHeight + "px";
                setNewText(e.target.value);
              }}
            ></textarea>

            <button type="submit">
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </>
        ) : (
          <>
            <h2>{cardData.itemText}</h2>
            <button type="submit">
              <FontAwesomeIcon icon={faPen} />
            </button>
          </>
        )}
      </form>

      {children}
      <div className="card-bottom-section">
        <VoteBar {...{ listIndex, cardIndex }} />
        <div className="icon-bar">
          <button
            onClick={() => {
              moveItem(listIndex, cardIndex, listIndex - 1);
            }}
          >
            {mode.layout === "vertical" ? (
              <FontAwesomeIcon icon={faArrowLeft} />
            ) : (
              <FontAwesomeIcon icon={faArrowUp} />
            )}
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
            {mode.layout === "vertical" ? (
              <FontAwesomeIcon icon={faArrowRight} />
            ) : (
              <FontAwesomeIcon icon={faArrowDown} />
            )}
          </button>
        </div>
      </div>
    </article>
  );
};
export default Card;
