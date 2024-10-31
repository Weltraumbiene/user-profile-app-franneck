// src/components/Navigation.js
import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <Image src={logo} width="50" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
