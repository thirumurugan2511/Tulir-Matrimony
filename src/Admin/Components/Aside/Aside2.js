import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Aside.css';
import '../Css/Charts.css';
import '../Css/Common.css';
import '../Css/Core.css';
import '../Css/Demo.css';
import '../Css/Newstylle.css';
import '../Css/Scrol.css';
import '../Css/Boxicon.css';
import '../Css/Theme.css';
import '../Css/Select.css';
import { MdDashboard  } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { IoPeople } from "react-icons/io5" 
import { FaCheckCircle } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiLovers } from "react-icons/gi";




const Aside = () => {

    const [subMenuStates, setSubMenuStates] = useState({});

    // Function to toggle submenu for a specific menu item
    const toggleSubMenu = (menuItem) => {
        setSubMenuStates(prevState => ({
            ...prevState,
            [menuItem]: !prevState[menuItem] // Toggle the state for the given menu item
        }));
        
    }

  
  return (
<>

        {/* Menu */}
        <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
            <div class="app-brand demo">
                <Link to="https://gloriousmatrimonial.com/admin/dashboard" class="app-brand-link"> </Link>
                    <img src="https://www.gloriousmatrimonial.com/public//assets/logo/2717431707816795.png" alt class="w-100" />
                    <Link to="javascript:void(0);"
                        class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i class="bx bx-chevron-left bx-sm align-middle"></i>
                    </Link>
            </div>
            <div class="menu-inner-shadow"></div>
            <ul class="menu-inner py-1">
                {/* Dashboard */}
                                <li class="menu-item active open">
                    <Link to="/Dashboard" class="menu-link">
                        {/* <i class="menu-icon tf-icons bx bxs-dashboard"></i> */}
                        <MdDashboard class="menu-icon tf-icons bx bxs-dashboard" />
                        <div data-i18n="Analytics">Dashboard</div>
                    </Link>
                </li>
                {/* Basic Site Settings */}
                                <li class="menu-item ">
                    <Link to="/Sitesettings" class="menu-link menu-toggle" onClick={() => toggleSubMenu('siteSettings')}>
                        {/* <i class="menu-icon tf-icons bx bxs-cog"></i> */}
                        <IoMdSettings class="menu-icon tf-icons bx bxs-cog" />
                        <div data-i18n="Site Settings">Site Settings</div>
                    </Link>
                 
                </li>

            <li className="menu-item">
      <div className="menu-link menu-toggle"  onClick={() => toggleSubMenu('contactUs')} >
        <RiContactsFill className="menu-icon tf-icons bx bxs-book-content" />
        <div data-i18n="HomePageManagement">Contact Us</div>
      </div>
      {subMenuStates['contactUs'] && (
        <ul className="menu-sub">
          <li className="menu-item">
          <Link to="https://gloriousmatrimonial.com/admin/contact-us" class="menu-link">
              <div data-i18n="Blank">Contact Us</div>
          </Link>
          </li>
          <li className="menu-item">
          <Link to="https://gloriousmatrimonial.com/admin/contact-us" class="menu-link">
              <div data-i18n="Blank">Inquiry Report</div>
          </Link>
          </li>
          {/* Add other submenu items here */}
        </ul>
      )}
    </li>
                {/* Add New Details */}
                                <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle" onClick={() => toggleSubMenu('newDetails')}>
                        {/* <i class="menu-icon tf-icons bx bxs-add-to-queue"></i> */}
                        <IoIosAddCircle class="menu-icon tf-icons bx bxs-add-to-queue" />
                        <div data-i18n="AddNewDetails">Add New Details</div>
                    </Link>
                    {subMenuStates['newDetails'] && (
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="/Religion" class="menu-link">
                                <div data-i18n="Without menu">Religion</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="/Caste" class="menu-link">
                                <div data-i18n="Without menu">Caste</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="/Occupation" class="menu-link">
                                <div data-i18n="Without menu">Occupation</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="/Education" class="menu-link">
                                <div data-i18n="Without menu">Education</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="/Mothertongue" class="menu-link">
                                <div data-i18n="Without menu">Mother Tongue</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="/Annualincome" class="menu-link">
                                <div data-i18n="Without menu">Annual Income</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="/Star" class="menu-link">
                                <div data-i18n="Without menu">Star</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="/Moonsign" class="menu-link">
                                <div data-i18n="Without menu">Moonsign</div>
                            </Link>
                        </li>
                        

                    </ul>
                     )}
                </li>
                                {/* Member */}
                
                                                <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle" onClick={() => toggleSubMenu('member')}>                       
                        <IoPeople class="menu-icon tf-icons bx bxs-user-detail" />
                        <div data-i18n="Member">Member</div>
                    </Link>
                    {subMenuStates['member'] && (
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="/Addmember" class="menu-link">
                                <div data-i18n="Without menu">All Member</div>
                            </Link>
                        </li>
                     
                     </ul>
                    )}
                </li>
                                {/* Approval */}
                                                <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle" onClick={() => toggleSubMenu('approval')}>
                        {/* <i class="menu-icon tf-icons bx bxs-photo-album"></i> */}
                        <FaCheckCircle class="menu-icon tf-icons bx bxs-photo-album" />
                        <div data-i18n="Approval">Approval</div>
                    </Link>
                    {subMenuStates['approval'] && (
                    <ul class="menu-sub">
                        
                                                <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/photo1" class="menu-link">
                                <div data-i18n="Without menu">Photo 1</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/photo2" class="menu-link">
                                <div data-i18n="Without menu">Photo 2</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/photo3" class="menu-link">
                                <div data-i18n="Without menu">Photo 3</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/photo4" class="menu-link">
                                <div data-i18n="Without menu">Photo 4</div>
                            </Link>
                        </li>
                                                                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/id-proof" class="menu-link">
                                <div data-i18n="Without menu">Id Proof</div>
                            </Link>
                        </li>
                                            </ul> )}
                </li>
                               
                {/* MemberShip Plan */}
                                <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle" onClick={() => toggleSubMenu('payment')}>
                     
                        <RiSecurePaymentFill class="menu-icon tf-icons bx bxs-credit-card-front" />
                        <div data-i18n="MemberShipPlan">Payment Option</div>
                    </Link>
                    {subMenuStates['payment'] && (
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="/Payment" class="menu-link">
                                <div data-i18n="Without menu">Membership Plan</div>
                            </Link>
                        </li>
                    </ul> )}
                </li>
                                
                {/* Success Stories */}
                                                <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle" onClick={() => toggleSubMenu('stories')}>

                        <GiLovers class="menu-icon tf-icons bx bxs-book-alt" />
                        <div data-i18n="SuccessStory">Success Stories</div>
                    </Link>
                    {subMenuStates['stories'] && (
                    <ul class="menu-sub">
                        <li class="menu-item ">

                            <Link to="/Stories" class="menu-link">
                                <div data-i18n="Without menu">Success Stories</div>
                            </Link>
                        </li>
                    </ul> )}
                </li>      
                            </ul>
        </aside>
    
  </>  
    
 
  )
}

export default Aside
