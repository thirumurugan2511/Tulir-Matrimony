import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Aside from '../../Aside/Aside';
import Smallicon from '../../../Components/heart-icon.png';
import { IoMdSettings } from 'react-icons/io';
import { LuLogOut } from 'react-icons/lu';
import { MdManageHistory } from 'react-icons/md';
import { GrUserAdmin } from 'react-icons/gr';

function ReligionEdit() {
    const { id } = useParams();
    const [religionData, setReligionData] = useState({});
    const [formData, setFormData] = useState({
        religion_name: '',
    });
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        fetch(`https://tulirmatrimony.com/controlapi/singleuser.php?id=${id}`)
            .then(response => response.json())
            .then(data => {
                setReligionData(data.body); // Extracting the body from the response
                setFormData({
                    religion_name: data.body.name || '', // Accessing the 'name' property from the body
                });
            })
            .catch(error => {
                console.error('Error fetching religion data:', error);
            });
    }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const requestData = {
            id: id,
            religion_name: formData.religion_name,
        };

        fetch('https://tulirmatrimony.com/controlapi/editreligion.php', {
            method: 'POST',
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
                    window.location.href = '/Religion';
                }, 1000);
            })
            .catch(error => {
                console.error('Error updating religion data:', error);
            });
    };

    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Aside />
                    <div className="layout-page">
                        {/* Navbar code here */}
                        <div className="content-wrapper">
                            <div className="container-xxl flex-grow-1 container-p-y">
                                <div className="row">
                                    <div className="col-xl">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <form id="addEditForm" name="addEditForm" onSubmit={handleSubmit}>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="religion_name">
                                                            Religion Name <span className="Form__Error">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control required"
                                                            id="religion_name"
                                                            value={formData.religion_name}
                                                            name="religion_name"
                                                            onChange={handleChange}
                                                            placeholder="Religion Name"
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

export default ReligionEdit;
