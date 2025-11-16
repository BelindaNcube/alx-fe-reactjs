import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{
      border: '1px solid gray',
      borderRadius: '10px',
      padding: '15px',
      margin: '20px',
      backgroundColor: '#f8f8f8',
      textAlign: 'center'
    }}>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
    </div>
  );
}

export default UserDetails;
