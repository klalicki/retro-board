import React from "react";
import { useContext } from "react";
import { ModeContext } from "../../contexts/ModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faObjectsAlignTop,
  faObjectsAlignLeft,
} from "@fortawesome/free-solid-svg-icons";

const TopBar = ({ children }) => {
  const { mode, toggleLayout, setDarkMode } = useContext(ModeContext);
  return (
    <header className="header">
      <h2>Retro Board</h2>
      {mode.darkMode ? (
        <button
          onClick={() => {
            setDarkMode(false);
          }}
        >
          <FontAwesomeIcon icon={faSun} /> switch to light mode
        </button>
      ) : (
        <button
          onClick={() => {
            setDarkMode(true);
          }}
        >
          <FontAwesomeIcon icon={faMoon} /> switch to dark mode
        </button>
      )}
    </header>
  );
};
export default TopBar;
