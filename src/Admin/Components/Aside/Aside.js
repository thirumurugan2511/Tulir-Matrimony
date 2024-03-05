import React, { useState } from 'react';
import { Link } from "react-router-dom";
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

const Aside = () => {
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
            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                <div className="app-brand demo mt-4">
                    <Link to="https://gloriousmatrimonial.com/admin/dashboard" className="app-brand-link"> </Link>
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
                        <Link to="/Dashboard" className="menu-link p-3" onClick={() => setActiveMenuItem('dashboard')}>
                            <MdDashboard className="menu-icon tf-icons bx bxs-dashboard" />
                            <div data-i18n="Analytics">Dashboard</div>
                        </Link>
                    </li>
                    {/* Basic Site Settings */}
                    <li className={`menu-item ${activeMenuItem === 'siteSettings' ? 'active open' : ''}`}>
                        <Link to="/Sitesettings" className="menu-link p-3 menu-toggle" onClick={() => { toggleSubMenu('siteSettings'); }}>
                            <IoMdSettings className="menu-icon tf-icons bx bxs-cog" />
                            <div data-i18n="Site Settings">Site Settings</div>
                        </Link>
                    </li>
                    {/* Contact Us */}
                    <li className={`menu-item ${activeMenuItem === 'contactUs' ? 'active' : ''}`}>
                        <div className="menu-link p-3 menu-toggle" onClick={() => { toggleSubMenu('contactUs'); }}>
                            <RiContactsFill className="menu-icon tf-icons bx bxs-book-content" />
                            <div data-i18n="HomePageManagement">Contact Us</div>
                        </div>
                        {subMenuStates['contactUs'] && (
                            <ul className="menu-sub">
                                <li className="menu-item">
                                    <Link to="" className="menu-link ">
                                        <div data-i18n="Blank">Contact Us</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                        <div data-i18n="Blank">Inquiry Report</div>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* Add New Details */}
                    <li className={`menu-item ${activeMenuItem === 'newDetails' ? 'active open' : ''}`}>
                        <Link to="javascript:void(0);" className="menu-link p-3 menu-toggle" onClick={() => toggleSubMenu('newDetails')}>
                            <IoIosAddCircle className="menu-icon tf-icons bx bxs-add-to-queue" />
                            <div data-i18n="AddNewDetails">Add New Details</div>
                        </Link>
                        {subMenuStates['newDetails'] && (
                            <ul className="menu-sub">
                                <li className="menu-item ">
                                    <Link to="/Religion" className="menu-link">
                                        <div data-i18n="Without menu">மதம்</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Caste" className="menu-link ">
                                        <div data-i18n="Without menu">சாதி</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Occupation" className="menu-link ">
                                        <div data-i18n="Without menu">தொழில்</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Education" className="menu-link ">
                                        <div data-i18n="Without menu">கல்வி</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Mothertongue" className="menu-link ">
                                        <div data-i18n="Without menu">தாய் மொழி</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Annualincome" className="menu-link ">
                                        <div data-i18n="Without menu">ஆண்டு வருமானம்</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Star" className="menu-link ">
                                        <div data-i18n="Without menu">நட்சத்திரம்</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="/Moonsign" className="menu-link ">
                                        <div data-i18n="Without menu">ராசி</div>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* Member */}
                    <li className='menu-item'>
                        <Link to="/Member" className="menu-link p-3 menu-toggle" >
                            <IoPeople className="menu-icon tf-icons bx bxs-user-detail" />
                            <div data-i18n="Member">Member</div>
                        </Link>
                        {/* {subMenuStates['member'] && (
                            <ul className="menu-sub">
                                <li className="menu-item ">
                                    <Link to="" className="menu-link">
                                        <div data-i18n="Without menu">All Member</div>
                                    </Link>
                                </li>
                            </ul> 
                        )} */}
                    </li>
                    {/* Approval */}
                    <li className={`menu-item ${activeMenuItem === 'approval' ? 'active open' : ''}`}>
                        <Link to="javascript:void(0);" className="menu-link p-3 menu-toggle" onClick={() => toggleSubMenu('approval')}>
                            <FaCheckCircle className="menu-icon tf-icons bx bxs-photo-album" />
                            <div data-i18n="Approval">Approval</div>
                        </Link>
                        {subMenuStates['approval'] && (
                            <ul className="menu-sub">
                                <li className="menu-item ">
                                    <Link to="https://gloriousmatrimonial.com/admin/photo1" className="menu-link ">
                                        <div data-i18n="Without menu">Photo 1</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="https://gloriousmatrimonial.com/admin/photo2" className="menu-link ">
                                        <div data-i18n="Without menu">Photo 2</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="https://gloriousmatrimonial.com/admin/photo3" className="menu-link ">
                                        <div data-i18n="Without menu">Photo 3</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="https://gloriousmatrimonial.com/admin/photo4" className="menu-link ">
                                        <div data-i18n="Without menu">Photo 4</div>
                                    </Link>
                                </li>
                                <li className="menu-item ">
                                    <Link to="https://gloriousmatrimonial.com/admin/id-proof" className="menu-link ">
                                        <div data-i18n="Without menu">Id Proof</div>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    {/* MemberShip Plan */}
                    <li className='menu-item' >
                        <Link to="/Payment" className="menu-link p-3 menu-toggle" >
                            <RiSecurePaymentFill className="menu-icon tf-icons bx bxs-credit-card-front" />
                            <div data-i18n="MemberShipPlan">Membership Plan</div>
                        </Link>
                        {/* {subMenuStates['payment'] && (
                            <ul className="menu-sub">
                                <li className="menu-item ">
                                    <Link to="/" className="menu-link">
                                        <div data-i18n="Without menu">Membership Plan</div>
                                    </Link>
                                </li>
                            </ul>
                        )} */}
                    </li>
                    {/* Success Stories */}
                    <li className='menu-item'>
                        <Link to="/Stories" className="menu-link p-3 menu-toggle" >
                            <GiLovers className="menu-icon tf-icons bx bxs-book-alt" />
                            <div data-i18n="SuccessStory">Success Stories</div>
                        </Link>
                        {/* {subMenuStates['stories'] && (
                            <ul className="menu-sub">
                                <li className="menu-item ">
                                    <Link to="/Stories" className="menu-link">
                                        <div data-i18n="Without menu">Success Stories</div>
                                    </Link>
                                </li>
                            </ul>
                        )} */}
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default Aside;
