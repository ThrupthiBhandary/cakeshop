import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [name, setName] = useState('your name');
  const [email, setEmail] = useState('abcd@gmail.com');

  const handleSave = () => {
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div className="profile-form">
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
}

export default Profile;
