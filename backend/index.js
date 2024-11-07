import express from 'express';
import getDatabaseConnection from './db.js';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const app = express();

// Middleware, um json zu verarbeiten
app.use(express.json());

// CORS-Konfiguration
app.use(cors({
    origin: process.env.HOST, // React-URL
    credentials: true // Erlaubt das Senden von Cookies, falls benötigt
}));

// Authentifizierungs-Middleware
const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Nicht autorisiert' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({ error: 'Token ungültig' });
    }
};

/**
* Route for home.
* @function
* @name irgendwasanderes
* @route {GET} /
* @returns {string} JSON string with hello world.
*/
app.get('/', async (req, res) => {
    return res.status(200).json({hello: 'world'});
});

// Login-Route
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    const conn = await getDatabaseConnection();
    let user;
    try {
        [user] = await conn.query('SELECT * FROM users WHERE username = ?', [username]);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Datenbankfehler' });
    } finally {
        conn.release();
    }
    
    if (!user) return res.status(400).json({ error: 'Benutzer nicht gefunden' });

    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) return res.status(400).json({ error: 'Falsches Passwort' });

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, userId: user.id });
});

// Profil-Route (GET)
app.get('/api/profile', authMiddleware, async (req, res) => {
    const userId = req.user.id;

    const conn = await getDatabaseConnection();
    try {
        const [userResult] = await conn.query(
            `SELECT u.name, p.bio, p.birthdate
             FROM users u
             LEFT JOIN user_profile p ON u.id = p.user_id
             WHERE u.id = ?`,
            [userId]
        );

        if (userResult.length === 0) {
            return res.status(404).json({ error: 'Profil nicht gefunden' });
        }

        res.json(userResult);
    } catch (error) {
        console.error('Fehler beim Abrufen des Profils:', error);
        res.status(500).json({ error: 'Fehler beim Abrufen des Profils' });
    } finally {
        conn.release();
    }
});

/**
 * Updates the profile information of the authenticated user.
 * 
 * This endpoint allows a user to update their profile information, such as name, bio, 
 * and birthdate. It first updates the user's `name` in the `users` table and then 
 * inserts or updates the `bio` and `birthdate` in the `user_profile` table.
 * 
 * Path: `/api/profile` (PUT method)
 * Access: Protected (requires authentication)
 * 
 * 
 * 
 * @returns {Object} JSON response with a success message or an error message
 * 
 * @throws {500} - Internal Server Error if an error occurs during the database update
 */
app.put('/api/profile', authMiddleware, async (req, res) => {
    const userId = req.user.id;
    const { name, bio, birthdate } = req.body;

    const conn = await getDatabaseConnection();
    try {
        await conn.query('UPDATE users SET name = ? WHERE id = ?', [name, userId]);
        await conn.query(
            `INSERT INTO user_profile (user_id, bio, birthdate) VALUES (?, ?, ?)
             ON DUPLICATE KEY UPDATE bio = ?, birthdate = ?`,
            [userId, bio, birthdate, bio, birthdate]
        );

        res.json({ message: 'Profil erfolgreich aktualisiert' });
    } catch (error) {
        console.error('Fehler beim Aktualisieren des Profils:', error);
        res.status(500).json({ error: 'Fehler beim Aktualisieren des Profils' });
    } finally {
        conn.release();
    }
});



// Server starten
app.listen(process.env.PORT, () => {
    console.log(`Server läuft auf http://bcf.mshome.net:${process.env.PORT}`);
});
