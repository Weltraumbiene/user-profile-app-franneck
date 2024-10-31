import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';


const Navigation = () => {
    return <Navbar bg="light" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/"><Image src={logo} width="50" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>;
}

export default Navigation;