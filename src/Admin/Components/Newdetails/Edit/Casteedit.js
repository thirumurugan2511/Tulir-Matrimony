import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Aside from '../../Aside/Aside';
import Smallicon from '../../../Components/heart-icon.png'
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Navbar from '../../Navbar/Navbar';
function Casteedit() {

    // const [isDropdownOpen, setDropdownOpen] = useState(false);

    // const toggleDropdown = () => {
    //   setDropdownOpen(!isDropdownOpen);
    // };
    const [dashboardData, setDashboardData] = useState({
      total_member: 0,
      male_member: 0,
      female_member: 0,
      paid_member: 0,
      notpaid_member: 0,
      expired_member: 0,
    });

    const { id } = useParams();
    const [religionId, setReligionId] = useState('');
    const [religionName, setReligionName] = useState('');
    const [casteName, setCasteName] = useState('');
    const [data, setData] = useState([]);
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        // Fetch data for the selected caste based on id
        fetch(`https://tulirmatrimony.com/controlapi/singlecaste.php?${id}`)
            .then(response => response.json())
            .then(data => {
                // Set the caste data to display in the form fields
                const casteData = data.body;
                setReligionId(casteData.religion_Id || '');
                setReligionName(casteData.religion_name || '');
                setCasteName(casteData.caste_name || '');
            })
            .catch(error => {
                console.error('Error fetching caste data:', error);
            });

        // Fetch religion list to populate the select dropdown
        fetch('https://tulirmatrimony.com/controlapi/religionlist.php')
            .then(response => response.json())
            .then(result => {
                setData(result.body);
            })
            .catch(error => {
                console.error('Error fetching religion data:', error);
            });
    }, [id]);

    const handleReligionChange = e => {
        const selectedReligionId = e.target.value;
        setReligionId(selectedReligionId);
        const selectedReligion = data.find(religion => religion.id === selectedReligionId);
        setReligionName(selectedReligion ? selectedReligion.name : '');
    };

    const handleCasteNameChange = e => {
        setCasteName(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            // Make PUT request to update caste data
            const requestBody = {
                id: id.slice(id.indexOf('=') + 1), // Extracting id from URL parameters
                religion_Id: religionId,
                religion_name: religionName,
                caste_name: casteName
            };
            const response = await fetch('https://tulirmatrimony.com/controlapi/editcaste.php', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            console.log(requestBody);
            console.log(response);
            if (response.ok) {
                // If request is successful, set success message and redirect
                setSuccessMsg('Record updated successfully.');
                setTimeout(() => {
                    window.location.href = '/Caste';
                }, 1000);
            } else {
                console.error('Failed to update caste data');
            }
        } catch (error) {
            console.error('Error updating caste data:', error);
        }
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
                                                <form id="addEditForm" name="addEditForm" onSubmit={handleSubmit}>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="religion_name">Religion Name <span className="Form__Error">*</span></label>
                                                        <select className="form-select" required aria-label="Default select example" value={religionId} onChange={handleReligionChange} name="religion_Id">
                                                            <option value="">Select Religion</option>
                                                            {data.map(religion => (
                                                                <option key={religion.id} value={religion.id}>{religion.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="caste_name">Caste Name <span className="Form__Error">*</span></label>
                                                        <input type="text" required className="form-control required" id="caste_name" name="caste_name" value={casteName} onChange={handleCasteNameChange} placeholder="Caste Name" />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary formSubmitBtn" id="formSubmitBtn">Submit</button>
                                                </form>
                                            </div>
                                            <div id="success-alert" className="alert m-4 alert-success" style={{ display: successMsg ? 'block' : 'none', backgroundColor: '#28a745', color: 'white' }} role="alert">
                                                {successMsg}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer className="content-footer footer bg-footer-theme">
                                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                                    <div className="mb-2 mb-md-0">
                                        <a href="#" className="footer-link fw-bolder">
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

export default Casteedit;
