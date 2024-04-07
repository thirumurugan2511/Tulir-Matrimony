import React, { useState } from 'react';

const User = () => {
  const [basicDetails, setBasicDetails] = useState({
    name: '',
    gender: '',
    email: '',
    // Add more basic details fields here
  });
  const [residenceDetails, setResidenceDetails] = useState({
    country: '',
    state: '',
    city: '',
    // Add more residence details fields here
  });
  const [familyDetails, setFamilyDetails] = useState({
    fatherName: '',
    motherName: '',
    // Add more family details fields here
  });

  const handleSubmitBasic = async () => {
    try {
      // Make a POST request to your backend API endpoint for basic details
      const response = await fetch('https://tulirmatrimony.com/controlapi/addcustomer.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(basicDetails),
      });

      if (response.ok) {
        // Data successfully submitted
        console.log('Basic Details submitted successfully');
      } else {
        // Handle error response from the server
        console.error('Error submitting Basic Details');
      }
    } catch (error) {
      console.error('Error submitting Basic Details:', error);
    }
  };

  const handleSubmitResidence = async () => {
    try {
      // Make a POST request to your backend API endpoint for residence details
      const response = await fetch('https://tulirmatrimony.com/controlapi/addcustomer.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(residenceDetails),
      });

      if (response.ok) {
        // Data successfully submitted
        console.log('Residence Details submitted successfully');
      } else {
        // Handle error response from the server
        console.error('Error submitting Residence Details');
      }
    } catch (error) {
      console.error('Error submitting Residence Details:', error);
    }
  };

  const handleSubmitFamily = async () => {
    try {
      // Make a POST request to your backend API endpoint for family details
      const response = await fetch('https://tulirmatrimony.com/controlapi/addcustomer.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(familyDetails),
      });

      if (response.ok) {
        // Data successfully submitted
        console.log('Family Details submitted successfully');
      } else {
        // Handle error response from the server
        console.error('Error submitting Family Details');
      }
    } catch (error) {
      console.error('Error submitting Family Details:', error);
    }
  };

  return (
    <div>
      {/* Basic Details Section */}
      <div>
        <input type="text" name="name" value={basicDetails.name} onChange={(e) => setBasicDetails({ ...basicDetails, name: e.target.value })} />
        {/* Add more input fields for basic details */}
        <button onClick={handleSubmitBasic}>Submit Basic Details</button>
      </div>

      {/* Residence Details Section */}
      <div>
        <input type="text" name="country" value={residenceDetails.country} onChange={(e) => setResidenceDetails({ ...residenceDetails, country: e.target.value })} />
        {/* Add more input fields for residence details */}
        <button onClick={handleSubmitResidence}>Submit Residence Details</button>
      </div>

      {/* Family Details Section */}
      <div>
        <input type="text" name="fatherName" value={familyDetails.fatherName} onChange={(e) => setFamilyDetails({ ...familyDetails, fatherName: e.target.value })} />
        {/* Add more input fields for family details */}
        <button onClick={handleSubmitFamily}>Submit Family Details</button>
      </div>
    </div>
  );
};

export default User;
