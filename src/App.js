// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap laden

import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Home from './components/Home';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
