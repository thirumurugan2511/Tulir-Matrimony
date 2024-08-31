import React, { useState, useEffect } from 'react';
import Logo from './rgt-matrimony-logo.png';
import Navbar from '../Navbar/Navbar';
import './CardSlider.css'

const Freereg = () => {
  const [regId, setRegId] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState([]); // For caste data
  const [formData, setFormData] = useState({
    reg_id: '',
    gender: '',
    name: '',
    email: '',
    phonenumber: '',
    password: '',
    dob: '',
    caste: '',
    plan_name: '', 
    plan_register_date: '', // Will be set to current date on submit
    image: ''
  });

  // Fetch caste data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tulirmatrimony.com/controlapi/castelist.php');
        const result = await response.json();
        setData(result.body);
        console.log(result.body);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to handle image upload
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      const base64String = reader.result.replace(/^data:image\/(jpeg|png|gif);base64,/, ''); // Remove prefix
      setFormData({ ...formData, image: base64String });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Generate a random registration ID
    const date = new Date();
    const year = date.getFullYear().toString().substr(2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newRegId = `TULR${year}${month}${day}${randomNum}`;
    setRegId(newRegId);

    // Set current date for plan_register_date
    const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const requestData = { 
      ...formData, 
      reg_id: newRegId, 
      plan_name: 'FreePlan',
      plan_register_date: currentDate // Set current date here
    };

    try {
      const response = await fetch('https://tulirmatrimony.com/controlapi/addcustomer.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const responseData = await response.json();
        alert("You have registered successfully");
        console.log('Registration successful', responseData);
        setShowAlert(true);
        
        // Redirect to the Thankyou page after 3 seconds, then to the SearchList page
        setTimeout(() => {
          window.location.href = '/Thankyou';
        }, 2000); // 3 seconds delay before redirecting to Thankyou

        resetForm();
      } else {
        console.error('Registration failed, Please try again');
        alert("Registration failed, Please try again");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to reset form data
  const resetForm = () => {
    setFormData({
      reg_id: '',
      gender: '',
      name: '',
      email: '',
      phonenumber: '',
      password: '',
      dob: '',
      caste: '',
      plan_name: 'FreePlan',
      plan_register_date: '',
      image: ''
    });
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Navbar />
      <section className="vh-100 gradient-custom">
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7 col-sm-12 col-12">
              <div className="card shadow-2-strong card-registration card-register">
                <img src={Logo} alt="" width={250} className="mt-3 mx-auto" />
                <div className="card-body p-4 p-md-5 bg-grey">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">இலவச பதிவு</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline text-start">
                          <label className="form-label" htmlFor="firstName">முழு பெயர்</label>
                          <input type="text" id="firstName" name="name" className="form-control form-control-lg" required onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 text-start">
                        <h6 className="mb-3 mt-1 pb-1">பாலினம்:</h6>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleInputChange} />
                          <label className="form-label" htmlFor="maleGender">ஆண்</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleInputChange} />
                          <label className="form-label" htmlFor="femaleGender">பெண்</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline text-start">
                          <label className="form-label" htmlFor="emailAddress">மின்னஞ்சல்</label>
                          <input type="email" id="emailAddress" name="email" className="form-control form-control-lg" required onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline text-start">
                          <label className="form-label" htmlFor="phoneNumber">தொலைபேசி எண்</label>
                          <input type="tel" id="phoneNumber" name="phonenumber" className="form-control form-control-lg" required onChange={handleInputChange} />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline w-100 text-start">
                          <label htmlFor="password" className="form-label">கடவுச்சொல்</label>
                          <input type="password" className="form-control form-control-lg" name="password" required onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline text-start">
                          <label className="form-label" htmlFor="dob">பிறந்த தேதி</label>
                          <input type="date" id="dob" name="dob" className="form-control form-control-lg" required onChange={handleInputChange} />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 text-start">
                        <label className="form-label" htmlFor="cast">இனம்</label>
                        <select className="form-select" name="caste" value={formData.caste} onChange={handleInputChange} required>
                          <option value="">Select your caste</option>
                          {data.map((caste) => (
                            <option key={caste.id} value={caste.caste_name}>{caste.caste_name}</option>
                          ))}
                        </select>
                      </div>
                      <div className="col-md-6 mb-4 text-start">
                        <label className="form-label" htmlFor="inputGroupFile01">உங்கள் படத்தை பதிவேற்றவும்</label>
                        <div className="input-group mb-3">
                          <input type="file" className="form-control" id="inputGroupFile01" onChange={handleImageUpload} />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                    </div>
                    {showAlert && (
                      <div className="alert alert-success mt-3" role="alert">
                        Thank you for Registration!
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Freereg;
