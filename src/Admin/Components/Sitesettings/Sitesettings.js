import React, { useState, useEffect } from 'react';
import Aside from '../Aside/Aside'
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import Smallicon from '../../Components/heart-icon.png'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const Sitesettings = () => {

   

    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tulirmatrimony.com/controlapi/listuser.php');
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
        await fetch(`https://tulirmatrimony.com/controlapi/deleteuser.php`, {
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


  const [formData, setFormData] = useState({
username:"",
password:"",
email:"",
description:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    
   
    fetch('https://tulirmatrimony.com/controlapi/adduser.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
      
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); // handle response from the server
      // Reset form fields after successful submission if needed
      setFormData({
        username: '',
        password: '',
        email: '',
        description: ''
      });
      const successAlert = document.getElementById('success-alert');
      successAlert.style.display = 'block';

      // Hide success message after 5 seconds
      setTimeout(() => {
        successAlert.style.display = 'none';
      }, 5000);
    })
    
    .catch(error => {
      console.error('Error:', error);
    });
  };



    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
  return (
    <>
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
                                {/* <li>
                                    <a class="dropdown-item" target="_blank" href="https://gloriousmatrimonial.com" rel="noopener">
                                        <i class="bx bx-slideshow me-2"></i>
                                        <span class="align-middle">Front End</span>
                                    </a>
                                </li> */}
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
                    <form id="addEditForm" name="addEditForm" onSubmit={handleSubmit} method="POST" enctype="multipart/form-data">
                        <input type="hidden" name="_token" value="xsRbVQIcWzUtaB16B9EQu0T5IiltWdJYP6iUnE2Q"/>                        
                        
                        <div class="mb-3 text-start">

                                        <label class="form-label" for="user_name">Username <span class="Form__Error">*</span></label>

                                        <input type="text" required class="form-control required" id="user_name" name="username" value={formData.username} onChange={handleChange} placeholder="User Name" />

                                    </div>
                                    <div class="mb-3 text-start">

                                        <label class="form-label" for="password">Password <span class="Form__Error">*</span></label>

                                        <input type="password" required="" class="form-control required" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />

                                    </div>
                                    <div class="mb-3 text-start">

<label class="form-label" for="email">Email ID <span class="Form__Error">*</span></label>

<input type="text" required="" class="form-control required" id="religionemail_name" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />

</div>
<div class="mb-3 text-start">

<label class="form-label" for="desc">Description <span class="Form__Error">*</span></label>

<input type="text" required="" class="form-control required" id="desc" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />

</div>
                                    
                                    <input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.religion.index"/><input type="hidden" name="mode" id="mode" value="add"/>                        <button type="submit" class="btn btn-primary formSubmitBtn" id="formSubmitBtn">Submit</button>
                    </form>
                </div>
                <div id="success-alert" className="m-4 alert alert-success" style={{ display: 'none', backgroundColor: '#28a745', color:'white' }} role="alert">
    Record added successfully.
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
           <th scope="col">Email</th>
           
           <th scope="col">Description</th>
           <th scope="col">Action</th>
       </tr>
   </thead>
   <tbody className='text-start'>
               
   {data.map(item => (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.description}</td>
               <td><Link to={`/Sitesettingsedit/${item.id}`}  className='text-ed'><MdModeEdit class="bx bxs-edit"/> Edit</Link> /
               <Link to="#" onClick={() => handleDelete(item.id)} className='text-ed'> <MdDelete class="bx bxs-edit" />Delete</Link></td>
</tr>

          ))}
               
         
           </tbody>
</table>
</div>
   </div>
</div>
<footer class="content-footer footer bg-footer-theme">
                    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                        <div class="mb-2 mb-md-0">
                            <a href="https://gloriousmatrimonial.com/admin/dashboard" class="footer-link">© Copyright 2023-2024 By Aathesh Soft. All Rights Reserved.</a>
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

export default Sitesettings