import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Aside from "../Aside/Aside";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import Smallicon from "../../Components/heart-icon.png";
import axios from "axios";
import "./Previlages.css";

const Previlages = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [permissions, setPermissions] = useState({
    Banner: "deny",
    ContentManagement: "deny",
    AddNewDetails: "deny",
    Member: "deny",
    MembershipPlan: "deny",
    SuccessStories: "deny",
    Settings: "deny",
  });

  const [loading, setLoading] = useState(true);
  const [successMsg, setSuccessMsg] = useState("");

  
  useEffect(() => {
    const fetchPermissions = async () => {
      try {
        const response = await axios.post(
          "https://tulirmatrimony.com/controlapi/previlagelist.php",
          { id: id }
        );
        console.log("id"+ id)

        const data = response.data.body;

        console.log("======" + response.data.body )
        setPermissions({
          Banner: data.banner === "1" ? "allow" : "deny",
          ContentManagement: data.content === "1" ? "allow" : "deny",
          AddNewDetails: data.add_new === "1" ? "allow" : "deny",
          //Member: data.member_id === "1" ? "allow" : "deny",
          MembershipPlan: data.membership_plan === "1" ? "allow" : "deny",
          SuccessStories: data.success_stories === "1" ? "allow" : "deny",
          Settings: data.settings === "1" ? "allow" : "deny",
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching permissions:", error);
      }
    };

    fetchPermissions();
  }, [id]);

  
  const handlePermissionChange = (e) => {
    const { name, value } = e.target;
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: value,
    }));
  };

  // <-----submit data send to api ------>

  const handleSubmit = async (e) => {
    e.preventDefault();

    const permissionData = {
      id: id,
      banner: permissions.Banner === "allow" ? "1" : "0",
      content: permissions.ContentManagement === "allow" ? "1" : "0",
      add_new: permissions.AddNewDetails === "allow" ? "1" : "0",
     // member_id: permissions.Member === "allow" ? "1" : "0",
      membership_plan: permissions.MembershipPlan === "allow" ? "1" : "0",
      success_stories: permissions.SuccessStories === "allow" ? "1" : "0",
      settings: permissions.Settings === "allow" ? "1" : "0",
    };

    try {
      const response = await axios.post(
        "https://tulirmatrimony.com/controlapi/previlage.php",
        permissionData
      );

      if (response.data.head.code === 200) {
        setSuccessMsg("Successfully added!");
        setTimeout(() => {
          navigate("/Sitesettings");
        }, 1000); 
      }
    } catch (error) {
      console.error("Error updating permissions:", error);
    }
  };

  
  const handleCancel = () => {
    setPermissions({
      Banner: "deny",
      ContentManagement: "deny",
      AddNewDetails: "deny",
      Member: "deny",
      MembershipPlan: "deny",
      SuccessStories: "deny",
      Settings: "deny",
    });
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Aside showMenu />
        <div className="layout-page">
          <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme">
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a className="nav-item nav-link px-0 me-xl-4">
                <i className="bx bx-menu bx-sm"></i>
              </a>
            </div>
            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              <ol className="breadcrumb breadcrumb-style2 mb-0">
                <li>
                  <MdManageHistory className="breadcrumb-item " />
                </li>
                <li style={{ padding: "2px 10px" }}>Manage Site Settings</li>
              </ol>
              <ul className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item lh-1 me-3">
                  <GrUserAdmin className="bx bx-user me-2" />
                  <span className="align-middle">Administrator</span>
                </li>
                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <a className="nav-link dropdown-toggle hide-arrow">
                    <div className="avatar avatar-online">
                      <img src={Smallicon} alt="" className="w-px-40 h-auto rounded-circle" />
                    </div>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" to="/Sitesettings">
                        <IoMdSettings className="bx bx-cog me-2" />
                        <span className="align-middle">Settings</span>
                      </Link>
                    </li>
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
              <div className="row">
                <div className="col-xl">
                  <div className="card mb-4">
                    <h5 className="card-header">Manage Privilege Settings</h5>
                    <div className="card-body">
                      {successMsg && <div className="alert alert-success">{successMsg}</div>}
                      <form onSubmit={handleSubmit}>
                        
                        <div className="row">
                          {/* Banner permission */}
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
                                      checked={permissions.Banner === "allow"}
                                      onChange={handlePermissionChange}
                                    />
                                    Allow
                                  </label>
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="Banner"
                                      value="deny"
                                      checked={permissions.Banner === "deny"}
                                      onChange={handlePermissionChange}
                                    />
                                    Deny
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Content Management permission */}
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
                                        permissions.ContentManagement ===
                                        "allow"
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

                          {/* Add New Details permission */}
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

                          {/* Member permission */}

                          {/*   
                          {/* Membership Plan permission */}

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

                          {/* Success Stories permission */}
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


                          <div className="col-12">
                            <div className="input-box form-group">
                              <div className="row">
                                <label className="col-md-3 control-label labelname">
                                  Settings
                                </label>
                                <div className="col-md-9">
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="Settings"
                                      value="allow"
                                      checked={
                                        permissions.Settings === "allow"
                                      }
                                      onChange={handlePermissionChange}
                                    />
                                    Allow
                                  </label>
                                  <label className="form-radio-label">
                                    <input
                                      type="radio"
                                      name="Settings"
                                      value="deny"
                                      checked={
                                        permissions.Settings === "deny"
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

                        

                        <div className="row">
                          <div className="col-md-12 text-right">
                            <button type="submit" className="btn btn-primary mr-2">
                              Submit
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                              Cancel
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Previlages;
