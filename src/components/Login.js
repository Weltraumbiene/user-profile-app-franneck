import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Füge dies hinzu

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        try {
            const response = await fetch('http://bcf.mshome.net:4000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();

            if (response.ok) {
                setMessage('Erfolgreich eingeloggt!');
                // Token und userId speichern
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                
                // Weiterleitung zu Users.js
                navigate('/users'); // Füge dies hinzu
            } else {
                setMessage(data.message || 'Login fehlgeschlagen');
            }
        } catch (error) {
            console.error("Fehler beim Login:", error);
            setMessage("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
        }
    };

    return (
        <div>
            <h3>Bitte einloggen</h3>
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

