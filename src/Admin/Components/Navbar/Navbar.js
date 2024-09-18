import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { Link} from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Smallicon from "../../Components/heart-icon.png";
import { IoMenu } from "react-icons/io5";
// import '../Css/Charts.css';
// import '../Css/Common.css';
// import '../Css/Core.css';
// import '../Css/Demo.css';
// import '../Css/Newstylle.css';
// import '../Css/Scrol.css';
// import '../Css/Boxicon.css';
// import '../Css/Theme.css';
// import '../Css/Select.css';
//import Dashoard from '../Dashboard/Dashboard';



function Navbar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [permissions, setPermissions] = useState(null);
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

      if (!permissions) {
        return null;
      }

  return (
    
    <>
    {/* <div className="layout-wrapper layout-content-navbar">
    <div className="layout-container">
    <div class="layout-page"> */}
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
                <li style={{ padding: "2px 10px" }}>Tulirmatrimony Admin Panel</li>
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
           {/*  <Dashoard /> */}
           {/* </div>
           </div>
           </div> */}

    </>
  )
}

export default Navbar