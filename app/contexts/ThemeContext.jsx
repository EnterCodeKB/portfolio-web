// app/contexts/ThemeContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from "react";

const ThemeContext = createContext();

const initialState = {
  isDark: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, isDark: !state.isDark };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Effekt för att ändra body-klassen
  useEffect(() => {
    if (state.isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [state.isDark]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
