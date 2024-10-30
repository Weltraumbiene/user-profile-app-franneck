import React from 'react';

function Contact() {
    return (
        <div>
            <h1>Kontakt</h1>
            <p>Das ist eine Kontakt-Seite</p>
            <form>
                <label>Name:</label>
                <input type="text" name="name" />
                <br />
                <label>Email:</label>
                <input type="email" name="email" />
                <br />
                <label>Nachricht:</label>
                <textarea name="message" />
                <br />
                <button type="submit">Absenden</button>
            </form>
        </div>
    );
}

export default Contact;
