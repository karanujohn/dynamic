
import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="app-container">
      <h1>Dynamic List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter item"
          className="input-field"
        />
        <button onClick={handleAddItem} className="add-button">Add Item</button>
      </div>
      <div className="list-container">
        {items.length === 0 ? (
          <p>No items in the list.</p>
        ) : (
          <ul>
          {items.map((item, index) => (
            <li key={index} className="list-item">{item}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);
}




export default App
