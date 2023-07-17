import React from "react";
import { useContext } from "react";
import { ModeContext } from "../../contexts/ModeContext";
import styles from "./TopBar.module.scss";

const TopBar = ({ children }) => {
  return (
    <header className={styles.header}>
      <h2>Retro Board</h2>
    </header>
  );
};
export default TopBar;
