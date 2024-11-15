import React, { useState } from "react";
import ThemeComponent from "./pattern/ThemeComponent";

const AbstractFactoryDesignPattern: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemeComponent theme={theme} />
    </div>
  );
};

export default AbstractFactoryDesignPattern;