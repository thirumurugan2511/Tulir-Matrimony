import React from 'react'
import Aside from '../Aside/Aside'
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";


const Sitesettings = () => {
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
                        <li><MdManageHistory class="breadcrumb-item active"/></li>
                        <li style={{padding: '2px 10px'}}>Manage Site Settings</li>
                    </ol>
                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                        <li class="nav-item lh-1 me-3">
                        <GrUserAdmin class="bx bx-user me-2" /><span class="align-middle">Administrator</span>
                                                    </li>
                                                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                            <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <div class="avatar avatar-online">
                                    <img src="https://www.gloriousmatrimonial.com/public//assets/logo/8917801707308920.png" alt="" class="w-px-40 h-auto rounded-circle"/>
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar avatar-online">
                                                    <img src="https://www.gloriousmatrimonial.com/public//assets/logo/8917801707308920.png" alt="" class="w-px-40 h-auto rounded-circle"/>
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
                                    <a class="dropdown-item" href="https://gloriousmatrimonial.com/admin/basic-site-setting">
                                        <i class="bx bx-cog me-2"></i>
                                        <span class="align-middle">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" target="_blank" href="https://gloriousmatrimonial.com" rel="noopener">
                                        <i class="bx bx-slideshow me-2"></i>
                                        <span class="align-middle">Front End</span>
                                    </a>
                                </li>
                                <li>
                                    <div class="dropdown-divider"></div>
                                </li>
                                <li>
                                                                        <a class="dropdown-item" href="https://gloriousmatrimonial.com/admin/logout">
                                        <i class="bx bx-power-off me-2"></i>
                                        <span class="align-middle">Log Out</span>
                                    </a>
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
                    <form id="addEditForm" name="addEditForm" action="https://gloriousmatrimonial.com/admin/religion/addEdit" method="POST" enctype="multipart/form-data">
                        <input type="hidden" name="_token" value="xsRbVQIcWzUtaB16B9EQu0T5IiltWdJYP6iUnE2Q"/>                        
                        
                        <div class="mb-3 text-start">

                                        <label class="form-label" for="religion_name">Username <span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="User Name" value=""/>

                                    </div>
                                    <div class="mb-3 text-start">

                                        <label class="form-label" for="religion_name">Password <span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Password" value=""/>

                                    </div>
                                    <div class="mb-3 text-start">

<label class="form-label" for="religion_name">Email <span class="Form__Error">*</span></label>

<input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Email" value=""/>

</div>
<div class="mb-3 text-start">

<label class="form-label" for="religion_name">Description <span class="Form__Error">*</span></label>

<input type="text" required="" class="form-control required" id="religion_name" name="religion_name" placeholder="Description" value=""/>

</div>
                                    
                                    <input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.religion.index"/><input type="hidden" name="mode" id="mode" value="add"/>                        <button type="submit" class="btn btn-primary formSubmitBtn" id="formSubmitBtn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="card text-start">
       <h5 class="card-header">Manage Site Settings</h5>
       <div class="table-responsive text-nowrap" id="resultData">
        <table class="table">
   <caption class="d-none">&nbsp;&nbsp; Result Data</caption>
   <thead className='text-start'>
       <tr class="text-nowrap">
           <th scope="col">Username</th>
           <th scope="col">Password</th>
           <th scope="col">Email</th>
           <th scope="col">Description</th>
       </tr>
   </thead>
   <tbody className='text-start'>
               
              <tr>
               <td>abishek</td> 
               <td>*********</td>  
               <td>abishek@gmail.com</td>     
               <td>Admin</td>
               <td><a href="/religion/edit/15"><i class="bx bxs-edit"></i>Edit</a> /
               <a href="/religion/edit/15"><i class="bx bxs-edit"></i>Delete</a></td>
              </tr>
              
               
         
           </tbody>
</table>
</div>
   </div>
</div>
                <footer class="content-footer footer bg-footer-theme">
                    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                        <div class="mb-2 mb-md-0">
                            <a href="https://gloriousmatrimonial.com/admin/dashboard" class="footer-link fw-bolder">© Copyright 2023-2024 By Marriage Bureau Script. All Rights Reserved.</a>
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

export default Sitesettings