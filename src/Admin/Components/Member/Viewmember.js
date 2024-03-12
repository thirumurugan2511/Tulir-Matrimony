import React from 'react'
import {Link} from 'react-router-dom'
import Aside from '../Aside/Aside'
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Smallicon from '../../Components/heart-icon.png'
import Astrology from './astrology.png'


const Viewmember = () => {
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
            <img src="https://www.gloriousmatrimonial.com/public//assets/photos/0417531707390480.jpg" alt="" class="user_profiles" id="viewProfile"/>
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
                  <h4>Vijaya Bharathi - <span>GLMATRI1115</span></h4>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="user_name_aprv_new">
                  <h6 class="text-dark"><span>Completed Profile (100%)</span>
                    <div class="progress">
                      <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                        100 %
                      </div>
                    </div>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="btm_users_details">
            <div class="row">
              <div class="col-lg-10">
                <div class="row text-start">
                  <div class="col-lg-4 col-md-6 col-sm-6 mt-3">
                    <div class="MDatails_views">
                      <h5 class="py-2"><span>Full Name : Vijaya Lashmi</span></h5>
                      <h5 class="py-2"><span>Email : viji@gmail.com</span></h5>
                      <h5 class="py-2"><span>Religion : Hindu</span></h5>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6 mt-0 mt-lg-3 mt-md-3 mt-sm-3">
                    <div class="MDatails_views">
                      <h5 class="py-2"><span>Gender : Female</span></h5>
                      <h5 class="py-2"><span>Mobile : 9787788997</span>
                                              </h5>
                      <h5 class="py-2"><span>Caste : Bengali</span></h5>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6 mt-0 mt-lg-3 mt-md-3 mt-sm-3 right_bordermv">
                    <div class="MDatails_views">
                      <h5 class="py-2"><span>Marital Status : Single</span></h5>
                      <h5 class="py-2"><span>Country : India</span></h5>
                      <h5 class="py-2"><span>Plan Status : Paid</span></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- photo multie profile  --> */}
    <div class="collapse" id="multie_photoUpload">
      <div class="photo_dvMultie_mainsd">
        <div class="row">
                                                            <div class="col-lg-3 mb-4 col-md-4 col-sm-6" id="imageDiv1">
            <div class="single_imgProfiels-wb">
              <div class="position-relative">
                <img src="https://www.gloriousmatrimonial.com/public//assets/photos/0417531707390480.jpg" alt="" class="profile-Um" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB" data-bs-original-title="" title=""/>
                                                <a href="javascript:void(0)" class="remove_profile deleteProfileImage" data-img="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/noImage.png" data-key="imageDiv1" data-label="photo1" data-id="1115" data-value="">
                  <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/delete_profile_icon.png" alt=""/>
                </a>
                                                                                <div class="radio_likeBtn-sp">
                  <label for="Like_profile1" class="like_lk">
                    <input name="photo1_approve" checked="" class="form-check-input approvedImage" data-id="1115" data-label="photo1_approve" type="radio" value="Yes" id="Like_profile1"/>
                    <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/like_radioicn.svg" alt=""/>
                  </label>
                </div>
                <div class="radio_DislikeBtn-sp">
                  <label for="disLike_profile1" class="Dislike_lk">
                    <input name="photo1_approve" class="form-check-input approvedImage" data-id="1115" data-label="photo1_approve" type="radio" value="No" id="disLike_profile1"/>
                    <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/dislike_radioicon.svg" alt=""/>
                  </label>
                </div>
                                                                              </div>
              <button class="btn_vwProfilf">Photo 1</button>
            </div>
          </div>
                              <div class="col-lg-3 mb-4 col-md-4 col-sm-6" id="imageDiv2">
            <div class="single_imgProfiels-wb">
              <div class="position-relative">
                <img src="https://www.gloriousmatrimonial.com/public//assets/photos/7966811707720081.jpg" alt="" class="profile-Um" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB" data-bs-original-title="" title=""/>
                                                <a href="javascript:void(0)" class="remove_profile deleteProfileImage" data-img="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/noImage.png" data-key="imageDiv2" data-label="photo2" data-id="1115" data-value="">
                  <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/delete_profile_icon.png" alt=""/>
                </a>
                                                                                <div class="radio_likeBtn-sp">
                  <label for="Like_profile2" class="like_lk">
                    <input name="photo2_approve" checked="" class="form-check-input approvedImage" data-id="1115" data-label="photo2_approve" type="radio" value="Yes" id="Like_profile2"/>
                    <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/like_radioicn.svg" alt=""/>
                  </label>
                </div>
                <div class="radio_DislikeBtn-sp">
                  <label for="disLike_profile2" class="Dislike_lk">
                    <input name="photo2_approve" class="form-check-input approvedImage" data-id="1115" data-label="photo2_approve" type="radio" value="No" id="disLike_profile2"/>
                    <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/dislike_radioicon.svg" alt=""/>
                  </label>
                </div>
                                                                              </div>
              <button class="btn_vwProfilf">Photo 2</button>
            </div>
          </div>
                              <div class="col-lg-3 mb-4 col-md-4 col-sm-6" id="imageDiv3">
            <div class="single_imgProfiels-wb">
              <div class="position-relative">
                <img src="https://www.gloriousmatrimonial.com/public//assets/photos/7722941707468688.jpg" alt="" class="profile-Um" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB" data-bs-original-title="" title=""/>
                                                <a href="javascript:void(0)" class="remove_profile deleteProfileImage" data-img="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/noImage.png" data-key="imageDiv3" data-label="photo3" data-id="1115" data-value="">
                  <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/delete_profile_icon.png" alt=""/>
                </a>
                                                                                <div class="radio_likeBtn-sp">
                  <label for="Like_profile3" class="like_lk">
                    <input name="photo3_approve" checked="" class="form-check-input approvedImage" data-id="1115" data-label="photo3_approve" type="radio" value="Yes" id="Like_profile3"/>
                    <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/like_radioicn.svg" alt=""/>
                  </label>
                </div>
                <div class="radio_DislikeBtn-sp">
                  <label for="disLike_profile3" class="Dislike_lk">
                    <input name="photo3_approve" class="form-check-input approvedImage" data-id="1115" data-label="photo3_approve" type="radio" value="No" id="disLike_profile3"/>
                    <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/dislike_radioicon.svg" alt=""/>
                  </label>
                </div>
                                                                              </div>
              <button class="btn_vwProfilf">Photo 3</button>
            </div>
          </div>
                              <div class="col-lg-3 mb-4 col-md-4 col-sm-6" id="imageDiv4">
            <div class="single_imgProfiels-wb">
              <div class="position-relative">
                <img src="https://www.gloriousmatrimonial.com/public//assets/photos/0675041707468729.jpg" alt="" class="profile-Um" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB" data-bs-original-title="" title=""/>
                                                <a href="javascript:void(0)" class="remove_profile deleteProfileImage" data-img="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/noImage.png" data-key="imageDiv4" data-label="photo4" data-id="1115" data-value="">
                  <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/delete_profile_icon.png" alt=""/>
                </a>
                                                                                <div class="radio_likeBtn-sp">
                  <label for="Like_profile4" class="like_lk">
                    <input name="photo4_approve" checked="" class="form-check-input approvedImage" data-id="1115" data-label="photo4_approve" type="radio" value="Yes" id="Like_profile4"/>
                    <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/like_radioicn.svg" alt=""/>
                  </label>
                </div>
                <div class="radio_DislikeBtn-sp">
                  <label for="disLike_profile4" class="Dislike_lk">
                    <input name="photo4_approve" class="form-check-input approvedImage" data-id="1115" data-label="photo4_approve" type="radio" value="No" id="disLike_profile4"/>
                    <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/dislike_radioicon.svg" alt=""/>
                  </label>
                </div>
                                                                              </div>
              <button class="btn_vwProfilf">Photo 4</button>
            </div>
          </div>
                                                  <div class="col-lg-3 mb-4 col-md-4 col-sm-6" id="imageDiv5">
            <div class="single_imgProfiels-wb">
              <div class="position-relative">
                <img src="https://www.gloriousmatrimonial.com/public//assets/id_proof/7158281707390502.jpg" alt="" class="profile-Um" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB" data-bs-original-title="" title=""/>
                                                <a href="javascript:void(0)" class="remove_profile deleteProfileImage" data-img="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/noImage.png" data-key="imageDiv5" data-label="id_proof_front" data-id="1115" data-value="">
                  <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/delete_profile_icon.png" alt=""/>
                </a>
                                                                                <div class="radio_likeBtn-sp">
                  <label for="Like_profile5" class="like_lk">
                    <input name="id_proof_approve" class="form-check-input approvedImage" data-id="1115" data-label="id_proof_approve" type="radio" value="APPROVED" id="Like_profile5"/>
                    <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/like_radioicn.svg" alt=""/>
                  </label>
                </div>
                <div class="radio_DislikeBtn-sp">
                  <label for="disLike_profile5" class="Dislike_lk">
                    <input name="id_proof_approve" checked="" class="form-check-input approvedImage" data-id="1115" data-label="id_proof_approve" type="radio" value="UNAPPROVED" id="disLike_profile5"/>
                    <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/dislike_radioicon.svg" alt=""/>
                  </label>
                </div>
                                                                              </div>
              <button class="btn_vwProfilf">ID Proof Front</button>
            </div>
          </div>
                              <div class="col-lg-3 mb-4 col-md-4 col-sm-6" id="imageDiv6">
            <div class="single_imgProfiels-wb">
              <div class="position-relative">
                <img src="https://www.gloriousmatrimonial.com/public//assets/id_proof/7786451707390502.jpg" alt="" class="profile-Um" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="custom-tooltip" data-bs-title="Photo resolution : 254*320  Photo Size : 5 MB" data-bs-original-title="" title=""/>
                                                <a href="javascript:void(0)" class="remove_profile deleteProfileImage" data-img="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/noImage.png" data-key="imageDiv6" data-label="id_proof_back" data-id="1115" data-value="">
                  <img src="https://www.gloriousmatrimonial.com/public//admin/assets/img/images/delete_profile_icon.png" alt=""/>
                </a>
                                                                                                                              </div>
              <button class="btn_vwProfilf">ID Proof Back</button>
            </div>
          </div>
                                      </div>
      </div>
    </div>

    <div class="main_secPUtabs_btns mt-4 collapse" id="connectActivity">
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
    </div>
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
        <div class="col-lg-8 mt-4">
          
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
                                            <h5 class="py-2"><span>Full Name :</span> narjis testing</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Gender :</span> Female</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                              <h5 class="py-2"><span>Email Id :</span> Disable In Demo</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                              <h5 class="py-2"><span>Mobile :</span> Disable In Demo</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Mother Tongue :</span> Marathi</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Birthdate :</span> 8 February, 2006 (18 Years)</h5>
                                                                </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Marital Status :</span> Divorcee</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Total Children :</span> One</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Status Children :</span> Not living with me</h5>
                                          </div>
                  </div>
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
                                            <h5 class="py-2" ><span>Religion :</span> Muslim</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Caste :</span> Bengali</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Sub Caste :</span> Sub Caste</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Manglik :</span> No</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Gothra :</span> Gothra</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Moonsign :</span> Mesh (Aries)</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Star :</span> Ashwini (अश्विनि)</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Birth Place :</span> Birthplace</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Birth Time :</span> 07:36 PM</h5>
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
                                            <h5 class="py-2"><span>Education :</span> Master's</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Education Details :</span> 3-year bachelor's degree</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Employee In :</span> Development</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Occupation :</span> Arts/Creative</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Annual Income :</span> INR 2,00,000 to 4,00,000
                      </h5>
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
                                            <h5 class="py-2"><span>Country Name :</span> India</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>State Name :</span> Gujarat</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>City Name :</span> Ahmedabad</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Residence Type :</span> Citizen</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                              <h5 class="py-2"><span>Alternate Number :</span> Disable In Demo</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>If NRI Originated country :</span> Indian</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Address :</span> Address</h5>
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
                                            <h5 class="py-2"><span>Height :</span> 133cm - 4ft 4in
                      </h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Weight :</span> 36 Kg</h5>
                                                                </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Eating Habits :</span> Vegetarian</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Smoking :</span> No</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Drinking :</span> Teetotaler</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Body Type :</span> Slim</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Skin Tone :</span> Wheatish</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Profile By :</span> Parents</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>About Me :</span> testing</h5>
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
                                            <h5 class="py-2"><span>Family Type :</span> Joint</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Family Status :</span> Rich</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Father Name :</span> Father Name</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Father Occupation :</span> Father Occupation</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Mother Name :</span> Mother Name</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>Mother Occupation :</span> Mother Occupation</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>No Of Brother :</span> 1</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                            <h5 class="py-2"><span>No Of Sister :</span> 1</h5>
                                          </div>
                  </div>
                                                                        <div class="col-lg-12 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                      <h5><span>Family Details :</span> family details</h5>
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
                                                                  <h5 class="py-2"><span>Partner From Age :</span> 22 Years
                      </h5>
                                                                </div>
                  </div>
                                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Partner To Age :</span> 23 Years
                      </h5>
                                                                </div>
                  </div>
                                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Partner From Height :</span> 133cm - 4ft 4in</h5>
                                                                </div>
                  </div>
                                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Partner To Height :</span> 178cm - 5ft 10in</h5>
                                                                </div>
                  </div>
                                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Partner Religion :</span> Muslim</h5>
                                                                </div>
                  </div>
                                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Partner Caste :</span> Ahmadiyya, Bengali, Dawoodi Bohra, Ehle-Hadith, Memon, Rajput, Shia, Shia Imami Ismaili, Sunni</h5>
                                                                </div>
                  </div>
                                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Partner Country :</span> 
                                                               India
                                                                  </h5>
                                                                </div>
                  </div>
                                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Partner State : Tamilnadu</span>
                                                                  </h5>
                                                                </div>
                  </div>
                                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                                        <h5 class="py-2"><span>Partner Annual Income :</span> 
                                                                                        Upto INR 1,00,000,
                      </h5>
                                                                                      </div>
                  </div>
                                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Partner Marital Status :</span> Unmarried,Widow/Widower,Divorcee,Separated</h5>
                                                                </div>
                  </div>
                                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Partner Education :</span> Bachelor's, Master's, PHD, Post Doc, Other</h5>
                                                                </div>
                  </div>
                                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Partner Occupation :</span> Agriculture,  Finance/Banking, Food Services/Hospitality, Government/Public Service, Healthcare/Medical, Management/Administration</h5>
                                                                </div>
                  </div>
                                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Partner Mother Tongue :</span> Sindhi, Urdu</h5>
                                                                </div>
                  </div>
                                    <div class="col-lg-3 mb-lg-4 col-md-3 mb-md-4 col-sm-6 mb-sm-3 col-6 mb-3">
                    <div class="detalistsleg">
                                                                  <h5 class="py-2"><span>Partner Manglik :</span> No,Yes,Maybe,Anshik</h5>
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
                                
                     
                             
                            <img src={Astrology} alt=""  width={200} height={200}/>
                                  </div>
              </div>
            </div>
          </div>
                  </div>
      </div>
    </div>
  </div>
  {/* <!-- / Content --> */}
  <div class="content-backdrop fade"></div>

</div>
<input type="hidden" name="_token" value="OfJtEAKfm05LT4mn2LyUcO9w95kwaOr6sZRnnZG0"/><input type="hidden" name="changeStatusUrl" id="changeStatusUrl" value="https://gloriousmatrimonial.com/admin/member/changeStatus"/>
<input type="hidden" name="redirectUrl" id="redirectUrl" value="https://gloriousmatrimonial.com/admin/member"/>
                <footer class="content-footer footer bg-footer-theme">
                    <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                        <div class="mb-2 mb-md-0">
                            <a href="https://gloriousmatrimonial.com/admin/dashboard" class="footer-link">© Copyright 2023-2024 By Aathesh Soft. All Rights Reserved.</a>
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