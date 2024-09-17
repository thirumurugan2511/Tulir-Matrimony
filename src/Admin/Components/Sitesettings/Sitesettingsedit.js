import React, { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import Aside from "../Aside/Aside";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import Smallicon from "../../Components/heart-icon.png";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const Sitesettingsedit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get user ID from URL
  const [districts, setDistricts] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    description: "",
    district: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state for fetching user data

  // Fetch district list from API
  useEffect(() => {
    axios
      .get("https://tulirmatrimony.com/controlapi/districtlist.php")
      .then((response) => {
        if (response.data && Array.isArray(response.data.body)) {
          setDistricts(response.data.body);
        } else {
          setError("Unexpected response structure");
        }
      })
      .catch((error) => {
        setError("Error fetching districts");
      });
  }, []);

  // Fetch existing user data from the API (listuser.php)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://tulirmatrimony.com/controlapi/listuser.php?id=${id}`
        );
        const result = response.data;
  
        // Log the result to see if it matches your expectations
        //console.log("edit response=====>", result);
  
        if (result && result.body && result.body.length > 0) {
          // Assuming the user is the first object in the array (adjust as needed)
          const userData = result.body.find(user => user.id === id); // Find the user by id
  
          if (userData) {
            // Set the old user data into the form state
            setFormData({
              username: userData.username || '',
              password: userData.password || '',
              email: userData.email || '',
              description: userData.description || '',
              district: userData.district || '',
            });
            console.log("district=====>",userData.district); // Log the username to confirm
          } else {
            console.error('User not found in response');
          }
        }
        setIsLoading(false); // Data fetching complete
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Error fetching user data');
        setIsLoading(false);
      }
    };
  
    fetchUserData();
  }, [id]);
  

  // Handle input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://tulirmatrimony.com/controlapi/edituser.php",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, ...formData }),
        }
      );
  
      const result = await response.json();
      
      // Log the full result to inspect the structure
      console.log("Edit Response: ", result);
      
      // Check for success based on the actual response structure
      if (result.head.code === 200) {
        // Alert success and redirect to Sitesettings page
        alert("User details edited successfully");
        navigate("/Sitesettings"); // Redirect after successful edit
      } else {
        // Log and alert the error message from API if present, else show a default message
        console.error("Failed to update user details. Full response: ", result);
        alert(result.head.msg || "Failed to update user details.");
      }
    } catch (error) {
      console.error("Error editing user data:", error);
      alert("There was a problem submitting the form.");
    }
  };
  
  

  

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
          <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row">
              <div className="col-xl">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5>Edit User</h5>
                    <form onSubmit={handleSubmit} method="POST">
                      <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="username">
                          Username <span className="Form__Error">*</span>
                        </label>
                        <input
                          type="text"
                          //required
                          className="form-control required"
                          id="username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          placeholder="User Name"
                        />
                      </div>
                      <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="password">
                          Password <span className="Form__Error">*</span>
                        </label>
                        <input
                          type="password"
                          // required
                          className="form-control required"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Password"
                        />
                      </div>
                      <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="email">
                          Email ID <span className="Form__Error">*</span>
                        </label>
                        <input
                          type="email"
                          //required
                          className="form-control required"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="description">
                          Description <span className="Form__Error">*</span>
                        </label>
                        <input
                          type="text"
                          // required
                          className="form-control required"
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          placeholder="Description"
                        />
                      </div>
                      <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="district">
                          District <span className="Form__Error">*</span>
                        </label>
                        <select
                          className="form-select"
                          id="district"
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          // required
                        >
                          <option value="" disabled>
                            Select District
                          </option>
                          {error ? (
                            <option disabled>{error}</option>
                          ) : (
                            districts.length > 0 &&
                            districts.map((district) => (
                              <option key={district.id} value={district.name}>
                                {district.district_name}
                              </option>
                            ))
                          )}
                        </select>
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Update
                      </button>
                    </form>
                    <div
                      id="success-alert"
                      className="m-4 alert alert-success"
                      style={{
                        display: "none",
                        backgroundColor: "#28a745",
                        color: "white",
                      }}
                      role="alert"
                    >
                      User updated successfully.
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

export default Sitesettingsedit;
