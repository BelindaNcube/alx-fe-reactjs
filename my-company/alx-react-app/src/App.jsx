import { useState } from 'react'

import './App.css'
import Header from './components/Header';
import UserProfile from './components/UserProfile.jsx'; 
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  const users = [
    { name: "Alice Johnson", age: "25", bio: "Loves hiking and photography." },
    { name: "Bob Williams", age: "32", bio: "A full-stack developer focusing on React." }
  ];

  return (
    <>
      <Header />
      
      {/* 3. REPLACED: <MainContent /> is replaced by the UserProfile components */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px', flexWrap: 'wrap' }}>
          
          {/* Instance 1: Passing name, age, and bio props */}
          <UserProfile
            name={users[0].name}
            age={users[0].age}
            bio={users[0].bio}
          />

          {/* Instance 2: Passing name, age, and bio props */}
          <UserProfile
            name={users[1].name}
            age={users[1].age}
            bio={users[1].bio}
          />
      </div>

      <Footer />
    </>
  )
}

export default App