import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';
import { useState } from 'react';

function App() {
  const [onscreen, setOnscreen] = useState(false);

  const [name , setName] = useState('')

  const handleClick = event => {
   
    setOnscreen(true);

  }
  const handleChange = (event) => {
    setName(event.target.value);
    setOnscreen(false)
  };

  return (
    <div>
        <h1>React Assignment</h1>
        <p>Enter your name: <input value={name} onChange={handleChange}>

        </input> <button type='submit' onClick={handleClick}>Login</button></p>

        {/* 👇️ show elements on click */}
        {onscreen && <Welcome name={name}/>}
        <p>Assignment done by Akansha Kumari (12020064) </p>
    </div>
  );
}

export default App;