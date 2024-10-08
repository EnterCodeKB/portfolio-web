// app/components/ThemeSwitcher.jsx
import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { state, dispatch } = useTheme();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div className="flex justify-end p-4">
      <button
        onClick={toggleTheme}
        className="p-2 bg-gray-200 dark:bg-gray-600 rounded"
      >
        {state.isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
