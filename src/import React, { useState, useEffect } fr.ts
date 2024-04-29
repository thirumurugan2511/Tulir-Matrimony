import React, { useState, useEffect } from 'react';
import Aside from './Admin/Components/Aside/Aside'
import { useParams } from 'react-router-dom';
import { GrUserAdmin } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import Smallicon from './Admin/Components/heart-icon.png'


const Edituser = () => {
  const { id } = useParams();
  const [regId, setRegId] = useState('');
  const [showAlert, setShowAlert] = useState(false);


  const [options, setOptions] = useState({
    genderOptions: [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ],
  sevaikiragamOptions: [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ],

  drinkingOptions: [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
    { value: 'Planning to Leave', label: 'Planning to Leave' }
  ], 
  patner_matrial_statusOptions : [
    { value: 'Single', label: 'Single' },
    { value: 'Divorce', label: 'Divorce' },
    { value: 'Widow', label: 'Widow' }
  ],
  food_habitsOptions : [
    { value: 'Vegetarian', label: 'Vegetarian' },
    { value: 'Non-Vegetarian', label: 'Non-Vegetarian' }  
    
  ]
  
});

  useEffect(() => {
    // Fetch dropdown options when component mounts
    fetchDropdownOptions('marriage_type');
    fetchDropdownOptions('religion');
    fetchDropdownOptions('patner_salary');
  }, []);


  const fetchUserData = async (id) => {
    try {
      const response = await fetch(`https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${id}`);
      if (response.ok) {
        const userData = await response.json();
        console.log(userData); 
        const initialFormData = initializeFormData(userData);       } 
        else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    fetchUserData(id);
  }, []);
  
  const initializeFormData = (userData) => {
    return {
      "section1": {
        "name": "",
        "gender": "",   
        "email": "",
        "phonenumber": "",
        "password": "",
        "mother_tongue": "",
        "dob": "",
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
        "education":"",
        "education_details":"",
        "occupaction":"",
        "employee":"",
        "annual_income":"",
  
      },
      "section2": {
        "country": "",
        "state": "",
        "city": "",
        "residece": "",
        "alternatenumber": "",
        "nricountry": "",
        "address": ""
      },
      "section3": {
        "height": "",
        "weight": "",
        "food_habits": "",
        "smoking": "",
        "drinking": "",
        "body_type": "",
        "skin_tone": "",
        "profile_by": "",
        "aboutme": ""
      },
      "section4": {
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
        "family_details": ""
      },
      "section5": {
        "patner_from_age": "",
        "patner_to_age": "",
        "patner_height": "",
        "patner_weight": "",
        "patner_religion": "",
        "patner_cast": "",
        "patner_country": "",
        "patner_state": "",
        "patner_matrial_status": "",
        "patner_child_count": "",
        "patner_child_age": "",
        "patner_child_gender": "",
        "patner_education": "",
        "patner_occupation": "",
        "patner_mother_tongue": "",
        "patner_manglik": "",
        "patner_salary": ""
        
      },
      "section6": {
        "image": "",
        "image1": "",
        "id_image": "",
        "id_image1": "",
        "rasiimage": "",
      }
     
    };
  
  };
  

  const labelTranslations = {
    "reg_id": "பதிவு ஐடி",
    "name": "பெயர்",
    "image": "படம்",
    
    "rasiimage": "ஜாதகப் படம்"
  };
  const statesInIndia = [
    { id: 1, name: 'Andhra Pradesh' },
    { id: 2, name: 'Arunachal Pradesh' },
   
];

  const fieldTypeMapping = {
    reg_id: 'text',
    name: 'text',
    image: 'file',
    gender: 'text',
    email: 'email',
    phonenumber: 'tel',
    password: 'password',
    dob: 'date',
    birthtime: 'time',
    address: 'textarea'

    // Add more field names and their corresponding input types as needed
  };
  const sectionNames = {
    section1: 'Basic Details',
    section2: 'Residence',
    section3: 'Physical Info',
    section4: 'Family Details',
    section5: 'Partner Preferences',
    section6: 'Upload Images'
  };

  const [formData, setFormData] = useState(initializeFormData);
  const [currentSection, setCurrentSection] = useState('section1');
  const [customerData, setCustomerData] = useState({});
  const [casteList, setCasteList] = useState([]);

  const handleChange = (e) => {
    const { name, files } = e.target;
  
    if (['image', 'image1', 'id_image', 'id_image1', 'rasiimage'].includes(name)) {
      // Read the file contents
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        // Store the file contents in state
        setFormData(prevState => ({
          ...prevState,
          [currentSection]: {
            ...prevState[currentSection],
            [name]: reader.result // Store the file contents
          }
        }));
      };
      if (file) {
        reader.readAsDataURL(file); // Read file as data URL
      }
    } else {
      const { value } = e.target;
      if (['name', 'email', 'gender', 'phonenumber', 'password', 'dob'].includes(name) && value.trim() === '') {
        alert("Please Enter Required Fields!");
      }
      setFormData(prevState => ({
        ...prevState,
        [currentSection]: {
          ...prevState[currentSection],
          [name]: value
        }
      }));
    }
  };
  

  const handleNext = () => {
    const sections = Object.keys(formData);
    const currentIndex = sections.indexOf(currentSection);
    const nextIndex = currentIndex + 1;
    if (nextIndex < sections.length) {
      setCurrentSection(sections[nextIndex]);
    }
  };
  const generateStateOptions = () => {
    // Generate options for state dropdown
    return statesInIndia.map(state => ({ value: state.name, label: state.name }));
  };
 const fetchDropdownOptions = async (fieldName) => {
  try {
    let endpoint = '';
    switch (fieldName) { 
      case 'gender':
        // Options for gender dropdown
        setOptions(prevOptions => ({
          ...prevOptions,
          [fieldName + 'Options']: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' }
          ]
        }));
        break;
            case 'country': 
            // Options for marriage type dropdown
            setOptions(prevOptions => ({
              ...prevOptions,
              [fieldName + 'Options']: [
                { value: 'india', label: 'India' } 
              ]
            }));
          break;
          case 'patner_country':
            // Options for marriage type dropdown
            setOptions(prevOptions => ({
              ...prevOptions,
              [fieldName + 'Options']: [
                { value: 'india', label: 'India' }
                  
              ]
          }));
         break;
        case 'marriage_type':
            // Options for marriage type dropdown
          setOptions(prevOptions => ({
              ...prevOptions,
              [fieldName + 'Options']: [
                { value: 'single', label: 'Single' },
                { value: 'divorce', label: 'Divorce' },
                { value: 'widow', label: 'Widow' }
              ]
            }));
            break;
      case 'religion':
        // Fetch options from API for religion
        //http://localhost:8000/religionlist
        //https://tulirmatrimony.com/controlapi/religionlist.php
        endpoint = 'https://tulirmatrimony.com/controlapi/religionlist.php';
        break;

      case 'cast':
      case 'patner_cast':
      // Set the appropriate endpoint for fetching caste list based on currentSection
      endpoint = 'https://tulirmatrimony.com/controlapi/castelist.php';
      break;
  
      
        case 'patner_mother_tongue':
            // Fetch options from different API for education  patner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/languagelist.php';
          break;
        case 'patner_salary':
            // Fetch options from different API for education  patner_religion
          endpoint = 'https://tulirmatrimony.com/controlapi/incomelist.php';
          break;
      default:
        break;
    } 
  

    if (endpoint !== '') {
      const response = await fetch(endpoint);
      if (response.ok) {
        const responseData = await response.json();
        const options = responseData.body.map(item => ({ value: item.name, label: item.name }));
        setOptions(prevOptions => ({
          ...prevOptions,
          [fieldName + 'Options']: options
        }));
      } else {
        console.error(`Failed to fetch dropdown options for ${fieldName}`);
      }
    }
  } catch (error) {
    console.error(`Error fetching dropdown options for ${fieldName}:`, error);
  }
};



  const handleSubmit = async () => {
    try {
      // Combine all section data into one object
      const combinedData = Object.values(formData).reduce((acc, sectionData) => {
        return { ...acc, ...sectionData };
      }, {});
     
      const imageData = {
        image: combinedData.image ? combinedData.image.split(',')[1] : null,
        image1: combinedData.image1 ? combinedData.image1.split(',')[1] : null,
        id_image: combinedData.id_image ? combinedData.id_image.split(',')[1] : null,
        id_image1: combinedData.id_image1 ? combinedData.id_image1.split(',')[1] : null,
        rasiimage: combinedData.rasiimage ? combinedData.rasiimage.split(',')[1] : null,
      };



      // Include regId in the combinedData object
      combinedData.reg_id = regId;

      // Store combined data in localStorage
      localStorage.setItem('formData', JSON.stringify(combinedData));

      // Optionally, you can also send data to the server here
      //https://tulirmatrimony.com/controlapi/addcustomer.php
      //http://localhost:8000/addcustomer
      const response = await fetch('https://tulirmatrimony.com/controlapi/addcustomer.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...combinedData, ...imageData }) 
    });
     console.log(combinedData);
    // Handle the response from your Node.js server
    if (response.ok) {
      const responseData = await response.json();
      console.log('Data sent successfully:', responseData);
      setShowAlert(true); // Show alert box
      setTimeout(() => setShowAlert(false), 1000);
      window.location.href = '/Member';
      // Optionally, you can reset the form data and handle any further actions here
    } else {
      console.error('Failed to send data');
    }

      // Reset formData and navigate to the next page
      setFormData(initializeFormData);
      setCurrentSection('section1');
      setCustomerData(combinedData);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

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
  const handleBack = () => {
    const sections = Object.keys(formData);
    const currentIndex = sections.indexOf(currentSection);
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
      setCurrentSection(sections[previousIndex]);
    }
  };
  

  return (
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
                             <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                 <div class="avatar avatar-online">
                                     <img src={Smallicon} alt="" class="w-px-40 h-auto rounded-circle"/>
                                 </div>
                             </a>
                             <ul class="dropdown-menu dropdown-menu-end">
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
                                     <Link class="dropdown-item" to="/Sitesetting">
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
    <div>
    <h2 className='mt-4'>{sectionNames[currentSection]}</h2>
      <div className='card-body m-5 edit_memberSections_mainsdsd '>
      <div className="edit_inputMain-sltr row">


  {/* Render input fields for the current section */}
  {Object.keys(formData[currentSection]).map(fieldName => (
        ['gender', 'marriage_type', 'sevaikiragam', 'religion',  'moonsign', 'mother_tongue', 'star', 'education', 'occupaction', 'annual_income',
          'smoking', 'drinking', 'status_children','country', 'state', 'father_occupation', 'mother_occupation', 'sister_married', 'brother_married', 'patner_religion',
           'patner_country', 'patner_state', 'patner_matrial_status', 'patner_education', 'patner_occupation', 'patner_mother_tongue',
          'patner_salary', 'patner_child_gender', 'patner_manglik', 'food_habits', 'body_type', 'skin_tone', 'profile_by', 'family_type', 'family_status', 'patner_from_age',
          'patner_to_age','residece'
        ].includes(fieldName) ?
          <div key={fieldName} className="col-lg-4 col-md-6 mb-4 text-start">
            <label htmlFor={fieldName} style={{ color: 'black' }}>{labelTranslations[fieldName]} </label>
            
              <select
                id={fieldName}
                name={fieldName}
                className="form-select"
                value={formData[currentSection][fieldName] || ''}
                onChange={handleChange}
              > 
                <option value="">Select your {
                  fieldName === 'patner_from_age' ? 'Partner from age' :
                  fieldName === 'patner_to_age' ? 'Partner to age' :
                  fieldName === 'patner_religion' ? 'Partner religion' :
                  fieldName === 'patner_country' ? 'Partner country' :
                  fieldName === 'patner_state' ? 'Partner state' :
                  fieldName === 'patner_matrial_status' ? 'Partner marital status' :
                  fieldName === 'patner_education' ? 'Partner education' :
                  fieldName === 'patner_occupation' ? 'Partner occupation' :
                  fieldName === 'patner_mother_tongue' ? 'Partner mothertongue' :
                  fieldName === 'patner_manglik' ? 'Partner manglik' :
                  fieldName === 'patner_salary' ? 'Partner salary' :
                  fieldName === 'patner_child_gender' ? 'Partner child gender' :
                  `${fieldName.replace(/_/g, ' ').charAt(0).toUpperCase() + fieldName.replace(/_/g, ' ').slice(1)}`
                }</option>
                {/* Render options dynamically */}
                {options[fieldName + 'Options'] && options[fieldName + 'Options'].map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
          </div>
          :
     
          // Render input field for non-dropdown fields
          <div key={fieldName} className="col-lg-4 col-md-4 mb-4 text-start">
          <label htmlFor={fieldName} style={{ color: 'black' }}>
            {labelTranslations[fieldName]}
            {['name', 'email', 'phonenumber', 'password', 'dob'].includes(fieldName) && <span style={{ color: 'red' }}>*</span>}
          </label>
          {['image', 'image1', 'id_image', 'id_image1', 'rasiimage'].includes(fieldName) ? (
            <input
              type="file"
              id={fieldName}
              name={fieldName}
              // Add this if you want to restrict file selection to images
              className="form-control"
              onChange={handleChange}
            />
          ) : fieldName === 'address' ? (
            <textarea
              id={fieldName}
              name={fieldName}
              placeholder="Enter your address"
              className="form-control"
              value={formData[currentSection][fieldName] || ''}
              autoSave='off'
              onChange={handleChange}
            />
          ) : (
            <input
              type={fieldTypeMapping[fieldName] || 'text'}
              id={fieldName}
              name={fieldName}
              placeholder={fieldName === 'patner_height' ? 'Partner Height' : fieldName === 'patner_weight' ? 'Partner Weight' : fieldName === 'patner_cast' ? 'Partner Cast' : fieldName === 'patner_child_count' ? 'Partner Child Count' : fieldName === 'patner_child_age' ? 'Partner Child Age' : `${fieldName.replace(/_/g, ' ').charAt(0).toUpperCase() + fieldName.replace(/_/g, ' ').slice(1)}`}
        
              className="form-control"
              value={formData[currentSection][fieldName] || ''}
              autoSave='off'
              onChange={handleChange}
            />
          )}
        </div>
        
      ))}
                </div>

{/* Render Back button for sections 2, 3, 4, and 5 */}
{currentSection !== 'section1' && (
  <button className='btn btn-secondary' onClick={handleBack}>Back</button>
)}
  {/* Render Next button for all sections except the last one */}
  {currentSection !== 'section6' && (
        <button className='btn btn-primary m-3' onClick={handleNext}>Next</button>
      )}

      {/* Render Submit button for the last section */}
      {currentSection === 'section6' && (
        <button className='btn btn-success m-3' onClick={handleSubmit}>Submit</button>
      )}
</div>

    </div>
    </div>
    </div>
    </div>
    </div>

  );
};

export default Edituser;
