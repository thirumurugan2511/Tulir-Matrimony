import React from 'react'
import Aside from '../Aside/Aside'
import { GrUserAdmin } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { Link } from "react-router-dom";
import { MdPostAdd } from "react-icons/md";
import Smallicon from '../../Components/heart-icon.png'

const Addmember = () => {
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
<li class="breadcrumb-item" style={{padding: '2px 10px'}}>  Manage Member </li>
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
                
<div class="content-wrapper">
 
  <div class="bs-toast toast toast-placement-ex m-2" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
    <div class="toast-header">
      <i class="bx bx-bell me-2"></i>
      <div class="me-auto fw-semibold toast-title">Bootstrap</div>
      <small>Now</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.</div>
  </div>
  {/* <!-- Toast with Placements -->
  <!-- Content --> */}
  <div class="container-fluid flex-grow-1 container-p-y">
    {/* <!-- Edit Member section start  --> */}
    <div class="edit_memberSections_mainsdsd">
      <div class="iiner_bg_echange px-4">
        <ul class="nav nav-pills" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Basic Details</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Residence</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-other-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-other-profile" type="button" role="tab" aria-controls="pills-other-profile" aria-selected="false">Physical Info</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-family-details-tab" data-bs-toggle="pill" data-bs-target="#pills-family-details" type="button" role="tab" aria-controls="pills-family-details" aria-selected="false">Family Details </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-partner-preference-tab" data-bs-toggle="pill" data-bs-target="#pills-partner-preference" type="button" role="tab" aria-controls="pills-partner-preference" aria-selected="false">Partner Preference</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-upload-photo-tab" data-bs-toggle="pill" data-bs-target="#pills-upload-photo" type="button" role="tab" aria-controls="pills-upload-photo" aria-selected="false">Upload Photos</button>
          </li>
        </ul>
      </div>
      <div class="form_detailsEditsView">
        <div class="tab-content p-0" id="pills-tabContent">
          {/* <!--Step 1 --> */}
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
            <div class="form_content_data">
              <form id="formSubmitBtn1" name="addEditForm1" action="https://gloriousmatrimonial.com/admin/member/addEdit" method="POST" enctype="multipart/form-data">
                <div class="row">
                  <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU"/>                  <div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3 text-start "> <label class="form-label">பாலினம் <span class="Form__Error">*</span>&nbsp;&nbsp;</label><div class="radio_mainDivGroups"><div class="form-check d-inline-block me-3 mt-2"><input required="" name="gender" id="Male" class="form-check-input required" type="radio" value="Male"/>

                                <label class="form-label" for="Male">ஆண்</label> &nbsp;</div><div class="form-check d-inline-block me-3 mt-2"><input required="" name="gender" id="Female" class="form-check-input required" type="radio" value="Female"/>

                                <label class="form-label" for="Female">பெண்</label> &nbsp;</div></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                        <label class="form-label" for="fullname">முழு பெயர்<span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control required" id="fullname" name="fullname" placeholder="Full Name" />

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                        <label class="form-label" for="email">மின்னஞ்சல் <span class="Form__Error">*</span></label>

                                        <input type="email" required="" class="form-control required" id="email" name="email" placeholder="Enter Your Email Id" />

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4"><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="mobile">கைபேசி எண் <span class="Form__Error">*</span></label>

                                    <div class="row">

                                    

                                        <div class="col-md-9">

                                            <input type="number" class="form-control required" minlength="9" maxlength="10" name="mobilemobile_num" id="mobile_num"  placeholder="Enter your phone no"  />

                                        </div>

                                    </div>

                                </div></div></div></div><div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr">
                                  <div class="mb-3 text-start">

                                    <label class="form-label" for="password">கடவுச்சொல் <span class="Form__Error">*</span></label>

                                    <input type="password" required="" class="form-control Password" id="password" name="password" placeholder="Password"/>

                                </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                              <div class="mb-3 text-start">

<label class="form-label" for="mothertongue">தாய் மொழி <span class="Form__Error">*</span></label>
<input type="text" required="" class="form-control required" id="fullname" name="fullname" placeholder="Mother tongue" />
</div>
                               
                                    </div>
                                    </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr">
                                      <div class="mb-3 text-start">

                                        <label class="form-label" for="birthdate">பிறந்த தேதி <span class="Form__Error">*</span></label>

                                        <input class="form-control required" type="date" value="" max="2006-03-01" id="birthdate" name="birthdate"/>

                                    </div></div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"> 
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="marital_status"> திருமண நிலை<span class="Form__Error">*</span>
                                    </label>
                                    <input type="text" required="" class="form-control required" id="fullname" name="Marriage type" placeholder="Marriage type" />

                                 
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-4 total_children" style={{display:  'none'}}><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                                
                                    </div>
                                    </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-4 status_children" style={{display:  'none'}}><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="status_children">Status Children <span class="Form__Error">*</span></label>

                                    <select required="" class="form-select single select2-hidden-accessible" id="status_children" name="status_children" aria-label="Select Status Children" data-select2-id="status_children" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="10">Select Status Children</option><option value="Living with me">Living with me</option><option value="Not living with me">Not living with me</option><option value="I have no children">I have no children</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="9" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-status_children-container"><span class="select2-selection__rendered" id="select2-status_children-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div>
                                    </div>
                                    <input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>     
                                                 <h4 class="mb-4 text-primary font-medium">Religion Information</h4>
                  <div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="religion">மதம் <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Religion " placeholder="Religion" />
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-4 ">
                                      <div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="caste">சாதி <span class="Form__Error">*</span></label>
                                    <input type="text" required="" class="form-control required" id="fullname" name="Caste " placeholder="Caste" />

                                    
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr">
                                      <div class="mb-3 text-start">

                                        <label class="form-label" for="subcaste">துணை சாதி </label>

                                        <input type="text" class="form-control " id="subcaste" name="subcaste" placeholder="Sub Caste" />

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="manglik">செவ்வாய் கிரகம் </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name=" " placeholder="" />
                                    </div>
                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                        <label class="form-label" for="gothra">கோத்திரம் </label>

                                        <input type="text" class="form-control " id="gothra" name="gothra" placeholder="Gothra" />

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="moonsign">ராசி </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Moonsign " placeholder="Moonsign" />
                                    </div>
                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="star">நட்சத்திரம் </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Star " placeholder="Star" />
                                    </div>
                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                        <label class="form-label" for="birthplace">பிறந்த இடம்</label>

                                        <input type="text" class="form-control " id="birthplace" name="birthplace" placeholder="Birth Place" />

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                        <label class="form-label" for="birthtime">பிறந்த நேரம் </label>

                                        <input class="form-control " type="time" value="" id="birthtime" name="birthtime"/>

                                    </div></div></div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                  <h4 class="mb-4 text-primary font-medium">Education / Occupation Details</h4>
                  <div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="education_level">கல்வி <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Education " placeholder="Education" />
                                    </div>
                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                        <label class="form-label" for="education_details">கல்வி விவரங்கள் </label>

                                        <input type="text" class="form-control " id="education_details" name="education_details" placeholder="Education Details" />

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="occupation">தொழில் <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Occupaction " placeholder="Occupaction" />
                                    </div>
                                    </div>
                                    </div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="employee_in">ஊழியர் <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Employee " placeholder="Employee" />
                                    </div>
                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="income">ஆண்டு வருமானம் <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Annual Income " placeholder="Annual Income" />
                                    </div>
                                    </div></div></div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                </div>
                <input type="hidden" name="step" id="step" value="1"/>
                <button type="button" class="btn btn-primary formSubmitBtn" data-formid="formSubmitBtn1" id="formSubmitBtn1">Submit</button>
              </form>
            </div>
          </div>
        
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
            <div class="form_content_data">
              <form id="formSubmitBtn2" name="addEditForm2" action="https://gloriousmatrimonial.com/admin/member/addEdit" method="POST" enctype="multipart/form-data">
                <div class="row">
                  <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU"/>                  <div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="country_id">நாடு <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Country " placeholder="Country" />

                                   
                                    </div>
                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="state_id">மாநிலம் <span class="Form__Error">*</span></label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="State " placeholder="State" />
                                    </div>
                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="city">நகரம் <span class="Form__Error">*</span></label>
                                    <input type="text" required="" class="form-control required" id="fullname" name="City " placeholder="City" />
                                   </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="residence_type">குடியிருப்பு </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Education " placeholder="Residence" />
                                    </div>
                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                        <label class="form-label" for="alternate_number">மாற்று தொலைபேசி எண் </label>

                                        <input type="text" class="form-control " id="alternate_number" name="alternate_number" placeholder="Alternate Number" />

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                        <label class="form-label" for="nri_country">உருவான நாடு </label>

                                        <input type="text" class="form-control " id="nri_country" name="nri_country" placeholder="If NRI Originated country" />

                                    </div></div></div><div class="col-lg-12 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                    <label class="form-label" for="address">முகவரி </label>

                                    <textarea minlength="Minlength" id="address" name="address" class="form-control form-textarea" placeholder="Address"></textarea>

                                </div></div></div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                </div>
                <input type="hidden" name="step" id="step" value="2"/>
                <button type="button" class="btn btn-primary formSubmitBtn" data-formid="formSubmitBtn2" id="formSubmitBtn2">Submit</button>
              </form>
            </div>
          </div>
         
          <div class="tab-pane fade" id="pills-other-profile" role="tabpanel" aria-labelledby="pills-other-profile-tab" tabindex="0">
            <div class="form_content_data">
              <form id="formSubmitBtn3" name="addEditForm3" action="https://gloriousmatrimonial.com/admin/member/addEdit" method="POST" enctype="multipart/form-data">
                <div class="row">
                  <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU"/>                  <div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="height">உயரம் </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Height" />
                                    </div>
                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="weight">எடை </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Weight" />
                                    </div>
                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="diet">உணவு பழக்கம் </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Food Habits" />
                                    </div>
                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="smoke">புகைபிடித்தல் </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Yes / No" />
                                    </div>
                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="drink">குடிப்பழக்கம் </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Yes / No" />
                                    </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="body_type">உடல் அமைப்பு </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Body Type" />
                                    </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="skin_tone">தோல் நிறம் </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Skin Tone" />
                                    </div></div></div></div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                  <h4 class="mb-4 text-danger">About</h4>
                  <div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="profileby">Profile By </label>
                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Profile By" />
                                    </div></div></div></div><div class="col-lg-12 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                    <label class="form-label" for="profile_text">About Me </label>

                                    <textarea minlength="About Me" id="profile_text" name="profile_text" class="form-control form-textarea" placeholder="About Me"></textarea>

                                </div></div></div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                </div>
                <input type="hidden" name="step" id="step" value="3"/>
                <button type="button" class="btn btn-primary formSubmitBtn" data-formid="formSubmitBtn3" id="formSubmitBtn3">Submit</button>
              </form>
            </div>
          </div>
          
          <div class="tab-pane fade" id="pills-family-details" role="tabpanel" aria-labelledby="pills-family-details-tab" tabindex="0">
            <div class="form_content_data">
              <form id="formSubmitBtn4" name="addEditForm4" action="https://gloriousmatrimonial.com/admin/member/addEdit" method="POST" enctype="multipart/form-data">
                <div class="row">
                  <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU"/>                  <div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="family_type">குடும்ப வகை </label>
                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Family Type" />
                                    </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="family_status">குடும்ப நிலை </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Family Status" /></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                        <label class="form-label" for="father_name">தந்தையின் பெயர் <span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control " id="father_name" name="father_name" placeholder="Father Name" />

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                        <label class="form-label" for="father_occupation">தந்தை தொழில் <span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control " id="father_occupation" name="father_occupation" placeholder="Father Occupation" />

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                        <label class="form-label" for="mother_name">தாய் பெயர் <span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control " id="mother_name" name="mother_name" placeholder="Mother Name" />

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                        <label class="form-label" for="mother_occupation">தாய் தொழில் <span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control " id="mother_occupation" name="mother_occupation" placeholder="Mother Occupation" />

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="no_of_brother">சகோதரர் </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Brother's Count" /></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="no_of_sister">சகோதரி </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Sister's Count" />

                                    </div></div></div></div><div class="col-lg-12 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                    <label class="form-label" for="family_details">குடும்ப விவரங்கள் </label>

                                    <textarea minlength="Minlength" id="family_details" name="family_details" class="form-control form-textarea" placeholder="Family Details"></textarea>

                                </div></div></div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                </div>
                <input type="hidden" name="step" id="step" value="4"/>
                <button type="button" class="btn btn-primary formSubmitBtn" data-formid="formSubmitBtn4" id="formSubmitBtn4">Submit</button>
              </form>
            </div>
          </div>
         
          <div class="tab-pane fade" id="pills-partner-preference" role="tabpanel" aria-labelledby="pills-partner-preference-tab" tabindex="0">
            <div class="form_content_data">
              <form id="formSubmitBtn5" name="addEditForm5" action="https://gloriousmatrimonial.com/admin/member/addEdit" method="POST" enctype="multipart/form-data">
                <div class="row">
                  <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU"/>                  <div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="part_frm_age">Partner From Age </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="25 Above" />
                                    </div>
                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="part_to_age">Partner To Age </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="30 Below" /></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="part_height_to">Partner To Height </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="180 cm" />
                                    </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="part_religion">Partner Religion </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Hindu" />
                                    </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="part_caste">Partner Caste </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Vanniyar" />
                                    </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="part_country">Country </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="India" />
                                    
                                    </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="part_state">Partner State </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Tamilnadu" />
                                    </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="part_marital_status">Partner Marital Status </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Single" />
                                    </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="part_income">Partner Annual Income </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Above 30k" />
                                    </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="part_education">Partner Education </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Degree" />
                                    </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="part_occupation">Partner Occupation </label>
                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Govertment Employee" />
                                    </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="part_mothertongue">Partner Mother Tongue </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Tamil / Telungu" />
                                    </div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3 text-start">

                                    <label class="form-label" for="part_manglik">Partner Manglik </label>

                                    <input type="text" required="" class="form-control required" id="fullname" name="Height " placeholder="Partner Manglik" />
                                    </div></div></div></div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                </div>
                <input type="hidden" name="step" id="step" value="5"/>
                <button type="button" class="btn btn-primary formSubmitBtn" data-formid="formSubmitBtn5" id="formSubmitBtn5">Submit</button>
              </form>
            </div>
          </div>
         
          <div class="tab-pane fade" id="pills-upload-photo" role="tabpanel" aria-labelledby="pills-upload-photo-tab" tabindex="0">
            <div class="form_content_data">
              
                <div class="row">
                <p class="help-block">Allowed Maximum File size up to 10MB. File type jpg , png , jpeg , gif , bmp.</p>
                  <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU" /> </div>     
                  <div className='row col-lg-12 col-md-12 mb-8 d-flex'    >      
                   <div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                    <label class="form-label" for="photo1">Photo 1 <span class="Form__Error">*</span></label>

                                    <input required="" name="photo1" class="form-control " placeholder="Photo 1" type="file" id="photo1"/>

                                    <input type="hidden" name="photo1_val" id="photo1_val" />

                                    <input type="hidden" name="photo1_path" id="photo1_path" value="assets/photos/" />

                                    <input type="hidden" name="photo1_ext" id="photo1_ext" value="jpg,png,jpeg,gif,bmp"/>

                                  

                                </div>
                                </div></div>
<div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3 text-start">

                                    <label class="form-label" for="photo2">Photo 2 </label>

                                    <input name="photo2" class="form-control " placeholder="Photo 2" type="file" id="photo2"/>


                                </div></div></div>
                                </div> 
                                <div className='row col-lg-12 col-md-12 mb-8 d-flex'    > 
                                <div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="id_proof_back">Id Proof 1 <span class="Form__Error">*</span></label>

                                    <input required="" name="id_proof_back" class="form-control required" placeholder="Id Proof 1" type="file" id="id_proof_back"/>



                                </div>
                                </div>
                                </div>
                               

                           

                               

                              <div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="id_proof_back">Id Proof 2 <span class="Form__Error">*</span></label>

                                    <input required="" name="id_proof_back" class="form-control required" placeholder="Id Proof 2" type="file" id="id_proof_back"/>



                                </div>
                                </div>
                                </div>
                                </div>
                                <div className='row col-lg-12 col-md-12 mb-8 d-flex'    > 
                                <div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr">
                                <div class="mb-3 text-start">

                                    <label class="form-label" for="id_proof_back">Horoscope Image<span class="Form__Error">*</span></label>

                                    <input required="" name="id_proof_back" class="form-control required" placeholder="Id Proof 1" type="file" id="id_proof_back"/>



                                </div>
                                </div>
                                </div>
                               

                           

                               

                              <div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr">
                                {/* <div class="mb-3 text-start">

                                    <label class="form-label" for="id_proof_back">Id Proof 2 <span class="Form__Error">*</span></label>

                                    <input required="" name="id_proof_back" class="form-control required" placeholder="Id Proof 2" type="file" id="id_proof_back"/>



                                </div> */}
                                </div>
                                </div>
                                </div>

                         
                                </div>
                <input type="hidden" name="step" id="step" value="6"/>
                <button type="button" class="btn btn-primary formSubmitBtn" data-formid="formSubmitBtn6" id="formSubmitBtn6">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU"/>  <input type="hidden" name="id" value="" id="id"/>
  <input type="hidden" name="mode" value="add" id="mode"/>

  <input type="hidden" name="formUrl" id="formUrl" value="https://gloriousmatrimonial.com/admin/member/addEdit"/>
  <input type="hidden" name="successUrl" id="successUrl" value="https://gloriousmatrimonial.com/admin/member"/>
 
  <div class="content-backdrop fade"></div>
</div>
           </div></div> 
       
    </>
  )
}

export default Addmember