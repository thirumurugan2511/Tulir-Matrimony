import React, { useState, useEffect } from 'react';
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Aside from '../Aside/Aside';
import { Link } from 'react-router-dom';
import Smallicon from '../../Components/heart-icon.png';
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import Navbar from '../Navbar/Navbar';


const Aboutus = () => {
   // const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [title, setTitle] = useState('About Us');
    const [description, setDescription] = useState('');
    const [contentList, setContentList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    //const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    useEffect(() => {
        fetchContentList();
    }, []);

    const fetchContentList = async () => {
        try {
            const response = await fetch('https://tulirmatrimony.com/controlapi/contentlist.php');
            const result = await response.json();
            setContentList(result.body);
        } catch (error) {
            console.error('Error fetching content list:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { name: title, description };

        try {
            const response = await fetch('https://tulirmatrimony.com/controlapi/addcontent.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const result = await response.json();
            alert(result.message);
            fetchContentList(); // Refresh the table
        } catch (error) {
            console.error('Error adding content:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this content?')) {
            try {
                const response = await fetch('https://tulirmatrimony.com/controlapi/deletecontent.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id }),
                });
                const result = await response.json();
                alert(result.message);
                fetchContentList(); // Refresh the table
            } catch (error) {
                console.error('Error deleting content:', error);
            }
        }
    };

    const handleEdit = (item) => {
        setIsEditing(true);
        setEditId(item.id);
        setTitle(item.name);
        setDescription(item.description);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const payload = { id: editId, name: title, description };

        try {
            const response = await fetch('https://tulirmatrimony.com/controlapi/editcontent.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            const result = await response.json();
            alert(result.message);
            fetchContentList(); // Refresh the table
            setIsEditing(false);
            setEditId(null);
            setTitle('About Us');
            setDescription('');
        } catch (error) {
            console.error('Error updating content:', error);
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
                                                <form onSubmit={isEditing ? handleUpdate : handleSubmit} id="addEditForm" name="addEditForm" method="POST">
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="bridename">Title Name</label>
                                                        <select
                                                            className="form-control"
                                                            id="bridename"
                                                            name="bridename"
                                                            value={title}
                                                            onChange={(e) => setTitle(e.target.value)}>
                                                            <option value="About Us">About Us</option>
                                                            <option value="Privacy Policy">Privacy Policy</option>
                                                            <option value="Terms and Conditions">Terms and Conditions</option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-3 text-start">
                                                        <label className="form-label" htmlFor="successmessage">About Content</label>
                                                        <textarea
                                                            id="successmessage"
                                                            name="successmessage"
                                                            className="form-control"
                                                            placeholder="Content Description"
                                                            value={description}
                                                            onChange={(e) => setDescription(e.target.value)}
                                                        ></textarea>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">
                                                        {isEditing ? 'Update' : 'Submit'}
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Table to display content */}
                                <div className="row">
                                    <div className="col-xl">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Title</th>
                                                            <th>Description</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {contentList.map((item) => (
                                                            <tr key={item.id}>
                                                                <td>{item.name}</td>
                                                                <td>{item.description}</td>
                                                                <td>
                                                                    <button
                                                                        className="btn btn-primary"
                                                                        onClick={() => handleEdit(item)}>
                                                                        Edit
                                                                    </button>
                                                                    <button
                                                                        className="btn btn-danger"
                                                                        onClick={() => handleDelete(item.id)}>
                                                                        Delete
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="content-footer footer bg-footer-theme text-center">
                            <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                                <div className="mb-2 mb-md-0">
                                    <Link to="" className="footer-link text-center">© Copyright 2023-2024 By Aathesh Soft. All Rights Reserved.</Link>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Aboutus;
