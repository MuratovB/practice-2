import React from "react";
import useTheme from "../../hooks/useTheme";

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeSwitcher;
