import React from 'react'
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Aside from '../Aside/Aside'
import {Link} from 'react-router-dom'
import Smallicon from '../../Components/heart-icon.png'
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

const Aboutus = () => {
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
                        <li><MdManageHistory class="breadcrumb-item active"/></li>
                        <li style={{padding: '2px 10px'}}>Manage About Content</li>
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
                    <form id="addEditForm" name="addEditForm" action="https://gloriousmatrimonial.com/admin/success-story/addEdit" method="POST"
                        enctype="multipart/form-data">
                        <input type="hidden" name="_token" value="QmQajZaby0jhK1w27Zi2q032b38lFxQusYolpel3"/>                        
                        <div class="mb-3 text-start">

                                </div>

                                <div class="col-sm-4">

                                    

                                </div><div class="mb-3 text-start">

                                        <label class="form-label" for="bridename">Title Name <span class="Form__Error">*</span></label>

                                        <input   type="text"  required  class="form-control required" id="bridename" name="bridename" placeholder="Title Name"   />

                                    </div>
                                    <div class="mb-3 text-start">

                                    <label class="form-label" for="successmessage">About Content </label>

                                    <textarea  minlength="Success Message"  id="successmessage" name="successmessage" class="form-control " placeholder="About Description"></textarea>

                                </div>
                                {/* <div class="mb-3 text-start"> <label class="form-label">Status &nbsp;&nbsp;</label><input     name="status" id="APPROVED" class="form-check-input " type="radio" value="APPROVED" />

                                <label class="form-label" for="APPROVED">APPROVED</label> &nbsp;<input     name="status" id="UNAPPROVED" class="form-check-input " type="radio" value="UNAPPROVED" />

                                <label class="form-label" for="UNAPPROVED">UNAPPROVED</label> &nbsp;</div> */}
                                <input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.successStory.index"/><input type="hidden" name="mode" id="mode" value="add"/>                        <button type="submit" class="btn btn-primary formSubmitBtn"
                            id="formSubmitBtn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
           </div>
           <footer class="content-footer footer bg-footer-theme text-center">
                    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                        <div class="mb-2 mb-md-0">
                            <Link to="" class="footer-link text-center">© Copyright 2023-2024 By Aathesh Soft. All Rights Reserved.</Link>
                        </div>
                    </div>
                </footer>
           </div></div></div>
          
    </>

  )
}

export default Aboutus