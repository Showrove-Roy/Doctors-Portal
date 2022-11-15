import React, { createContext, useState } from "react";

const UseThem = createContext();
const ThemContext = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <UseThem.Provider value={(isDark, setIsDark)}>{children}</UseThem.Provider>
  );
};

export default ThemContext;
