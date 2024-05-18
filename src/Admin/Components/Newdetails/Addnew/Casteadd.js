import React, { useState, useEffect } from 'react';
import Aside from '../../Aside/Aside'
import Smallicon from '../../../Components/heart-icon.png'
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";

const Casteadd = () => {
    const [data, setData] = useState([]);
    const [selectedReligion, setSelectedReligion] = useState('');
    const [casteName, setCasteName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://tulirmatrimony.com/controlapi/religionlist.php');
                const result = await response.json();
                setData(result.body);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const selectedReligionData = data.find(religion => religion.id === selectedReligion);
            if (!selectedReligionData) {
                console.error('Selected religion not found');
                return;
            }

            const response = await fetch('https://tulirmatrimony.com/controlapi/addcaste.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    religion_Id: selectedReligion,
                    religion_name: selectedReligionData.name, // Fetch the religion name based on ID
                    caste_name: casteName
                }),
            });
            setCasteName('');
            const successAlert = document.getElementById('success-alert');
              successAlert.style.display = 'block';
        
              // Hide success message after 5 seconds
              setTimeout(() => {
                successAlert.style.display = 'none';
              }, 1000);
            const result = await response.json();
            console.log(result);
            // You can handle success response here
        } catch (error) {
            console.error('Error adding caste:', error);
        }
    };
    const handleGoBack = () => {
        window.history.back();
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
                   <li class="breadcrumb-item " style={{padding: '2px 10px'}}>  Manage Caste </li>
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
                    <label className="form-label" htmlFor="religion_name">Religion Name <span className="Form__Error">*</span></label>
                    <select className="form-select" required aria-label="Default select example" value={selectedReligion} onChange={(e) => setSelectedReligion(e.target.value)}>
                        <option value="">Select Religion</option>
                        {data.map(religion => (
                            <option key={religion.id} value={religion.id}>{religion.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3 text-start">
                    <label className="form-label" htmlFor="caste_name">Caste Name <span className="Form__Error">*</span></label>
                    <input type="text" required className="form-control required" id="caste_name" name="caste_name" value={casteName} onChange={(e) => setCasteName(e.target.value)} placeholder="Caste Name" />
                </div>
                <button type="submit" className="btn btn-primary formSubmitBtn" id="formSubmitBtn">Submit</button>
            </form>
                </div>
                <div id="success-alert" className="alert m-4 alert-success" style={{ display: 'none', backgroundColor: '#28a745', color:'white' }} role="alert">
    Record added successfully.
                </div>
            </div>
        </div>
    </div>
    <Link to="#" className="btn btn-secondary m-4" onClick={handleGoBack}> Go Back CasteList  </Link>

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

export default Casteadd