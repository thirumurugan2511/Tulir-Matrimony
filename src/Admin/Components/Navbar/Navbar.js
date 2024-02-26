import React from 'react'
import Button from 'react-bootstrap/Button';
import '../Css/Charts.css';
import '../Css/Common.css';
import '../Css/Core.css';
import '../Css/Demo.css';
import '../Css/Newstylle.css';
import '../Css/Scrol.css';
import '../Css/Boxicon.css';
import '../Css/Theme.css';
import '../Css/Select.css';
import Dashoard from '../Dashboard/Dashoard';



function Navbar() {
  return (
    
    <>
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
                        <li class="breadcrumb-item active">  Dashboard </li>
                    </ol>
                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                        <li class="nav-item lh-1 me-3">
                                                        <i class="bx bx-user me-2"></i><span class="align-middle">Administrator</span>
                                                    </li>
                                                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                            <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);"
                                data-bs-toggle="dropdown">
                                <div class="avatar avatar-online">
                                    <img src="https://www.gloriousmatrimonial.com/public//assets/logo/8917801707308920.png" alt class="w-px-40 h-auto rounded-circle" />
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a class="dropdown-item" href="#">
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
                                    <a class="dropdown-item" target="_blank" href="https://gloriousmatrimonial.com"
                                        rel="noopener">
                                        <i class='bx bx-slideshow me-2'></i>
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
            <Dashoard />
           </div>

    </>
  )
}

export default Navbar