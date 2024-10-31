// src/components/Login.js
import React, { useState } from 'react';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState('');


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
        </div>
    );
}

export default Login;