import React, { useState, useEffect } from 'react';
import Aside from './Admin/Components/Aside/Aside'
import { useParams } from 'react-router-dom';
import { GrUserAdmin } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import Smallicon from './Admin/Components/heart-icon.png';

const Addusers = () => {
  const [regId, setRegId] = useState('');
  const [options, setOptions] = useState({});
  const [currentSection, setCurrentSection] = useState('section1'); // Define setCurrentSection
  const { currentSection: urlCurrentSection } = useParams(); 

  useEffect(() => {
    // Fetch dropdown options when component mounts
    fetchDropdownOptions('marriage_type', 'http://localhost:8000/api/religionlist');
    fetchDropdownOptions('religion', 'http://localhost:8000/api/religionlist');
    fetchDropdownOptions('cast');
    fetchDropdownOptions('moonsign');
    fetchDropdownOptions('star');
    fetchDropdownOptions('education');
    fetchDropdownOptions('occupaction');
    fetchDropdownOptions('employee');
    fetchDropdownOptions('annual_income');
  }, []);

  const fetchDropdownOptions = async (fieldName, apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const responseData = await response.json();
        let options;
        if (fieldName === 'marriage_type') {
          // Customize options for marriage_type
          options = [
            { value: 'single', label: 'Single' },
            { value: 'divorce', label: 'Divorce' },
            { value: 'widow', label: 'Widow' }
          ];
        } else {
          options = responseData.body.map(item => ({ value: item.id, label: item.name }));
        }
        setOptions(prevOptions => ({
          ...prevOptions,
          [fieldName + 'Options']: options
        }));
      } else {
        console.error(`Failed to fetch dropdown options for ${fieldName}`);
      }
    } catch (error) {
      console.error(`Error fetching dropdown options for ${fieldName}:`, error);
    }
  };

  // Function to generate a unique registration ID
  const generateRegId = () => {
    const date = new Date();
    const year = date.getFullYear().toString().substr(2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const randomNum = Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
    const newRegId = `TULR${year}${month}${day}${randomNum}`;
    setRegId(newRegId);
  };

  const initialFormData = {
    "section1": {
      "reg_id": "",
      "gender": "",
      "name": "",
      "email": "",
      "phonenumber": "",
      "password": "",
      "mother_tongue": "",
      "dob": "",
      "marriage_type": "",
      "status_children": "", // Include status_children field in initialFormData
      "image": "",
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
      "patner_education": "",
      "patner_occupation": "",
      "patner_mother_tongue": "",
      "patner_manglik": "",
      "patner_salary": "",
      "patner_child_count": ""
    }
  };

  const fieldTypeMapping = {
    reg_id: 'text',
    name: 'text',
    image: 'file',
    gender: 'text',
    email: 'email',
    phonenumber: 'tel',
    password: 'password',
    dob: 'date',
    // Add more field names and their corresponding input types as needed
  };

  const sectionNames = {
    section1: 'Basic Details',
    section2: 'Residence',
    section3: 'Physical Info',
    section4: 'Family Details',
    section5: 'Partner Preferences'
  };

  const [formData, setFormData] = useState(initialFormData);
  const [customerData, setCustomerData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

     // Check if the value is empty for required fields
    if (['reg_id', 'name', 'email', 'gender', 'phonenumber', 'password', 'dob'].includes(name) && value.trim() === '') {
        // You can display an error message or take any other action here
        return;
    }

    // Conditional check for status_children field visibility
    let statusChildrenVisibility = 'none';
    if (name === 'marriage_type' && (value === 'divorce' || value === 'widow')) {
        statusChildrenVisibility = 'block';
    }

    // Set the visibility of status_children field
    setFormData(prevState => ({
        ...prevState,
        [currentSection]: {
        ...prevState[currentSection],
        status_children_visibility: statusChildrenVisibility
        }
    }));


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

      // Include regId in the combinedData object
      combinedData.reg_id = regId;

      // Store combined data in localStorage
      localStorage.setItem('formData', JSON.stringify(combinedData));

      // Optionally, you can also send data to the server here
      const response = await fetch('https://tulirmatrimony.com/controlapi/addcustomer.php', {
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
    generateRegId();
  }, []);

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
          {/* Your Navbar Code */}
          <div class="content-wrapper">
            <div>
              <h2 className='mt-4'>{sectionNames[currentSection]}</h2>
              <div className='card-body m-5 '>
                <div className="edit_inputMain-sltr row">
                  {/* Render input fields for the current section */}
                  {(() => {
                    const elements = [];
                    const formDataKeys = Object.keys(formData[currentSection]);
                    for (let i = 0; i < formDataKeys.length; i++) {
                      const fieldName = formDataKeys[i];
                      const fieldData = formData[currentSection][fieldName];

                      elements.push(
                        <div key={fieldName} className="col-lg-6 col-md-6 mb-4 text-start">
                          <label htmlFor={fieldName}>
                            {fieldName.replace(/_/g, ' ').charAt(0).toUpperCase() + fieldName.replace(/_/g, ' ').slice(1)}
                            {['name', 'email', 'gender', 'phonenumber', 'password', 'dob'].includes(fieldName) && <span style={{ color: 'red' }}>*</span>}
                          </label>
                          {/* Render dropdown for specific fields */}
                          {['marriage_type', 'religion', 'cast', 'moonsign', 'star', 'education', 'occupaction', 'employee', 'annual_income'].includes(fieldName) && (
                            <select
                              id={fieldName}
                              name={fieldName}
                              className="form-select"
                              value={fieldData || ''}
                              onChange={handleChange}
                            >
                              <option value="">Select {fieldName.replace(/_/g, ' ')}</option>
                              {options[fieldName + 'Options'] && options[fieldName + 'Options'].map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                              ))}
                            </select>
                          )}
                          {/* Render regular input fields for other fields */}
                          {!['marriage_type', 'religion', 'cast', 'moonsign', 'star', 'education', 'occupaction', 'employee', 'annual_income'].includes(fieldName) && (
                            <input
                              type={fieldTypeMapping[fieldName] || 'text'}
                              id={fieldName}
                              name={fieldName}
                              placeholder={` ${fieldName.replace(/_/g, ' ').charAt(0).toUpperCase() + fieldName.replace(/_/g, ' ').slice(1)}`}
                              className="form-control"
                              value={fieldData || ''}
                              autoSave='off'
                              onChange={handleChange}
                            />
                          )}
                        </div>
                      );
                    }
                    return elements;
                  })()}
                </div>

                {/* Render Back button for sections 2, 3, 4, and 5 */}
                {currentSection !== 'section1' && (
                  <button className='btn btn-secondary' onClick={handleBack}>Back</button>
                )}
                {/* Render Next button for all sections except the last one */}
                {currentSection !== 'section5' && (
                  <button className='btn btn-primary m-3' onClick={handleNext}>Next</button>
                )}
                {/* Render Submit button for the last section */}
                {currentSection === 'section5' && (
                  <button className='btn btn-success m-3' onClick={handleSubmit}>Submit</button>
                )}
              </div>
              {/* Render customer data
              {Object.keys(customerData).length > 0 && (
                <div>
                  <h2>Customer Data</h2>
                  <pre>{JSON.stringify(customerData, null, 2)}</pre>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addusers;
