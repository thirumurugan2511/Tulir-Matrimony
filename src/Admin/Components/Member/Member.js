import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdManageHistory, MdPostAdd, MdModeEdit, MdDelete } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { FaEye, FaSearch } from "react-icons/fa";
import { IoMdSettings, IoMdAdd } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import Aside from '../Aside/Aside';
import Smallicon from '../../Components/heart-icon.png';
import Lady from './lady.jpg';
import Men from './men.jpg';

const Member = () => {
    const [data, setData] = useState([]);
    const [plans, setPlans] = useState([]);
    const [selectedPlans, setSelectedPlans] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                 //('https://tulirmatrimony.com/controlapi/customerlist.php');
                 //http://localhost:8000/data/memlist
                const response = await fetch('https://tulirmatrimony.com/controlapi/customerlist.php');
                const result = await response.json();
                console.log(result);
                setData(result.body);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
            setData(data.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Aside />
                    <div className="layout-page">
                        <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                <Link className="nav-item nav-link px-0 me-xl-4" to="javascript:void(0)">
                                    <i className="bx bx-menu bx-sm"></i>
                                </Link>
                            </div>
                            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                <ol className="breadcrumb breadcrumb-style2 mb-0">
                                    <li><MdManageHistory className="bx bx-user me-2" /></li>
                                    <li className="breadcrumb-item" style={{ padding: '2px 10px', backgroundColor: 'white' }}>Manage Member</li>
                                </ol>
                                <ul className="navbar-nav flex-row align-items-center ms-auto">
                                    <li className="nav-item lh-1 me-3">
                                        <GrUserAdmin className="bx bx-user me-2" /><span className="align-middle">Administrator</span>
                                    </li>
                                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                        <Link className="nav-link dropdown-toggle hide-arrow" to="javascript:void(0);" data-bs-toggle="dropdown">
                                            <div className="avatar avatar-online">
                                                <img src={Smallicon} alt className="w-px-40 h-auto rounded-circle" />
                                            </div>
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar avatar-online">
                                                                <img src={Smallicon} alt="" className="w-px-40 h-auto rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <span className="fw-semibold d-block mt-2">Admin</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/Sitesettings">
                                                    <IoMdSettings className="bx bx-cog me-2" />
                                                    <span className="align-middle">Settings</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/Signin">
                                                    <LuLogOut className="bx bx-power-off me-2" />
                                                    <span className="align-middle">Log Out</span>
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
                                    <div className="col-md-2">
                                        <Link to="/Addusers" className="fw-bold mb-4 btn btn-info"><IoMdAdd className="bx bx-plus-circle" /> Add New</Link>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="search-container">
                                            <input type="text" className="search-box form-control" id="searchText" placeholder="Search" />
                                            <button className="search-button btn btn-info searchMainBtn" id="commonSearch"><FaSearch className="bx bx-search-alt-2" /></button>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-5 text-end mt-1">
                                        <label>Display Rows : </label>
                                    </div> */}
                                    {/* <div className="col-md-1">
                                        <select name="basic-datatables_length" id="recordLimit" aria-controls="basic-datatables" className="form-select">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="5">5</option>
                                            <option selected value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                    </div> */}
                                </div>

                                <div className="card">
                                    <h5 className="card-header">Manage Member List</h5>
                                    <div className="table-responsive text-nowrap" id="resultData">
                                        <table className="table">
                                            <caption className="d-none">&nbsp;&nbsp; Result Data</caption>
                                            <thead>
                                                <tr className="text-nowrap">
                                                    <th scope="col">Reg ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Images</th>
                                                    <th scope="col">Plan Name</th>
                                                    {/* <th scope="col">Status</th> */}
                                                    <th scope="col">View</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {paginatedData.map(item => (
                                                    <tr key={item.id}>
                                                        <td>{item.reg_id}</td>
                                                        <td>{item.name}</td>
                                                        <td><img src={`data:image/jpeg;base64,${item.image}`} height={50} width={50} alt="User Profile" className="w-px-40 rounded-circle" /></td>
                                                        <td>{item.plan_name}</td>
                                                        {/* <td className='txt-success'>{item.plan_status}</td> */}
                                                        <td><Link to={`/Viewmember/${item.id}`}><FaEye className="bx bxs-edit" /></Link></td>
                                                        <td><Link to={`/Edituser/${item.id}`}><MdModeEdit className="bx bxs-edit" /> Edit</Link> /
                                                            <Link to="#" onClick={() => handleDelete(item.id)} className='text-ed'> <MdDelete className="bx bxs-edit" />Delete</Link></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className=''>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination mx-auto justify-content-center text-center">
                                            <li className="page-item"><button className="page-link" onClick={handlePreviousPage}>Previous</button></li>
                                            {[...Array(totalPages)].map((_, index) => (
                                                <li className="page-item" key={index}><button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button></li>
                                            ))}
                                            <li className="page-item"><button className="page-link" onClick={handleNextPage}>Next</button></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <footer className="content-footer footer bg-footer-theme">
                                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                                    <div className="mb-2 mb-md-0">
                                        <Link to="https://gloriousmatrimonial.com/admin/dashboard" className="footer-link">© Copyright 2023-2024 By Aathesh Soft. All Rights Reserved.</Link>
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

export default Member;
