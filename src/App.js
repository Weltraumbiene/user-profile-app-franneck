import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';

import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <Navbar bg="light" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><Image src={logo} width="50" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container className="mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Container>

    </div>
  );
}

export default App;
