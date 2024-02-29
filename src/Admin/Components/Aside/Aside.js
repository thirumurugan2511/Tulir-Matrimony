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
import Navbar from '../Navbar/Navbar';
import Dashoard from '../Dashboard/Dashboard';

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
                        <i class="menu-icon tf-icons bx bxs-dashboard"></i>
                        <div data-i18n="Analytics">Dashboard</div>
                    </Link>
                </li>
                {/* Basic Site Settings */}
                                <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle" onClick={() => toggleSubMenu('siteSettings')}>
                        <i class="menu-icon tf-icons bx bxs-cog"></i>
                        <div data-i18n="Site Settings">Site Settings</div>
                    </Link>
                    {subMenuStates['siteSettings'] && (
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/logo-favicon" class="menu-link">
                                <div data-i18n="Without menu">Username</div>
                            </Link>
                        </li>
                        <li class="menu-item matriPrefixAddEditForm ">
                            <Link to="https://gloriousmatrimonial.com/admin/matri-prefix" class="menu-link">
                                <div data-i18n="Without menu">Password </div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/email" class="menu-link">
                                <div data-i18n="Without navbar">Email</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/basic-site-setting" class="menu-link">
                                <div data-i18n="Container">Description</div>
                            </Link>
                        </li>
                        
                       
                        
                    </ul> )}
                </li>

            <li className="menu-item">
      <div className="menu-link menu-toggle"  onClick={() => toggleSubMenu('contactUs')} >
        <i className="menu-icon tf-icons bx bxs-book-content"></i>
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
                        <i class="menu-icon tf-icons bx bxs-add-to-queue"></i>
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
                        <i class="menu-icon tf-icons bx bxs-user-detail"></i>
                        <div data-i18n="Member">Member</div>
                    </Link>
                    {subMenuStates['member'] && (
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/member" class="menu-link">
                                <div data-i18n="Without menu">All Member</div>
                            </Link>
                        </li>
                     
                     </ul>
                    )}
                </li>
                                {/* Approval */}
                                                <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle" onClick={() => toggleSubMenu('approval')}>
                        <i class="menu-icon tf-icons bx bxs-photo-album"></i>
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
                                {/* Bulk Notification */}
                                {/* <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon bx bxs-bell-ring"></i>
                        <div data-i18n="BulkNotification">Bulk Notification</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/bulk-notification" class="menu-link">
                                <div data-i18n="Without menu">Send Bulk Notification</div>
                            </Link>
                        </li>
                    </ul>
                </li> */}
                {/* End Bul Notitfication */}
                                {/* <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-notepad"></i>
                        <div data-i18n="LeadGeneration">Staff Assignment Report</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/staff-assign-history" class="menu-link">
                                <div data-i18n="Without menu">Assigned Member</div>
                            </Link>
                        </li>
                                                    <li class="menu-item ">
                                <Link to="https://gloriousmatrimonial.com/admin/staff-unassign-history" class="menu-link">
                                    <div data-i18n="Without menu">Unassigned Member</div>
                                </Link>
                            </li>
                                            </ul>
                </li> */}
                                {/* <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-folder-open"></i>
                        <div data-i18n="FollowedUpSystem">Followed Up System</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/follow-up-report" class="menu-link">
                                <div data-i18n="Without menu">Member Report</div>
                            </Link>
                        </li>
                    </ul>
                </li> */}
                {/* MemberShip Plan */}
                                <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle" onClick={() => toggleSubMenu('payment')}>
                        <i class="menu-icon tf-icons bx bxs-credit-card-front"></i>
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
                                {/* <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-discount"></i>
                        <div data-i18n="CouponCode">Coupon Code</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/coupon-code" class="menu-link">
                                <div data-i18n="Without menu">Coupon Code</div>
                            </Link>
                        </li>
                    </ul>
                </li> */}
                                {/* Staff */}
                                {/* <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-user-voice"></i>
                        <div data-i18n="Staff">Staff</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/staff" class="menu-link">
                                <div data-i18n="Without menu">Staff</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/staff-role" class="menu-link">
                                <div data-i18n="Without menu">Staff Role</div>
                            </Link>
                        </li>
                    </ul>
                </li> */}
                {/* User Activity */}
                                                {/* <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-factory"></i>
                        <div data-i18n="UserActivity">User Activity</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/photo-request" class="menu-link">
                                <div data-i18n="Without menu">Photo Request List</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/contact-request" class="menu-link">
                                <div data-i18n="Without menu">Contact Request List</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/express-interest" class="menu-link">
                                <div data-i18n="Without menu">Connect Request List</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/feedback" class="menu-link">
                                <div data-i18n="Without menu">Feedback</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/report-spam" class="menu-link">
                                <div data-i18n="Without menu">Profile Report Spam</div>
                            </Link>
                        </li>
                    </ul>
                </li> */}
                {/* Success Stories */}
                                                <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle" onClick={() => toggleSubMenu('stories')}>
                        <i class="menu-icon tf-icons bx bxs-book-alt"></i>
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

                {/* Email Templates */}
                                {/* <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-envelope"></i>
                        <div data-i18n="EmailTemplates">Email Templates</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/email-templates" class="menu-link">
                                <div data-i18n="Without menu">Email Templates</div>
                            </Link>
                        </li>
                    </ul>
                </li> */}
                {/* SMS Templates */}
                                {/* <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-comment-dots"></i>
                        <div data-i18n="SMSTemplates">SMS Templates</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/sms-templates" class="menu-link">
                                <div data-i18n="Without menu">SMS Templates</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/sms-configuration" class="menu-link">
                                <div data-i18n="Without menu">SMS Configuration</div>
                            </Link>
                        </li>
                    </ul>
                </li> */}
                {/* Content Management */}
                                {/* <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-book-content"></i>
                        <div data-i18n="ContentManagement">CMS Pages</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/cms-pages" class="menu-link">
                                <div data-i18n="Without menu">CMS Pages</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/about-us-page" class="menu-link">
                                <div data-i18n="Without menu">About Us Pages</div>
                            </Link>
                        </li>
                    </ul>
                </li> */}
                                {/* {/* Blog Management */}
                {/* <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxl-blogger"></i>
                        <div data-i18n="BlogManagement">Blog Management</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/blog" class="menu-link">
                                <div data-i18n="Without menu">Blog Management</div>
                            </Link>
                        </li>
                    </ul>
                </li> */}
                {/* Download Csv  */}
                                {/* <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-cloud-download"></i>
                        <div data-i18n="DownloadCSV">Download CSV</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="https://gloriousmatrimonial.com/admin/download-csv" class="menu-link">
                                <div data-i18n="Without menu">Download Member CSV  </div>
                            </Link>
                        </li>
                    </ul>
                </li> */}
                            </ul>
        </aside>
    
  </>  
    
 
  )
}

export default Aside
