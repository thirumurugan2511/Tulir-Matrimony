import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../rgt-matrimony-logo.png';

const Signup = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    description: ''
  });

  // State to manage alert message display
  const [alertMessage, setAlertMessage] = useState('');

  // History object to perform redirects

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
      // Send form data to API for adding user
      const response = await fetch('https://tulirmatrimony.com/controlapi/adduser.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Display success message if user is added successfully
        setAlertMessage('User added successfully.');
        // Redirect to sign-in page after 3 seconds
        setTimeout(() => {
          window.location.href = '/Signin';
        }, 1000);
      } else {
        // Display error message if user addition fails
        setAlertMessage('Failed to add user. Please try again.');
      }
    } catch (error) {
      console.error('Error adding user:', error);
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
                  <a href="https://gloriousmatrimonial.com/admin/login" className="app-brand-link gap-2">
                    <img src={Logo} alt="" className="w-100"/>
                  </a>
                  <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                  </a>
                </div>
                <p className="mb-4 mt-2">Welcome to RTS Matrimony. Please create a new account</p>
                <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                  <div className="mb-3 text-start">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" value={formData.username} className="form-control p-3" id="username" name="username" placeholder="Enter your username" onChange={handleInputChange} autoFocus />
                  </div>
                  <div className="mb-3 text-start">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" value={formData.email} className="form-control p-3" id="email" name="email" placeholder="Enter your email" onChange={handleInputChange} />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" htmlFor="password">Password</label>
                      <a href="javascript:void(0)">
                      </a>
                    </div>
                    <div className="input-group input-group-merge">
                      <input type="password" value={formData.password} id="password" className="form-control p-3" name="password" placeholder="Enter your password" onChange={handleInputChange} />
                      <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                    </div>
                  </div>
                  <div className="mb-3 text-start">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea value={formData.description} className="form-control p-3" id="description" name="description" placeholder="Enter your description" onChange={handleInputChange}></textarea>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary d-grid w-100 p-3" type="submit">Sign up</button>
                  </div>
                </form>
                {alertMessage && <div className="alert alert-success" role="alert">{alertMessage}</div>}
                <div className="overflow-auto mt-3 mt-lg-4">
                  <div className="male_femaleusersets">
                    <div className="singleviewlsudgfvs d-flex text-center">
                      <p>Already Have an Account? <Link to="/Signin" className='mx-2'>Sign In </Link></p>
                    </div>
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

export default Signup;
