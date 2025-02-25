import React from "react";
import Article from "./components/Article/Article";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Article />
      </div>
    </ThemeProvider>
  );
}

export default App;
