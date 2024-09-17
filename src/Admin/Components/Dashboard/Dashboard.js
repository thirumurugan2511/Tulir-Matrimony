import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Charts.css";
import "../Css/Common.css";
import "../Css/Core.css";
import "../Css/Demo.css";
import "../Css/Newstylle.css";
import "../Css/Scrol.css";
import "../Css/Boxicon.css";
import "../Css/Theme.css";
import "../Css/Select.css";
import "./Dashboard.css";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import Aside from "../Aside/Aside";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { FaMale, FaFemale } from "react-icons/fa";
import { TbCashBanknote, TbCashBanknoteOff } from "react-icons/tb";
import { MdCancelPresentation } from "react-icons/md";
import Smallicon from "../../Components/heart-icon.png";
import { IoMenu } from "react-icons/io5";

const Dashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [permissions, setPermissions] = useState(null);
  const [dashboardData, setDashboardData] = useState({
    total_member: 0,
    male_member: 0,
    female_member: 0,
    paid_member: 0,
    notpaid_member: 0,
    expired_member: 0,
  });
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const fetchPermissions = async () => {
        try {
          const response = await axios.post('https://tulirmatrimony.com/controlapi/previlagelist.php', { id: userId });
          if (response.data.head.code === 200) {
            setPermissions(response.data.body);
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
    axios.get("https://tulirmatrimony.com/controlapi/dashboardadmin.php")
      .then((response) => {
        if (response.data.head.code === 200) {
          const data = response.data.body[0];
          setDashboardData({
            total_member: data.total_member,
            male_member: data.male_member,
            female_member: data.female_member,
            paid_member: data.paid_member,
            notpaid_member: data.notpaid_member,
            expired_member: 4,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching the dashboard data", error);
      });
  }, []);

  const handleCardClick = (category) => {
    navigate(`/member?category=${category}`);
  };

  if (!permissions) {
    return null;
  }

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Aside />
        <div className="layout-page">
          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <IoMenu className="bx bx-menu bx-sm" />
              </a>
            </div>
            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              <ol className="breadcrumb breadcrumb-style2 mb-0">
                <li>
                  <MdManageHistory className="breadcrumb-item" />
                </li>
                <li style={{ padding: "2px 10px" }}>Manage Dashboard</li>
              </ol>
              <ul className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item lh-1 me-3">
                  <GrUserAdmin className="bx bx-user me-2" />
                  <span className="align-middle">Administrator</span>
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
                  <ul className={`dropdown-menu dropdown-menu-end dropset ${isDropdownOpen ? "show" : ""}`}>
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
                            <span className="fw-semibold d-block mt-2">Admin</span>
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
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row mt-4">
                <div className="col-md-6 col-lg-4 order-2" style={{ height: "100" }}>
                  <a
                    href="#"
                    className="dashboard_animation dashboard_animation__new"
                    onClick={() => handleCardClick( '')}
                  >
                    <div className="card h-100 w-100 dashboard-box-color">
                      <div className="card-body">
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary">
                                <IoIosPeople className="bx bxs-user" />
                              </span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0 text-white">Total Member</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <span className="text-muted badge bg-label-primary rounded-pill" style={{ fontSize: "1.0rem" }}>
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
                <div className="col-md-6 col-lg-4 order-2" style={{ height: "100" }}>
                  <a
                    href="#"
                    className="dashboard_animation dashboard_animation__new"
                    onClick={() => handleCardClick( 'male')}
                  >
                    <div className="card h-100 w-100 dashboard-box-color">
                      <div className="card-body">
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary">
                                <FaMale className="bx bxs-user" />
                              </span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0 text-white">Male Member</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <span className="text-muted badge bg-label-primary rounded-pill" style={{ fontSize: "1.0rem" }}>
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
                <div className="col-md-6 col-lg-4 order-2" style={{ height: "100" }}>
                  <a
                    href="#"
                    className="dashboard_animation dashboard_animation__new"
                    onClick={() => handleCardClick('female')}
                  >
                    <div className="card h-100 w-100 dashboard-box-color">
                      <div className="card-body">
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary">
                                <FaFemale className="bx bxs-user" />
                              </span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0 text-white">Female Member</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <span className="text-muted badge bg-label-primary rounded-pill" style={{ fontSize: "1.0rem" }}>
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
                <div className="col-md-6 col-lg-4 order-2" style={{ height: "100" }}>
                  <a
                    href="#"
                    className="dashboard_animation dashboard_animation__new"
                    onClick={() => handleCardClick( 'paid')}
                  >
                    <div className="card h-100 w-100 dashboard-box-color">
                      <div className="card-body">
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary">
                                <TbCashBanknote className="bx bxs-user" />
                              </span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0 text-white">Paid Member</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <span className="text-muted badge bg-label-primary rounded-pill" style={{ fontSize: "1.0rem" }}>
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
                <div className="col-md-6 col-lg-4 order-2" style={{ height: "100" }}>
                  <a
                    href="#"
                    className="dashboard_animation dashboard_animation__new"
                    onClick={() => handleCardClick( 'notpaid')}
                  >
                    <div className="card h-100 w-100 dashboard-box-color">
                      <div className="card-body">
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary">
                                <TbCashBanknoteOff className="bx bxs-user" />
                              </span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0 text-white">Not Paid Member</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <span className="text-muted badge bg-label-primary rounded-pill" style={{ fontSize: "1.0rem" }}>
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
                <div className="col-md-6 col-lg-4 order-2" style={{ height: "100" }}>
                  <a
                    href="#"
                    className="dashboard_animation dashboard_animation__new"
                    onClick={() => handleCardClick( 'Expired')}
                  >
                    <div className="card h-100 w-100 dashboard-box-color">
                      <div className="card-body">
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary">
                                <MdCancelPresentation className="bx bxs-user" />
                              </span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0 text-white">Expired Member</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <span className="text-muted badge bg-label-primary rounded-pill" style={{ fontSize: "1.0rem" }}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
