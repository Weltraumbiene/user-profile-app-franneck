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