import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Aside from '../Aside/Aside'
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import Smallicon from '../../Components/heart-icon.png'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const Sitesettingsedit = () => {
  const { id } = useParams(); // Get the user id from the URL
 // For navigating after editing

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    description: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://tulirmatrimony.com/controlapi/getuser.php?id=${id}`);
        const result = await response.json();
        setFormData({
          username: result.username,
          password: result.password,
          email: result.email,
          description: result.description,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://tulirmatrimony.com/controlapi/edituser.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, ...formData }),
      });
      const result = await response.json();
      console.log(result);
      window.location.href = '/Sitesettings';
     // Redirect to the Sitesettings page after successful edit
    } catch (error) {
      console.error('Error editing user data:', error);
    }
  };

  return (
    <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
    <Aside showMenu/>
    <div class="layout-page">
    <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached
            align-items-center bg-navbar-theme" id="layout-navbar">
                <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a class="nav-item nav-link px-0 me-xl-4">
                        <i class="bx bx-menu bx-sm"></i>
                    </a>
                </div>
                <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <ol class="breadcrumb breadcrumb-style2 mb-0">
                        <li><MdManageHistory class="breadcrumb-item "/></li>
                        <li style={{padding: '2px 10px'}}>Manage Site Settings</li>
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
        <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
            <div className="col-xl">
            <div className="card mb-4">
                <div className="card-body">
                <form onSubmit={handleSubmit} method="POST">
                    <div className="mb-3 text-start">
                    <label className="form-label" htmlFor="username">
                        Username <span className="Form__Error">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        className="form-control required"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="User Name"
                    />
                    </div>
                    <div className="mb-3 text-start">
                    <label className="form-label" htmlFor="password">
                        Password <span className="Form__Error">*</span>
                    </label>
                    <input
                        type="password"
                        required
                        className="form-control required"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                    </div>
                    <div className="mb-3 text-start">
                    <label className="form-label" htmlFor="email">
                        Email ID <span className="Form__Error">*</span>
                    </label>
                    <input
                        type="email"
                        required
                        className="form-control required"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    </div>
                    <div className="mb-3 text-start">
                    <label className="form-label" htmlFor="description">
                        Description <span className="Form__Error">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        className="form-control required"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Update
                    </button>
                </form>
                <div id="success-alert" className="m-4 alert alert-success" style={{ display: 'none', backgroundColor: '#28a745', color: 'white' }} role="alert">
                    User updated successfully.
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  </div>
 </div>
  );
};

export default Sitesettingsedit;
