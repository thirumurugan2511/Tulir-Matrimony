import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Aside from '../../Aside/Aside';
import { LuLogOut } from "react-icons/lu";
import {Link} from 'react-router-dom'
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import Smallicon from '../../rgt-matrimony-logo.png';

function Mothertongueedit() {

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
  
    const { id } = useParams();
    const [mothertongueData, setmothertongueData] = useState({});
    const [formData, setFormData] = useState({
        mothertongue_name: '',
    });
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        fetch(`https://tulirmatrimony.com/controlapi/singlelanguage.php?${id}`)
            .then(response => response.json())
            .then(data => {
                setmothertongueData(data.body);
                setFormData({
                    mothertongue_name: data.body.name || '',
                });
            })
            .catch(error => {
                console.error('Error fetching mothertongue data:', error);
            });
    }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e, id) => {
        e.preventDefault();

        // Extracting id from URL parameters
        const idValue = id.slice(id.indexOf('=') + 1);

        // Creating requestData object with the desired format
        const requestData = {
            id: idValue,
            name: formData.mothertongue_name // Assuming formData.language_name contains the name
        };
        const data = JSON.stringify(requestData);
        console.log(data);
//https://tulirmatrimony.com/controlapi/editlanguage.php
//http://localhost:8000/controlapi/editlanguage
        fetch('https://tulirmatrimony.com/controlapi/editlanguage.php', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data updated successfully:', data);
            setSuccessMsg('Record updated successfully.');
            setTimeout(() => {
                window.location.href = '/Mothertongue';
            }, 1000);
        })
        .catch(error => {
            console.error('Error updating mothertongue data:', error);
        });
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
                        <li class="breadcrumb-item " style={{padding: '2px 10px'}}>  Manage Mothertongue </li>
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
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    <div className="col-xl">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <form id="addEditForm" name="addEditForm" onSubmit={(e) => handleSubmit(e, id)}>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="mothertongue_name">
                                                        Mothertongue Name <span className="Form__Error">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control required"
                                                            id="mothertongue_name"
                                                            value={formData.mothertongue_name}
                                                            name="mothertongue_name"
                                                            onChange={handleChange}
                                                            placeholder="Mothertongue Name"
                                                        />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary formSubmitBtn" id="formSubmitBtn">
                                                        Update
                                                    </button>
                                                </form>
                                                {successMsg && (
                                                    <div className="alert alert-success" role="alert">
                                                        {successMsg}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="content-footer footer bg-footer-theme">
                                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                                    <div className="mb-2 mb-md-0">
                                        <a href="https://gloriousmatrimonial.com/admin/dashboard" className="footer-link fw-bolder">
                                            © Copyright 2023-2024 By Aathesh soft. All Rights Reserved.
                                        </a>
                                    </div>
                                </div>
                            </footer>
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mothertongueedit;
