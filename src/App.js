import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Users from './components/Users'; // Importiere die Users-Komponente

function App() {
    return (
        <div className="App">
            <Navigation />
            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/users" element={<Users />} /> {/* Route für Users */}
                </Routes>
            </Container>
        </div>
    );
}

export default App;
