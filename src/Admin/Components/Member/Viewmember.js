import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {Link} from 'react-router-dom'
import Aside from '../Aside/Aside'
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Smallicon from '../../Components/heart-icon.png'
import Astrology from './astrology.png'


const Viewmember = () => {
  const { id } = useParams();
  // http://localhost:8000/fetchmember


  console.log(id); 
  // (`https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${id}`);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${id}`);
        const data = await response.json();
        setProfileData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
   <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
    <Aside />
    <div class="layout-page">
            <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached
            align-items-center bg-navbar-theme" id="layout-navbar">
                <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                        <i class="bx bx-menu bx-sm"></i>
                    </a>
                </div>
                <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <ol class="breadcrumb breadcrumb-style2 mb-0">
                    <li><MdManageHistory  class="bx bx-user me-2"/></li>
                        <li class="breadcrumb-item ">  Manage Memberview </li>
                    </ol>
                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                        <li class="nav-item lh-1 me-3">
                        <GrUserAdmin class="bx bx-user me-2" /><span class="align-middle">Administrator</span>
                                                    </li>
                                                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                            <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <div class="avatar avatar-online">
                                    <img src={Smallicon} alt="" class="w-px-40 h-auto rounded-circle"/>
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar avatar-online">
                                                    <img src={Smallicon} alt="" class="w-px-40 h-auto rounded-circle"/>
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
                                    <Link class="dropdown-item" to="/Sitesetting">
                                        <IoMdSettings class="bx bx-cog me-2" />
                                        <span class="align-middle">Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <div class="dropdown-divider"></div>
                                </li>
                                <li>
                                         <Link class="dropdown-item" href="/Signin">
                                    
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
                
<div class="modal fade" id="add_commentModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
</div>
<div class="modal fade" id="view_commentModal" tabindex="-1" aria-labelledby="exampleModalLabel123" aria-hidden="true">
</div>

<div class="content-wrapper">
  {/* <!-- Toast with Placements --> */}
  {/* <!-- Toast with Placements -->
  <!-- Content --> */}
  <div class="container-xxl flex-grow-1 container-p-y">
    <div class="inner_adProfileMian">
      <div class="inner_flexDiv-membr d-block d-lg-flex gap-3">
        <div class="left_member_profilesDiv">
          <div class="profileView_userAdds position-relative">
          {profileData ? (
            <img src={profileData.body.image} alt="User Profile" class="user_profiles" id="viewProfile"/>
          ) : (
            <p>Loading...</p>
          )}
          </div>
          <button class="member_groupPhotots" type="button" data-bs-toggle="collapse" data-bs-target="#multie_photoUpload" aria-expanded="false" aria-controls="multie_photoUpload">
            <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/AllPhotoIcons.svg" alt=""/> All Photos
          </button>
        </div>
       
        <div class="right_content_MDivd bg_member w-100 mt-3 mt-lg-0">
          <div class="top_usenr_btnsgroups">
            <div class="row text-start">
              <div class="col-lg-8 mt-3">
                <div class="user_name_aprv">
                {profileData ? (
                  <h4>{profileData.body.name} - {profileData.body.reg_id}</h4>
                ) : (
                  <p>Loading...</p>
                )}
                </div>
              </div>
              <div class="col-lg-4">
                {/* <div class="user_name_aprv_new">
                  <h6 class="text-dark"><span>Completed Profile (100%)</span>
                    <div class="progress">
                      <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        100 %
                      </div>
                    </div>
                  </h6>
                </div> */}
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
                    <h5 className="py-2"><span>Full Name: {profileData.body.name}</span></h5>
                    <h5 className="py-2"><span>Email: {profileData.body.email}</span></h5>
                    <h5 className="py-2"><span>Religion: {profileData.body.religion}</span></h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-0 mt-lg-3 mt-md-3 mt-sm-3">
                  <div className="MDatails_views">
                    <h5 className="py-2"><span>Gender: {profileData.body.gender}</span></h5>
                    <h5 className="py-2"><span>Mobile: {profileData.body.phonenumber}</span></h5>
                    <h5 className="py-2"><span>Caste: {profileData.body.caste}</span></h5>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-0 mt-lg-3 mt-md-3 mt-sm-3 right_bordermv">
                  <div className="MDatails_views">
                    <h5 className="py-2"><span>Marital Status: {profileData.body.marriage_type}</span></h5>
                    <h5 className="py-2"><span>State: {profileData.body.state}</span></h5>
                    <h5 className="py-2"><span>Occupation: {profileData.body.occupation}</span></h5>
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
                                                            <div class="col-lg-3 mb-4 col-md-4 col-sm-6" id="imageDiv1">
            <div class="single_imgProfiels-wb">
              <div class="position-relative">
                <img src={profileData.body.image} height={200} alt="Profile 1" class="profile-Um" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB" data-bs-original-title="" title=""/>
                    
                                                                                
               
                                                                              </div>
              <button class="btn_vwProfilf">Photo 1</button>
            </div>
          </div>
                              <div class="col-lg-3 mb-4 col-md-4 col-sm-6" id="imageDiv2">
            <div class="single_imgProfiels-wb">
              <div class="position-relative">
                <img src={profileData.body.image2} height={200} alt="Profile 2" class="profile-Um" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB" data-bs-original-title="" title=""/>
                                         

                                                                              </div>
              <button class="btn_vwProfilf">Photo 2</button>
            </div>
          </div>
                              <div class="col-lg-3 mb-4 col-md-4 col-sm-6" id="imageDiv3">
            <div class="single_imgProfiels-wb">
              <div class="position-relative">
                <img src={profileData.body.id_image} height={200} alt="Id Profile" class="profile-Um" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB" data-bs-original-title="" title=""/>
                               

                                                                              </div>
              <button class="btn_vwProfilf">ID Proof Front</button>
            </div>
          </div>
                              <div class="col-lg-3 mb-4 col-md-4 col-sm-6" id="imageDiv4">
            <div class="single_imgProfiels-wb">
              <div class="position-relative">
                <img src={profileData.body.id_image2} height={200} alt="Id proof" class="profile-Um" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB" data-bs-original-title="" title=""/>
                           
                                                                              </div>
              <button class="btn_vwProfilf">ID Proof Back</button>
            </div>
          </div>
                                               
                             
                                      </div>
      </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>

    {/* <div class="main_secPUtabs_btns mt-4 collapse" id="connectActivity">
      <div class="row">
        <div class="col-lg-12 mt-12 pe-0 d-none d-lg-block">
          <div class="tab_btncontrolPartners">
            <ul class="nav nav-pills mb-3 gap-2 w-100 justify-content-center justify-content-lg-start" id="pills-tab" role="tablist">
              <li class="nav-item w-75" role="presentation">
                <a target="_blank" href="https://gloriousmatrimonial.com/admin/photo-request/GLMATRI1115" rel="noopener">
                  <button class="nav-link" id="pills-photo_req-tab" data-bs-toggle="pill" data-bs-target="#pills-photo_req" type="button" role="tab" aria-controls="pills-photo_req" aria-selected="true"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/use_detailsIcon.svg" alt=""/>Photo
                    Request</button>
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a target="_blank" rel="noopener" href="https://gloriousmatrimonial.com/admin/contact-request/GLMATRI1115">
                  <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/partner_prefIcon.png" alt=""/>Contact Request</button>
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a target="_blank" rel="noopener" href="https://gloriousmatrimonial.com/admin/express-interest/GLMATRI1115">
                  <button class="nav-link" id="pills-connects-tab" data-bs-toggle="pill" data-bs-target="#pills-connects" type="button" role="tab" aria-controls="pills-connects" aria-selected="false"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/partner_prefIcon.png" alt=""/>Connect
                    List</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 mt-4 pe-0 d-block d-lg-none">
          <div class="tab_btncontrolPartners">
            <ul class="nav nav-pills mb-3 gap-2 w-100 justify-content-center justify-content-lg-start" id="pills-tab" role="tablist">
              <li class="nav-item w-75" role="presentation">
                <a target="_blank" href="https://gloriousmatrimonial.com/admin/photo-request/GLMATRI1115" rel="noopener">
                  <button class="nav-link" id="pills-photo_req-tab" data-bs-toggle="pill" data-bs-target="#pills-photo_req" type="button" role="tab" aria-controls="pills-photo_req" aria-selected="true"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/use_detailsIcon.svg" alt=""/>Photo
                    Request</button>
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a target="_blank" href="https://gloriousmatrimonial.com/admin/contact-request/GLMATRI1115" rel="noopener">
                  <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/partner_prefIcon.png" alt=""/>Contact Request</button>
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a target="_blank" href="https://gloriousmatrimonial.com/admin/express-interest/GLMATRI1115" rel="noopener">
                  <button class="nav-link" id="pills-connects-tab" data-bs-toggle="pill" data-bs-target="#pills-connects" type="button" role="tab" aria-controls="pills-connects" aria-selected="false"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/partner_prefIcon.png" alt=""/>Connect
                    List</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> */}
    <div class="main_secPUtabs_btns">
      <div class="row">
        <div class="col-lg-6 mt-4 pe-0 d-none d-lg-block">
          <div class="tab_btncontrolPartners">
            <ul class="nav nav-pills mb-3 gap-2 w-100 justify-content-center justify-content-lg-start" id="pills-tab" role="tablist">
              <li class="nav-item w-75" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/use_detailsIcon.svg" alt=""/>User Detail</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/partner_prefIcon.png" alt=""/>Partner
                  Preference</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-horescope-tab" data-bs-toggle="pill" data-bs-target="#pills-horescope" type="button" role="tab" aria-controls="pills-horescope" aria-selected="false"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/partner_prefIcon.png" alt=""/>Horoscope Image</button>
              </li>
            </ul>
          </div>
        </div>
      
        <div class="col-lg-4 mt-4 pe-0 d-block d-lg-none">
          <div class="tab_btncontrolPartners">
            <ul class="nav nav-pills mb-3 gap-2 w-100 justify-content-center justify-content-lg-start" id="pills-tab" role="tablist">
              <li class="nav-item w-75" role="presentation">
                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/use_detailsIcon.svg" alt=""/>User Detail</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/partner_prefIcon.png" alt=""/>Partner Preference</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="pills-horescope-tab" data-bs-toggle="pill" data-bs-target="#pills-horescope" type="button" role="tab" aria-controls="pills-horescope" aria-selected="false"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/partner_prefIcon.png" alt=""/>Horoscope Image</button>
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
        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                                  <div class="inner_collapse_userPartner mb-4">
            <button class="collapbtn" type="button" data-bs-toggle="collapse" data-bs-target="#U_detailsDiv1" aria-expanded="false" aria-controls="U_detailsDiv1">
              <div class="icon_usBox">
                <div class="text_icons-vb"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB1.svg" alt=""/></div>
                Personal Details
              </div>
            </button>
            <div class="collapse show" id="U_detailsDiv1">
            <div class="inner_views_detailsFGH">
                <div class="row text-start">
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Full Name :</span> {profileData.body.name}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Gender :</span> {profileData.body.gender}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Email Id :</span> {profileData.body.email}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Mobile :</span> {profileData.body.phonenumber}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Mother Tongue :</span> {profileData.body.mother_tongue}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Birthdate :</span> {profileData.body.dob}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Marital Status :</span> {profileData.body.marriage_type}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Total Children :</span> {profileData.body.status_children}</h5>
                        </div>
                    </div>
                    {/* <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Status Children :</span> Not living with me</h5>
                        </div> */}
            </div>
        </div>
    </div>
</div>

        
                              <div class="inner_collapse_userPartner mb-4">
            <button class="collapbtn" type="button" data-bs-toggle="collapse" data-bs-target="#U_detailsDiv2" aria-expanded="false" aria-controls="U_detailsDiv2">
              <div class="icon_usBox">
                <div class="text_icons-vb"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB2.svg" alt=""/></div>
                Religious Information
              </div>
            </button>
            <div class="collapse show" id="U_detailsDiv2">
            <div class="inner_views_detailsFGH">
              <div class="row text-start">
                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                      <div class="detalistsleg">
                          <h5 class="py-2"><span>Religion :</span> {profileData.body.religion}</h5>
                      </div>
                  </div>
                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                      <div class="detalistsleg">
                          <h5 class="py-2"><span>Caste :</span> {profileData.body.caste}</h5>
                      </div>
                  </div>
                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                      <div class="detalistsleg">
                          <h5 class="py-2"><span>Sub Caste :</span> {profileData.body.subcaste}</h5>
                      </div>
                  </div>
                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                      <div class="detalistsleg">
                          <h5 class="py-2"><span>Manglik :</span> {profileData.body.sevaikiragam}</h5>
                      </div>
                  </div>
                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                      <div class="detalistsleg">
                          <h5 class="py-2"><span>Gothra :</span> {profileData.body.gothram}</h5>
                      </div>
                  </div>
                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                      <div class="detalistsleg">
                          <h5 class="py-2"><span>Moonsign :</span> {profileData.body.moonsign}</h5>
                      </div>
                  </div>
                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                      <div class="detalistsleg">
                          <h5 class="py-2"><span>Star :</span> {profileData.body.star}</h5>
                      </div>
                  </div>
                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                      <div class="detalistsleg">
                          <h5 class="py-2"><span>Birth Place :</span> {profileData.body.birthplace}</h5>
                      </div>
                  </div>
                  <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                      <div class="detalistsleg">
                          <h5 class="py-2"><span>Birth Time :</span>{profileData.body.birthtime}</h5>
                      </div>
                  </div>
              </div>
</div>

            </div>
          </div>
                              <div class="inner_collapse_userPartner mb-4">
            <button class="collapbtn" type="button" data-bs-toggle="collapse" data-bs-target="#U_detailsDiv3" aria-expanded="false" aria-controls="U_detailsDiv3">
              <div class="icon_usBox">
                <div class="text_icons-vb"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB3.svg" alt=""/></div>
                Education / Occupation Details
              </div>
            </button>
            <div class="collapse show" id="U_detailsDiv3">
            <div class="inner_views_detailsFGH">
                  <div class="row text-start">
                      <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                          <div class="detalistsleg">
                              <h5 class="py-2"><span>Education :</span> {profileData.body.education}</h5>
                          </div>
                      </div>
                      <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                          <div class="detalistsleg">
                              <h5 class="py-2"><span>Education Details :</span> {profileData.body.education_details}</h5>
                          </div>
                      </div>
                      <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                          <div class="detalistsleg">
                              <h5 class="py-2"><span>Employee In :</span> {profileData.body.employee}</h5>
                          </div>
                      </div>
                      <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                          <div class="detalistsleg">
                              <h5 class="py-2"><span>Occupation :</span> {profileData.body.occupation}</h5>
                          </div>
                      </div>
                      <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                          <div class="detalistsleg">
                              <h5 class="py-2"><span>Annual Income :</span> INR {profileData.body.annual_income}</h5>
                          </div>
                      </div>
                  </div>
              </div>

            </div>
          </div>
                              <div class="inner_collapse_userPartner mb-4">
            <button class="collapbtn" type="button" data-bs-toggle="collapse" data-bs-target="#U_detailsDiv4" aria-expanded="false" aria-controls="U_detailsDiv4">
              <div class="icon_usBox">
                <div class="text_icons-vb"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB4.svg" alt=""/></div>
                Residence
              </div>
            </button>
            <div class="collapse show" id="U_detailsDiv4">
            <div class="inner_views_detailsFGH">
                      <div class="row text-start">
                          <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                              <div class="detalistsleg">
                                  <h5 class="py-2"><span>Country Name :</span> {profileData.body.country}</h5>
                              </div>
                          </div>
                          <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                              <div class="detalistsleg">
                                  <h5 class="py-2"><span>State Name :</span> {profileData.body.state}</h5>
                              </div>
                          </div>
                          <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                              <div class="detalistsleg">
                                  <h5 class="py-2"><span>City Name :</span> {profileData.body.city}</h5>
                              </div>
                          </div>
                          <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                              <div class="detalistsleg">
                                  <h5 class="py-2"><span>Residence Type :</span> {profileData.body.residece}</h5>
                              </div>
                          </div>
                          <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                              <div class="detalistsleg">
                                  <h5 class="py-2"><span>Alternate Number :</span> {profileData.body.alternatenumber}</h5>
                              </div>
                          </div>
                          <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                              <div class="detalistsleg">
                                  <h5 class="py-2"><span>If NRI Originated country :</span> {profileData.body.nrinumber}</h5>
                              </div>
                          </div>
                          <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                              <div class="detalistsleg">
                                  <h5 class="py-2"><span>Address :</span> {profileData.body.address}</h5>
                              </div>
                          </div>
                      </div>
                    </div>

            </div>
          </div>
                              <div class="inner_collapse_userPartner mb-4">
            <button class="collapbtn" type="button" data-bs-toggle="collapse" data-bs-target="#U_detailsDiv5" aria-expanded="false" aria-controls="U_detailsDiv5">
              <div class="icon_usBox">
                <div class="text_icons-vb"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB5.svg" alt=""/></div>
                Physical Info
              </div>
            </button>
            <div class="collapse show" id="U_detailsDiv5">
            <div class="inner_views_detailsFGH">
                <div class="row text-start">
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Height :</span> {profileData.body.height}-cm</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Weight :</span> {profileData.body.weight}-Kg</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Eating Habits :</span> {profileData.body.food_habits}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Smoking :</span> {profileData.body.smoking}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Drinking :</span> {profileData.body.drinking}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Body Type :</span> {profileData.body.body_type}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Skin Tone :</span> {profileData.body.skin_tone}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Profile By :</span> {profileData.body.profile_by}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>About Me :</span> {profileData.body.aboutme}</h5>
                        </div>
                    </div>
                </div>
            </div>

            </div>
          </div>
                              <div class="inner_collapse_userPartner mb-4">
            <button class="collapbtn" type="button" data-bs-toggle="collapse" data-bs-target="#U_detailsDiv6" aria-expanded="false" aria-controls="U_detailsDiv6">
              <div class="icon_usBox">
                <div class="text_icons-vb"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB6.svg" alt=""/></div>
                Family Details
              </div>
            </button>
            <div class="collapse show" id="U_detailsDiv6">
            <div class="inner_views_detailsFGH">
                <div class="row text-start">
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Family Type :</span> {profileData.body.family_type}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Family Status :</span> {profileData.body.family_status}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Father Name :</span> {profileData.body.father_name}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Father Occupation :</span> {profileData.body.father_occupation}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Mother Name :</span> {profileData.body.mother_name}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>Mother Occupation :</span> {profileData.body.mother_occupation}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>No Of Brother :</span> {profileData.body.brothers_count}</h5>
                        </div>
                    </div>
                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5 class="py-2"><span>No Of Sister :</span> {profileData.body.sisters_count}</h5>
                        </div>
                    </div>
                    <div class="col-lg-12 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                        <div class="detalistsleg">
                            <h5><span>Family Details :</span> {profileData.body.family_details} </h5>
                        </div>
                    </div>
                </div>
            </div>

            </div>
          </div>
                            </div>
                          
       <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
       <div class="inner_collapse_userPartner mb-4">
<button class="collapbtn" type="button" data-bs-toggle="collapse" data-bs-target="#U_detailsDiv1" aria-expanded="false" aria-controls="U_detailsDiv1">
 <div class="icon_usBox">
   <div class="text_icons-vb"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB1.svg" alt=""/></div> Partner Preferences
 </div>
</button>
<div class="collapse show" id="U_detailsDiv1">
<div class="inner_views_detailsFGH">
     <div class="row text-start">
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner From Age :</span> {profileData.body.patner_from_age} Years</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner To Age :</span> {profileData.body.patner_to_age} Years</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner From Height :</span> {profileData.body.patner_height}cm - 4ft 4in</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner To Weight :</span> {profileData.body.patner_weight} Kg</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner Religion :</span> {profileData.body.religion}</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner Caste :</span> {profileData.body.patner_caste}</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner Country :</span> {profileData.body.patner_country}</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner State :</span> {profileData.body.patner_state}</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner Annual Income :</span> Upto INR {profileData.body.patner_salary}</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner Marital Status :</span> {profileData.body.patner_matrial_status}</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner Education :</span> {profileData.body.education}</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner Occupation :</span> {profileData.body.patner_occupation}</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner Mother Tongue :</span> {profileData.body.patner_mother_tongue}</h5>
             </div>
         </div>
         <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
             <div class="detalistsleg">
                 <h5 class="py-2"><span>Partner Manglik :</span> {profileData.body.patner_ma}</h5>
             </div>
         </div>
     </div>
 </div>

</div>
</div>
     </div>

     <div class="tab-pane fade" id="pills-horescope" role="tabpanel" aria-labelledby="pills-horescope" tabindex="0">
       <div class="inner_collapse_userPartner mb-4">
<button class="collapbtn" type="button" data-bs-toggle="collapse" data-bs-target="#U_detailsDiv2" aria-expanded="false" aria-controls="U_detailsDiv2">
 <div class="icon_usBox">
   <div class="text_icons-vb"><img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/TB1.svg" alt=""/></div> Heroscope Images
 </div>
</button>
<div class="collapse show" id="U_detailsDiv2">
 <div class="inner_views_detailsFGH">
   <div class="row mx-auto col-md-6">
  
               <img src={profileData.body.rasiimage} alt="Horoscope Image"  width={200} height={200}/>
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
<input type="hidden" name="_token" value="OfJtEAKfm05LT4mn2LyUcO9w95kwaOr6sZRnnZG0"/><input type="hidden" name="changeStatusUrl" id="changeStatusUrl" value="https://gloriousmatrimonial.com/admin/member/changeStatus"/>
<input type="hidden" name="redirectUrl" id="redirectUrl" value=""/>
                <footer class="content-footer footer bg-footer-theme">
                    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                        <div class="mb-2 mb-md-0">
                            <a href="" class="footer-link">© Copyright 2023-2024 By Aathesh Soft. All Rights Reserved.</a>
                        </div>
                    </div>
                </footer>
               
            </div>
        </div>
        </div>
        </div>
        
        
    </>
  )
}

export default Viewmember