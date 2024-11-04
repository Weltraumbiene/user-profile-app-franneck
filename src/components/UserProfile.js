import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [formData, setFormData] = useState({
        name: '',
        bio: '',
    });
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        const fetchProfile = async () => {
            try {
                const response = await fetch(`http://server-comhard:3001/api/profile`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
                });
                const data = await response.json();
                if (response.ok) {
                    setFormData({
                        name: data.name || '',
                        bio: data.bio || '',
                    });
                } else {
                    setMessage(data.error || 'Fehler beim Laden des Profils');
                }
            } catch (error) {
                console.log(error);
                setMessage('Fehler beim Abrufen des Profils');
            }
        };
        // Call async method.
        fetchProfile();
    }, [userId]);

    const handleSaveProfile = async (e) => {
        e.preventDefault();
        console.log('handleSaveProfile');
    };

    return (
        <div>
        <h3>Profil bearbeiten</h3>
        {message && <p>{message}</p>}

        <form onSubmit={handleSaveProfile}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
          <label>
            Bio:
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows="3"
            />
          </label>
        </div>

        <button type="submit">Profil speichern</button>
      </form>
    </div>
    );
};

export default UserProfile;