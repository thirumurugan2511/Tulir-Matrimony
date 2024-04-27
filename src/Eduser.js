import React, { useState, useEffect } from 'react';
import Aside from './Admin/Components/Aside/Aside';
import { useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams(); // Fetching the dynamic ID from the URL
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data based on the ID when component mounts
    fetchUserData(id);
  }, [id]);

  const fetchUserData = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/fetchmember/${id}`);
      if (response.ok) {
        const userData = await response.json();
        setUserData(userData);
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSubmitSection = (sectionData) => {
    // Submit section data to the server
    console.log('Submitting section data:', sectionData);
    // You can implement your submission logic here
  };

  const renderSections = () => {
    if (!userData) return null;

    return Object.keys(userData).map((sectionKey) => (
      <div key={sectionKey}>
        <h2>{sectionKey}</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmitSection(userData[sectionKey]); }}>
          {/* Render input fields for each section */}
          {Object.entries(userData[sectionKey]).map(([fieldName, fieldValue]) => (
            
            <div key={fieldName} className="col-lg-4 col-md-6 mb-4 text-start">
              <label htmlFor={fieldName}>{fieldName}</label>
              <input
                type="text"
                id={fieldName}
                name={fieldName}
                value={fieldValue}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    [sectionKey]: {
                      ...prevUserData[sectionKey],
                      [fieldName]: newValue,
                    },
                  }));
                }}
              />
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    ));
  };

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Aside />
        <div className="layout-page">
          <div className="content-wrapper">
          <div className='card-body m-5 edit_memberSections_mainsdsd '>
           <div className="edit_inputMain-sltr row">
           <div className="col-lg-4 col-md-6 mb-4 text-start">
            {userData && renderSections()}
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default EditUser;
