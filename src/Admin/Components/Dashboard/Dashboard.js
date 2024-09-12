import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Charts.css";
import "../Css/Common.css";
import "../Css/Core.css";
import "../Css/Demo.css";
import "../Css/Newstylle.css";
import "../Css/Scrol.css";
import "../Css/Boxicon.css";
import "../Css/Theme.css";
import "../Css/Select.css";
import "./Dashboard.css"
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import Aside from "../Aside/Aside";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { TbCashBanknote } from "react-icons/tb";
import { TbCashBanknoteOff } from "react-icons/tb";
import { MdCancelPresentation } from "react-icons/md";
import Smallicon from "../../Components/heart-icon.png";
import { IoMenu } from "react-icons/io5";

const Dashoard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [permissions, setPermissions] = useState(null); // State to store API permissions
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const [dashboardData, setDashboardData] = useState({
    total_member: 0,
    male_member: 0,
    female_member: 0,
    paid_member: 0,
    notpaid_member: 0,
    expired_member: 0,
  });

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


  useEffect(() => {
    axios
      .get("https://tulirmatrimony.com/controlapi/dashboardadmin.php")
      .then((response) => {
        if (response.data.head.code === 200) {
          const data = response.data.body[0];
          setDashboardData({
            total_member: data.total_member,
            male_member: data.male_member,
            female_member: data.female_member,
            paid_member: data.paid_member,
            notpaid_member: data.notpaid_member,
            expired_member: 4, // Assuming the expired_member count is fixed as 4
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching the dashboard data", error);
      });
  }, []);

  if (!permissions) {
    return null;
  }

  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Aside />
          <div class="layout-page">
            <nav
              class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached
            align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a
                  class="nav-item nav-link px-0 me-xl-4"
                  href="javascript:void(0)"
                >
                  <IoMenu class="bx bx-menu bx-sm" />
                </a>
              </div>
              <div
                class="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                <ol class="breadcrumb breadcrumb-style2 mb-0">
                  <li>
                    <MdManageHistory class="breadcrumb-item" />
                  </li>
                  <li style={{ padding: "2px 10px" }}>Manage Dashboard</li>
                </ol>
                <ul class="navbar-nav flex-row align-items-center ms-auto">
                  <li class="nav-item lh-1 me-3">
                    <GrUserAdmin class="bx bx-user me-2" />
                    <span class="align-middle">Administrator</span>
                  </li>
                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="javascript:void(0);"
                      onClick={toggleDropdown}
                    >
                      <div className="avatar avatar-online">
                        <img
                          src={Smallicon}
                          alt=""
                          className="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </a>
                    <ul
                      className={`dropdown-menu dropdown-menu-end dropset
                        ${ isDropdownOpen ? "show" : ""}`}>
                      <li>
                        <a className="dropdown-item" href="#">
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar avatar-online">
                                <img
                                  src={Smallicon}
                                  alt=""
                                  className="w-px-40 h-auto rounded-circle"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <span className="fw-semibold d-block mt-2">
                                Admin
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      {permissions?.settings === "1" && (
                      <li>
                        <Link className="dropdown-item" to="/Sitesettings">
                          <IoMdSettings className="bx bx-cog me-2" />
                          <span className="align-middle">Settings</span>
                        </Link>
                      </li>
                      )}
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Signin">
                          <LuLogOut className="bx bx-power-off me-2" />
                          <span className="align-middle">Log Out</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row mt-4">
                  <div
                    class="col-md-6 col-lg-4 order-2"
                    style={{ height: "100" }}
                  >
                    <a
                      href=""
                      class="dashboard_animation dashboard_animation__new"
                    >
                      <div class="card h-100 w-100 dashboard-box-color">
                        <div class="card-body">
                          <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-primary">
                                  <IoIosPeople class="bx bxs-user" />
                                </span>
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <h6 class="mb-0 text-white">Total Member</h6>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                  <span class="text-muted badge bg-label-primary rounded-pill" style={{fontSize:"1.0rem"}}>
                                  {dashboardData.total_member}
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="col-md-6 col-lg-4 order-2"
                    style={{ height: "100" }}
                  >
                    <a
                      href="#"
                      class="dashboard_animation dashboard_animation__new"
                      onclick="getDashboardData('gender','Male')"
                    >
                      <div class="card h-100 w-100 dashboard-box-color">
                        <div class="card-body">
                          <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-info">
                                  <FaMale class="bx bx-male-sign" />
                                </span>
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <h6 class="mb-0 text-white">Male Member</h6>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                  <span class="text-muted badge bg-label-primary rounded-pill" style={{fontSize:"1.0rem"}}>
                                  {dashboardData.male_member}
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="col-md-6 col-lg-4 order-2"
                    style={{ height: "100" }}
                  >
                    <a
                      href="#"
                      class="dashboard_animation dashboard_animation__new"
                      onclick="getDashboardData('gender','Female')"
                    >
                      <div class="card h-100 w-100 dashboard-box-color">
                        <div class="card-body" style={{ zIndex: "0" }}>
                          <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-info">
                                  <FaFemale class="bx bx-female-sign" />
                                </span>
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <h6 class="mb-0 text-white">Female Member</h6>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                  <span class="text-muted badge bg-label-primary rounded-pill" style={{fontSize:"1.0rem"}}>
                                  {dashboardData.female_member}
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="col-md-6 col-lg-4 order-2"
                    style={{ height: "100" }}
                  >
                    <a
                      href="#"
                      class="dashboard_animation dashboard_animation__new"
                      onclick="getDashboardData('plan_status','Paid')"
                    >
                      <div class="card h-100 w-100 dashboard-box-color">
                        <div class="card-body">
                          <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-success">
                                  <TbCashBanknote class="bx bx-credit-card" />
                                </span>
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <h6 class="mb-0 text-white">Paid Member</h6>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                  <span class="text-muted badge bg-label-primary rounded-pill" style={{fontSize:"1.0rem"}}>
                                  {dashboardData.paid_member}
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="col-md-6 col-lg-4 order-2"
                    style={{ height: "100" }}
                  >
                    <a
                      href="#"
                      class="dashboard_animation dashboard_animation__new"
                      onclick="getDashboardData('plan_status','Not Paid')"
                    >
                      <div class="card h-100 w-100 dashboard-box-color">
                        <div class="card-body">
                          <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-warning">
                                  <TbCashBanknoteOff class="bx bx-credit-card" />
                                </span>
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <h6 class="mb-0 text-white">
                                    Not Paid Member
                                  </h6>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                  <span class="text-muted badge bg-label-primary rounded-pill" style={{fontSize:"1.0rem"}}>
                                  {dashboardData.notpaid_member}
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="col-md-6 col-lg-4 order-2"
                    style={{ height: "100" }}
                  >
                    <a
                      href="https://gloriousmatrimonial.com/admin/renewal-member"
                      class="dashboard_animation dashboard_animation__new"
                      onclick="getDashboardData('plan_status','Expired')"
                    >
                      <div class="card h-100 w-100 dashboard-box-color">
                        <div class="card-body">
                          <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                              <div class="avatar flex-shrink-0 me-3">
                                <span class="avatar-initial rounded bg-label-danger">
                                  <MdCancelPresentation class="bx bx-credit-card" />
                                </span>
                              </div>
                              <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                <div class="me-2">
                                  <h6 class="mb-0 text-white">
                                    Expired Member
                                  </h6>
                                </div>
                                <div class="user-progress d-flex align-items-center gap-1">
                                  <span class="text-muted badge bg-label-primary rounded-pill" style={{fontSize:"1.0rem"}}>
                                  {dashboardData.expired_member}
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* <div class="col-md-6 col-lg-4 order-2" style={{height:'100'}}>
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('status','APPROVED')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-success">
                                        <i class='bx bxs-like'></i>
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Approved Member</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            115
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div> */}
                  {/* <div class="col-md-6 col-lg-4 order-2" style={{height:'100'}}>
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('status','UNAPPROVED')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-dark">
                                        <i class='bx bxs-dislike'></i>
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Unapproved Member</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            2
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2" style={{height:'100'}}>
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('status','Suspended')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-danger">
                                        <i class='bx bx-block'></i>
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Suspended Member</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            1
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashoard;
