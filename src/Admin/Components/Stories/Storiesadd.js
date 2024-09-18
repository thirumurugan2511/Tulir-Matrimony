import React, { useState, useEffect } from "react";
// import {Link} from 'react-router-dom'
import Aside from "../Aside/Aside";
import { Link } from "react-router-dom";
import Smallicon from "../../Components/heart-icon.png";
import { IoMdSettings } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { LuLogOut } from "react-icons/lu";
import Navbar from "../Navbar/Navbar";


const Storiesadd = () => {
  const [formData, setFormData] = useState({
    image: "",
    bridename: "",
    bride_id: "",
    groom_name: "",
    groom_id: "",
    marriage_date: "",
    Message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };
  const [dashboardData, setDashboardData] = useState({
    total_member: 0,
    male_member: 0,
    female_member: 0,
    paid_member: 0,
    notpaid_member: 0,
    expired_member: 0,
  });

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1]; // Strip off the data:image/jpeg;base64, part
        setFormData((prevState) => ({
          ...prevState,
          [name]: base64String,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://tulirmatrimony.com/controlapi/addsuccess.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(formData);
      const data = await response.json();
      console.log(data);
      // Handle success or error response here

      setShowAlert(true);
      
      setTimeout(() => {
        setShowAlert(false);
        console.log("Success Stories added successfully!");
        alert("Success Stories added successfully!");
        window.location.href = "/Stories";
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Aside />
          <div className="layout-page">
            <Navbar />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="col-xl">
                    <div className="card mb-4">
                      <div className="card-body">
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3 text-start">
                            <label
                              className="form-label"
                              htmlFor="weddingphoto"
                            >
                              Upload Your Wedding Photo{" "}
                              <span className="Form__Error">*</span>
                            </label>
                            <input
                              required
                              name="image"
                              className="form-control required"
                              placeholder="Upload Your Wedding Photo"
                              type="file"
                              id="image"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="bridename">
                              Bride's Name{" "}
                              <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              className="form-control required"
                              id="bridename"
                              name="bridename"
                              placeholder="Bride's Name"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="brideid">
                              Bride's ID <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              className="form-control required"
                              id="bridid"
                              name="brid_id"
                              placeholder="Bride's ID"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="groomname">
                              Groom's Name{" "}
                              <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              className="form-control required"
                              id="groomname"
                              name="groom_name"
                              placeholder="Groom's Name"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="groomid">
                              Groom's Id <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              className="form-control required"
                              id="groomid"
                              name="groom_id"
                              placeholder="Groom's Id"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label
                              className="form-label"
                              htmlFor="marriagedate"
                            >
                              Your Marriage Date{" "}
                              <span className="Form__Error">*</span>
                            </label>
                            <input
                              className="form-control required"
                              type="date"
                              id="marriagedate"
                              name="marriage_date"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label
                              className="form-label"
                              htmlFor="successmessage"
                            >
                              Success Message
                            </label>
                            <textarea
                              id="Message"
                              name="Message"
                              className="form-control"
                              placeholder="Success Message"
                              onChange={handleChange}
                            ></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </form>
                        {/* Success alert */}
                        {showAlert && (
                          <div
                            id="success-alert"
                            className="alert m-4 alert-success"
                            style={{
                              backgroundColor: "#28a745",
                              color: "white",
                            }}
                            role="alert"
                          >
                            Record added successfully.
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      id="success-alert"
                      className="alert m-4 alert-success"
                      style={{
                        display: "none",
                        backgroundColor: "#28a745",
                        color: "white",
                      }}
                      role="alert"
                    >
                      Record added successfully.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Storiesadd;
