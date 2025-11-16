import React from 'react';

const Footer = () => {
  return (
    // Task 0: Applied inline CSS styling
    <footer style={{
      backgroundColor: '#343a40', // Dark gray/black
      color: '#f8f9fa', // Light text
      textAlign: 'center',
      padding: '15px 0',
      position: 'fixed', // Pin to the bottom
      bottom: 0,
      width: '100%',
      borderTop: '3px solid #007bff'
    }}>
      <p style={{ margin: 0, fontSize: '0.9em' }}>
        © 2023 City Lovers
      </p>
    </footer>
  );
};

export default Footer;