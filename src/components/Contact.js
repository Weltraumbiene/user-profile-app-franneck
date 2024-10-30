// src/components/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du den Code hinzufügen, um die Formulardaten zu verarbeiten
    alert(`Nachricht gesendet:\nName: ${name}\nE-Mail: ${email}\nNachricht: ${message}`);
    
    // Formular zurücksetzen
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Kontakt</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Nachricht:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Absenden</button>
      </form>
    </div>
  );
}

export default Contact;
