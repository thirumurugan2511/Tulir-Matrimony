import React from 'react';
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
import Dashoard from '../Dashboard/Dashoard';

const Aside = () => {
  return (
<>
<div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
        {/* Menu */}
        <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
            <div class="app-brand demo">
                <Link href="https://gloriousmatrimonial.com/admin/dashboard" class="app-brand-link"> </Link>
                    <img src="https://www.gloriousmatrimonial.com/public//assets/logo/2717431707816795.png" alt class="w-100" />
                    <Link href="javascript:void(0);"
                        class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i class="bx bx-chevron-left bx-sm align-middle"></i>
                    </Link>
            </div>
            <div class="menu-inner-shadow"></div>
            <ul class="menu-inner py-1">
                {/* Dashboard */}
                                <li class="menu-item active open">
                    <Link href="https://gloriousmatrimonial.com/admin/dashboard" class="menu-link">
                        <i class="menu-icon tf-icons bx bxs-dashboard"></i>
                        <div data-i18n="Analytics">Dashboard</div>
                    </Link>
                </li>
                {/* Basic Site Settings */}
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-cog"></i>
                        <div data-i18n="Site Settings">Site Settings</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/logo-favicon" class="menu-link">
                                <div data-i18n="Without menu">Logo & Favicon</div>
                            </Link>
                        </li>
                        <li class="menu-item matriPrefixAddEditForm ">
                            <Link href="https://gloriousmatrimonial.com/admin/matri-prefix" class="menu-link">
                                <div data-i18n="Without menu">Matri Prefix</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/email" class="menu-link">
                                <div data-i18n="Without navbar">Email</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/basic-site-setting" class="menu-link">
                                <div data-i18n="Container">Basic Site Settings</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/browse-section" class="menu-link">
                                <div data-i18n="Container">Browse Pages Settings</div>
                            </Link>
                        </li>
                        <li class="menu-item  ">
                            <Link href="https://gloriousmatrimonial.com/admin/analytics-code-setting" class="menu-link">
                                <div data-i18n="Blank">Google Analytics Code</div>
                            </Link>
                        </li>
                        <li class="menu-item  ">
                            <Link href="https://gloriousmatrimonial.com/admin/annoucement-banner" class="menu-link">
                                <div data-i18n="Blank">Annoucement Banner</div>
                            </Link>
                        </li>
                        
                    </ul>
                </li>
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-home"></i>
                        <div data-i18n="HomePageManagement">Home Page</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/home-page" class="menu-link">
                                <div data-i18n="Blank">Homepage Page</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/homepage-text" class="menu-link">
                                <div data-i18n="Blank">Homepage Text</div>
                            </Link>
                        </li>
                                                    <li class="menu-item ">
                                <Link href="https://gloriousmatrimonial.com/admin/home-page-banner" class="menu-link">
                                    <div data-i18n="Blank">Homepage Banner</div>
                                </Link>
                            </li>
                                                <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/why-choose-us" class="menu-link">
                                <div data-i18n="Blank">Why Choose Us Section</div>
                            </Link>
                        </li>
                                                    <li class="menu-item ">
                                <Link href="https://gloriousmatrimonial.com/admin/about-us" class="menu-link">
                                    <div data-i18n="Without menu">About Us Section</div>
                                </Link>
                            </li>
                                                <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/mobile-section" class="menu-link">
                                <div data-i18n="Blank">Mobile Section</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/app-link" class="menu-link">
                                <div data-i18n="Blank">App Link</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/social-site-setting" class="menu-link">
                                <div data-i18n="Blank">Social Site Link</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-book-content"></i>
                        <div data-i18n="HomePageManagement">Contact Us Page</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/contact-us" class="menu-link">
                                <div data-i18n="Blank">Contact Us</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/contact-inquiry" class="menu-link">
                                <div data-i18n="Blank">Inquiry Report</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* Add New Details */}
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-add-to-queue"></i>
                        <div data-i18n="AddNewDetails">Add New Details</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/religion" class="menu-link">
                                <div data-i18n="Without menu">Religion</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/caste" class="menu-link">
                                <div data-i18n="Without menu">Caste</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/country" class="menu-link">
                                <div data-i18n="Without menu">Country</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/state" class="menu-link">
                                <div data-i18n="Without menu">State</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/city" class="menu-link">
                                <div data-i18n="Without menu">City</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/currency-management" class="menu-link">
                                <div data-i18n="Blank">Currency Management</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/occupation" class="menu-link">
                                <div data-i18n="Without menu">Occupation</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/education" class="menu-link">
                                <div data-i18n="Without menu">Education</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/employee" class="menu-link">
                                <div data-i18n="Without menu">Employee</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/mother-tongue" class="menu-link">
                                <div data-i18n="Without menu">Mother Tongue</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/star" class="menu-link">
                                <div data-i18n="Without menu">Star</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/moonsign" class="menu-link">
                                <div data-i18n="Without menu">Moonsign</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/annual-income" class="menu-link">
                                <div data-i18n="Without menu">Annual Income</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/faq-list" class="menu-link">
                                <div data-i18n="Without menu">FAQs</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                                {/* Member */}
                
                                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-user-detail"></i>
                        <div data-i18n="Member">Member</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/member" class="menu-link">
                                <div data-i18n="Without menu">All Member</div>
                            </Link>
                        </li>
                                                <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/featured-member" class="menu-link">
                                <div data-i18n="Without menu">Featured Member</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/renewal-member" class="menu-link">
                                <div data-i18n="Without menu">Expired Member</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/member/sales-reports" class="menu-link">
                                <div data-i18n="Without menu">Member Sales Report</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/delete-profile" class="menu-link">
                                <div data-i18n="Without menu">Delete Profile Report</div>
                            </Link>
                        </li>
                                            </ul>
                </li>
                                {/* Approval */}
                                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-photo-album"></i>
                        <div data-i18n="Approval">Approval</div>
                    </Link>
                    <ul class="menu-sub">
                                                <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/photo1" class="menu-link">
                                <div data-i18n="Without menu">Photo 1</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/photo2" class="menu-link">
                                <div data-i18n="Without menu">Photo 2</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/photo3" class="menu-link">
                                <div data-i18n="Without menu">Photo 3</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/photo4" class="menu-link">
                                <div data-i18n="Without menu">Photo 4</div>
                            </Link>
                        </li>
                                                                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/id-proof" class="menu-link">
                                <div data-i18n="Without menu">Id Proof</div>
                            </Link>
                        </li>
                                            </ul>
                </li>
                                {/* Bulk Notification */}
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon bx bxs-bell-ring"></i>
                        <div data-i18n="BulkNotification">Bulk Notification</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/bulk-notification" class="menu-link">
                                <div data-i18n="Without menu">Send Bulk Notification</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* End Bul Notitfication */}
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-notepad"></i>
                        <div data-i18n="LeadGeneration">Staff Assignment Report</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/staff-assign-history" class="menu-link">
                                <div data-i18n="Without menu">Assigned Member</div>
                            </Link>
                        </li>
                                                    <li class="menu-item ">
                                <Link href="https://gloriousmatrimonial.com/admin/staff-unassign-history" class="menu-link">
                                    <div data-i18n="Without menu">Unassigned Member</div>
                                </Link>
                            </li>
                                            </ul>
                </li>
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-folder-open"></i>
                        <div data-i18n="FollowedUpSystem">Followed Up System</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/follow-up-report" class="menu-link">
                                <div data-i18n="Without menu">Member Report</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* MemberShip Plan */}
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-credit-card-front"></i>
                        <div data-i18n="MemberShipPlan">Payment Option</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/membership-plan" class="menu-link">
                                <div data-i18n="Without menu">Membership Plan</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/offline-plan" class="menu-link">
                                <div data-i18n="Without menu">Offline Payment</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/payment-options" class="menu-link">
                                <div data-i18n="Without menu">Payment Gateway</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-discount"></i>
                        <div data-i18n="CouponCode">Coupon Code</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/coupon-code" class="menu-link">
                                <div data-i18n="Without menu">Coupon Code</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                                {/* Staff */}
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-user-voice"></i>
                        <div data-i18n="Staff">Staff</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/staff" class="menu-link">
                                <div data-i18n="Without menu">Staff</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/staff-role" class="menu-link">
                                <div data-i18n="Without menu">Staff Role</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* User Activity */}
                                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-factory"></i>
                        <div data-i18n="UserActivity">User Activity</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/photo-request" class="menu-link">
                                <div data-i18n="Without menu">Photo Request List</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/contact-request" class="menu-link">
                                <div data-i18n="Without menu">Contact Request List</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/express-interest" class="menu-link">
                                <div data-i18n="Without menu">Connect Request List</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/feedback" class="menu-link">
                                <div data-i18n="Without menu">Feedback</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/report-spam" class="menu-link">
                                <div data-i18n="Without menu">Profile Report Spam</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-book-alt"></i>
                        <div data-i18n="SuccessStory">Success Stories</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/success-story" class="menu-link">
                                <div data-i18n="Without menu">Success Stories</div>
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* Email Templates */}
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-envelope"></i>
                        <div data-i18n="EmailTemplates">Email Templates</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/email-templates" class="menu-link">
                                <div data-i18n="Without menu">Email Templates</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* SMS Templates */}
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-comment-dots"></i>
                        <div data-i18n="SMSTemplates">SMS Templates</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/sms-templates" class="menu-link">
                                <div data-i18n="Without menu">SMS Templates</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/sms-configuration" class="menu-link">
                                <div data-i18n="Without menu">SMS Configuration</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* Content Management */}
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-book-content"></i>
                        <div data-i18n="ContentManagement">CMS Pages</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/cms-pages" class="menu-link">
                                <div data-i18n="Without menu">CMS Pages</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/about-us-page" class="menu-link">
                                <div data-i18n="Without menu">About Us Pages</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                                {/* {/* Blog Management */}
                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxl-blogger"></i>
                        <div data-i18n="BlogManagement">Blog Management</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/blog" class="menu-link">
                                <div data-i18n="Without menu">Blog Management</div>
                            </Link>
                        </li>
                    </ul>
                </li>
                {/* Download Csv  */}
                                <li class="menu-item ">
                    <Link href="javascript:void(0);" class="menu-link menu-toggle">
                        <i class="menu-icon tf-icons bx bxs-cloud-download"></i>
                        <div data-i18n="DownloadCSV">Download CSV</div>
                    </Link>
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link href="https://gloriousmatrimonial.com/admin/download-csv" class="menu-link">
                                <div data-i18n="Without menu">Download Member CSV  </div>
                            </Link>
                        </li>
                    </ul>
                </li>
                            </ul>
        </aside>
        
        <Navbar />
        
        </div>
        </div>
        
  </>  
    
 
  )
}

export default Aside
