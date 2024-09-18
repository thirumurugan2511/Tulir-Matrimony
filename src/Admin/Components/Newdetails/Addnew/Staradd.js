import React, { useState, useRef } from 'react';
import Aside from '../../Aside/Aside'
import Smallicon from '../../../Components/heart-icon.png'
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Navbar from '../../Navbar/Navbar';
const Staradd = () => {

//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };
  const [dashboardData, setDashboardData] = useState({
    total_member: 0,
    male_member: 0,
    female_member: 0,
    paid_member: 0,
    notpaid_member: 0,
    expired_member: 0,
  });
  
    const [star, setStar] = useState('');
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://tulirmatrimony.com/controlapi/addstar.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: star }),
                
            });
            setStar(''); 
    const successAlert = document.getElementById('success-alert');
      successAlert.style.display = 'block';

      // Hide success message after 5 seconds
      setTimeout(() => {
        successAlert.style.display = 'none';
      }, 5000);
   
            const data = await response.json();
            console.log(data);
            // Handle success or error response here
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleGoBack = () => {
        window.location.href = '/Star';
    };

  return (
    <>
    <div class="layout-wrapper layout-content-navbar">
   <div class="layout-container">
   <Aside />
    <div class="layout-page">
            <Navbar />
            <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
    
      
    <div class="row">
        <div class="col-xl">
            <div class="card mb-4">
                <div class="card-body">
                    <form id="addEditForm" ref={formRef} name="addEditForm"  onSubmit={handleSubmit} method="POST" enctype="multipart/form-data">
                        <input type="hidden" name="_token" value="xsRbVQIcWzUtaB16B9EQu0T5IiltWdJYP6iUnE2Q"/>                        <div class="mb-3 text-start">

                                        <label class="form-label" for="Star_name">Star Name <span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control required" id="Star_name" name="Star_name" value={star} onChange={(e) => setStar(e.target.value)} placeholder="Star Name"/>

                                    </div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.Star.index"/><input type="hidden" name="mode" id="mode" value="add"/>                        <button type="submit" class="btn btn-primary formSubmitBtn" id="formSubmitBtn">Submit</button>
                    </form>
                </div>
                <div id="success-alert" className="alert m-4 alert-success" style={{ display: 'none', backgroundColor: '#28a745', color:'white' }} role="alert">
    Record added successfully.
                </div>
            </div>
        </div>
    </div>
    <Link to="#" className="btn btn-secondary m-4" onClick={handleGoBack}> Go Back StarList </Link>
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

export default Staradd