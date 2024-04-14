import React, { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom'
import Aside from '../Aside/Aside'
import {Link} from 'react-router-dom'
import Smallicon from '../../Components/heart-icon.png'
import { IoMdSettings } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { LuLogOut } from "react-icons/lu";


const Storiesadd = () => {
    const [formData, setFormData] = useState({
        weddingphoto: '',
        bridename: '',
        brideid: '',
        groomname: '',
        groomid: '',
        marriagedate: '',
        successmessage: ''
    });
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://tulirmatrimony.com/controlapi/addsuccess.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
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
   
        
  return (
    <>
     <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
    <Aside />
    <div class="layout-page">
            <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached
            align-items-center bg-navbar-theme" id="layout-navbar">
                <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <Link class="nav-item nav-link px-0 me-xl-4" to="javascript:void(0)">
                        <i class="bx bx-menu bx-sm"></i>
                    </Link>
                </div>
                <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <ol class="breadcrumb breadcrumb-style2 mb-0">
                        <li><MdManageHistory class="breadcrumb-item "/></li>
                        <li style={{padding: '2px 10px'}}>Manage Success Stories</li>
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
                <form onSubmit={handleSubmit}>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="weddingphoto">Upload Your Wedding Photo <span className="Form__Error">*</span></label>
                                                        <input required name="weddingphoto" className="form-control required" placeholder="Upload Your Wedding Photo" type="file" id="weddingphoto" onChange={handleChange} />
                                                    </div>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="bridename">Bride's Name <span className="Form__Error">*</span></label>
                                                        <input type="text" required className="form-control required" id="bridename" name="bridename" placeholder="Bride's Name" onChange={handleChange} />
                                                    </div>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="brideid">Bride's ID <span className="Form__Error">*</span></label>
                                                        <input type="text" required className="form-control required" id="brideid" name="brideid" placeholder="Bride's ID" onChange={handleChange} />
                                                    </div>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="groomname">Groom's Name <span className="Form__Error">*</span></label>
                                                        <input type="text" required className="form-control required" id="groomname" name="groomname" placeholder="Groom's Name" onChange={handleChange} />
                                                    </div>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="groomid">Groom's Id <span className="Form__Error">*</span></label>
                                                        <input type="text" required className="form-control required" id="groomid" name="groomid" placeholder="Groom's Id" onChange={handleChange} />
                                                    </div>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="marriagedate">Your Marriage Date <span className="Form__Error">*</span></label>
                                                        <input className="form-control required" type="date" id="marriagedate" name="marriagedate" onChange={handleChange} />
                                                    </div>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="successmessage">Success Message</label>
                                                        <textarea id="successmessage" name="successmessage" className="form-control" placeholder="Success Message" onChange={handleChange}></textarea>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </form>
                                                {/* Success alert */}
                                                {showAlert && (
                                                    <div id="success-alert" className="alert m-4 alert-success" style={{ backgroundColor: '#28a745', color: 'white' }} role="alert">
                                                        Record added successfully.
                                                    </div>
                                                )}
                 
                </div>
            </div>
    <div id="success-alert" className="alert m-4 alert-success" style={{ display: 'none', backgroundColor: '#28a745', color:'white' }} role="alert">
    Record added successfully.
  </div>
        </div>
    </div>
</div>
           </div>
           </div></div></div>
    </>
  )
}

export default Storiesadd