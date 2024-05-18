import React, { useState, useEffect } from 'react';
import Aside from '../../Aside/Aside'
import { useParams } from 'react-router-dom';
import Smallicon from '../../../Components/heart-icon.png'
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";

const Locationedit = () => {
    const { id } = useParams();
    const [successMsg, setSuccessMsg] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [stateId, setstateId] = useState('');
    const [districtName, setDistrictName] = useState('');
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
    
    useEffect(() => {
        fetch(`https://tulirmatrimony.com/controlapi/singledistrict.php?${id}`)
            .then(response => response.json())
            .then(data => {
                setSelectedState(data.body.state_name || '');
                setDistrictName(data.body.district_name || '');
                setstateId(data.body.state_id || '');
            })
            .catch(error => {
                console.error('Error fetching district data:', error);
            });
    }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === "state_id") {
            // If changing the religion, update selectedReligion state
            setSelectedState(value);
        } else {
            // If changing caste name, update casteData state
            setDistrictName(prevState => ({
                ...prevState,
                [name]: value,
            }));
            setSelectedState(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };
    const handleSubmit = async (e,id) => {
        e.preventDefault();
        const idValue = id.slice(id.indexOf('=') + 1);
        try {
            if (!selectedState) {
                console.error('Please select a state');
                return;
            }

            const requestBody = {
                id: idValue,
                state_id:stateId,
                state_name: statesInIndia.find(state => state.id === parseInt(selectedState))?.name || '',
                district_name: districtName
            };

            const response = await fetch('https://tulirmatrimony.com/controlapi/editdistrict.php', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            console.log(requestBody);
            console.log(response);
                   
            if (response.ok) {
                // If request is successful, set success message and redirect
                setSuccessMsg('Record updated successfully.');
                setTimeout(() => {
                    window.location.href = '/Location';
                }, 1000);
            } else {
                console.error('Failed to update caste data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Aside />
                    <div className="layout-page">
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
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    <div className="col-xl">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <form onSubmit={(e) => handleSubmit(e, id)}>
                                                    {/* <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="state">State Name <span className="Form__Error">*</span></label>
                                                        <select className="form-select" required aria-label="Default select example" value={selectedState} onChange={handleChange}>
                                                            <option value="">Select State</option>
                                                            
                                                            {statesInIndia.map(state => (
                                                                <option key={state.id} value={state.id}>{state.name}</option>
                                                            ))}
                                                        </select>
                                                    </div> */}
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="district_name">District Name <span className="Form__Error">*</span></label>
                                                        <input type="text" required className="form-control required" id="district_name" name="district_name" placeholder="district Name" value={districtName} onChange={(e) => setDistrictName(e.target.value)} />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary formSubmitBtn" id="formSubmitBtn">Submit</button>
                                                </form>
                                            </div>
                                            <div id="success-alert" className="alert m-4 alert-success" style={{ display: successMsg ? 'block' : 'none', backgroundColor: '#28a745', color: 'white' }} role="alert">
                                                {successMsg}
                                            </div>
                                        </div>
                                    </div>
                                </div>
       
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

export default Locationedit;
