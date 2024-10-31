// src/components/Login.js
import React, { useState } from 'react';

// ToggleButton-Komponente für den Login-Status
function ToggleButton({ isLoggedIn, onToggle }) {
    return (
      <button onClick={onToggle} style={{position:"absolute", right:100, top:100}}>
        {isLoggedIn ? 'Ausloggen' : 'Einloggen'}
      </button>
    );
}

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState('');

    const handleToggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
        if (!isLoggedIn) {
          setMessage('Sie wurden erfolgreich ausgeloggt.');
        } else {
          setMessage('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        setIsLoggedIn(true);
        setMessage('Sie haben sich erfolgreich eingeloggt.');
        console.log(username)
        console.log(password)
        e.target.reset(); // Formular zurücksetzen
    };

    return (
        <div>
            <h3>{isLoggedIn ? 'Herzlich willkommen' : 'Bitte einloggen'}</h3>
            {message && <h4>{message}</h4>}
            <form onSubmit={handleSubmit}>
                Benutzername: <input type="text" name="username" required />
                <br />
                Passwort: <input type="password" name="password" required />
                <br />
            <button type="submit">Anmelden</button>
            </form>
            <ToggleButton isLoggedIn={isLoggedIn} onToggle={handleToggleLogin} />
        </div>
    );
}

export default Login;