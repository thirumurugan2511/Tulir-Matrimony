import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Aside from '../Aside/Aside';
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import Smallicon from '../rgt-matrimony-logo.png';

function Paymentedit() {
    const { id } = useParams();
    const [paymentData, setPaymentData] = useState({});
    const [formData, setFormData] = useState({
      payment_name: "",
      amount: "",
      profile_count: "",
      validity: "",
      description: "",
    });
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        fetch(`https://tulirmatrimony.com/controlapi/singleplan.php?${id}`)
            .then(response => response.json())
            .then(data => {
                setPaymentData(data.body);
                setFormData({
                  payment_name: data.body.name || "",
                  amount: data.body.amount || "",
                  profile_count: data.body.profile_count || "",
                  validity: data.body.validity || "",
                  description: data.body.description || "",
                });
            })
            .catch(error => {
                console.error('Error fetching payment data:', error);
            });
    }, [id]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e, id) => {
        e.preventDefault();

        // Extracting id from URL parameters
        const idValue = id.slice(id.indexOf('=') + 1);

        // Creating requestData object with the desired format
        const requestData = {
          id: idValue,
          name: formData.payment_name,
          amount: formData.amount,
          profile_count: formData.profile_count,
          validity: formData.validity,
          description: formData.description,
        };
        const data = JSON.stringify(requestData);
        console.log(data);


        //https://tulirmatrimony.com/controlapi/editplan.php
        //http://localhost:8000/controlapi/editplan
        fetch("https://tulirmatrimony.com/controlapi/editplan.php", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Data updated successfully:", data);
            setSuccessMsg("Plan updated successfully.");
            setTimeout(() => {
                window.location.href = '/Payment';
            }, 1000);
          })
          .catch((error) => {
            console.error("Error updating payment data:", error);
          });
    };

    return (
      <>
        <div className="layout-wrapper layout-content-navbar">
          <div className="layout-container">
            <Aside />
            <div className="layout-page">
              <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar"
              >
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                  <a
                    className="nav-item nav-link px-0 me-xl-4"
                    href="javascript:void(0)"
                  >
                    <i className="bx bx-menu bx-sm"></i>
                  </a>
                </div>
                <div
                  className="navbar-nav-right d-flex align-items-center"
                  id="navbar-collapse"
                >
                  <ol className="breadcrumb breadcrumb-style2 mb-0">
                    <li>
                      <MdManageHistory className="bx bx-user me-2" />
                    </li>
                    <li
                      className="breadcrumb-item "
                      style={{ padding: "2px 10px" }}
                    >
                      {" "}
                      Manage Payment{" "}
                    </li>
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
                        data-bs-toggle="dropdown"
                      >
                        <div className="avatar avatar-online">
                          <img
                            src={Smallicon}
                            alt=""
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end">
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
                        <div className="card-body">
                          <form
                            id="addEditForm"
                            name="addEditForm"
                            onSubmit={(e) => handleSubmit(e, id)}
                          >
                            <div className="mb-3 text-start">
                              <label
                                className="form-label"
                                htmlFor="payment_name"
                              >
                                Payment Name
                                <span className="Form__Error">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control required"
                                id="payment_name"
                                value={formData.payment_name}
                                name="payment_name"
                                onChange={handleChange}
                                placeholder="Payment"
                              />
                            </div>
                            <div className="mb-3 text-start">
                              <label className="form-label" htmlFor="amount">
                                Amount <span className="Form__Error">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control required"
                                id="amount"
                                value={formData.amount}
                                name="amount"
                                onChange={handleChange}
                                placeholder="Amount"
                              />
                            </div>
                            <div className="mb-3 text-start">
                              <label
                                className="form-label"
                                htmlFor="profile_count"
                              >
                                Profile Count
                                <span className="Form__Error">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control required"
                                id="profile_count"
                                value={formData.profile_count}
                                name="profile_count"
                                onChange={handleChange}
                                placeholder="Profile Count"
                              />
                            </div>
                            <div className="mb-3 text-start">
                              <label className="form-label" htmlFor="validity">
                                Validity <span className="Form__Error">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control required"
                                id="validity"
                                value={formData.validity}
                                name="validity"
                                onChange={handleChange}
                                placeholder="Validity"
                              />
                            </div>
                            <div className="mb-3 text-start">
                              <label
                                className="form-label"
                                htmlFor="description"
                              >
                                Description{" "}
                                <span className="Form__Error">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control required"
                                id="description"
                                value={formData.description}
                                name="description"
                                onChange={handleChange}
                                placeholder="Description"
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary formSubmitBtn"
                              id="formSubmitBtn"
                            >
                              Update
                            </button>
                          </form>
                          {successMsg && (
                            <div className="alert alert-success" role="alert">
                              {successMsg}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="content-footer footer bg-footer-theme">
                  <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                    <div className="mb-2 mb-md-0">
                      <a
                        href="https://gloriousmatrimonial.com/admin/dashboard"
                        className="footer-link fw-bolder"
                      >
                        © Copyright 2023-2024 By Aathesh soft. All Rights
                        Reserved.
                      </a>
                    </div>
                  </div>
                </footer>
                <div className="content-backdrop fade"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Paymentedit;
