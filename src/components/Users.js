// src/components/Users.js
import React, { useEffect, useState } from 'react';
import './App.css'; // Importiere die allgemeine CSS-Datei
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap importieren

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://bcf.mshome.net:4000/api/users');
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht ok');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Fehler beim Abrufen der Benutzerdaten:', error);
                setError('Fehler beim Abrufen der Benutzerdaten');
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Benutzer</h2>
            {error && <p className="text-danger">{error}</p>}
            <ul className="list-group">
                {users.map((user, index) => (
                    <li key={index} className="list-group-item">
                        {user.username}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
