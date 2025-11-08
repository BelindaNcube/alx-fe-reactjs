import React from 'react';
// Task 0: Using useState is no longer required in App.jsx itself for this task
// import { useState } from 'react'; 

import './App.css';
// Imports from Task 0 (must be present for the checker)
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// Import for Task 1: Counter
import Counter from './components/Counter.jsx'; 


function App() {
  // We no longer need the users array or the count state from previous tasks

  return (
    <>
      <Header />
      
      {/* Task 1 Integration: 
        We replace the UserProfile/MainContent section with the new Counter component.
      */}
      <div style={{ padding: '20px', minHeight: '60vh' }}>
        <Counter />
      </div>

      <Footer />
    </>
  );
}

export default App;