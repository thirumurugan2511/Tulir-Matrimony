import React, { useState, useEffect } from 'react';
import Aside from '../Aside/Aside'
import { GrUserAdmin } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import Smallicon from '../../Components/heart-icon.png'

const Addmember = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const [dashboardData, setDashboardData] = useState({
    total_member: 0,
    male_member: 0,
    female_member: 0,
    paid_member: 0,
    notpaid_member: 0,
    expired_member: 0,
  });
  const initialFormData = {
    "section1": {
      "reg_id": "null",
      "name": "",
      "image": "null",
      "gender": "null",
      "email": "null",
      "phonenumber": "null",
      "password": "null",
      "mother_tongue": "null",
      "dob": "null",
      "marriage_type": "null",
      "status_children": "null",
      "religion": "null",
      "cast": "null",
      "subcast": "null",
      "sevaikiragam": "null",
      "gothram": "null",
      "moonsign": "null",
      "star": "null",
      "birthplace": "null",
      "birthtime": "null"
    },
    "section2": {
      "country": "null",
      "state": "null",
      "city": "null",
      "residece": "null",
      "alternatenumber": "null",
      "nricountry": "null",
      "address": "null"
    },
    "section3": {
      "height": "null",
      "weight": "null",
      "food_habits": "null",
      "smoking": "null",
      "drinking": "null",
      "body_type": "null",
      "skin_tone": "null",
      "profile_by": "null",
      "aboutme": "null"
    },
    "section4": {
      "family_type": "null",
      "family_status": "null",
      "father_name": "null",
      "father_occupation": "null",
      "mother_name": "null",
      "mother_occupation": "null",
      "brothers_count": "null",
      "sisters_count": "null",
      "brother_married": "null",
      "sister_married": "null",
      "family_details": "null"
    },
    "section5": {
      "patner_from_age": "null",
      "patner_to_age": "null",
      "patner_height": "null",
      "patner_weight": "null",
      "patner_religion": "null",
      "patner_cast": "null",
      "patner_country": "null",
      "patner_state": "null",
      "patner_matrial_status": "null",
      "patner_education": "null",
      "patner_occupation": "null",
      "patner_mother_tongue": "null",
      "patner_manglik": "null",
      "patner_salary": "null",
      "patner_child_count": "null"
    }
  };
  
  

  const [formData, setFormData] = useState(initialFormData);
  const [currentSection, setCurrentSection] = useState('section1');
  const [customerData, setCustomerData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name' && value.trim() === '') {
      // Prevent setting empty value for name field
      return;
    }
    setFormData(prevState => ({
      ...prevState,
      [currentSection]: {
        ...prevState[currentSection],
        [name]: value
      }
    }));
  };

  const handleNext = () => {
    const sections = Object.keys(formData);
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = currentIndex + 1;
    if (nextIndex < sections.length) {
      setCurrentSection(sections[nextIndex]);
    }
  };

  const handleSubmit = async () => {
    try {
      // Combine all section data into one object
      const combinedData = Object.values(formData).reduce((acc, sectionData) => {
        return { ...acc, ...sectionData };
      }, {});

      // Store combined data in localStorage
      localStorage.setItem('formData', JSON.stringify(combinedData));

      // Optionally, you can also send data to the server here
      const response = await fetch('http://localhost:8000/addcustomer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(combinedData)
    });

    // Handle the response from your Node.js server
    if (response.ok) {
      const responseData = await response.json();
      console.log('Data sent successfully:', responseData);
      // Optionally, you can reset the form data and handle any further actions here
    } else {
      console.error('Failed to send data');
    }

      // Reset formData and navigate to the next page
      setFormData(initialFormData);
      setCurrentSection('section1');
      setCustomerData(combinedData);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  useEffect(() => {
    // Fetch customer list data when component mounts
    fetchCustomerList();
  }, []);

  const fetchCustomerList = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/data/customerlist');
      if (response.ok) {
        const responseData = await response.json();
        if (responseData.body && Array.isArray(responseData.body)) {
          // Handle fetched customer list data
        } else {
          console.error('Fetched data body is not an array:', responseData);
        }
      } else {
        console.error('Failed to fetch customer list');
      }
    } catch (error) {
      console.error('Error fetching customer list:', error);
    }
  };
  return (
    <>
     <div class="layout-wrapper layout-content-navbar">
   <div class="layout-container">
   <Aside />
    <div class="layout-page">
            <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached
            align-items-center bg-navbar-theme" id="layout-navbar">
                <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                        <i class="bx bx-menu bx-sm"></i>
                    </a>
                </div>
                <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <ol class="breadcrumb breadcrumb-style2 mb-0">
                    <li><MdManageHistory  class="bx bx-user me-2"/></li>
<li class="breadcrumb-item" style={{padding: '2px 10px'}}>  Manage Member </li>
                    </ol>
                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                        <li class="nav-item lh-1 me-3">
                        <GrUserAdmin class="bx bx-user me-2" /><span class="align-middle">Administrator</span>
                                                    </li>
                                                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                            <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" onClick={toggleDropdown}>
                                <div class="avatar avatar-online">
                                    <img src={Smallicon} alt="" class="w-px-40 h-auto rounded-circle"/>
                                </div>
                            </a>
                            <ul
                      className={`dropdown-menu dropdown-menu-end dropset
                        ${ isDropdownOpen ? "show" : ""}`}>
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar avatar-online">
                                                    <img src={Smallicon} alt="" class="w-px-40 h-auto rounded-circle"/>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <span class="fw-semibold d-block mt-2">Admin</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div class="dropdown-divider"></div>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/Sitesettings">
                                        <IoMdSettings class="bx bx-cog me-2" />
                                        <span class="align-middle">Settings</span>
                                    </Link>
                                </li>
                               
                                <li>
                                    <div class="dropdown-divider"></div>
                                </li>
                                <li>
                                                                        <Link class="dropdown-item" href="/Signin">
                                    
                                        <LuLogOut class="bx bx-power-off me-2" />
                                        <span class="align-middle">Log Out</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="content-wrapper">
                
<div class="content-wrapper">
 
  <div class="bs-toast toast toast-placement-ex m-2" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
    <div class="toast-header">
      <i class="bx bx-bell me-2"></i>
      <div class="me-auto fw-semibold toast-title">Bootstrap</div>
      <small>Now</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.</div>
  </div>
  {/* <!-- Toast with Placements -->
  <!-- Content --> */}
  <div class="container-fluid flex-grow-1 container-p-y">
    {/* <!-- Edit Member section start  --> */}
    <div class="edit_memberSections_mainsdsd">
      <div class="iiner_bg_echange px-4">
        <ul class="nav nav-pills" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button"  role="tab" aria-controls="pills-home" aria-selected="true">Basic Details</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button"   role="tab" aria-controls="pills-profile" aria-selected="false">Residence</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-other-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-other-profile"   type="button" role="tab" aria-controls="pills-other-profile" aria-selected="false">Physical Info</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-family-details-tab" data-bs-toggle="pill" data-bs-target="#pills-family-details"  type="button" role="tab" aria-controls="pills-family-details" aria-selected="false">Family Details </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-partner-preference-tab" data-bs-toggle="pill" data-bs-target="#pills-partner-preference"   type="button" role="tab" aria-controls="pills-partner-preference" aria-selected="false">Partner Preference</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-upload-photo-tab" data-bs-toggle="pill" data-bs-target="#pills-upload-photo" type="button" role="tab" aria-controls="pills-upload-photo" aria-selected="false">Upload Photos</button>
          </li>
        </ul>
      </div>
      <form >
      <div class="form_detailsEditsView">
        <div class="tab-content p-0" id="pills-tabContent">
          {/* <!--Step 1 --> */}
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
            <div class="form_content_data">
    <div class="row p-4">
        <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU"/>
        
        {currentSection === 'section1' && (
          <>
        {/* <div class="col-lg-6 col-md-6 mb-4">
            <div class="edit_inputMain-sltr">
                <div class="mb-3 text-start">
                    <label class="form-label">பாலினம் <span class="Form__Error">*</span>&nbsp;&nbsp;</label>
                    <input
                        type="text"
                        id="gender"
                        name="gender"
                        class="form-check-input" 
                        placeholder="Gender"
                        value={formData.section1.gender || ''}
                        onChange={handleChange}
                    />
                    <div class="radio_mainDivGroups">
                        <div class="form-check d-inline-block me-3 mt-2">
                            <input required="" name="gender" id="Male" class="form-check-input required" type="radio" value="Male"/>
                            <label class="form-label" for="Male">ஆண்</label> &nbsp;
                        </div>
                        <div class="form-check d-inline-block me-3 mt-2">
                            <input required="" name="gender" id="Female" class="form-check-input required" type="radio" value="Female"/>
                            <label class="form-label" for="Female">பெண்</label> &nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div class="col-lg-6 col-md-6 mb-4">
            <div class="edit_inputMain-sltr">
                <div class="mb-3 text-start">
                    <label class="form-label" for="fullname">பாலினம்<span class="Form__Error">*</span></label>
                    {/* <input type="text" required="" class="form-control " id="fullname" name="fullname" placeholder="Full Name" /> */}
                    <input
                        type="text"
                        id="gender"
                        class="form-control "
                        placeholder="Gender"
                        name="gender"
                        value={formData.section1.gender || ''}
                        onChange={handleChange}
                      />
                </div>
            </div>
        </div>
        
       
        <div class="col-lg-6 col-md-6 mb-4">
            <div class="edit_inputMain-sltr">
                <div class="mb-3 text-start">
                    <label class="form-label" for="fullname">முழு பெயர்<span class="Form__Error">*</span></label>
                    {/* <input type="text" required="" class="form-control " id="fullname" name="fullname" placeholder="Full Name" /> */}
                    <input
                        type="text"
                        id="name"
                        class="form-control "
                        placeholder="Full Name"
                        name="name"
                        value={formData.section1.name || ''}
                        onChange={handleChange}
                      />
                </div>
            </div>
        </div>
        
        
        <div class="col-lg-6 col-md-6 mb-4">
            <div class="edit_inputMain-sltr">
                <div class="mb-3 text-start">
                    <label class="form-label" for="email">மின்னஞ்சல் <span class="Form__Error">*</span></label>
                    {/* <input type="email" required="" class="form-control " id="email" name="email" placeholder="Enter Your Email Id" /> */}
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter Your Email Id"
                      class="form-control "
                      name="email"
                      value={formData.section1.email || ''}
                      onChange={handleChange}
                    />
                </div>
            </div>
        </div>
        
       
        <div class="col-lg-6 col-md-6 mb-4">
            <div class="custom-select2-div">
                <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                    <div class="mb-3 text-start">
                        <label class="form-label" for="mobile">கைபேசி எண் <span class="Form__Error">*</span></label>
                        <div class="row">
                            <div class="col-md-9">
                                {/* <input type="number" class="form-control " minlength="9" maxlength="10" name="mobilemobile_num" id="mobile_num"  placeholder="Enter your phone no"  /> */}
                                <input
                                    type="number"
                                    id="phonenumber"
                                    minlength="9" maxlength="10"
                                    placeholder="Enter Your Phone number"
                                    class="form-control "
                                    name="phonenumber"
                                    value={formData.section1.phonenumber || ''}
                                    onChange={handleChange}
                                  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="col-lg-6 col-md-6 mb-4">
            <div class="edit_inputMain-sltr">
                <div class="mb-3 text-start">
                    <label class="form-label" for="password">கடவுச்சொல் <span class="Form__Error">*</span></label>
                    {/* <input type="password"  class="form-control Password" id="password" name="password" placeholder="Password"/> */}
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Your password"
                      class="form-control "
                      name="password"
                      value={formData.section1.password || ''}
                      onChange={handleChange}
                    />
                    
                </div>
            </div>
        </div>
        
       
        <div class="col-lg-6 col-md-6 mb-4">
            <div class="custom-select2-div">
                <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                    <div class="mb-3 text-start">
                        <label class="form-label" for="mothertongue">தாய் மொழி <span class="Form__Error">*</span></label>
                        {/* <input type="text"  class="form-control required" id="mother_tongue" name="mother_tongue" placeholder="Mother tongue" /> */}
                        <input
                          type="text"
                          id="mother_tongue"
                          placeholder="Enter Your mother_tongue"
                          class="form-control "
                          name="mother_tongue"
                          value={formData.section1.mother_tongue || ''}
                          onChange={handleChange}
                    />
                    </div>
                </div>
            </div>
        </div>
        
      
        <div class="col-lg-6 col-md-6 mb-4">
            <div class="edit_inputMain-sltr">
                <div class="mb-3 text-start">
                    <label class="form-label" for="birthdate">பிறந்த தேதி <span class="Form__Error">*</span></label>
                    {/* <input class="form-control " type="date" value="" max="2006-03-01" id="birthdate" name="birthdate"/> */}
                    <input
                          type="date"
                          id="dob"
                          placeholder="Enter Your Birth Date"
                          class="form-control "
                          name="dob"
                          value={formData.section1.dob || ''}
                          onChange={handleChange}
                    />
                </div>
            </div>
        </div>
        
       
        <div class="col-lg-6 col-md-6 mb-4">
            <div class="edit_inputMain-sltr">
                <div class="mb-3 text-start">
                    <label class="form-label" for="marital_status">திருமண நிலை<span class="Form__Error">*</span></label>
                    {/* <input type="text"  class="form-control required" id="marital_status" name="marital_status" placeholder="Marriage type" /> */}
                    <input
                          type="text"
                          id="marriage_type"
                          placeholder="Enter Your marriage type"
                          class="form-control "
                          name="marriage_type"
                          value={formData.section1.marriage_type || ''}
                          onChange={handleChange}
                    />
                </div>
            </div>
        </div>
        
        
        <div class="col-lg-6 col-md-6 mb-4 status_children">
            <div class="custom-select2-div">
                <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                    <div class="mb-3 text-start">
                        <label class="form-label" for="status_children">Status Children <span class="Form__Error">*</span></label>
                        {/* <select required="" class="form-select single select2-hidden-accessible" id="status_children" name="status_children" aria-label="Select Status Children" data-select2-id="status_children" tabindex="-1" aria-hidden="true">
                            <option selected="" value="" data-select2-id="10">Select Status Children</option>
                            <option value="Living with me">Living with me</option>
                            <option value="Not living with me">Not living with me</option>
                            <option value="I have no children">I have no children</option>
                        </select> */}
                        <input
                          type="text"
                          id="status_children"
                          placeholder="Enter Your status_children"
                          class="form-control "
                          name="status_children"
                          value={formData.section1.status_children || ''}
                          onChange={handleChange}
                    />
                        
                    </div>
                </div>
            </div>
        </div>
<div class="col-lg-6 col-md-6 mb-4">
    <div class="edit_inputMain-sltr">
        <div class="mb-3 text-start">
            <label class="form-label" for="religion">மதம்<span class="Form__Error">*</span></label>
            <input
                type="text"
                id="religion"
                placeholder="உங்கள் மதம் உள்ளிடவும்"
                class="form-control"
                name="religion"
                value={formData.section1.religion || ''}
                onChange={handleChange}
            />
        </div>
    </div>
</div>

<div class="col-lg-6 col-md-6 mb-4">
    <div class="edit_inputMain-sltr">
        <div class="mb-3 text-start">
            <label class="form-label" for="cast">சாதி<span class="Form__Error">*</span></label>
            <input
                type="text"
                id="cast"
                placeholder="உங்கள் சாதி உள்ளிடவும்"
                class="form-control"
                name="cast"
                value={formData.section1.cast || ''}
                onChange={handleChange}
            />
        </div>
    </div>
</div>

<div class="col-lg-6 col-md-6 mb-4">
    <div class="edit_inputMain-sltr">
        <div class="mb-3 text-start">
            <label class="form-label" for="subcast">துணை சாதி</label>
            <input
                type="text"
                id="subcast"
                placeholder="உங்கள் துணை சாதி உள்ளிடவும்"
                class="form-control"
                name="subcast"
                value={formData.section1.subcast || ''}
                onChange={handleChange}
            />
        </div>
    </div>
</div>

<div class="col-lg-6 col-md-6 mb-4">
    <div class="edit_inputMain-sltr">
        <div class="mb-3 text-start">
            <label class="form-label" for="sevaikiragam">செவ்வாய் கிரகம்</label>
            <input
                type="text"
                id="sevaikiragam"
                placeholder="உங்கள் செவ்வாய் கிரகம் உள்ளிடவும்"
                class="form-control"
                name="sevaikiragam"
                value={formData.section1.sevaikiragam || ''}
                onChange={handleChange}
            />
        </div>
    </div>
</div>

<div class="col-lg-6 col-md-6 mb-4">
    <div class="edit_inputMain-sltr">
        <div class="mb-3 text-start">
            <label class="form-label" for="gothram">கோத்திரம்</label>
            <input
                type="text"
                id="gothram"
                placeholder="உங்கள் கோத்திரம் உள்ளிடவும்"
                class="form-control"
                name="gothram"
                value={formData.section1.gothram || ''}
                onChange={handleChange}
            />
        </div>
    </div>
</div>

<div class="col-lg-6 col-md-6 mb-4">
    <div class="edit_inputMain-sltr">
        <div class="mb-3 text-start">
            <label class="form-label" for="moonsign">ராசி</label>
            <input
                type="text"
                id="moonsign"
                placeholder="உங்கள் ராசி உள்ளிடவும்"
                class="form-control"
                name="moonsign"
                value={formData.section1.moonsign || ''}
                onChange={handleChange}
            />
        </div>
    </div>
</div>

<div class="col-lg-6 col-md-6 mb-4">
    <div class="edit_inputMain-sltr">
        <div class="mb-3 text-start">
            <label class="form-label" for="star">நட்சத்திரம்</label>
            <input
                type="text"
                id="star"
                placeholder="உங்கள் நட்சத்திரம் உள்ளிடவும்"
                class="form-control"
                name="star"
                value={formData.section1.star || ''}
                onChange={handleChange}
            />
        </div>
    </div>
</div>

<div class="col-lg-6 col-md-6 mb-4">
    <div class="edit_inputMain-sltr">
        <div class="mb-3 text-start">
            <label class="form-label" for="birthplace">பிறந்த இடம்</label>
            <input
                type="text"
                id="birthplace"
                placeholder="உங்கள் பிறந்த இடம் உள்ளிடவும்"
                class="form-control"
                name="birthplace"
                value={formData.section1.birthplace || ''}
                onChange={handleChange}
            />
        </div>
    </div>
</div>

<div class="col-lg-6 col-md-6 mb-4">
    <div class="edit_inputMain-sltr">
        <div class="mb-3 text-start">
            <label class="form-label" for="birthtime">பிறந்த நேரம்</label>
            <input
                type="text"
                id="birthtime"
                placeholder="உங்கள் பிறந்த நேரம் உள்ளிடவும்"
                class="form-control"
                name="birthtime"
                value={formData.section1.birthtime || ''}
                onChange={handleChange}
            />
        </div>
    </div>
</div>

        
<button class="btn btn-primary" onClick={handleNext}>Next</button>
        </>
      )}
        {/* <div class="col-12">
            <button type="button" 
            class="btn btn-primary formSubmitBtn nav-link" 
            id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" 
            role="tab" aria-controls="pills-profile" aria-selected="false"
             onClick={handleNext}>Next</button>
        </div> */}
       
    </div>
    {/* <input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>      */}

            </div>
          </div>
        
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
            <div class="form_content_data">
              
              {currentSection === 'section2' && (
        <>
           
              <div class="row p-4">
    <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU"/>
    
    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <input
                          type="text"
                          id="country_id"
                          placeholder="Enter Your Country"
                          class="form-control "
                          name="country"
                          value={formData.section2.country || ''}
                          onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>
    
  
    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <input
                          type="text"
                          id="state_id"
                          placeholder="Enter Your State"
                          class="form-control "
                          name="state"
                          value={formData.section2.state || ''}
                          onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>
    
    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <input
                          type="text"
                          id="city"
                          placeholder="Enter Your City"
                          class="form-control "
                          name="city"
                          value={formData.section2.city || ''}
                          onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>
    
   
    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <input
                          type="text"
                          id="residence_type"
                          placeholder="Enter Your Residence Type"
                          class="form-control "
                          name="residence_type"
                          value={formData.section2.residence_type || ''}
                          onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="col-lg-6 col-md-6 mb-4">
        <div class="edit_inputMain-sltr">
            <div class="mb-3 text-start">
                <input
                      type="text"
                      id="alternate_number"
                      placeholder="Enter Your Alternate Number"
                      class="form-control "
                      name="alternate_number"
                      value={formData.section2.alternate_number || ''}
                      onChange={handleChange}
                />
            </div>
        </div>
    </div>
    
   
    <div class="col-lg-6 col-md-6 mb-4">
        <div class="edit_inputMain-sltr">
            <div class="mb-3 text-start">
                <input
                      type="text"
                      id="nri_country"
                      placeholder="Enter Your NRI Country"
                      class="form-control "
                      name="nri_country"
                      value={formData.section2.nri_country || ''}
                      onChange={handleChange}
                />
            </div>
        </div>
    </div>
    
    
    <div class="col-lg-12 mb-4">
        <div class="edit_inputMain-sltr">
            <div class="mb-3 text-start">
                <textarea
                          id="address"
                          placeholder="Enter Your Address"
                          class="form-control form-textarea"
                          name="address"
                          value={formData.section2.address || ''}
                          onChange={handleChange}
                ></textarea>
            </div>
        </div>
    </div>
    
    
</div>
<button class="btn btn-primary" onClick={handleNext}>Next</button>
        </>
      )}

                {/* <button type="button" class="btn btn-primary formSubmitBtn" data-formid="formSubmitBtn2" id="formSubmitBtn2">Submit</button> */}
            </div>
          </div>
         
          <div class="tab-pane fade" id="pills-other-profile" role="tabpanel" aria-labelledby="pills-other-profile-tab" tabindex="0">
            <div class="form_content_data">
              {currentSection === 'section3' && (
        <>
             
              <div class="row p-4">
    <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU"/>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="height">உயரம் </label>
                    <input type="text" class="form-control" id="height" name="height" placeholder="Height" value={formData.section3.height || ''} onChange={handleChange} />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="weight">எடை </label>
                    <input type="text" class="form-control" id="weight" name="weight" placeholder="Weight" value={formData.section3.weight || ''} onChange={handleChange} />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="diet">உணவு பழக்கம் </label>
                    <input type="text" class="form-control" id="diet" name="diet" placeholder="Food Habits" value={formData.section3.diet || ''} onChange={handleChange} />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="smoke">புகைபிடித்தல் </label>
                    <input type="text" class="form-control" id="smoke" name="smoke" placeholder="Yes / No" value={formData.section3.smoke || ''} onChange={handleChange} />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="drink">குடிப்பழக்கம் </label>
                    <input type="text" class="form-control" id="drink" name="drink" placeholder="Yes / No" value={formData.section3.drink || ''} onChange={handleChange} />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="body_type">உடல் அமைப்பு </label>
                    <input type="text" class="form-control" id="body_type" name="body_type" placeholder="Body Type" value={formData.section3.body_type || ''} onChange={handleChange} />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="skin_tone">தோல் நிறம் </label>
                    <input type="text" class="form-control" id="skin_tone" name="skin_tone" placeholder="Skin Tone" value={formData.section3.skin_tone || ''} onChange={handleChange} />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="profileby">Profile By </label>
                    <input type="text" class="form-control" id="profileby" name="profileby" placeholder="Profile By" value={formData.section3.profileby || ''} onChange={handleChange} />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-12 mb-4">
        <div class="edit_inputMain-sltr">
            <div class="mb-3 text-start">
                <label class="form-label" for="profile_text">About Me </label>
                <textarea minlength="About Me" id="profile_text" name="profile_text" class="form-control form-textarea" placeholder="About Me" value={formData.section3.profile_text || ''} onChange={handleChange}></textarea>
            </div>
        </div>
    </div>

    {/* <input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/> */}
</div>
<button class="btn btn-primary" onClick={handleNext}>Next</button>
        </>
      )}

                {/* <button type="button" class="btn btn-primary formSubmitBtn" data-formid="formSubmitBtn3" id="formSubmitBtn3">Submit</button> */}
            </div>
          </div>
          
          <div class="tab-pane fade" id="pills-family-details" role="tabpanel" aria-labelledby="pills-family-details-tab" tabindex="0">
            <div class="form_content_data">
              {currentSection === 'section4' && (
        <>
            
              <div class="row p-4">
    <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU"/>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="family_type">குடும்ப வகை </label>
                    <input type="text" class="form-control" id="family_type" name="family_type" placeholder="Family Type" value={formData.section4.family_type || ''} onChange={handleChange} />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="family_status">குடும்ப நிலை </label>
                    <input type="text" class="form-control" id="family_status" name="family_status" placeholder="Family Status" value={formData.section4.family_status || ''} onChange={handleChange} />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="edit_inputMain-sltr">
            <div class="mb-3 text-start">
                <label class="form-label" for="father_name">தந்தையின் பெயர் <span class="Form__Error">*</span></label>
                <input type="text" class="form-control" id="father_name" name="father_name" placeholder="Father Name" value={formData.section4.father_name || ''} onChange={handleChange} />
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="edit_inputMain-sltr">
            <div class="mb-3 text-start">
                <label class="form-label" for="father_occupation">தந்தை தொழில் <span class="Form__Error">*</span></label>
                <input type="text" class="form-control" id="father_occupation" name="father_occupation" placeholder="Father Occupation" value={formData.section4.father_occupation || ''} onChange={handleChange} />
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="edit_inputMain-sltr">
            <div class="mb-3 text-start">
                <label class="form-label" for="mother_name">தாய் பெயர் <span class="Form__Error">*</span></label>
                <input type="text" class="form-control" id="mother_name" name="mother_name" placeholder="Mother Name" value={formData.section4.mother_name || ''} onChange={handleChange} />
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="edit_inputMain-sltr">
            <div class="mb-3 text-start">
                <label class="form-label" for="mother_occupation">தாய் தொழில் <span class="Form__Error">*</span></label>
                <input type="text" class="form-control" id="mother_occupation" name="mother_occupation" placeholder="Mother Occupation" value={formData.section4.mother_occupation || ''} onChange={handleChange} />
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="no_of_brother">சகோதரர் </label>
                    <input type="text" class="form-control" id="no_of_brother" name="no_of_brother" placeholder="Brother's Count" value={formData.section4.no_of_brother || ''} onChange={handleChange} />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="no_of_sister">சகோதரி </label>
                    <input type="text" class="form-control" id="no_of_sister" name="no_of_sister" placeholder="Sister's Count" value={formData.section4.no_of_sister || ''} onChange={handleChange} />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-12 mb-4">
        <div class="edit_inputMain-sltr">
            <div class="mb-3 text-start">
                <label class="form-label" for="family_details">குடும்ப விவரங்கள் </label>
                <textarea id="family_details" name="family_details" class="form-control form-textarea" placeholder="Family Details" value={formData.section4.family_details || ''} onChange={handleChange}></textarea>
            </div>
        </div>
    </div>

    {/* <input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/> */}
</div>
<button class="btn btn-primary" onClick={handleNext}>Next</button>
        </>
      )}

                {/* <button type="button" class="btn btn-primary formSubmitBtn" data-formid="formSubmitBtn4" id="formSubmitBtn4">Submit</button> */}
            </div>
          </div>
         
          <div class="tab-pane fade" id="pills-partner-preference" role="tabpanel" aria-labelledby="pills-partner-preference-tab" tabindex="0">
            <div class="form_content_data">
              <div class="row p-4">
    <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU"/>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="part_frm_age">Partner From Age </label>
                    <input
                        type="text"
                        id="part_frm_age"
                        placeholder="25 Above"
                        class="form-control"
                        name="part_frm_age"
                        value={formData.section5.part_frm_age || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="part_to_age">Partner To Age </label>
                    <input
                        type="text"
                        id="part_to_age"
                        placeholder="30 Below"
                        class="form-control"
                        name="part_to_age"
                        value={formData.section5.part_to_age || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="part_height_to">Partner To Height </label>
                    <input
                        type="text"
                        id="part_height_to"
                        placeholder="180 cm"
                        class="form-control"
                        name="part_height_to"
                        value={formData.section5.part_height_to || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="part_religion">Partner Religion </label>
                    <input
                        type="text"
                        id="part_religion"
                        placeholder="Hindu"
                        class="form-control"
                        name="part_religion"
                        value={formData.section5.part_religion || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="part_caste">Partner Caste </label>
                    <input
                        type="text"
                        id="part_caste"
                        placeholder="Vanniyar"
                        class="form-control"
                        name="part_caste"
                        value={formData.section5.part_caste || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="patner_country">Partner Country </label>
                    <input
                        type="text"
                        id="patner_country"
                        placeholder="Country"
                        class="form-control"
                        name="patner_country"
                        value={formData.section5.patner_country || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="patner_state">Partner State </label>
                    <input
                        type="text"
                        id="patner_state"
                        placeholder="State"
                        class="form-control"
                        name="patner_state"
                        value={formData.section5.patner_state || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="patner_matrial_status">Partner Marital Status </label>
                    <input
                        type="text"
                        id="patner_matrial_status"
                        placeholder="Marital Status"
                        class="form-control"
                        name="patner_matrial_status"
                        value={formData.section5.patner_matrial_status || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="patner_education">Partner Education </label>
                    <input
                        type="text"
                        id="patner_education"
                        placeholder="Education"
                        class="form-control"
                        name="patner_education"
                        value={formData.section5.patner_education || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="patner_occupation">Partner Occupation </label>
                    <input
                        type="text"
                        id="patner_occupation"
                        placeholder="Occupation"
                        class="form-control"
                        name="patner_occupation"
                        value={formData.section5.patner_occupation || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="patner_mother_tongue">Partner Mother Tongue </label>
                    <input
                        type="text"
                        id="patner_mother_tongue"
                        placeholder="Mother Tongue"
                        class="form-control"
                        name="patner_mother_tongue"
                        value={formData.section5.patner_mother_tongue || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="patner_manglik">Partner Manglik </label>
                    <input
                        type="text"
                        id="patner_manglik"
                        placeholder="Manglik"
                        class="form-control"
                        name="patner_manglik"
                        value={formData.section5.patner_manglik || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="patner_salary">Partner Salary </label>
                    <input
                        type="text"
                        id="patner_salary"
                        placeholder="Salary"
                        class="form-control"
                        name="patner_salary"
                        value={formData.section5.patner_salary || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    <div class="col-lg-6 col-md-6 mb-4">
        <div class="custom-select2-div">
            <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                <div class="mb-3 text-start">
                    <label class="form-label" for="patner_child_count">Partner's Child Count </label>
                    <input
                        type="text"
                        id="patner_child_count"
                        placeholder="Child Count"
                        class="form-control"
                        name="patner_child_count"
                        value={formData.section5.patner_child_count || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
    </div>

    {/* <input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                 */}
</div>


  {/* Render Next button for all sections except the last one */}


      {/* Render Submit button for the last section */}
     
        <button onClick={handleSubmit}>Submit</button>
     






                {/* <button type="button" class="btn btn-primary formSubmitBtn" data-formid="formSubmitBtn5" id="formSubmitBtn5">Submit</button> */}
            </div>
          </div>
         
 
          <div class="tab-pane fade" id="pills-upload-photo" role="tabpanel" aria-labelledby="pills-upload-photo-tab" tabindex="0">
            <div class="form_content_data">
              
                <div class="row p-4">
                <p class="help-block">Allowed Maximum File size up to 10MB. File type jpg , png , jpeg , gif , bmp.</p>
                  <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU" /> </div>     
                  <div className='row p-4 col-lg-12 col-md-12 mb-8 d-flex'    >      
                   <div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                    <label class="form-label" for="photo1">Photo 1 <span class="Form__Error">*</span></label>

                                    <input required="" name="photo1" class="form-control " placeholder="Photo 1" type="file" id="photo1"/>

                                    <input type="hidden" name="photo1_val" id="photo1_val" />

                                    <input type="hidden" name="photo1_path" id="photo1_path" value="assets/photos/" />

                                    <input type="hidden" name="photo1_ext" id="photo1_ext" value="jpg,png,jpeg,gif,bmp"/>

                                  

                                </div>
                                </div></div>
<div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                    <label class="form-label" for="photo2">Photo 2 </label>

                                    <input name="photo2" class="form-control " placeholder="Photo 2" type="file" id="photo2"/>


                                </div></div></div>
                                </div> 
                                <div className='row p-4 col-lg-12 col-md-12 mb-8 d-flex'> 
                                <div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="id_proof_back">Id Proof 1 <span class="Form__Error">*</span></label>

                                    <input required="" name="id_proof_back" class="form-control required" placeholder="Id Proof 1" type="file" id="id_proof_back1"/>



                                </div>
                                </div>
                                </div>
                               

                           

                               

                              <div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="id_proof_back">Id Proof 2 <span class="Form__Error">*</span></label>

                                    <input required="" name="id_proof_back" class="form-control required" placeholder="Id Proof 2" type="file" id="id_proof_back2"/>



                                </div>
                                </div>
                                </div>
                                </div>
                                <div className='row p-4 col-lg-12 col-md-12 mb-8 d-flex'> 
                                <div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="id_proof_back">Horoscope Image<span class="Form__Error">*</span></label>

                                    <input required="" name="id_proof_back" class="form-control required" placeholder="Id Proof 1" type="file" id="id_proof_back3"/>



                                </div>
                                </div>
                                </div>
                               

                           

                               

                              <div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr">
                                {/* <div class="mb-3 text-start">

                                    <label class="form-label" for="id_proof_back">Id Proof 2 <span class="Form__Error">*</span></label>

                                    <input required="" name="id_proof_back" class="form-control required" placeholder="Id Proof 2" type="file" id="id_proof_back"/>



                                </div> */}
                                </div>
                                </div>
                                </div>

                         
                                </div>
                <button type="button" class="btn btn-primary formSubmitBtn" data-formid="formSubmitBtn6" id="formSubmitBtn6">Submit</button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
      
    </div>
  </div>
  <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU"/>  <input type="hidden" name="id" value="" id="id"/>
  <input type="hidden" name="mode" value="add" id="mode"/>

  <input type="hidden" name="formUrl" id="formUrl" value="https://gloriousmatrimonial.com/admin/member/addEdit"/>
  <input type="hidden" name="successUrl" id="successUrl" value="https://gloriousmatrimonial.com/admin/member"/>
 
  <div class="content-backdrop fade"></div>
</div>
           </div></div> 
       
    </>
  )
}

export default Addmember