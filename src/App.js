import React, { useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/Home';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Login from './components/Login';
import FakeToggleLoginButton from './components/FakeToggleLoginButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleToggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">

      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <FakeToggleLoginButton isLoggedIn={isLoggedIn} onToggle={handleToggleLogin} />

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </Container>

    </div>
  );
}

export default App;
