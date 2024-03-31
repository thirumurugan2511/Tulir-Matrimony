import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiLovers } from "react-icons/gi";
import './Aside2.css';
import '../Css/Themedefault.css';
import Logo from '../../Components/rgt-matrimony-logo.png';
import '../Css/Select.css';
import { IoMdPhotos } from "react-icons/io";

const Aside2 = (props) => {
    const [showMenu, setShowMenu] = useState(false); // State to manage menu visibility

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            {/* Menu */}
            <aside id="layout-menu" className={`layout-menu menu-vertical menu bg-menu-theme ${showMenu ? 'show' : ''}`}>
                <div className="app-brand demo mt-4">
                    <Link to="" className="app-brand-link"> </Link>
                    <img src={Logo} alt className="w-100" />
                    {/* <h4 className='logo-text'>RTS Matrimony</h4> */}
                    <Link to="" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none" onClick={toggleMenu}>
                        <i className={`bx ${showMenu ? 'bx-chevron-left' : 'bx-chevron-right'} bx-sm align-middle`}></i>
                    </Link>
                </div>
                <div className="menu-inner-shadow"></div>
                <ul className="menu-inner mt-4 py-1">
                    {/* Dashboard */}
                    <li className="menu-item">
                        <NavLink to="/Dashboard" className="menu-link p-3">
                            <MdDashboard className="menu-icon tf-icons bx bxs-dashboard" />
                            <div data-i18n="Analytics">Dashboard</div>
                        </NavLink>
                    </li>

                    <li className="menu-item">
                        <NavLink to="/Banner" className="menu-link p-3">
                            <IoMdPhotos className="menu-icon tf-icons bx bxs-user-detail" />
                            <div data-i18n="Member">Banner</div>
                        </NavLink>
                    </li>

                    {/* Contact Us */}
                    <li className="menu-item">
                        <Link to="" className="menu-link p-3">
                            <RiContactsFill className="menu-icon tf-icons bx bxs-book-content" />
                            <div data-i18n="ContentManagement">Content Management</div>
                        </Link>
                    </li>

                    {/* Add New Details */}
                    <li className="menu-item">
                        <Link to="" className="menu-link p-3">
                            <IoIosAddCircle className="menu-icon tf-icons bx bxs-add-to-queue" />
                            <div data-i18n="AddNewDetails">Add New Details</div>
                        </Link>
                    </li>

                    {/* Member */}
                    <li className="menu-item">
                        <NavLink to="/Member" className="menu-link p-3">
                            <IoPeople className="menu-icon tf-icons bx bxs-user-detail" />
                            <div data-i18n="Member">Member</div>
                        </NavLink>
                    </li>

                    {/* MemberShip Plan */}
                    <li className="menu-item">
                        <NavLink to="/Payment" className="menu-link p-3">
                            <RiSecurePaymentFill className="menu-icon tf-icons bx bxs-credit-card-front" />
                            <div data-i18n="MemberShipPlan">Membership Plan</div>
                        </NavLink>
                    </li>

                    {/* Success Stories */}
                    <li className="menu-item">
                        <NavLink to="/Stories" className="menu-link p-3">
                            <GiLovers className="menu-icon tf-icons bx bxs-book-alt" />
                            <div data-i18n="SuccessStory">Success Stories</div>
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default Aside2;
