// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Kontakt</h1>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Nachricht:
          <textarea />
        </label>
        <button type="submit">Absenden</button>
      </form>
    </div>
  );
}

export default Contact;


