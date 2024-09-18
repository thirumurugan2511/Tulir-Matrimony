import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Aside from '../../Aside/Aside';
import { LuLogOut } from "react-icons/lu";
import {Link} from 'react-router-dom'
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import Smallicon from '../../rgt-matrimony-logo.png';
import Navbar from '../../Navbar/Navbar';
function Staredit() {

//     const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };
  const [dashboardData, setDashboardData] = useState({
    total_member: 0,
    male_member: 0,
    female_member: 0,
    paid_member: 0,
    notpaid_member: 0,
    expired_member: 0,
  });
  
    const { id } = useParams();
    const [starData, setStardata] = useState({});
    const [formData, setFormData] = useState({
        star_name: '',
    });
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        fetch(`https://tulirmatrimony.com/controlapi/singlestar.php?${id}`)
            .then(response => response.json())
            .then(data => {
                setStardata(data.body);
                setFormData({
                    star_name: data.body.name || '',
                });
            })
            .catch(error => {
                console.error('Error fetching star data:', error);
            });
    }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e, id) => {
        e.preventDefault();

        // Extracting id from URL parameters
        const idValue = id.slice(id.indexOf('=') + 1);

        // Creating requestData object with the desired format
        const requestData = {
            id: idValue,
            name: formData.star_name // Assuming formData.star_name contains the name
        };
        const data = JSON.stringify(requestData);
        console.log(data);
//https://tulirmatrimony.com/controlapi/editstar.php
//http://localhost:8000/controlapi/editstar
        fetch('https://tulirmatrimony.com/controlapi/editstar.php', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data updated successfully:', data);
            setSuccessMsg('Record updated successfully.');
            setTimeout(() => {
                window.location.href = '/Star';
            }, 1000);
        })
        .catch(error => {
            console.error('Error updating star data:', error);
        });
    };
    


    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Aside />
                    <div className="layout-page">
                    <Navbar />
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    <div className="col-xl">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <form id="addEditForm" name="addEditForm" onSubmit={(e) => handleSubmit(e, id)}>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="star_name">
                                                            Star Name <span className="Form__Error">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control required"
                                                            id="star_name"
                                                            value={formData.star_name}
                                                            name="star_name"
                                                            onChange={handleChange}
                                                            placeholder="Star Name"
                                                        />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary formSubmitBtn" id="formSubmitBtn">
                                                        Update
                                                    </button>
                                                </form>
                                                {successMsg && (
                                                    <div className="alert alert-success" role="alert">
                                                        {successMsg}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="content-footer footer bg-footer-theme">
                                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                                    <div className="mb-2 mb-md-0">
                                        <a href="https://gloriousmatrimonial.com/admin/dashboard" className="footer-link fw-bolder">
                                            © Copyright 2023-2024 By Aathesh soft. All Rights Reserved.
                                        </a>
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

export default Staredit;
