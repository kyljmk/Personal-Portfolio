import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import { useState } from "react";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleChange() {
    setDarkMode((prev) => !prev);
  }
  return (
    <div className={`App${darkMode ? "-dark" : ""}`}>
      <Header darkMode={darkMode} onClick={handleChange} />
      <About darkMode={darkMode} />
      <h2 className={`project--title${darkMode ? "-dark" : ""}`}>
        My Projects
      </h2>
      <div className="projectcontainer">
        <Projects darkMode={darkMode} />
      </div>
      <TechStack darkMode={darkMode} />
    </div>
  );
}

export default App;
