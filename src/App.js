import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    Application start
      <nav>
        <ul>
          <li>
            <Link to="/">Startseite</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    Application end

    </div>
  );
}

export default App;
