import React, { useState } from 'react';
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Aside from '../Aside/Aside'
import {Link} from 'react-router-dom'
import Smallicon from '../../Components/heart-icon.png'
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import Navbar from '../Navbar/Navbar';


const Paymentadd = () => {
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
    const [formData, setFormData] = useState({
      name: "",
      amount: "",
      profile_count: "",
      validity: "",
      description: "",
    });
      const [showAlert, setShowAlert] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('https://tulirmatrimony.com/controlapi/addplan.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          setFormData(''); 
          alert("New Plan Added Successfully");
          setShowAlert(true);
          setTimeout(() => {
               window.location.href = "/Payment";
          }, 2000);

          const data = await response.json();
          console.log(data);
          // Handle success or error response here

      } catch (error) {
          console.error('Error:', error);
      }
  };
  const handleGoBack = () => {
    window.history.back();
};
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Aside />
          <div class="layout-page">
            <Navbar />
            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row">
                  <div class="col-xl">
                    <div class="card mb-4">
                      <div class="card-body">
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="name">
                              Plan Name <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              className="form-control required"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Plan Name"
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="amount">
                              Plan Amount <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              className="form-control required"
                              id="amount"
                              name="amount"
                              value={formData.amount}
                              onChange={handleChange}
                              placeholder="Plan Amount"
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="profile_count">
                              Profile Count <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              className="form-control required"
                              id="profile_count"
                              name="profile_count"
                              value={formData.profile_count}
                              onChange={handleChange}
                              placeholder="Profile Count"
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="validity">
                              Plan Validity{" "}
                              <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              className="form-control required"
                              id="validity"
                              name="validity"
                              value={formData.validity}
                              onChange={handleChange}
                              placeholder="Plan Validity"
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="description">
                              Plan Description
                            </label>
                            <textarea
                              id="description"
                              name="description"
                              className="form-control"
                              value={formData.description}
                              onChange={handleChange}
                              placeholder="Plan Description"
                            ></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </form>
                      </div>
                      {showAlert && (
                        <div
                          id="success-alert"
                          className="alert m-4 alert-success m-auto mb-3"
                          style={{
                            backgroundColor: "#28a745",
                            color: "white",
                            width: "70%",
                          }}
                          role="alert"
                        >
                          Record added successfully.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="#"
                className="btn btn-secondary m-4"
                onClick={handleGoBack}
              >
                {" "}
                Go Back PaymentList{" "}
              </Link>
            </div>
            <footer class="content-footer footer bg-footer-theme">
              <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                <div class="mb-2 mb-md-0">
                  <a href="" class="footer-link">
                    © Copyright 2023-2024 By Aathesh Soft. All Rights Reserved.
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paymentadd