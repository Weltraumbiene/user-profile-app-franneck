// src/components/Login.js
import React from 'react';

function Login() {

  const handleSubmit = (e) => {
    // e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    console.log(username)
    console.log(password)
    e.target.reset(); // Formular zurücksetzen
  };

  return (
    <div>
      <h3>Bitte einloggen</h3>
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