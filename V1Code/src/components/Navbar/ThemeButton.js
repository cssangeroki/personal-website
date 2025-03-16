import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes.js";
import "./ThemeButton.css";

function ThemeButton() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="button-container">
        <p className="navbar-text">theme</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider" onClick={themeToggler} />
        </label>
      </div>
    </ThemeProvider>
  );
}
export default ThemeButton;
