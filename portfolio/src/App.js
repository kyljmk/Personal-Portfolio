import './App.css';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleChange() {
    setDarkMode(prev => !prev)
  }
  return (
    <div className="App">
      <Header darkMode={darkMode} onClick={handleChange}/>
    </div>
  );
}

export default App;
