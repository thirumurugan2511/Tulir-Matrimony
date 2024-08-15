import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { IoMdSettings } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Navbar from '../Navbar/Navbar'
import './Profile.css';
import Smallicon from '../rgt-matrimony-logo.png'
import Editjathagam from '../../../Admin/Components/Member/Editjathagam';
import "../../../Admin/Components/Member/member.css"
import Footer from '../Footer/Footer';
import { useLocation } from "react-router-dom";
import { useAuth } from '../../../AuthContext'


const Profile = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const { userid } = useAuth();
  const { id } = useParams();
  //http://localhost:8000/fetchmember
  //https://tulirmatrimony.com/controlapi/singlecustomer.php?id=239
 

  console.log("User Id From Profile", userid);
  // (`https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${id}`);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${userid}`
        );
        const res = await response.json();
        setProfileData(res);
        console.log(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //https://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${id}
        //http://localhost:8000/api/singlejathagam
        const response = await axios.get(
          `https://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${userid}`
        );
        setData(response.data.body);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [userid]);
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    const fetchDataa = async () => {
      try {
        //https://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${id}
        //http://localhost:8000//api/singlejathagam/${id}
        const response = await axios.get(
          `https://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${userid}`
        );
        setData(response.data.body);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchDataa();
  }, [userid]);

  const formatTime = (timeStr) => {
    if (!timeStr) return "";
    const [hours, minutes] = timeStr.split(":");
    const intHours = parseInt(hours, 10);
    const intMinutes = parseInt(minutes, 10);
    const period = intHours >= 12 ? "PM" : "AM";
    const formattedHours = intHours % 12 || 12;
    const formattedMinutes = intMinutes < 10 ? `0${intMinutes}` : intMinutes;
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  const handleBackClick = () => {
    window.location.href = "/Searchlist";
  };

  // const displayField = (field, fallback = "No Data Available") => {
  //   return field !== null && field !== undefined && field !== "" ? field : fallback;
  // };

  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <div class="layout-page">
            <Navbar />
            <div class="content-wrapper">
              <div
                class="modal fade"
                id="add_commentModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              ></div>
              <div
                class="modal fade"
                id="view_commentModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel123"
                aria-hidden="true"
              ></div>

              <div class="content-wrapper container">
                <div class="row py-2 profile-mobile">
                  <div className="col-lg-4 col-12 mt-2 text-start">
                    <button
                      onClick={handleBackClick}
                      className="btn btn-secondary"
                    >
                      Back to List
                    </button>
                  </div>
                  <div className="text-center col-lg-4 mt-2 col-12">
                    <h2 className="mb-0">My Profile</h2>
                  </div>
                  <div className="col-lg-4 text-end col-12 mt-2 float-right">
                    <Link to="/Editprofile" className="btn btn-secondary">
                      Edit My Details
                    </Link>
                  </div>
                </div>
                {/* <!-- Toast with Placements --> */}

                <div class="container-xxl flex-grow-1 container-p-y">
                  <div class="inner_adProfileMian">
                    <div class="inner_flexDiv-membr d-block d-lg-flex gap-3">
                      <div class="left_member_profilesDiv">
                        <div class="profileView_userAdds position-relative">
                          {profileData ? (
                            <img
                              src={`data:image/png;base64,${profileData.body.image}`}
                              alt="User Profile"
                              class="user_profiles"
                              id="viewProfile"
                            />
                          ) : (
                            <p>Loading...</p>
                          )}
                        </div>
                        <button
                          class="member_groupPhotots"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#multie_photoUpload"
                          aria-expanded="false"
                          aria-controls="multie_photoUpload"
                        >
                          <img
                            src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/AllPhotoIcons.svg"
                            alt=""
                          />{" "}
                          All Photos
                        </button>
                      </div>

                      <div class="right_content_MDivd bg_member w-100 mt-3 mt-lg-0">
                        <div class="top_usenr_btnsgroups">
                          <div class="row text-start">
                            <div class="col-lg-4 mt-3">
                              <div class="user_name_aprv">
                                {profileData ? (
                                  <h4>
                                    {profileData.body.name} -{" "}
                                    {profileData.body.reg_id}
                                  </h4>
                                ) : (
                                  <p>Loading...</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {profileData ? (
                          <div className="btm_users_details">
                            <div className="row">
                              <div className="col-lg-10">
                                <div className="row text-start">
                                  <div className="col-lg-4 col-md-6 col-sm-6 mt-3">
                                    <div className="MDatails_views">
                                      <h5 className="py-2">
                                        <span>
                                          Full Name: {profileData.body.name}
                                        </span>
                                      </h5>
                                      <h5 className="py-2">
                                        <span>
                                          Email: {profileData.body.email}
                                        </span>
                                      </h5>
                                      <h5 className="py-2">
                                        <span>
                                          Religion: {profileData.body.religion}
                                        </span>
                                      </h5>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-sm-6 mt-0 mt-lg-3 mt-md-3 mt-sm-3">
                                    <div className="MDatails_views">
                                      <h5 className="py-2">
                                        <span>
                                          Gender: {profileData.body.gender}
                                        </span>
                                      </h5>
                                      <h5 className="py-2">
                                        <span>Age: {profileData.body.age}</span>
                                      </h5>
                                      <h5 className="py-2">
                                        <span>
                                          Caste: {profileData.body.caste}
                                        </span>
                                      </h5>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-6 col-sm-6 mt-0 mt-lg-3 mt-md-3 mt-sm-3 right_bordermv">
                                    <div className="MDatails_views">
                                      <h5 className="py-2">
                                        <span>
                                          Marital Status:{" "}
                                          {profileData.body.marriage_type}
                                        </span>
                                      </h5>
                                      <h5 className="py-2">
                                        <span>
                                          Mobile: {profileData.body.phonenumber}
                                        </span>
                                      </h5>
                                      <h5 className="py-2">
                                        <span>
                                          Occupation:{" "}
                                          {profileData.body.occupation}
                                        </span>
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <p>Loading...</p>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <!-- photo multie profile  --> */}
                  <div class="collapse" id="multie_photoUpload">
                    {profileData ? (
                      <div class="photo_dvMultie_mainsd">
                        <div class="row">
                          <div
                            class="col-lg-3 mb-4 col-md-4 col-sm-6"
                            id="imageDiv1"
                          >
                            <div class="single_imgProfiels-wb">
                              <div class="position-relative">
                                {profileData.body.image && (
                                  <img
                                    src={`data:image/png;base64,${profileData.body.image}`}
                                    height={200}
                                    alt="Profile 1"
                                    class="profile-Um"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    data-bs-custom-class="custom-tooltip"
                                    data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB"
                                    data-bs-original-title=""
                                    title=""
                                  />
                                )}
                              </div>
                              <button class="btn_vwProfilf">Photo 1</button>
                            </div>
                          </div>
                          <div
                            class="col-lg-3 mb-4 col-md-4 col-sm-6"
                            id="imageDiv2"
                          >
                            <div class="single_imgProfiels-wb">
                              <div class="position-relative">
                                {profileData.body.image1 && (
                                  <img
                                    src={`data:image/png;base64,${profileData.body.image1}`}
                                    height={200}
                                    alt="Profile 2"
                                    class="profile-Um"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    data-bs-custom-class="custom-tooltip"
                                    data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB"
                                    data-bs-original-title=""
                                    title=""
                                  />
                                )}
                              </div>
                              <button class="btn_vwProfilf">Photo 2</button>
                            </div>
                          </div>
                          <div
                            class="col-lg-3 mb-4 col-md-4 col-sm-6"
                            id="imageDiv3"
                          >
                            <div class="single_imgProfiels-wb">
                              <div class="position-relative">
                                {profileData.body.id_image && (
                                  <img
                                    src={`data:image/png;base64,${profileData.body.id_image}`}
                                    height={200}
                                    alt="ID Proof Front"
                                    class="profile-Um"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    data-bs-custom-class="custom-tooltip"
                                    data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB"
                                    data-bs-original-title=""
                                    title=""
                                  />
                                )}
                              </div>
                              <button class="btn_vwProfilf">
                                ID Proof Front
                              </button>
                            </div>
                          </div>
                          <div
                            class="col-lg-3 mb-4 col-md-4 col-sm-6"
                            id="imageDiv4"
                          >
                            <div class="single_imgProfiels-wb">
                              <div class="position-relative">
                                {profileData.body.id_image1 && (
                                  <img
                                    src={`data:image/png;base64,${profileData.body.id_image1}`}
                                    height={200}
                                    alt="ID Proof Back"
                                    class="profile-Um"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    data-bs-custom-class="custom-tooltip"
                                    data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB"
                                    data-bs-original-title=""
                                    title=""
                                  />
                                )}
                              </div>
                              <button class="btn_vwProfilf">
                                ID Proof Back
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </div>

                  <div class="main_secPUtabs_btns">
                    <div class="row">
                      <div class="col-lg-6 mt-4 pe-0 d-none d-lg-block">
                        <div class="tab_btncontrolPartners">
                          <ul
                            class="nav nav-pills mb-3 gap-2 w-100 justify-content-center justify-content-lg-start"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li class="nav-item w-75" role="presentation">
                              <button
                                class="nav-link active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                              >
                                <img
                                  src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/use_detailsIcon.svg"
                                  alt=""
                                />
                                User Detail
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                              >
                                <img
                                  src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/partner_prefIcon.png"
                                  alt=""
                                />
                                Partner Preference
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link"
                                id="pills-horescope-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-horescope"
                                type="button"
                                role="tab"
                                aria-controls="pills-horescope"
                                aria-selected="false"
                              >
                                <img
                                  src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/partner_prefIcon.png"
                                  alt=""
                                />
                                Horoscope Image
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="col-lg-4 mt-4 pe-0 d-block d-lg-none">
                        <div class="tab_btncontrolPartners">
                          <ul
                            class="nav nav-pills mb-3 gap-2 w-100 justify-content-center justify-content-lg-start"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li class="nav-item w-75" role="presentation">
                              <button
                                class="nav-link active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                              >
                                <img
                                  src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/use_detailsIcon.svg"
                                  alt=""
                                />
                                User Detail
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                              >
                                <img
                                  src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/partner_prefIcon.png"
                                  alt=""
                                />
                                Partner Preference
                              </button>
                            </li>
                            <li class="nav-item" role="presentation">
                              <button
                                class="nav-link"
                                id="pills-horescope-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-horescope"
                                type="button"
                                role="tab"
                                aria-controls="pills-horescope"
                                aria-selected="false"
                              >
                                <img
                                  src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/partner_prefIcon.png"
                                  alt=""
                                />
                                Horoscope Image
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- tabs content partner & usaer  --> */}
                  {profileData ? (
                    <div class="partner_user_Tabmain">
                      <div class="tab-content p-0" id="pills-tabContent">
                        <div
                          class="tab-pane fade show active"
                          id="pills-home"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                          tabindex="0"
                        >
                          <div class="inner_collapse_userPartner mb-4">
                            <button
                              class="collapbtn"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#U_detailsDiv1"
                              aria-expanded="false"
                              aria-controls="U_detailsDiv1"
                            >
                              <div class="icon_usBox">
                                <div class="text_icons-vb">
                                  <img
                                    src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB1.svg"
                                    alt=""
                                  />
                                </div>
                                Personal Details
                              </div>
                            </button>
                            <div class="collapse show" id="U_detailsDiv1">
                              <div class="inner_views_detailsFGH">
                                <div class="row text-start">
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Full Name :</span>{" "}
                                        {profileData.body.name}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Gender :</span>{" "}
                                        {profileData.body.gender}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Email Id :</span>{" "}
                                        {profileData.body.email}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Mobile :</span>{" "}
                                        {profileData.body.phonenumber}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Mother Tongue :</span>{" "}
                                        {profileData.body.mother_tongue}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Birthdate :</span>{" "}
                                        {formatDate(profileData.body.dob)}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Marital Status :</span>{" "}
                                        {profileData.body.marriage_type}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Plan Name :</span>{" "}
                                        {profileData.body.plan_name}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>குல தெய்வம் :</span>{" "}
                                        {profileData.body.kuladeivam}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="inner_collapse_userPartner mb-4">
                            <button
                              class="collapbtn"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#U_detailsDiv2"
                              aria-expanded="false"
                              aria-controls="U_detailsDiv2"
                            >
                              <div class="icon_usBox">
                                <div class="text_icons-vb">
                                  <img
                                    src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB2.svg"
                                    alt=""
                                  />
                                </div>
                                Religious Information
                              </div>
                            </button>
                            <div class="collapse show" id="U_detailsDiv2">
                              <div class="inner_views_detailsFGH">
                                <div class="row text-start">
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Religion :</span>{" "}
                                        {profileData.body.religion}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Caste :</span>{" "}
                                        {profileData.body.caste}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Sub Caste :</span>{" "}
                                        {profileData.body.subcaste}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Manglik :</span>{" "}
                                        {profileData.body.sevaikiragam}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Gothra :</span>{" "}
                                        {profileData.body.gothram}
                                      </h5>
                                    </div>
                                  </div>

                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Star :</span>{" "}
                                        {profileData.body.star}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Patham :</span>{" "}
                                        {profileData.body.patham_number}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Zodiac Sign :</span>{" "}
                                        {profileData.body.zodiacsign}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Birth Place :</span>{" "}
                                        {profileData.body.birthplace}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Birth Time :</span>
                                        {formatTime(profileData.body.birthtime)}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="inner_collapse_userPartner mb-4">
                            <button
                              class="collapbtn"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#U_detailsDiv3"
                              aria-expanded="false"
                              aria-controls="U_detailsDiv3"
                            >
                              <div class="icon_usBox">
                                <div class="text_icons-vb">
                                  <img
                                    src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB3.svg"
                                    alt=""
                                  />
                                </div>
                                Education / Occupation Details
                              </div>
                            </button>
                            <div class="collapse show" id="U_detailsDiv3">
                              <div class="inner_views_detailsFGH">
                                <div class="row text-start">
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Education :</span>{" "}
                                        {profileData.body.education}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Education Details :</span>{" "}
                                        {profileData.body.education_details}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Job details :</span>{" "}
                                        {profileData.body.jobdetails}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Occupation :</span>{" "}
                                        {profileData.body.occupation}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Job Location :</span>{" "}
                                        {profileData.body.joblocation}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Annual Income :</span> INR{" "}
                                        {profileData.body.annual_income}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="inner_collapse_userPartner mb-4">
                            <button
                              class="collapbtn"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#U_detailsDiv4"
                              aria-expanded="false"
                              aria-controls="U_detailsDiv4"
                            >
                              <div class="icon_usBox">
                                <div class="text_icons-vb">
                                  <img
                                    src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB4.svg"
                                    alt=""
                                  />
                                </div>
                                Residence
                              </div>
                            </button>
                            <div class="collapse show" id="U_detailsDiv4">
                              <div class="inner_views_detailsFGH">
                                <div class="row text-start">
                                  {/* <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                              <div class="detalistsleg">
                                  <h5 class="py-2"><span>Country Name :</span> {profileData.body.country}</h5>
                              </div>
                          </div>
                          <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                              <div class="detalistsleg">
                                  <h5 class="py-2"><span>State Name :</span> {profileData.body.state}</h5>
                              </div>
                          </div> */}
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>District Name :</span>{" "}
                                        {profileData.body.city}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Residence Type :</span>{" "}
                                        {profileData.body.residece}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Alternate Number :</span>{" "}
                                        {profileData.body.alternatenumber}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Mother country :</span>{" "}
                                        {profileData.body.mothercountry}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Address :</span>{" "}
                                        {profileData.body.address}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="inner_collapse_userPartner mb-4">
                            <button
                              class="collapbtn"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#U_detailsDiv5"
                              aria-expanded="false"
                              aria-controls="U_detailsDiv5"
                            >
                              <div class="icon_usBox">
                                <div class="text_icons-vb">
                                  <img
                                    src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB5.svg"
                                    alt=""
                                  />
                                </div>
                                Physical Info
                              </div>
                            </button>
                            <div class="collapse show" id="U_detailsDiv5">
                              <div class="inner_views_detailsFGH">
                                <div class="row text-start">
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Height :</span>{" "}
                                        {profileData.body.height}-cm
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Blood Group :</span>{" "}
                                        {profileData.body.bloodgroup}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Eating Habits :</span>{" "}
                                        {profileData.body.food_habits}
                                      </h5>
                                    </div>
                                  </div>
                                  {/* <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Smoking :</span> {profileData.body.smoking}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Drinking :</span> {profileData.body.drinking}</h5>
                        </div>
                    </div> */}
                                  {/* <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Body Type :</span> {profileData.body.body_type}</h5>
                        </div>
                    </div> */}
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Skin Tone :</span>{" "}
                                        {profileData.body.skin_tone}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Profile By :</span>{" "}
                                        {profileData.body.profile_by}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>About Me :</span>{" "}
                                        {profileData.body.aboutme}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="inner_collapse_userPartner mb-4">
                            <button
                              class="collapbtn"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#U_detailsDiv6"
                              aria-expanded="false"
                              aria-controls="U_detailsDiv6"
                            >
                              <div class="icon_usBox">
                                <div class="text_icons-vb">
                                  <img
                                    src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB6.svg"
                                    alt=""
                                  />
                                </div>
                                Family Details
                              </div>
                            </button>
                            <div class="collapse show" id="U_detailsDiv6">
                              <div class="inner_views_detailsFGH">
                                <div class="row text-start">
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Family Type :</span>{" "}
                                        {profileData.body.family_type}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Family Status :</span>{" "}
                                        {profileData.body.family_status}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Father Name :</span>{" "}
                                        {profileData.body.father_name}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Father Occupation :</span>{" "}
                                        {profileData.body.father_occupation}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Mother Name :</span>{" "}
                                        {profileData.body.mother_name}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Mother Occupation :</span>{" "}
                                        {profileData.body.mother_occupation}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>No Of Brother :</span>{" "}
                                        {profileData.body.brothers_count}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>No Of Sister :</span>{" "}
                                        {profileData.body.sisters_count}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-12 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5>
                                        <span>Family Details :</span>{" "}
                                        {profileData.body.family_details}{" "}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                          tabindex="0"
                        >
                          <div class="inner_collapse_userPartner mb-4">
                            <button
                              class="collapbtn"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#U_detailsDiv1"
                              aria-expanded="false"
                              aria-controls="U_detailsDiv1"
                            >
                              <div class="icon_usBox">
                                <div class="text_icons-vb">
                                  <img
                                    src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB1.svg"
                                    alt=""
                                  />
                                </div>{" "}
                                Partner Preferences
                              </div>
                            </button>
                            <div class="collapse show" id="U_detailsDiv1">
                              <div class="inner_views_detailsFGH">
                                <div class="row text-start">
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Partner From Age :</span>{" "}
                                        {profileData.body.partner_from_age}{" "}
                                        Years
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Partner To Age :</span>{" "}
                                        {profileData.body.partner_to_age} Years
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Partner From Height :</span>{" "}
                                        {profileData.body.partner_height}cm -
                                        4ft 4in
                                      </h5>
                                    </div>
                                  </div>
                                  {/* <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner To Weight :</span> {profileData.body.partner_weight} Kg</h5>
             </div>
         </div> */}
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Partner Religion :</span>{" "}
                                        {profileData.body.partner_religion}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Partner Caste :</span>{" "}
                                        {profileData.body.partner_caste}
                                      </h5>
                                    </div>
                                  </div>
                                  {/* <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner Country :</span> {profileData.body.partner_country}</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner State :</span> {profileData.body.partner_state}</h5>
             </div>
         </div> */}
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Partner Annual Income :</span>{" "}
                                        Upto INR{" "}
                                        {profileData.body.partner_salary}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Partner Marital Status :</span>{" "}
                                        {
                                          profileData.body
                                            .partner_matrial_status
                                        }
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Partner Education :</span>{" "}
                                        {profileData.body.partner_education}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Partner Occupation :</span>{" "}
                                        {profileData.body.partner_occupation}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Partner Mother Tongue :</span>{" "}
                                        {profileData.body.partner_mother_tongue}
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                                    <div class="detalistsleg">
                                      <h5 class="py-2">
                                        <span>Partner Manglik :</span>{" "}
                                        {profileData.body.partner_manglik}
                                      </h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="tab-pane fade"
                          id="pills-horescope"
                          role="tabpanel"
                          aria-labelledby="pills-horescope"
                          tabindex="0"
                        >
                          <div class="inner_collapse_userPartner mb-4">
                            <button
                              class="collapbtn"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#U_detailsDiv2"
                              aria-expanded="false"
                              aria-controls="U_detailsDiv2"
                            >
                              <div class="icon_usBox">
                                <div class="text_icons-vb">
                                  <img
                                    src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB1.svg"
                                    alt=""
                                  />
                                </div>{" "}
                                Heroscope Images
                              </div>
                            </button>
                            <div class="collapse show" id="U_detailsDiv2">
                              <div class="inner_views_detailsFGH">
                                <div class="row mx-auto">
                                  <div className="text-end">
                                    <Link
                                      to={`/Edituserjathagam/${userid}`}
                                      class="icon_usBox"
                                    >
                                      <MdModeEdit class="bx bxs-edit" /> Edit
                                      Jathagam
                                    </Link>
                                  </div>
                                  {data ? (
                                    <>
                                      <div className="row">
                                        <div className="col-lg-10 mt-5 m-auto mb-2 row">
                                          <div className="col-lg-3 d-flex mb-5 align-items-center">
                                            <span className="fw-bold jd_text mb-0 me-2">
                                              திசை இருப்பு
                                            </span>
                                            <span style={{ color: "black" }}>
                                              : {data.thisaiirupu}
                                            </span>
                                          </div>
                                          <div className="col-lg-3 d-flex mb-5 align-items-center">
                                            <span class="fw-bold jd_text mb-0 me-2">
                                              ஆண்டு
                                            </span>
                                            <span style={{ color: "black" }}>
                                              : {data.year}
                                            </span>
                                          </div>
                                          <div className="col-lg-3 d-flex mb-5 align-items-center">
                                            <span class="fw-bold jd_text mb-0 me-2">
                                              மாதம்
                                            </span>
                                            <span style={{ color: "black" }}>
                                              : {data.month}
                                            </span>
                                          </div>
                                          <div className="col-lg-3 d-flex mb-5 align-items-center">
                                            <span class="fw-bold jd_text mb-0 me-2">
                                              நாள்
                                            </span>
                                            <span style={{ color: "black" }}>
                                              : {data.days}
                                            </span>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-lg-6 mt-5 mb-2">
                                        <table class="table table-bordered table_jadh">
                                          <tbody>
                                            <tr>
                                              <td className="j_dd">
                                                {data.rasi1}
                                              </td>
                                              <td className="j_dd">
                                                {data.rasi2}
                                              </td>
                                              <td className="j_dd">
                                                {data.rasi3}
                                              </td>
                                              <td className="j_dd">
                                                {data.rasi4}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="j_dd">
                                                {data.rasi5}
                                              </td>
                                              <td
                                                colspan="2"
                                                className="j_dd"
                                                rowSpan={2}
                                              >
                                                ராசி
                                              </td>
                                              <td className="j_dd">
                                                {data.rasi6}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="j_dd">
                                                {data.rasi7}
                                              </td>
                                              <td className="j_dd">
                                                {data.rasi8}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="j_dd">
                                                {data.rasi9}
                                              </td>
                                              <td className="j_dd">
                                                {data.rasi10}
                                              </td>
                                              <td className="j_dd">
                                                {data.rasi11}
                                              </td>
                                              <td className="j_dd">
                                                {data.rasi12}
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                      <div className="col-lg-6 mt-5 mb-2">
                                        <table class="table table-bordered">
                                          <tbody>
                                            <tr>
                                              <td className="j_dd">
                                                {data.amsam1}
                                              </td>
                                              <td className="j_dd">
                                                {data.amsam2}
                                              </td>
                                              <td className="j_dd">
                                                {data.amsam3}
                                              </td>
                                              <td className="j_dd">
                                                {data.amsam4}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="j_dd">
                                                {data.amsam5}
                                              </td>
                                              <td
                                                colspan="2"
                                                className="j_dd"
                                                rowSpan={2}
                                              >
                                                அம்சம்
                                              </td>
                                              <td className="j_dd">
                                                {data.amsam6}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="j_dd">
                                                {data.amsam7}
                                              </td>
                                              <td className="j_dd">
                                                {data.amsam8}
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="j_dd">
                                                {data.amsam9}
                                              </td>
                                              <td className="j_dd">
                                                {data.amsam10}
                                              </td>
                                              <td className="j_dd">
                                                {data.amsam11}
                                              </td>
                                              <td className="j_dd">
                                                {data.amsam12}
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                      {/* <div className='col-lg-6 mt-5 mb-2'>
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <td>{data.rasi1}</td>
            </tr>
            <tr>
              <td>{data.rasi2}</td>
            </tr>
            <tr>
              <td>{data.rasi3}</td>
            </tr>
            <tr>
             
              <td>{data.rasi4}</td>
            </tr>
            <tr>
              
              <td>{data.rasi5}</td>
            </tr>
            <tr>
             
              <td>{data.rasi6}</td>
            </tr>
            <tr>
             
              <td>{data.rasi7}</td>
            </tr>
            <tr>
             
              <td>{data.rasi8}</td>
            </tr>
            <tr>
             
              <td>{data.rasi9}</td>
            </tr>
            <tr>
            
              <td>{data.rasi10}</td>
            </tr>
            <tr>
              <td>{data.rasi11}</td>
            </tr>
            <tr>
              <td>{data.rasi12}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='col-lg-6 mt-5 mb-2'>
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <td>{data.amsam1}</td>
            </tr>
            <tr>
              <td>{data.amsam2}</td>
            </tr>
            <tr>
              <td>{data.amsam3}</td>
            </tr>
            <tr>
              <td>{data.amsam4}</td>
            </tr>
            <tr>
              <td>{data.amsam5}</td>
            </tr>
            <tr>
              <td>{data.amsam6}</td>
            </tr>
            <tr>
              <td>{data.amsam7}</td>
            </tr>
            <tr>
              <td>{data.amsam8}</td>
            </tr>
            <tr>
              <td>{data.amsam9}</td>
            </tr>
            <tr>
              <td>{data.amsam10}</td>
            </tr>
            <tr>
              <td>{data.amsam11}</td>
            </tr>
            <tr>
              <td>{data.amsam12}</td>
            </tr>
          </tbody>
        </table>
      </div> */}
                                    </>
                                  ) : (
                                    <p>Loading...</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
                {/* <!-- / Content --> */}
                <div class="content-backdrop fade"></div>
              </div>
              <input
                type="hidden"
                name="_token"
                value="OfJtEAKfm05LT4mn2LyUcO9w95kwaOr6sZRnnZG0"
              />
              <input
                type="hidden"
                name="changeStatusUrl"
                id="changeStatusUrl"
                value="https://gloriousmatrimonial.com/admin/member/changeStatus"
              />
              <input
                type="hidden"
                name="redirectUrl"
                id="redirectUrl"
                value=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Profile