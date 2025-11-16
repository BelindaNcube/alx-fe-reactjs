import React, { useState } from 'react';

const Counter = () => {
  // Task 1: Initialize state using useState hook
  const [count, setCount] = useState(0);

  // Event handlers to update the state
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    // Optional: Prevent count from going below zero, though not explicitly required by task
    setCount(count > 0 ? count - 1 : 0);
  };

  const handleReset = () => {
    setCount(0);
  };

  // Inline styling for a slightly better look
  const counterStyle = {
    textAlign: 'center',
    padding: '30px',
    margin: '20px auto',
    border: '2px solid #007bff',
    borderRadius: '10px',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const buttonStyle = {
    margin: '0 10px',
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
  };

  return (
    <div style={counterStyle}>
      <h2 style={{ color: '#007bff' }}>Simple Counter App</h2>
      <p style={{ fontSize: '2em', fontWeight: 'bold' }}>
        Current Count: {count}
      </p>
      
      {/* Buttons with onClick handlers that update state */}
      <button 
        onClick={handleIncrement} 
        style={buttonStyle}
      >
        Increment
      </button>
      
      <button 
        onClick={handleDecrement} 
        style={buttonStyle}
      >
        Decrement
      </button>
      
      <button 
        onClick={handleReset} 
        style={{ ...buttonStyle, backgroundColor: '#dc3545' }} // Reset button in red
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;