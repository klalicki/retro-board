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
        <FontAwesomeIcon icon={faThumbsDown} />{" "}
        <span className="sr-hidden">Downvote card. It currently has</span>
        {data[listIndex].listContents[cardIndex].itemDownvoteCount}
        <span className="sr-hidden"> downvotes.</span>
      </button>
      <button
        onClick={() => {
          incrementUpvote(listIndex, cardIndex);
        }}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
        <span className="sr-hidden">Upvote card. It currently has</span>
        {data[listIndex].listContents[cardIndex].itemUpvoteCount}
        <span className="sr-hidden"> upvotes.</span>
      </button>
    </div>
  );
};
export default VoteBar;
