import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const VoteBar = ({ listIndex, cardIndex }) => {
  const { data, incrementUpvote, incrementDownvote } = useContext(DataContext);
  return (
    <div className="vote-bar">
      <button
        onClick={() => {
          incrementDownvote(listIndex, cardIndex);
        }}
      >
        <FontAwesomeIcon icon={faThumbsDown} />
        {data[listIndex].listContents[cardIndex].itemDownvoteCount}
      </button>
      <button
        onClick={() => {
          incrementUpvote(listIndex, cardIndex);
        }}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
        {data[listIndex].listContents[cardIndex].itemUpvoteCount}
      </button>
    </div>
  );
};
export default VoteBar;
