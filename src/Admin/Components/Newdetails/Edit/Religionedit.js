import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Aside from '../../Aside/Aside';
import axios from 'axios';

function Religionedit() {
    const { id } = useParams();
    const [religionData, setReligionData] = useState({});
    const [formData, setFormData] = useState({
        religion_name: '',
    });
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/controlapi/singlereligion?${id}`);
                const data = response.data;
                if (data.data.head.code === 600) {
                    console.error('Data does not exist:', data.data.head.msg);
                } else {
                    setReligionData(data.data.body);
                    setFormData({
                        religion_name: data.data.body.name || '',
                    });
                }
            } catch (error) {
                console.error('Error fetching religion data:', error);
            }
        };

        fetchData();
    }, []);
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
            "id": id,
            "name": formData.religion_name
        };
    
        axios.put('http://localhost:8000/controlapi/editreligion', requestData)
            .then(response => {
                if (response.data.head.code === 200) {
                    setSuccessMsg('Record updated successfully.');
                } else {
                    setErrorMsg('Failed to update record.');
                }
            })
            .catch(error => {
                console.error('Error updating religion data:', error);
                setErrorMsg('Failed to update record.');
            });
    };

    return (
        <>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <Aside />
                    <div className="layout-page">
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
                                                {errorMsg && (
                                                    <div className="alert alert-danger" role="alert">
                                                        {errorMsg}
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

export default Religionedit;
