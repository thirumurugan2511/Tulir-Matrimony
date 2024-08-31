import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Aside from "../Aside/Aside";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import Smallicon from "../../Components/heart-icon.png";
import "./Previlages.css"

const Previlages = () => {
   

    const [permissions, setPermissions] = useState({
        addProduct: "deny",
        updateProduct: "deny",
        deleteProduct: "deny",
        applyDiscount: "deny",
        ProductOffer: "deny",
        ProductCoupon: "deny",
      });
    
      const handlePermissionChange = (e) => {
        const { name, value } = e.target;
        setPermissions((prevPermissions) => ({
          ...prevPermissions,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Permissions:", permissions);
        // Add logic to handle form submission
      };
    
      const handleCancel = () => {
        setPermissions({
          addProduct: "deny",
          updateProduct: "deny",
          deleteProduct: "deny",
          applyDiscount: "deny",
          ProductOffer: "deny",
          ProductCoupon: "deny",
        });
      };


  return (
    <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        <Aside showMenu />
        <div class="layout-page">
          <nav
            class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached
        align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a class="nav-item nav-link px-0 me-xl-4">
                <i class="bx bx-menu bx-sm"></i>
              </a>
            </div>
            <div
              class="navbar-nav-right d-flex align-items-center"
              id="navbar-collapse"
            >
              <ol class="breadcrumb breadcrumb-style2 mb-0">
                <li>
                  <MdManageHistory class="breadcrumb-item " />
                </li>
                <li style={{ padding: "2px 10px" }}>Manage Site Settings</li>
              </ol>
              <ul class="navbar-nav flex-row align-items-center ms-auto">
                <li class="nav-item lh-1 me-3">
                  <GrUserAdmin class="bx bx-user me-2" />
                  <span class="align-middle">Administrator</span>
                </li>
                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                  <a
                    class="nav-link dropdown-toggle hide-arrow"
                    href="javascript:void(0);"
                    data-bs-toggle="dropdown"
                  >
                    <div class="avatar avatar-online">
                      <img
                        src={Smallicon}
                        alt=""
                        class="w-px-40 h-auto rounded-circle"
                      />
                    </div>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="#">
                        <div class="d-flex">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar avatar-online">
                              <img
                                src={Smallicon}
                                alt=""
                                class="w-px-40 h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <span class="fw-semibold d-block mt-2">Admin</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div class="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/Sitesettings">
                        <IoMdSettings class="bx bx-cog me-2" />
                        <span class="align-middle">Settings</span>
                      </Link>
                    </li>
                    {/* <li>
                                <a class="dropdown-item" target="_blank" href="https://gloriousmatrimonial.com" rel="noopener">
                                    <i class="bx bx-slideshow me-2"></i>
                                    <span class="align-middle">Front End</span>
                                </a>
                            </li> */}
                    <li>
                      <div class="dropdown-divider"></div>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/Signin">
                        <LuLogOut class="bx bx-power-off me-2" />
                        <span class="align-middle">Log Out</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>

          <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="row">
                <div class="col-xl">
                  <div class="card mb-4">
                    <h5 class="card-header">Manage Pevilage Settings</h5>
                    <div class="card-body">
                      <form onSubmit={handleSubmit} className="form123">
                        <div className="row">
                          <div className="col-12">
                            <div className="input-box form-group">
                              <div className="row">
                                <label className="col-md-3 control-label labelname">
                                  Banner
                                </label>
                                <div className="col-md-9">
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="Banner"
                                      value="allow"
                                      checked={
                                        permissions.Banner === "allow"
                                      }
                                      onChange={handlePermissionChange}
                                    />
                                    Allow
                                  </label>
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="Banner"
                                      value="deny"
                                      checked={
                                        permissions.Banner === "deny"
                                      }
                                      onChange={handlePermissionChange}
                                    />
                                    Deny
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          
                          <div className="col-12">
                            <div className="input-box form-group">
                              <div className="row">
                                <label className="col-md-3 control-label labelname">
                                  Content Management
                                </label>
                                <div className="col-md-9">
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="ContentManagement"
                                      value="allow"
                                      checked={
                                        permissions.ContentManagement === "allow"
                                      }
                                      onChange={handlePermissionChange}
                                    />
                                    Allow
                                  </label>
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="ContentManagement"
                                      value="deny"
                                      checked={
                                        permissions.ContentManagement === "deny"
                                      }
                                      onChange={handlePermissionChange}
                                    />
                                    Deny
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="input-box form-group">
                              <div className="row">
                                <label className="col-md-3 control-label labelname">
                                  Add New Details
                                </label>
                                <div className="col-md-9">
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="AddNewDetails"
                                      value="allow"
                                      checked={
                                        permissions.AddNewDetails === "allow"
                                      }
                                      onChange={handlePermissionChange}
                                    />
                                    Allow
                                  </label>
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="AddNewDetails"
                                      value="deny"
                                      checked={
                                        permissions.AddNewDetails === "deny"
                                      }
                                      onChange={handlePermissionChange}
                                    />
                                    Deny
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="input-box form-group">
                              <div className="row">
                                <label className="col-md-3 control-label labelname">
                                  Member
                                </label>
                                <div className="col-md-9">
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="Member"
                                      value="allow"
                                      checked={
                                        permissions.Member === "allow"
                                      }
                                      onChange={handlePermissionChange}
                                    />
                                    Allow
                                  </label>
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="Member"
                                      value="deny"
                                      checked={
                                        permissions.Member === "deny"
                                      }
                                      onChange={handlePermissionChange}
                                    />
                                    Deny
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="input-box form-group">
                              <div className="row">
                                <label className="col-md-3 control-label labelname">
                                  Membership Plan
                                </label>
                                <div className="col-md-9">
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="MembershipPlan"
                                      value="allow"
                                      checked={
                                        permissions.MembershipPlan === "allow"
                                      }
                                      onChange={handlePermissionChange}
                                    />
                                    Allow
                                  </label>
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="MembershipPlan"
                                      value="deny"
                                      checked={
                                        permissions.MembershipPlan === "deny"
                                      }
                                      onChange={handlePermissionChange}
                                    />
                                    Deny
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="input-box form-group">
                              <div className="row">
                                <label className="col-md-3 control-label labelname">
                                  Success Stories
                                </label>
                                <div className="col-md-9">
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="SuccessStories"
                                      value="allow"
                                      checked={
                                        permissions.SuccessStories === "allow"
                                      }
                                      onChange={handlePermissionChange}
                                    />
                                    Allow
                                  </label>
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="SuccessStories"
                                      value="deny"
                                      checked={
                                        permissions.SuccessStories === "deny"
                                      }
                                      onChange={handlePermissionChange}
                                    />
                                    Deny
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          
                        </div>

                        <div className="mt-4 d-flex justify-content-end">
                          <button type="submit" className="btn123">
                            Submit
                          </button>
                          <button
                            type="button"
                            className="btn12"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Previlages;
