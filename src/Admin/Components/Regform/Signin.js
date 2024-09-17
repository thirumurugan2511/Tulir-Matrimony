import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../rgt-matrimony-logo.png';
import axios from 'axios';

const Signin = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    user_name: '',
    password: ''
  });

  // State to manage error message display
  const [errorMessage, setErrorMessage] = useState('');

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

// Handler for form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    //https://tulirmatrimony.com/controlapi/login.php
    //http://localhost:8000/api/login
    const response = await axios.post("https://tulirmatrimony.com/controlapi/login.php", {
      user_name: formData.user_name,
      password: formData.password,
    });
    //console.log(response);
    if (response.data && response.data.head && response.data.head.code === 200) {
      //const responseData = response.data.body;
      const userId = response.data.body.id;
                const responseData = response.data.body;

                // Store the user ID in local storage
                localStorage.setItem('userId', userId);
      console.log("=====>" + userId)
      if (responseData && responseData.username === formData.user_name) {
        // Redirect to admin page upon successful login
       window.location.href = '/Dashboard';
      } else {
        // Display error message if username does not match
        setErrorMessage('Invalid username or password.');
      }
    } else {
      // Display error message if response indicates failure
      setErrorMessage('Invalid email or password. Please try again.');
    }
    
    
  } catch (error) {
    console.error('Error during login:', error);
    setErrorMessage('An error occurred during login. Please try again later.');
  }
};



  return (
    <>
      <div className="container">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            <div className="card  col-md-4 mt-5 mx-auto">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a href="#" className="app-brand-link gap-2">
                    <img src={Logo} alt="" className="w-100"/>
                  </a>
                  <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                  </a>
                </div>
                <p className="mb-4 mt-2">Welcome to RTS Matrimony.</p>
                <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                          <label htmlFor="email" className="form-label">Email or Username</label>
                          <input 
                            type="text" 
                            value={formData.user_name} 
                            className="form-control p-3" 
                            id="email" 
                            name="user_name" 
                            placeholder="Enter your username" 
                            onChange={handleInputChange} 
                            autoFocus 
                          />
                        </div>
                        <div className="mb-3 form-password-toggle">
                          <div className="d-flex justify-content-between">
                            <label className="form-label" htmlFor="password">Password</label>
                          </div>
                          <div className="input-group input-group-merge">
                            <input 
                              type="password" 
                              value={formData.password} 
                              id="password" 
                              className="form-control p-3" 
                              name="password" 
                              placeholder="············" 
                              onChange={handleInputChange} 
                            />
                            <span className="input-group-text cursor-pointer"></span>
                          </div>
                        </div>

                  <div className="mb-3">
                    <button className="btn btn-primary d-grid w-100 p-3" type="submit">Sign in</button>
                  </div>
                </form>
                {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                <div className=" overflow-auto mt-3 mt-lg-4">
                  <div className="male_femaleusersets">
                    {/* <div className="singleviewlsudgfvs d-flex text-center">
                      <p>Don't Have an Account? <Link to="/Signup" className='mx-2'>Create New Account</Link></p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
