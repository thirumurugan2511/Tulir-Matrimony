import React, { useState, useEffect } from 'react';
import Aside from '../Aside/Aside'
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Smallicon from '../../Components/heart-icon.png'

const Star = () => {

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
  
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://tulirmatrimony.com/controlapi/starlist.php');
          const result = await response.json();
          console.log(result)
          setData(result.body);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
        await fetch(`https://tulirmatrimony.com/controlapi/deletestar.php`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
        // Assuming successful deletion, update the state to reflect the changes
        setData(data.filter(item => item.id !== id));
    } catch (error) {
        console.error('Error deleting data:', error);
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
                   <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                       <i class="bx bx-menu bx-sm"></i>
                   </a>
               </div>
               <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                   <ol class="breadcrumb breadcrumb-style2 mb-0">
                   <li><MdManageHistory  class="bx bx-user me-2"/></li>
<li class="breadcrumb-item " style={{padding: '2px 10px'}}>  Manage Star</li>
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
           <div class="content-wrapper">
               <div class="container-xxl flex-grow-1 container-p-y">
   <div class="row  justify-content-between">
<div class="col-md-2">
            <a href="/Staradd" class="fw-bold mb-4 btn btn-info"><IoMdAdd class="bx bx-plus-circle" /> Add New</a>
        </div>

{/* <div class="col-md-4">
            <div class="search-container">
        <input type="text" class="search-box form-control" id="searchText" placeholder="Search"/>
        <button class="search-button btn btn-info searchMainBtn" id="commonSearch"><FaSearch class="bx bx-search-alt-2" /></button>
    </div>
        </div> */}
</div>
   

   <div className='text-start card'>
       <h5 class="card-header">Manage Star</h5>
       <div class="table-responsive text-nowrap" id="resultData"><table class="table">
   <caption class="d-none">&nbsp;&nbsp; Result Data</caption>
   <thead className='text-start'>
       <tr class="text-nowrap">
           <th scope="col">Star Name</th>
           <th scope="col">Action</th>

       </tr>
   </thead>
   <tbody className='text-start'>
               
   {data.map(item => (
            <tr key={item.id}>
                <td>{item.name}</td>       
                <td><Link to={`/Staredit/id=${item.id}`} className='text-ed'><MdModeEdit class="bx bxs-edit"/> Edit</Link> /
                <Link to="#" onClick={() => handleDelete(item.id)} className='text-ed'> <MdDelete class="bx bxs-edit" />Delete</Link></td>
               </tr>
                ))}
              
               
         
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
                            <a href="" class="footer-link">© Copyright 2023-2024 By Aathesh Soft. All Rights Reserved.</a>
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

export default Star