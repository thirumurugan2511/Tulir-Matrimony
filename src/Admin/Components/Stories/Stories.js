import React from 'react'
import '../Css/Charts.css';
import '../Css/Common.css';
import '../Css/Core.css';
import '../Css/Demo.css';
import '../Css/Newstylle.css';
import '../Css/Scrol.css';
import '../Css/Boxicon.css';
import '../Css/Theme.css';
import '../Css/Select.css';
import Aside from '../Aside/Aside';
import {Link} from 'react-router-dom'
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { MdPostAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Stories = () => {
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
                    <li><MdManageHistory  class="bx bx-user me-2"/></li>
<li class="breadcrumb-item active" style={{padding: '2px 10px'}}>  Manage Success Stories </li>
                    </ol>
                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                        <li class="nav-item lh-1 me-3">
                        <GrUserAdmin class="bx bx-user me-2" /><span class="align-middle">Administrator</span>
                                                    </li>
                                                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                            <Link class="nav-link dropdown-toggle hide-arrow" to="javascript:void(0);"
                                data-bs-toggle="dropdown">
                                <div class="avatar avatar-online">
                                    <img src="https://www.gloriousmatrimonial.com/public//assets/logo/8917801707308920.png" alt class="w-px-40 h-auto rounded-circle" />
                                </div>
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link class="dropdown-item" to="#">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar avatar-online">
                                                    <img src="https://www.gloriousmatrimonial.com/public//assets/logo/8917801707308920.png" alt
                                                        class="w-px-40 h-auto rounded-circle" />
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <span class="fw-semibold d-block mt-2">Admin</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <div class="dropdown-divider"></div>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="https://gloriousmatrimonial.com/admin/basic-site-setting">
                                        <i class="bx bx-cog me-2"></i>
                                        <span class="align-middle">Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" target="_blank" to="https://gloriousmatrimonial.com"
                                        rel="noopener">
                                        <i class='bx bx-slideshow me-2'></i>
                                        <span class="align-middle">Front End</span>
                                    </Link>
                                </li>
                                <li>
                                    <div class="dropdown-divider"></div>
                                </li>
                                <li>
                                                                        <Link class="dropdown-item" to="https://gloriousmatrimonial.com/admin/logout">
                                        <i class="bx bx-power-off me-2"></i>
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
                    {/* <!-- Toast with Placements --> */}
                    <div class="bs-toast toast toast-placement-ex m-2" role="alert" aria-live="assertive" aria-atomic="true"
                        data-delay="2000">
                        <div class="toast-header">
                            <i class="bx bx-bell me-2"></i>
                            <div class="me-auto fw-semibold toast-title">Bootstrap</div>
                            <small>Now</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.</div>
                    </div>
                    {/* <!-- Toast with Placements --> */}
                    <div class="row">
                        <div class="col-md-11">
                            <h4 class="fw-bold py-3 mb-4"></h4>
                        </div>
                        <div class="col-md-1">
                            <select name="basic-datatables_length" id="recordLimit" aria-controls="basic-datatables"
                                class="form-select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="5">5</option>
                                <option selected value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                        </div>
                    </div>
                    <div class="row  justify-content-between">
<div class="col-md-2">
            <a href="/Religionadd" class="fw-bold mb-4 btn btn-info"><MdPostAdd class="bx bx-plus-circle" /> Add New</a>
        </div>

<div class="col-md-4">
            <div class="search-container">
        <input type="text" class="search-box form-control" id="searchText" placeholder="Search"/>
        <button class="search-button btn btn-info searchMainBtn" id="commonSearch"><FaSearch class="bx bx-search-alt-2" /></button>
    </div>
        </div>
</div>
   

    {/* <!-- Basic Layout --> */}
    <div class="card">
        <h5 class="card-header">Manage Success Stories</h5>
        <div class="table-responsive text-nowrap" id="resultData"><table class="table">
    <caption class="d-none">&nbsp;&nbsp; Result Data</caption>
    <thead>
        <tr class="text-nowrap">
            <th scope="col"><input class="all_check pointer" type="checkbox"/></th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
            <th scope="col">Images</th>
            <th scope="col">Bride Name</th>
            <th scope="col">Bride Id</th>
            <th scope="col">Groom Name</th>
            <th scope="col">Groom Id</th>
            <th scope="col">Marriage Date</th>
            <th scope="col">Created On</th>
        </tr>
    </thead>
    <tbody>
           
                <tr>
            <th scope="row"><input type="checkbox" class="checkboxId" id="ps5" name="id[]" value="5"/></th>
                        <td><span class="badge bg-label-success me-1">APPROVED</span></td>
                                    <td><Link to="https://gloriousmatrimonial.com/admin/success-story/edit/5"><i class="bx bxs-edit"></i>
                    Edit</Link></td>
            <td><img src="https://www.gloriousmatrimonial.com/public//assets/success_story/3725631706797647.png" alt="" class="w-px-40 h-auto rounded-circle"/></td>
            <td>Astha</td>
            <td>NI-327945</td>
            <td>Aporva</td>
            <td>NI-327946</td>
            <td>2023-12-22</td>
            <td></td>
        </tr>
                <tr>
            <th scope="row"><input type="checkbox" class="checkboxId" id="ps4" name="id[]" value="4"/></th>
                        <td><span class="badge bg-label-success me-1">APPROVED</span></td>
                                    <td><Link to="https://gloriousmatrimonial.com/admin/success-story/edit/4"><i class="bx bxs-edit"></i>
                    Edit</Link></td>
            <td><img src="https://www.gloriousmatrimonial.com/public//assets/success_story/5890381706797641.png" alt="" class="w-px-40 h-auto rounded-circle"/></td>
            <td>Astha</td>
            <td>NI-327945</td>
            <td>Aporva</td>
            <td>NI-327946</td>
            <td>2023-12-22</td>
            <td></td>
        </tr>
                <tr>
            <th scope="row"><input type="checkbox" class="checkboxId" id="ps3" name="id[]" value="3"/></th>
                        <td><span class="badge bg-label-success me-1">APPROVED</span></td>
                                    <td><Link to="https://gloriousmatrimonial.com/admin/success-story/edit/3"><i class="bx bxs-edit"></i>
                    Edit</Link></td>
            <td><img src="https://www.gloriousmatrimonial.com/public//assets/success_story/7840861706797632.png" alt="" class="w-px-40 h-auto rounded-circle"/></td>
            <td>Astha</td>
            <td>NI-327945</td>
            <td>Aporva</td>
            <td>NI-327946</td>
            <td>2023-12-22</td>
            <td></td>
        </tr>
                <tr>
            <th scope="row"><input type="checkbox" class="checkboxId" id="ps2" name="id[]" value="2"/></th>
                        <td><span class="badge bg-label-success me-1">APPROVED</span></td>
                                    <td><Link to="https://gloriousmatrimonial.com/admin/success-story/edit/2"><i class="bx bxs-edit"></i>
                    Edit</Link></td>
            <td><img src="https://www.gloriousmatrimonial.com/public//assets/success_story/4899721706797624.png" alt="" class="w-px-40 h-auto rounded-circle"/></td>
            <td>Astha</td>
            <td>NI-327945</td>
            <td>Aporva</td>
            <td>NI-327946</td>
            <td>2023-12-22</td>
            <td></td>
        </tr>
                <tr>
            <th scope="row"><input type="checkbox" class="checkboxId" id="ps1" name="id[]" value="1"/></th>
                        <td><span class="badge bg-label-success me-1">APPROVED</span></td>
                                    <td><Link to="https://gloriousmatrimonial.com/admin/success-story/edit/1"><i class="bx bxs-edit"></i>
                    Edit</Link></td>
            <td><img src="https://www.gloriousmatrimonial.com/public//assets/success_story/1984731706797617.png" alt="" class="w-px-40 h-auto rounded-circle"/></td>
            <td>Astha</td>
            <td>NI-327945</td>
            <td>Aporva</td>
            <td>NI-327946</td>
            <td>2023-12-22</td>
            <td></td>
        </tr>
            </tbody>
</table>
</div>
    </div>
</div>
<input type="hidden" name="_token" value="QmQajZaby0jhK1w27Zi2q032b38lFxQusYolpel3" /><input type="hidden" name="ajaxRequestUrl" id="ajaxRequestUrl" value="https://gloriousmatrimonial.com/admin/success-story/getAjaxPaginationData"/>
<input type="hidden" name="changeStatusUrl" id="changeStatusUrl" value="https://gloriousmatrimonial.com/admin/success-story/changeStatus"/>
<input type="hidden" name="page" id="page" value="1"/>
                <footer class="content-footer footer bg-footer-theme">
                    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                        <div class="mb-2 mb-md-0">
                            <Link to="https://gloriousmatrimonial.com/admin/dashboard" class="footer-link fw-bolder">© Copyright 2023-2024 By Marriage Bureau Script. All Rights Reserved.</Link>
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

export default Stories