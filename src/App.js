import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Login from './components/Login';
import UserProfile from './components/UserProfile'; // Benutzerprofil-Komponente für die Bearbeitung
import Profiles from './components/Profiles'; // Benutzerprofile anzeigen

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');

    if (token && storedUserId) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="App">
      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/profiles" element={<Profiles />} /> {/* Route für die Benutzerprofile */}
          <Route path="/UserProfile" element={<UserProfile />} /> {/* Route für die Benutzerprofilseite */}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
