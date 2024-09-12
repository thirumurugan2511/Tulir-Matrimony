import React, { useState, useEffect } from 'react';
import Aside from '../../Aside/Aside'
import Smallicon from '../../../Components/heart-icon.png'
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";

const Locationadd = () => {
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
    const [data, setData] = useState([]);
    const [selectedReligion, setSelectedReligion] = useState('');
    const [casteName, setCasteName] = useState('');
    // State variable to hold the selected state
    const [selectedState, setSelectedState] = useState('');

    // List of states in India
    const statesInIndia = [
        { id: 1, name: 'Andhra Pradesh' },
        { id: 2, name: 'Arunachal Pradesh' },
        { id: 3, name: 'Assam' },
        { id: 4, name: 'Bihar' },
        { id: 5, name: 'Chhattisgarh' },
        { id: 6, name: 'Goa' },
        { id: 7, name: 'Gujarat' },
        { id: 8, name: 'Haryana' },
        { id: 9, name: 'Himachal Pradesh' },
        { id: 10, name: 'Jharkhand' },
        { id: 11, name: 'Karnataka' },
        { id: 12, name: 'Kerala' },
        { id: 13, name: 'Madhya Pradesh' },
        { id: 14, name: 'Maharashtra' },
        { id: 15, name: 'Manipur' },
        { id: 16, name: 'Meghalaya' },
        { id: 17, name: 'Mizoram' },
        { id: 18, name: 'Nagaland' },
        { id: 19, name: 'Odisha' },
        { id: 20, name: 'Punjab' },
        { id: 21, name: 'Rajasthan' },
        { id: 22, name: 'Sikkim' },
        { id: 23, name: 'Tamil Nadu' },
        { id: 24, name: 'Telangana' },
        { id: 25, name: 'Tripura' },
        { id: 26, name: 'Uttar Pradesh' },
        { id: 27, name: 'Uttarakhand' },
        { id: 28, name: 'West Bengal' },
        { id: 29, name: 'Andaman and Nicobar Islands' },
        { id: 30, name: 'Chandigarh' },
        { id: 31, name: 'Dadra and Nagar Haveli and Daman and Diu' },
        { id: 32, name: 'Delhi' },
        { id: 33, name: 'Lakshadweep' },
        { id: 34, name: 'Puducherry' },
    ];


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Extract district name from the form input
            const districtName = document.getElementById('district_name').value;
    
            // Check if a state is selected
            if (!selectedState) {
                // Handle the case where no state is selected
                console.error('Please select a state');
                return;
            }
    
            // Find the selected state object
            const selectedStateObject = statesInIndia.find(state => state.id === parseInt(selectedState));
    
            // Check if a state is found
            if (!selectedStateObject) {
                // Handle the case where the selected state is not found
                console.error('Selected state not found');
                return;
            }
    
            // Prepare the request body
            const requestBody = {
                state_id: selectedStateObject.id,
                state_name: selectedStateObject.name,
                district_name: districtName
            };
    
            // Make the API request
            const response = await fetch('https://tulirmatrimony.com/controlapi/adddistrict.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
    
            // Clear the input field after submission
            document.getElementById('district_name').value = '';
    
            const successAlert = document.getElementById('success-alert');
            successAlert.style.display = 'block';
    
            // Hide success message after 5 seconds
            setTimeout(() => {
                successAlert.style.display = 'none';
            }, 2000);
    
            const data = await response.json();
            console.log(data);
            // Handle success or error response here
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    const handleGoBack = () => {
        window.location.href = '/Location';
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
                   <li class="breadcrumb-item " style={{padding: '2px 10px'}}>  Manage Location </li>
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
                                <Link class="dropdown-item" to="/Signin">
                                    
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
                <div class="container-xxl flex-grow-1 container-p-y">
    
      
    <div class="row">
        <div class="col-xl">
            <div class="card mb-4">
                <div class="card-body">
                <form id="addEditForm" name="addEditForm" onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                    <label className="form-label" htmlFor="religion_name">State Name <span className="Form__Error">*</span></label>
                    <select className="form-select" required aria-label="Default select example" value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                        <option value="">Select State</option>
                        {/* Map through the states and generate options */}
                        {statesInIndia.map(state => (
                            <option key={state.id} value={state.id}>{state.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3 text-start">
                    <label className="form-label" htmlFor="district_name">District Name <span className="Form__Error">*</span></label>
                    <input type="text" required className="form-control required" id="district_name" name="district_name" placeholder="district Name" />
                </div>
                <button type="submit" className="btn btn-primary formSubmitBtn" id="formSubmitBtn">Submit</button>
            </form>
                </div>
            </div>
        </div>
    </div>
    <Link to="#" className="btn btn-secondary m-4" onClick={handleGoBack}> Go Back Location List  </Link>

</div>
                <footer class="content-footer footer bg-footer-theme">
                    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                        <div class="mb-2 mb-md-0">
                            <a href="" class="footer-link fw-bolder">© Copyright 2023-2024 By Marriage Bureau Script. All Rights Reserved.</a>
                        </div>
                    </div>
                </footer>
                <div class="content-backdrop fade"></div>
            </div>
        </div>
        </div> </div>
    </>
  )
}

export default Locationadd