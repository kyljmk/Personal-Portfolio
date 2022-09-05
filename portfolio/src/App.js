import './App.css';
import Header from './components/Header';
import About from './components/About'
import { useState } from 'react';
import Projects from './components/Projects';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleChange() {
    setDarkMode(prev => !prev)
  }
  return (
    <div className="App">
      <Header darkMode={darkMode} onClick={handleChange}/>
      <About />
      <Projects />
    </div>
  );
}

export default App;
