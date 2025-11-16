import React from 'react';

const UserProfile = (props) => {
  return (
    // Task 0: Applied inline CSS styling to the container
    <div style={{
      border: '2px solid #007bff',
      borderRadius: '10px',
      padding: '20px',
      margin: '15px',
      width: '300px',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
      backgroundColor: '#e6f0ff' // Light blue background
    }}>
      {/* Styling the name */}
      <h2 style={{ 
        color: '#0056b3', // Darker blue
        borderBottom: '2px solid #007bff',
        paddingBottom: '10px',
        marginBottom: '15px'
      }}>
        {props.name}
      </h2>
      
      {/* Styling Age */}
      <p style={{ fontSize: '1.1em', margin: '8px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{props.age}</span>
      </p>
      
      {/* Styling Bio */}
      <p style={{ fontStyle: 'italic', color: '#6c757d', marginTop: '15px' }}>
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;