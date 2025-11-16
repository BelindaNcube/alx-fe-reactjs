import React from 'react';

const Header = () => {
  return (
    // Task 0: Applied inline CSS styling
    <header style={{ 
      backgroundColor: 'navy', 
      color: 'white', 
      textAlign: 'center',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
    }}>
      <h1>My Favorite Cities</h1>
    </header>
  );
};

export default Header;