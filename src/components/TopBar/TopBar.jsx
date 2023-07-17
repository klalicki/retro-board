import React from "react";
import { useContext } from "react";
import { ModeContext } from "../../contexts/ModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faChartSimple,
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
          <FontAwesomeIcon icon={faSun} />
        </button>
      ) : (
        <button
          onClick={() => {
            setDarkMode(true);
          }}
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
      )}
      <button onClick={toggleLayout}>
        {mode.layout === "horizontal" ? (
          <FontAwesomeIcon icon={faChartSimple} rotation={180} />
        ) : (
          <FontAwesomeIcon icon={faChartSimple} rotation={90} />
        )}{" "}
        switch layout
      </button>
    </header>
  );
};
export default TopBar;
