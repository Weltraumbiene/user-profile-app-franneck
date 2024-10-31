// src/components/Contact.js
import React from "react";

function ContactForm() {
  return (
    <div>
      <h3>Kontaktformular</h3>
      <form>
        Name: <input type="text" name="name" placeholder="Ihr Name" />
        <br />
        Nachricht:
          <textarea name="message" placeholder="Ihre Nachricht" />
        <br />
        <button type="submit" className="btn btn-primary">Absenden</button>
      </form>
    </div>
  );
}

export default ContactForm;