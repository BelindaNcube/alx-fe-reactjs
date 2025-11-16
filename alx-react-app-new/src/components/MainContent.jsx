import React from 'react';

const MainContent = () => {
  return (
    // Task 0: Applied inline CSS styling to the main content wrapper
    <main style={{
      textAlign: 'center',
      padding: '40px 20px',
      margin: '20px auto',
      maxWidth: '800px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
    }}>
      <p style={{
        fontSize: '1.4em',
        color: '#555',
        lineHeight: '1.6'
      }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
};

export default MainContent;