import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditUser() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    email: '',
    description: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const { userId } = useParams();

  useEffect(() => {
    axios.get(`https://tulirmatrimony.com/controlapi/singleuser.php?id=${userId}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://tulirmatrimony.com/controlapi/edituser.php', {
      id: userId,
      ...userData
    })
      .then(response => {
        setSuccessMessage('Record updated');
      })
      .catch(error => {
        console.error('Error updating user data:', error);
      });
  };

  return (
    <div>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="editUsername">Username</label>
          <input
            type="text"
            className="form-control"
            id="editUsername"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="editPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="editPassword"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="editEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="editEmail"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="editDescription">Description</label>
          <input
            type="text"
            className="form-control"
            id="editDescription"
            name="description"
            value={userData.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default EditUser;
