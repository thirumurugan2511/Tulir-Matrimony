import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Edituser() {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    id: 0,
    username: '',
    password: '',
    email: '',
    description: ''
  });

  useEffect(() => {
    fetch(`http://localhost:8000/singleuser/${id}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission to update user data
  };

  return (
    <div>
      <h1>Edit User Details</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={userData.username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={userData.password} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={userData.description} onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Edituser;
