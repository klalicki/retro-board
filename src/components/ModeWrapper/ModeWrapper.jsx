import { ModeContext } from "../../contexts/ModeContext";
import React from "react";
import { useContext } from "react";

const ModeWrapper = ({ children }) => {
  const { mode, colorThemes } = useContext(ModeContext);
  const curColorTheme = mode.darkMode ? colorThemes.dark : colorThemes.light;

  return (
    <div style={curColorTheme} className={`mode-${mode.layout}`}>
      {children}
    </div>
  );
};
export default ModeWrapper;
