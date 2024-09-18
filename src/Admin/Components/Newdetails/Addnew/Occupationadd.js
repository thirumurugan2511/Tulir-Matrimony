import React, { useState, useRef } from 'react';
import Aside from '../../Aside/Aside';
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import Smallicon from '../../../Components/heart-icon.png';
import { Link } from "react-router-dom";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Navbar from '../../Navbar/Navbar';
const Occupationadd = () => {

    // const [isDropdownOpen, setDropdownOpen] = useState(false);

    // const toggleDropdown = () => {
    //   setDropdownOpen(!isDropdownOpen);
    // };
    const [dashboardData, setDashboardData] = useState({
      total_member: 0,
      male_member: 0,
      female_member: 0,
      paid_member: 0,
      notpaid_member: 0,
      expired_member: 0,
    });
    
    const [occupation, setOccupation] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://tulirmatrimony.com/controlapi/addoccupation.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: occupation }),
            });
            formRef.current.reset();
            setOccupation(''); 
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);

            const data = await response.json();
            console.log(data);
            // Handle success or error response here

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleGoBack = () => {
        window.location.href = '/Occupation';
    };

    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Aside />
                    <div className="layout-page">
                    <Navbar />
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    <div className="col-xl">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <form id="addEditForm" ref={formRef} name="addEditForm" onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                                                    <input type="hidden" name="_token" value="xsRbVQIcWzUtaB16B9EQu0T5IiltWdJYP6iUnE2Q" />
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="occupation_name">Occupation Name <span className="Form__Error">*</span></label>
                                                        <input type="text" required className="form-control required" id="occupation_name" name="occupation_name" value={occupation} onChange={(e) => setOccupation(e.target.value)} placeholder="Occupation Name" />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary formSubmitBtn" id="formSubmitBtn">Submit</button>
                                                </form>
                                            </div>
                                            {showAlert && (
                                                <div id="success-alert" className="alert m-4 alert-success m-auto mb-3" style={{ backgroundColor: '#28a745', color: 'white', width:'70%' }} role="alert">
                                                    Record added successfully.
                                                </div>
                                            )}
                                           
                                        </div>
                                    </div>
                                </div>
                                <Link to="#" className="btn btn-secondary m-4" onClick={handleGoBack}> Go Back OccupationList </Link>
                            </div>
                            <footer className="content-footer footer bg-footer-theme">
                                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                                    <div className="mb-2 mb-md-0">
                                        <a href="" className="footer-link fw-bolder">© Copyright 2023-2024 By Marriage Bureau Script. All Rights Reserved.</a>
                                    </div>
                                    
                                </div>
                            </footer>
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Occupationadd;
