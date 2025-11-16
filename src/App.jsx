import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
// Import a basic CSS file for general cleanup (optional, but good practice)
import './App.css'; 

function App() {
  return (
    // BrowserRouter wraps your entire application to enable routing
    <BrowserRouter>
      {/* Navbar appears outside the Routes, so it is visible on all pages */}
      <Navbar />

      {/* Routes is a container for all the defined routes */}
      <Routes>
        {/* Route for the Home page, path is the root "/" */}
        <Route path="/" element={<Home />} />
        
        {/* Route for the About page */}
        <Route path="/about" element={<About />} />
        
        {/* Route for the Services page */}
        <Route path="/services" element={<Services />} />
        
        {/* Route for the Contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;