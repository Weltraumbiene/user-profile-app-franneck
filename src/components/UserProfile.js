import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [profiles, setProfiles] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfiles = async () => {
      const token = localStorage.getItem('token'); // Token aus dem Local Storage abrufen
      try {
        const response = await fetch(`${process.env.REACT_APP_API_SERVER_URL}/api/profiles`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (response.ok) {
          setProfiles(data); // Setze die empfangenen Profile
        } else {
          setMessage(data.error || 'Fehler beim Laden der Profile');
        }
      } catch (error) {
        console.error(error);
        setMessage('Fehler beim Abrufen der Profile');
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div>
      <h3>Benutzerprofile</h3>
      {message && <p>{message}</p>}
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <strong>Name:</strong> {profile.name}<br />
            <strong>Bio:</strong> {profile.bio}<br />
            <strong>Geburtsdatum:</strong> {profile.birthdate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
