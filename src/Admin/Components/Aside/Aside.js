import React, { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiLovers } from "react-icons/gi";
import { IoMdPhotos } from "react-icons/io";
import './Aside.css';
import '../Css/Themedefault.css';
import Logo from '../../Components/rgt-matrimony-logo.png';
import '../Css/Select.css';
import axios from 'axios';

const Aside = (props) => {
    //const { id } = useParams(); // Get the user id from URL params
    const [permissions, setPermissions] = useState(null); // State to store API permissions
    const [subMenuStates, setSubMenuStates] = useState({}); // State to manage submenu toggles

    // Function to toggle submenu for a specific menu item
    const toggleSubMenu = (menuItem) => {
        setSubMenuStates(prevState => ({
            ...prevState,
            [menuItem]: !prevState[menuItem] // Toggle the state for the given menu item
        }));
    };

    useEffect(() => {
        const userId = localStorage.getItem('userId'); // Get user ID from local storage
        //console.log(userId)
        if (userId) {
            const fetchPermissions = async () => {
                try {
                    const response = await axios.post('https://tulirmatrimony.com/controlapi/previlagelist.php', {id: userId });

                    //console.log("===========>"+id);

                    if (response.data.head.code === 200) {
                        setPermissions(response.data.body); // Set permissions if successful
                    } else {
                        console.error('Error fetching permissions:', response.data.head.msg);
                    }
                } catch (error) {
                    console.error('API error:', error);
                }
            };
            fetchPermissions();
        }
    }, []);

    // Fetch the permissions from the API based on user ID
    // useEffect(() => {
    //     const fetchPermissions = async () => {
    //         try {
    //             const response = await axios.post('https://tulirmatrimony.com/controlapi/previlagelist.php', { id: id });
    //             if (response.data.head.code === 200) {
    //                 setPermissions(response.data.body);
    //             } else {
    //                 console.error('Failed to fetch permissions:', response.data.head.msg);
    //             }
    //         } catch (error) {
    //             console.error('API error:', error);
    //         }
    //     };
    //     fetchPermissions();
    // }, [id]);

    // Render nothing if permissions have not been loaded yet
    if (!permissions) {
        return null;
    }

    return (
        <>
            {/* Menu */}
            <aside id="layout-menu" className={`layout-menu menu-vertical menu bg-menu-theme ${props.showMenu ? 'show' : ''}`}>
                <div className="app-brand demo mt-4">
                    <Link to="/" className="app-brand-link">
                        <img src={Logo} alt="Logo" className="w-100" />
                    </Link>
                </div>
                <div className="menu-inner-shadow"></div>
                <ul className="menu-inner mt-4 py-1">
                    {/* Dashboard */}
                    <li className="menu-item">
                        <NavLink to="/Dashboard" className="menu-link p-3 menu-toggle">
                            <MdDashboard className="menu-icon tf-icons bx bxs-dashboard" />
                            <div>Dashboard</div>
                        </NavLink>
                    </li>

                    {/* Banner */}
                    {permissions?.banner === "1" && (
                        <li className="menu-item">
                            <NavLink to="/Banner" className="menu-link p-3 menu-toggle">
                                <IoMdPhotos className="menu-icon tf-icons bx bxs-user-detail" />
                                <div>Banner</div>
                            </NavLink>
                        </li>
                    )}

                    {/* Content Management */}
                    {/* {permissions?.content === "1" && (
                        <li className={`menu-item ${subMenuStates['contactUs'] ? 'active open' : ''}`}>
                            <Link to="#" className="menu-link p-3 menu-toggle" onClick={() => toggleSubMenu('contactUs')}>
                                <RiContactsFill className="menu-icon tf-icons bx bxs-book-content" />
                                <div>Content Management</div>
                            </Link>
                            {subMenuStates['contactUs'] && (
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <NavLink to="/Aboutus" className="menu-link">
                                            <div>About Us</div>
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/Terms" className="menu-link">
                                            <div>Terms and Conditions</div>
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/PrivacyPolicy1" className="menu-link">
                                            <div>Privacy Policy</div>
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/ContactUs" className="menu-link">
                                            <div>Contact Us</div>
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                    )} */}

                    {/* Add New Details */}
                    {permissions?.add_new === "1" && (
                        <li className={`menu-item ${subMenuStates['newDetails'] ? 'active open' : ''}`}>
                            <Link to="#" className="menu-link p-3 menu-toggle" onClick={() => toggleSubMenu('newDetails')}>
                                <IoIosAddCircle className="menu-icon tf-icons bx bxs-add-to-queue" />
                                <div>Add New Details</div>
                            </Link>
                            {subMenuStates['newDetails'] && (
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <NavLink to="/Religion" className="menu-link">
                                            <div>Religion</div>
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/Caste" className="menu-link">
                                            <div>Caste</div>
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/Occupation" className="menu-link">
                                            <div>Occupation</div>
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/Education" className="menu-link">
                                            <div>Education</div>
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/Mothertongue" className="menu-link">
                                            <div>Mother Tongue</div>
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/Annualincome" className="menu-link">
                                            <div>Annual Income</div>
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/Star" className="menu-link">
                                            <div>Star</div>
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/Moonsign" className="menu-link">
                                            <div>Moonsign</div>
                                        </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/Location" className="menu-link">
                                            <div>Location</div>
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>
                    )}

                    {/* Member */}
                    <li className="menu-item">
                        <NavLink to="/Member" className="menu-link p-3 menu-toggle">
                            <IoPeople className="menu-icon tf-icons bx bxs-user-detail" />
                            <div>Member</div>
                        </NavLink>
                    </li>

                    {/* Membership Plan */}
                    {permissions?.membership_plan === "1" && (
                        <li className="menu-item">
                            <NavLink to="/Payment" className="menu-link p-3 menu-toggle">
                                <RiSecurePaymentFill className="menu-icon tf-icons bx bxs-credit-card-front" />
                                <div>Membership Plan</div>
                            </NavLink>
                        </li>
                    )}

                    {/* Success Stories */}
                    {permissions?.success_stories === "1" && (
                    <li className="menu-item">
                        <NavLink to="/Stories" className="menu-link p-3 menu-toggle">
                            <GiLovers className="menu-icon tf-icons bx bxs-book-alt" />
                            <div>Success Stories</div>
                        </NavLink>
                    </li>
                    )}

                </ul>
            </aside>
        </>
    );
};

export default Aside;
