import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { MdPostAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Aside from '../Aside/Aside';
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Smallicon from '../../Components/heart-icon.png'
import Lady from './lady.jpg'
import Men from './men.jpg'

const Member = () => {
        const [data, setData] = useState([]);
        const [plans, setPlans] = useState([]);
        const [selectedPlans, setSelectedPlans] = useState({});



        //('https://tulirmatrimony.com/controlapi/customerlist.php');
        //http://localhost:8000/data/memlist


        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch('https://tulirmatrimony.com/controlapi/customerlist.php');
              const result = await response.json();
              console.log(result)
              setData(result.body);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
      }, []);
    //    http:localhost:8000/data/memlist
      useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch('https://tulirmatrimony.com/controlapi/planlist.php');
                const result = await response.json();
                setPlans(result.body);
            } catch (error) {
                console.error('Error fetching plans:', error);
            }
        };

        fetchPlans();
    }, []);
     
    const handlePlanChange = (userId, e) => {
        const newSelectedPlans = { ...selectedPlans, [userId]: e.target.value };
        setSelectedPlans(newSelectedPlans);
    };
  
    
      const handleDelete = async (id) => {
        try {
            await fetch(`https://tulirmatrimony.com/controlapi/deletecustomer.php`, {
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
                    <Link class="nav-item nav-link px-0 me-xl-4" to="javascript:void(0)">
                        <i class="bx bx-menu bx-sm"></i>
                    </Link>
                </div>
                <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <ol class="breadcrumb breadcrumb-style2 mb-0">
                    <li><MdManageHistory  class="bx bx-user me-2"/></li>
      <li class="breadcrumb-item" style={{padding: '2px 10px', backgroundcolor: 'white'}}>  Manage Member </li>
                    </ol>
                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                        <li class="nav-item lh-1 me-3">
                        <GrUserAdmin class="bx bx-user me-2" /><span class="align-middle">Administrator</span>
                                                    </li>
                                                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                            <Link class="nav-link dropdown-toggle hide-arrow" to="javascript:void(0);"
                                data-bs-toggle="dropdown">
                                <div class="avatar avatar-online">
                                    <img src={Smallicon} alt class="w-px-40 h-auto rounded-circle" />
                                </div>
                            </Link>
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
        
                    {/* <!-- Toast with Placements --> */}
                    <div class="row  justify-content-between">
                         <div class="col-md-2">
                            <Link to="/Addusers"  class="fw-bold mb-4 btn btn-info"><IoMdAdd class="bx bx-plus-circle" /> Add New</Link>
                        </div>
                        <div class="col-md-4">
                            <div class="search-container">
                                <input type="text" class="search-box form-control" id="searchText" placeholder="Search"/>
                                <button class="search-button btn btn-info searchMainBtn" id="commonSearch"><FaSearch class="bx bx-search-alt-2" /></button>
                            </div>
                        </div>
                        <div class="col-md-5 text-end mt-1">
                            <label>Display Rows : </label> 
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
   

    {/* <!-- Basic Layout --> */}
    <div class="card">
        <h5 class="card-header">Manage Member List</h5>
        <div class="table-responsive text-nowrap" id="resultData">
            <table class="table">
    <caption class="d-none">&nbsp;&nbsp; Result Data</caption>
    <thead>
        <tr class="text-nowrap">
        <th scope="col">Reg ID</th>
        <th scope="col">Name</th> 
        <th scope="col">Images</th>         
        <th scope="col">Plan Name</th>
        <th scope="col">Status</th>
        <th scope="col">View</th>
        <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
           
    {data.map(item => (
        <tr key={item.id}>
            <td>{item.reg_id}</td>
            <td>{item.name}</td>
            <td><img src={`data:image/jpeg;base64,${item.image}`} height={50} width={50} alt="User Profile" className="w-px-40 rounded-circle" /></td>
            <td> {item.plan_name}
            {/* <select className='form-select' value={selectedPlans[item.id] || ''} onChange={(e) => handlePlanChange(item.id, e)}>
                    <option value="">Select Plan</option>
                    {plans.map(plan => (
                        <option key={plan.id} value={plan.id}>{plan.name}</option>
                    ))}
                </select> */}
            </td>
            <td className='txt-success'>{item.plan_status}</td>
            <td><Link to={`/Viewmember/${item.id}`}><FaEye  class="bx bxs-edit"/></Link></td>
            
            <td><Link to={`/Edituser/${item.id}`}><MdModeEdit class="bx bxs-edit"/> Edit</Link> /
            <Link to="#" onClick={() => handleDelete(item.id)} className='text-ed'> <MdDelete class="bx bxs-edit" />Delete</Link></td>
               </tr>
                ))}   
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
                            <Link to="https://gloriousmatrimonial.com/admin/dashboard" class="footer-link ">© Copyright 2023-2024 By Aathesh Soft. All Rights Reserved.</Link>
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

export default Member