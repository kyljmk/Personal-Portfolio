import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import { useEffect, useState } from "react";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  function handleChange() {
    setDarkMode((prev) => !prev);
  }
  return (
    <div className={`App${darkMode ? "-dark" : ""}`}>
      <Header darkMode={darkMode} onClick={handleChange} />
      <About darkMode={darkMode} />
      <h2 className={`project--title${darkMode ? "-dark" : ""}`} id="project">
        My Projects
      </h2>
      <div className="projectcontainer">
        <Projects darkMode={darkMode} />
      </div>
      <TechStack darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
