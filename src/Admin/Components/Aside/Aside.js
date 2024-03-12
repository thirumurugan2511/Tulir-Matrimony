import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { MdDashboard  } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { IoPeople } from "react-icons/io5" 
import { FaCheckCircle } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiLovers } from "react-icons/gi";
import './Aside.css';
import '../Css/Themedefault.css';
import Logo from '../../Components/rgt-matrimony-logo.png'
import '../Css/Select.css';
import { IoMdPhotos } from "react-icons/io";


const Aside = (props) => {
    const [activeMenuItem, setActiveMenuItem] = useState(null); // State to manage active menu item
    const [subMenuStates, setSubMenuStates] = useState({}); // State to manage submenu toggles

    // Function to toggle submenu for a specific menu item
    const toggleSubMenu = (menuItem) => {
        setSubMenuStates(prevState => ({
            ...prevState,
            [menuItem]: !prevState[menuItem] // Toggle the state for the given menu item
        }));
    
    };

    return (
        <>
            {/* Menu */}
            <aside id="layout-menu" className={`layout-menu menu-vertical menu bg-menu-theme ${props.showMenu ? 'show' : ''}`}>                <div className="app-brand demo mt-4">
                    <Link to="" className="app-brand-link"> </Link>
                    <img src={Logo} alt className="w-100" /> 
                    {/* <h4 className='logo-text'>RTS Matrimony</h4> */}
                    <Link to="javascript:void(0);"
                        className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i className="bx bx-chevron-left bx-sm align-middle"></i>
                    </Link>
                </div>
                <div className="menu-inner-shadow"></div>
                <ul className="menu-inner mt-4 py-1">
                    {/* Dashboard */}
                    <li className={`menu-item ${activeMenuItem === 'dashboard' ? 'active open' : ''}`}>
                        <NavLink to="/Dashboard" className="menu-link p-3 menu-toggle" onClick={() => toggleSubMenu('dashboard')}>
                            <MdDashboard className="menu-icon tf-icons bx bxs-dashboard" />
                            <div data-i18n="Analytics">Dashboard</div>
                        </NavLink>
                    </li>

                    <li className='menu-item'>
                        <NavLink to="/Banner" className="menu-link p-3 menu-toggle" >
                            <IoMdPhotos className="menu-icon tf-icons bx bxs-user-detail" />
                            <div data-i18n="Member">Banner</div>
                        </NavLink>
                    </li>
                   
                    {/* Contact Us */}
                    <li className={`menu-item ${activeMenuItem === 'contactUs' ? 'active' : ''}`}>
                        <Link to='' className="menu-link p-3 menu-toggle" onClick={() => { toggleSubMenu('contactUs'); }}>
                            <RiContactsFill className="menu-icon tf-icons bx bxs-book-content" />
                            <div data-i18n="ContentManagement">Content Management</div>
                        </Link>
                        {subMenuStates['contactUs'] && (
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <NavLink to="/Aboutus" className="menu-link ">
                                        <div data-i18n="Blank">About Us</div>
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                        <div data-i18n="Blank">Terms and Conditions</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                        <div data-i18n="Blank">Privacy Policy</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                        <div data-i18n="Blank">Contact Us</div>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* Add New Details */}
                    <li className={`menu-item ${activeMenuItem === 'newDetails' ? 'active open' : ''}`}>
                        <Link to="" className="menu-link p-3 menu-toggle" onClick={() => toggleSubMenu('newDetails')}>
                            <IoIosAddCircle className="menu-icon tf-icons bx bxs-add-to-queue" />
                            <div data-i18n="AddNewDetails">Add New Details</div>
                        </Link>
                        {subMenuStates['newDetails'] && (
                            <ul className="menu-sub">
                                <li className="menu-item ">
                                    <Link to="/Religion" className="menu-link">
                                        <div data-i18n="Without menu">Religion</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Caste" className="menu-link ">
                                        <div data-i18n="Without menu">Caste</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Occupation" className="menu-link ">
                                        <div data-i18n="Without menu">Occupation</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Education" className="menu-link ">
                                        <div data-i18n="Without menu">Education</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Mothertongue" className="menu-link ">
                                        <div data-i18n="Without menu">Mother Tongue</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Annualincome" className="menu-link ">
                                        <div data-i18n="Without menu">Annual Income </div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Star" className="menu-link ">
                                        <div data-i18n="Without menu">Star</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Moonsign" className="menu-link ">
                                        <div data-i18n="Without menu">Moonsign</div>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* Member */}
                    <li className='menu-item'>
                        <NavLink to="/Member" className="menu-link p-3 menu-toggle" >
                            <IoPeople className="menu-icon tf-icons bx bxs-user-detail" />
                            <div data-i18n="Member">Member</div>
                        </NavLink>
                    </li>
                    {/* Approval */}
          
                    {/* MemberShip Plan */}
                    <li className='menu-item' >
                        <NavLink to="/Payment" className="menu-link p-3 menu-toggle" >
                            <RiSecurePaymentFill className="menu-icon tf-icons bx bxs-credit-card-front" />
                            <div data-i18n="MemberShipPlan">Membership Plan</div>
                        </NavLink>
                      
                    </li>
                    {/* Success Stories */}
                    <li className='menu-item'>
                        <NavLink to="/Stories" className="menu-link p-3 menu-toggle" >
                            <GiLovers className="menu-icon tf-icons bx bxs-book-alt" />
                            <div data-i18n="SuccessStory">Success Stories</div>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default Aside;
