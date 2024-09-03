import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Aside from "../Aside/Aside";
import { Link } from "react-router-dom";
import Smallicon from "../../Components/heart-icon.png";
import { IoMdSettings } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { LuLogOut } from "react-icons/lu";

const Editstory = () => {
  const { id } = useParams(); // Get the story ID from the URL parameters
  const [initialData, setInitialData] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tulirmatrimony.com/controlapi/successlist.php");
        const result = await response.json();

        const story = result.body.find((story) => story.id === id);
        if (story) {
          // Convert the date format from DD-MM-YYYY to YYYY-MM-DD
          const [day, month, year] = story.marriage_date.split("-");
          const formattedDate = `${year}-${month}-${day}`;

          setInitialData(story);

          setFormData({
            ...story,
            marriage_date: formattedDate, // Use the formatted date
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
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
    const updatedData = {
        ...initialData,
        ...formData,
        id
      };

    try {
      const response = await fetch(
        "https://tulirmatrimony.com/controlapi/editsuccess.php",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ updatedData }),
        }
      );
      console.log(formData);
      const data = await response.json();
      console.log(data);

      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        console.log("Success Stories edited successfully!");
        alert("Success Stories edited successfully!");
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
            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <Link
                  className="nav-item nav-link px-0 me-xl-4"
                  to="javascript:void(0)"
                >
                  <i className="bx bx-menu bx-sm"></i>
                </Link>
              </div>
              <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                <ol className="breadcrumb breadcrumb-style2 mb-0">
                  <li>
                    <MdManageHistory className="breadcrumb-item " />
                  </li>
                  <li style={{ padding: "2px 10px" }}>
                    Edit Success Story
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
                            {formData.image && (
                              <img
                                src={`data:image/jpeg;base64,${formData.image}`}
                                alt="Wedding"
                                className="mt-3"
                                style={{ maxWidth: "200px" }}
                              />
                            )}
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
                              value={formData.bridename}
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
                              value={formData.brid_id}
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
                              value={formData.groom_name}
                              placeholder="Groom's Name"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="groomid">
                              Groom's ID <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              className="form-control required"
                              id="groomid"
                              name="groom_id"
                              value={formData.groom_id}
                              placeholder="Groom's ID"
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
                              value={formData.marriage_date.split('T')[0]} // Ensures correct format for date input
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
                              value={formData.Message}
                              placeholder="Success Message"
                              onChange={handleChange}
                            ></textarea>
                          </div>
                          <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                            Submit
                          </button>
                        </form>
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
                            Record updated successfully.
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
                      Record updated successfully.
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

export default Editstory;
