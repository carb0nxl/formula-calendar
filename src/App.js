import React from 'react';
import './App.css';

function App() {
  return (
      <div className="App">
        <h1>Formula 1 Race Calendar</h1>
        <select>
          <option>Eastern</option>
          <option>Central</option>
          <option>Mountain</option>
            <option>Pacific</option>
          {/* Add more time zone options as needed */}
        </select>
        {/* Add race dates and times here */}
      </div>
  );
}

export default App;
