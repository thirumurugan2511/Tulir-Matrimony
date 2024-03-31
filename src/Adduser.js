import React, { useState } from 'react';

function Adduser() {
  const [formData, setFormData] = useState({
    username:"aathesh",
password:"123456",
email:"aatheshsoft@gmail.com",
description:"Admin user"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    
    fetch('http://localhost:8000/controlapi/adduser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
      
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // handle response from the server
      // Reset form fields after successful submission if needed
      setFormData({
        username: '',
        password: '',
        email: '',
        description: ''
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input type="text" className="form-control" id="exampleInputEmail1" name="username" value={formData.username} onChange={handleChange} placeholder="Enter name"/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formData.password} onChange={handleChange} placeholder="Password"/>
      </div>
      <div className="form-group">
        <input type="email" className="form-control" id="exampleCheck1" name="email" value={formData.email} onChange={handleChange}/>
        <label className="form-check-label" htmlFor="exampleCheck1">Email</label>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" id="exampleCheck2" name="description" value={formData.description} onChange={handleChange}/>
        <label className="form-check-label" htmlFor="exampleCheck2">Description</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Adduser;
