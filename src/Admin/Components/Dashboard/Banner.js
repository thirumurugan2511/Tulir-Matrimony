import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aside from '../Aside/Aside';
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import axios from 'axios';
import { LuLogOut } from "react-icons/lu";
import Smallicon from '../../Components/heart-icon.png';

const Banner = () => {
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
    const [image, setImage] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [bannerList, setBannerList] = useState([]);
  
    useEffect(() => {
      fetchBannerList();
    }, []);
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    };
    const handleDelete = async (id) => {
        try {
            await fetch(`https://tulirmatrimony.com/controlapi/deletebanner.php`, {
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
  
    const uploadImage = async () => {
      try {
        const response = await axios.post('https://tulirmatrimony.com/controlapi/addbanner.php', {
          image: image,
        });
        setImageUrl(response.data.imageUrl);
        fetchBannerList(); // Refresh banner list after successful upload
      } catch (error) {
        setErrorMessage('Error uploading image');
        console.error('Error uploading image', error);
      }
    };
  
    const fetchBannerList = async () => {
      try {
        const response = await axios.get('https://tulirmatrimony.com/controlapi/bannerlist.php');
        setBannerList(response.data.body); // Set bannerList to response.data.body
      } catch (error) {
        console.error('Error fetching banner list', error);
      }
    };
    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Aside />
                    <div className="layout-page">
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
                   <li class="breadcrumb-item " style={{padding: '2px 10px'}}>  Manage Banner </li>
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
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row justify-content-between">
                                    <div className="mb-3 text-start">
                                        <label className="form-label" htmlFor="weddingphoto">Upload Your Banner Photo <span className="Form__Error">*</span></label>
                                        {/* <input
                                            required
                                            name="image"
                                            className="form-control required"
                                            placeholder="Upload Your Banner Photo"
                                            type="file"
                                            id="image"
                                            onChange={handleFileChange}
                                        /> */}
                                        {/* <button className="btn btn-primary mt-3" onClick={handleSubmit}>Upload Banner</button> */}

                                        <input type="file" className="form-control required" placeholder="Upload Your Banner Photo" onChange={handleImageChange} />
                                            <button className="btn btn-primary mt-3" onClick={uploadImage}>Upload Image</button>
                                            {imageUrl && (
                                                <div>
                                                <h2>Uploaded Image:</h2>
                                                <img src={imageUrl} alt="Uploaded" />
                                                </div>
                                            )}
                                    </div>
                                </div>
                                <div className="card">
                                    <h5 className="card-header">Banner</h5>
                                    <div className="table-responsive text-nowrap" id="resultData">
                                        <table className="table">
                                            {/* Table content */}
                                            <thead>
                                                <tr className="text-nowrap">
                                                    <th scope="col">Banner Photo</th>
                                                    <th scope="col">Banner Active</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                            {bannerList.map((banner) => (
                                                <tr key={banner.id}>
                                                    <td>
                                                    <img src={banner.image} alt={`Banner ${banner.id}`} style={{ width: '200px', height: '100px' }} />
                                                    </td>
                                                    <td><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                                                    <td>
                                                        <Link to="#" onClick={() => handleDelete(banner.id)} className='text-ed'> <MdDelete class="bx bxs-edit" />Delete</Link></td>
                                                </tr>
                                                ))}

                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <footer className="content-footer footer bg-footer-theme">
                                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                                    <div className="mb-2 mb-md-0">
                                        <Link to="" className="footer-link">© Copyright 2023-2024 By Aathesh Soft. All Rights Reserved.</Link>
                                    </div>
                                </div>
                            </footer>
                            <div className="content-backdrop fade"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
