import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function EditUser({ userId }) {
   const {id} = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    
         axios.get('http://localhost:8000/api/data/' + id)
         .then(res => setData(res.data))
         .catch(err => console.log(err))
       console.log(data);
    
}, []);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    description: ""
  });

  useEffect(() => {
    // Fetch user details by userId and update formData
    // Example: fetchUserDetails(userId).then(data => setFormData(data));
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/controlapi/edituser/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="editUsername">Username</label>
        <input type="text" className="form-control" id="editUsername" name="username" value={data.username} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="editPassword">Password</label>
        <input type="password" className="form-control" id="editPassword" name="password" value={data.password} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="editEmail">Email</label>
        <input type="email" className="form-control" id="editEmail" name="email" value={data.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="editDescription">Description</label>
        <input type="text" className="form-control" id="editDescription" name="description" value={data.description} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Update</button>
    </form>
  );
}

export default EditUser;
