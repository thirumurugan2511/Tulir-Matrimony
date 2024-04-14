import React, { useState, useEffect } from 'react';
import Logo from '../rgt-matrimony-logo.png'

const Freereg = () => {
  const [regId, setRegId] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const [formData, setFormData] = useState({
      "reg_id": "",
      "gender": "male",
      "name": "",
      "email": "",
      "phonenumber": "",
      "password": "",
      "mother_tongue": "",
      "dob": "",
      "marriage_type": "",
      "status_children": "",
      "religion": "",
      "cast": "",
      "subcast": "",
      "sevaikiragam": "",
      "gothram": "",
      "moonsign": "",
      "star": "",
      "birthplace": "",
      "birthtime": "",
      "education":"",
      "education_details":"",
      "occupaction":"",
      "employee":"",
      "annual_income":"",
      "country": "",
      "state": "",
      "city": "",
      "residece": "",
      "alternatenumber": "",
      "nricountry": "",
      "address": "",
      "height": "",
      "weight": "",
      "food_habits": "",
      "smoking": "",
      "drinking": "",
      "body_type": "",
      "skin_tone": "",
      "profile_by": "",
      "aboutme": "",
      "family_type": "",
      "family_status": "",
      "father_name": "",
      "father_occupation": "",
      "mother_name": "",
      "mother_occupation": "",
      "brothers_count": "",
      "sisters_count": "",
      "brother_married": "",
      "sister_married": "",
      "family_details": "",
      "patner_from_age": "",
      "patner_to_age": "",
      "patner_height": "",
      "patner_weight": "",
      "patner_religion": "",
      "patner_cast": "",
      "patner_country": "",
      "patner_state": "",
      "patner_matrial_status": "",
      "patner_education": "",
      "patner_occupation": "",
      "patner_mother_tongue": "",
      "patner_manglik": "",
      "patner_salary": "",
      "patner_child_count": "",
      "image": "",
      "image2": "",
      "id_image": "",
      "id_image1": "",
      "rasiimage": "",
});




   
 

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Prepare data object to send to API
      // Function to generate a random registration ID
    const date = new Date();
    const year = date.getFullYear().toString().substr(2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const randomNum = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
    const newRegId = `TULR${year}${month}${day}${randomNum}`;
    setRegId(newRegId);

    const requestData = {
      "reg_id": newRegId,
      "name": formData.name,
      "gender": formData.gender,
      "email": formData.email,
      "phonenumber": formData.phonenumber,
      "password": formData.password,
      "dob": formData.dob,
      "mother_tongue": "",
      "marriage_type": "",
      "status_children": "",
      "child_count": "",
      "child_age": "",
      "religion": "",
      "cast": "",
      "subcast": "",
      "sevaikiragam": "",
      "gothram": "",
      "moonsign": "",
      "star": "",
      "birthplace": "",
      "birthtime": "",
      "education": "",
      "education_details": "",
      "occupaction": "",
      "employee": "",
      "annual_income": "",
      "country": "",
      "state": "",
      "city": "",
      "residece": "",
      "alternatenumber": "",
      "nricountry": "",
      "address": "",
      "height": "",
      "weight": "",
      "food_habits": "",
      "smoking": "",
      "drinking": "",
      "body_type": "",
      "skin_tone": "",
      "profile_by": "",
      "aboutme": "",
      "family_type": "",
      "family_status": "",
      "father_name": "",
      "father_occupation": "",
      "mother_name": "",
      "mother_occupation": "",
      "brothers_count": "",
      "sisters_count": "",
      "brother_married": "",
      "sister_married": "",
      "family_details": "",
      "patner_from_age": "",
      "patner_to_age": "",
      "patner_height": "",
      "patner_weight": "",
      "patner_religion": "",
      "patner_cast": "",
      "patner_country": "",
      "patner_state": "",
      "patner_matrial_status": "",
      "patner_education": "",
      "patner_occupation": "",
      "patner_mother_tongue": "",
      "patner_manglik": "",
      "patner_salary": "",
      "patner_child_count": "",
      "patner_child_gender": "",
      "patner_child_age": "",
      "patner_child_count": "",
      "patner_child_age": "",
      "patner_child_gender": "",
      "image": "",
      "image2":"",
      "id_image":"",
      "id_image1":"",
      "rasiimage":""
    };
    

    try {
      // Make POST request to API
      //('https://tulirmatrimony.com/controlapi/addcustomer.php',
      //('http://localhost:8000/addcustomer',
      console.log(requestData)
      ///addcustomer
      const response = await fetch('https://tulirmatrimony.com/controlapi/addcustomer.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
      if (response.ok) {
        // Handle success
        const responseData = await response.json();
        console.log('Registration successful');
        console.log(responseData);
        setShowAlert(true); // Show alert box
        setTimeout(() => setShowAlert(false), 1000);
        window.location.href = '/Thankyou'; // Hide alert box after 3 seconds
        resetForm(); // Reset form data
      } else {
        // Handle errors
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const resetForm = () => {
    formData({
      // Set each form field to an empty string
      reg_id: '',
      gender: '', // Assuming male is the default value
      name: '',
      email: '',
      phonenumber: '',
      password: '',
      dob: '',
      // Add other form fields here
    });
  };

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value); // Check if the correct name and value are being captured
    setFormData({ ...formData, [name]: value });
  };
  



  return (
   <>
  <section class="vh-100 gradient-custom ">
  <div class="container h-100 ">
    <div class="row justify-content-center align-items-center h-100">
        
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration  " >
        <img src={Logo} alt='' width={250} className=' mt-3 mx-auto'/>
          <div class="card-body p-4 p-md-5 bg-grey">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">இலவச பதிவு</h3>
            <form onSubmit={handleSubmit}>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div data-mdb-input-init class="form-outline text-start">
                    <label class="form-label" for="firstName">முழு பெயர்</label>
                    <input type="text" id="firstName" name='name' placeholder='Ex : John' class="form-control form-control-lg" required onChange={handleInputChange}/>    
                  </div>

                </div>
                <div class="col-md-6 mb-4 text-start">

                    <h6 class="mb-3 mt-1 pb-1">பாலினம்: </h6>

                    <div class="form-check form-check-inline ">
                    <input class="form-check-input" type="radio" name="gender" id="male"
    value="male" checked={formData.gender === 'male'} onChange={handleInputChange} />
                    <label class="form-label" for="maleGender">ஆண்</label>
                    </div>

                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" id="female"
    value="female" checked={formData.gender === 'female'} onChange={handleInputChange} />
                    <label class="form-label" for="femaleGender">பெண்</label>
                    </div>
                    </div>
               
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 pb-2">

                  <div data-mdb-input-init class="form-outline text-start">
                  <label class="form-label" for="emailAddress">மின்னஞ்சல்</label>
                    <input type="email" id="emailAddress" placeholder='name@gmail.com' name='email' class="form-control form-control-lg" required onChange={handleInputChange} />
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div data-mdb-input-init class="form-outline text-start">
                  <label class="form-label" for="phoneNumber">தொலைபேசி எண்</label>
                    <input type="tel" id="phoneNumber" class="form-control form-control-lg" name='phonenumber' required onChange={handleInputChange} />
                  </div>

                </div>
              </div>
              
              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                    <div data-mdb-input-init class="form-outline datepicker w-100 text-start">
                    <label for="birthdayDate" class="form-label">கடவுச்சொல்</label>
                    <input type="password" class="form-control form-control-lg" name='password' placeholder='******' id="password" required onChange={handleInputChange} />
                    
                  </div>

                </div>
                <div class="col-md-6 mb-4">
                  <div data-mdb-input-init class="form-outline text-start">
                    <label class="form-label" for="lastName">பிறந்த தேதி</label>
                    <input type="date" id="dob"  name='dob' class="form-control form-control-lg" required onChange={handleInputChange}/>     
                  </div>
                </div>
              
              </div>



              <div class="mt-4 pt-2">
                <input data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>
              {showAlert && (
        <div className="alert alert-success mt-3 alert-dismissible fade show" role="alert">
          Thank you for Registration! 
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
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
  )
}

export default Freereg