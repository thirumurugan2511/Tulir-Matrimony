import React from 'react'
import Aside from '../Aside/Aside'

const Occupation = () => {
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
                       <li class="breadcrumb-item"><a href="javascript:void(0);"></a></li>
                       <li class="breadcrumb-item active">  Manage Occupation </li>
                   </ol>
                   <ul class="navbar-nav flex-row align-items-center ms-auto">
                       <li class="nav-item lh-1 me-3">
                                                       <i class="bx bx-user me-2"></i><span class="align-middle">Administrator</span>
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
   <div class="bs-toast toast toast-placement-ex m-2" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
       <div class="toast-header">
           <i class="bx bx-bell me-2"></i>
           <div class="me-auto fw-semibold toast-title">Bootstrap</div>
           <small>Now</small>
           <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
       </div>
       <div class="toast-body">Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.</div>
   </div>
   <div class="row">
       <div class="col-md-11">
           <h4 class="fw-bold py-3 mb-4"></h4>
       </div>
       <div class="col-md-1">
           <select name="basic-datatables_length" id="recordLimit" aria-controls="basic-datatables" class="form-select">
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="5">5</option>
               <option selected="" value="10">10</option>
               <option value="25">25</option>
               <option value="50">50</option>
               <option value="100">100</option>
           </select>
       </div>
   </div>
   <div class="row  justify-content-between">
   <div class="col-md-2">
               <a href="/Occupationadd" class="fw-bold mb-4 btn btn-info"> <i class="bx bx-plus-circle"></i> Add New</a>
           </div>
  
   <div class="col-md-4">
               <div class="search-container">
           <input type="text" class="search-box form-control" id="searchText" placeholder="Search"/>
           <button class="search-button btn btn-info searchMainBtn" id="commonSearch"><i class="bx bx-search-alt-2"></i></button>
       </div>
           </div>
</div>
   

   <div class="card text-start">
       <h5 class="card-header">Manage Occupation</h5>
       <div class="table-responsive text-nowrap" id="resultData"><table class="table">
   <caption class="d-none">&nbsp;&nbsp; Result Data</caption>
   <thead className='text-start'>
       <tr class="text-nowrap">
           <th scope="col">Occupation Name</th>
           <th scope="col">Action</th>

       </tr>
   </thead>
   <tbody className='text-start'>
               
              <tr>
               <td>Farmer</td>       
               <td><a href="/religion/edit/15"><i class="bx bxs-edit"></i>Edit</a> /
               <a href="/religion/edit/15"><i class="bx bxs-edit"></i>Delete</a></td>
              </tr>
              <tr>
               <td>Software Engineer</td>       
               <td><a href="/religion/edit/15"><i class="bx bxs-edit"></i>Edit</a> /
               <a href="/religion/edit/15"><i class="bx bxs-edit"></i>Delete</a></td>
              </tr>
              <tr>
               <td>Doctor</td>       
               <td><a href="/religion/edit/15"><i class="bx bxs-edit"></i>Edit</a> /
               <a href="/religion/edit/15"><i class="bx bxs-edit"></i>Delete</a></td>
              </tr>
              <tr>
               <td>Police</td>       
               <td><a href="/religion/edit/15"><i class="bx bxs-edit"></i>Edit</a> /
               <a href="/religion/edit/15"><i class="bx bxs-edit"></i>Delete</a></td>
              </tr>
              
               
         
           </tbody>
</table>
</div>
   </div>
</div>
<input type="hidden" name="_token" value="xsRbVQIcWzUtaB16B9EQu0T5IiltWdJYP6iUnE2Q"/><input type="hidden" name="ajaxRequestUrl" id="ajaxRequestUrl" value="https://gloriousmatrimonial.com/admin/religion/getAjaxPaginationData"/>
<input type="hidden" name="changeStatusUrl" id="changeStatusUrl" value="https://gloriousmatrimonial.com/admin/religion/changeStatus"/>
<input type="hidden" name="page" id="page" value="1"/>
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
       </div>
       </div>
   
   </>
  )
}

export default Occupation