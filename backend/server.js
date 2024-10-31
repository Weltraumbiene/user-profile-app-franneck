// server.js
const express = require('express');
const cors = require('cors');
const mariadb = require('mariadb'); // Füge die MariaDB-Bibliothek hinzu
const app = express();
const PORT = 4000;

// Middleware
app.use(cors()); // Erlaubt Anfragen von anderen Servern (z.B. React-Frontend)
app.use(express.json()); // Erlaubt das Verarbeiten von JSON-Anfragen

// MariaDB-Verbindung einrichten
const pool = mariadb.createPool({
    host: 'localhost', // Hostname
    user: 'ben', // deinen DB-Benutzernamen hier eingeben
    password: 'passwort', // dein DB-Passwort hier eingeben
    database: 'project_db', // Deine Datenbank
    connectionLimit: 5
});

// Einfache Test-Route
app.get('/api/test', (req, res) => {
    res.send('API funktioniert!');
});

// Login-Route (POST)
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Beispielhafte Authentifizierungslogik (später durch Datenbank-Anbindung ersetzen)
    if (username === 'testuser' && password === 'password123') {
        res.status(200).json({ message: 'Erfolgreich eingeloggt!', token: 'dummy-token', userId: 1 });
    } else {
        res.status(401).json({ message: 'Ungültiger Benutzername oder Passwort' });
    }
});

// Route zum Abrufen von Benutzernamen
app.get('/api/users', async (req, res) => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT username FROM users"); // Alle Benutzernamen abfragen
        res.json(rows);
    } catch (err) {
        res.status(500).json({ message: 'Datenbankfehler', error: err });
    } finally {
        if (conn) conn.release(); // Verbindung freigeben
    }
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
