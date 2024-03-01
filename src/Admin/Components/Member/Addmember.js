import React from 'react'
import Aside from '../Aside/Aside'
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { MdPostAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


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
<li class="breadcrumb-item active" style={{padding: '2px 10px'}}>  Manage Member </li>
                    </ol>
                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                        <li class="nav-item lh-1 me-3">
                        <GrUserAdmin class="bx bx-user me-2" /><span class="align-middle">Administrator</span>
                                                    </li>
                                                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                            <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <div class="avatar avatar-online">
                                    <img src="https://www.gloriousmatrimonial.com/public//assets/logo/8917801707308920.png" alt="" class="w-px-40 h-auto rounded-circle"/>
                                </div>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a class="dropdown-item" href="#">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar avatar-online">
                                                    <img src="https://www.gloriousmatrimonial.com/public//assets/logo/8917801707308920.png" alt="" class="w-px-40 h-auto rounded-circle"/>
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
                                    <a class="dropdown-item" href="https://gloriousmatrimonial.com/admin/basic-site-setting">
                                        <i class="bx bx-cog me-2"></i>
                                        <span class="align-middle">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item" target="_blank" href="https://gloriousmatrimonial.com" rel="noopener">
                                        <i class="bx bx-slideshow me-2"></i>
                                        <span class="align-middle">Front End</span>
                                    </a>
                                </li>
                                <li>
                                    <div class="dropdown-divider"></div>
                                </li>
                                <li>
                                                                        <a class="dropdown-item" href="https://gloriousmatrimonial.com/admin/logout">
                                        <i class="bx bx-power-off me-2"></i>
                                        <span class="align-middle">Log Out</span>
                                    </a>
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
            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Basic Detail</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Residence</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-other-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-other-profile" type="button" role="tab" aria-controls="pills-other-profile" aria-selected="false">Physical Info</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-family-details-tab" data-bs-toggle="pill" data-bs-target="#pills-family-details" type="button" role="tab" aria-controls="pills-family-details" aria-selected="false">Family Details</button>
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
                  <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU"/>                  <div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3"> <label class="form-label">Gender <span class="Form__Error">*</span>&nbsp;&nbsp;</label><div class="radio_mainDivGroups"><div class="form-check d-inline-block me-3 mt-2"><input required="" name="gender" id="Male" class="form-check-input required" type="radio" value="Male"/>

                                <label class="form-label" for="Male">Male</label> &nbsp;</div><div class="form-check d-inline-block me-3 mt-2"><input required="" name="gender" id="Female" class="form-check-input required" type="radio" value="Female"/>

                                <label class="form-label" for="Female">Female</label> &nbsp;</div></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="fullname">Full Name <span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control required" id="fullname" name="fullname" placeholder="Full Name" value=""/>

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="email">Enter Your Email Id <span class="Form__Error">*</span></label>

                                        <input type="email" required="" class="form-control required" id="email" name="email" placeholder="Enter Your Email Id" value=""/>

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4"><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="mobile">Mobile Number <span class="Form__Error">*</span></label>

                                    <div class="row">

                                        <div class="col-md-3">

                                            <select required="" name="mobilemobile_country_code" class="form-select single select2-hidden-accessible" id="mobilemobile_country_code" data-select2-id="mobilemobile_country_code" tabindex="-1" aria-hidden="true">

                                                <option value="" data-select2-id="2">Select Country Code</option><option value="+376">+376</option><option value="+971">+971</option><option value="+93">+93</option><option value="+1268">+1268</option><option value="+355">+355</option><option value="+374">+374</option><option value="+244">+244</option><option value="+672">+672</option><option value="+54">+54</option>
                                                <option value="+1684">+1684</option><option value="+43">+43</option><option value="+61">+61</option><option value="+297">+297</option><option value="+263">+263</option><option value="+994">+994</option><option value="+387">+387</option><option value="+1246">+1246</option><option value="+880">+880</option><option value="+32">+32</option><option value="+226">+226</option><option value="+359">+359</option><option value="+973">+973</option><option value="+257">+257</option><option value="+229">+229</option><option value="+1441">+1441</option><option value="+673">+673</option><option value="+591">+591</option><option value="+263">+263</option><option value="+55">+55</option><option value="+1242">+1242</option><option value="+975">+975</option><option value="+47">+47</option><option value="+267">+267</option><option value="+375">+375</option><option value="+501">+501</option><option value="+1">+1</option><option value="+242">+242</option><option value="+236">+236</option><option value="+242">+242</option><option value="+41">+41</option><option value="+225">+225</option><option value="+56">+56</option><option value="+237">+237</option><option value="+86">+86</option><option value="+57">+57</option><option value="+506">+506</option><option value="+53">+53</option><option value="+238">+238</option><option value="+357">+357</option><option value="+420">+420</option><option value="+49">+49</option><option value="+253">+253</option><option value="+45">+45</option><option value="+1767">+1767</option><option value="+1809">+1809</option><option value="+213">+213</option><option value="+593">+593</option><option value="+372">+372</option>
                                                <option value="+20">+20</option><option value="+212">+212</option><option value="+291">+291</option><option value="+34">+34</option><option value="+251">+251</option><option value="+358">+358</option><option value="+679">+679</option><option value="+691">+691</option><option value="+298">+298</option><option value="+33">+33</option><option value="+241">+241</option><option value="+44">+44</option><option value="+1473">+1473</option><option value="+995">+995</option><option value="+594">+594</option><option value="+263">+263</option><option value="+233">+233</option><option value="+299">+299</option><option value="+220">+220</option><option value="+224">+224</option><option value="+590">+590</option><option value="+240">+240</option><option value="+30">+30</option><option value="+502">+502</option><option value="+1671">+1671</option><option value="+245">+245</option><option value="+592">+592</option><option value="+852">+852</option><option value="+504">+504</option><option value="+385">+385</option><option value="+509">+509</option><option value="+36">+36</option><option value="+62">+62</option><option value="+353">+353</option><option value="+972">+972</option><option value="+263">+263</option><option value="+91">+91</option><option value="+246">+246</option><option value="+964">+964</option><option value="+98">+98</option><option value="+354">+354</option><option value="+39">+39</option><option value="+263">+263</option><option value="+1876">+1876</option>
                                                <option value="+962">+962</option><option value="+81">+81</option><option value="+254">+254</option><option value="+996">+996</option><option value="+855">+855</option><option value="+686">+686</option><option value="+269">+269</option><option value="+1869">+1869</option><option value="+850">+850</option><option value="+82">+82</option><option value="+965">+965</option><option value="+7">+7</option><option value="+856">+856</option><option value="+961">+961</option><option value="+1758">+1758</option><option value="+423">+423</option><option value="+94">+94</option><option value="+231">+231</option><option value="+266">+266</option><option value="+370">+370</option><option value="+352">+352</option><option value="+371">+371</option><option value="+218">+218</option><option value="+212">+212</option><option value="+377">+377</option><option value="+373">+373</option><option value="+263">+263</option><option value="+261">+261</option><option value="+692">+692</option><option value="+389">+389</option><option value="+223">+223</option><option value="+95">+95</option><option value="+976">+976</option><option value="+853">+853</option><option value="+1670">+1670</option><option value="+596">+596</option><option value="+222">+222</option><option value="+1664">+1664</option><option value="+230">+230</option><option value="+960">+960</option><option value="+265">+265</option><option value="+52">+52</option><option value="+60">+60</option><option value="+258">+258</option><option value="+264">+264</option><option value="+687">+687</option><option value="+227">+227</option><option value="+234">+234</option>
                                                <option value="+505">+505</option><option value="+31">+31</option><option value="+47">+47</option><option value="+977">+977</option><option value="+674">+674</option><option value="+64">+64</option><option value="+968">+968</option><option value="+507">+507</option><option value="+51">+51</option><option value="+689">+689</option><option value="+675">+675</option><option value="+63">+63</option><option value="+92">+92</option><option value="+48">+48</option><option value="+508">+508</option><option value="+1787">+1787</option><option value="+970">+970</option><option value="+351">+351</option><option value="+680">+680</option><option value="+595">+595</option><option value="+974">+974</option><option value="+262">+262</option><option value="+40">+40</option><option value="+263">+263</option><option value="+70">+70</option><option value="+250">+250</option><option value="+966">+966</option><option value="+677">+677</option><option value="+248">+248</option><option value="+249">+249</option><option value="+46">+46</option><option value="+65">+65</option><option value="+290">+290</option><option value="+386">+386</option><option value="+47">+47</option><option value="+421">+421</option><option value="+232">+232</option><option value="+378">+378</option><option value="+221">+221</option><option value="+252">+252</option><option value="+597">+597</option><option value="+263">+263</option><option value="+239">+239</option><option value="+503">+503</option><option value="+963">+963</option><option value="+268">+268</option><option value="+235">+235</option><option value="+260">+260</option><option value="+228">+228</option><option value="+66">+66</option><option value="+992">+992</option><option value="+690">+690</option><option value="+670">+670</option><option value="+7370">+7370</option>
                                                <option value="+216">+216</option><option value="+676">+676</option><option value="+90">+90</option><option value="+1868">+1868</option><option value="+688">+688</option><option value="+886">+886</option><option value="+255">+255</option><option value="+380">+380</option><option value="+256">+256</option><option value="+1">+1</option><option value="+1">+1</option><option value="+598">+598</option><option value="+998">+998</option><option value="+1784">+1784</option><option value="+58">+58</option><option value="+1340">+1340</option><option value="+84">+84</option><option value="+678">+678</option><option value="+681">+681</option><option value="+684">+684</option><option value="+263">+263</option><option value="+967">+967</option><option value="+269">+269</option><option value="+27">+27</option><option value="+260">+260</option><option value="+263">+263</option><option value="+914">+914</option><option value="+44">+44</option>
                                                </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style={{width: '79.0483px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-mobilemobile_country_code-container"><span class="select2-selection__rendered" id="select2-mobilemobile_country_code-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>

                                        </div> 

                                        <div class="col-md-9">

                                            <input onkeypress="return isNumberKey(event)" type="number" required="" class="form-control required" minlength="7" maxlength="13" name="mobilemobile_num" id="mobile_num" onchange="check_valid_number(this); placeholder="  value=""/>

                                        </div>

                                    </div>

                                </div></div></div></div><div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3">

                                    <label class="form-label" for="password">Password <span class="Form__Error">*</span></label>

                                    <input password="" required="" class="form-control Password" id="password" name="password" placeholder="Password"/>

                                </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="mother_tongue">Mother Tongue <span class="Form__Error">*</span></label>

                                    <select required="" class="form-select single not_reset required select2-hidden-accessible" id="mother_tongue" name="mother_tongue" aria-label="Select Mother Tongue" data-select2-id="mother_tongue" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="4">Select Mother Tongue</option><option value="65">Aka</option><option value="66">Arabic</option><option value="67">Assamese</option><option value="19">Awadhi</option><option value="68">Bengali</option><option value="69">Bhojpuri</option><option value="21">Bhutia</option><option value="70">Chattisgarhi</option><option value="71">Chinese</option><option value="72">Coorgi</option><option value="73">Dogri</option><option value="74">English</option><option value="75">French</option><option value="76">Garhwali</option><option value="27">Garo</option><option value="77">Gujarati</option><option value="78">Haryanavi</option><option value="79">Himachali/Pahari</option><option value="80">Hindi</option><option value="29">Kakbarak</option><option value="30">Kanauji</option><option value="81">Kannada</option><option value="82">Kashmiri</option><option value="32">Khandesi</option><option value="33">Khasi</option><option value="83">Konkani</option><option value="34">Koshali</option><option value="35">Kumoani</option><option value="84">Kutchi</option><option value="37">Lepcha</option><option value="38">Magahi</option><option value="85">Maithili</option><option value="86">Malay</option><option value="87">Malayalam</option><option value="88">Manipuri</option><option value="89">Marathi</option><option value="90">Marwari</option><option value="41">Miji</option><option value="42">Mizo</option><option value="43">Monpa</option><option value="91">Nepali</option><option value="92">Oriya</option><option value="93">Other</option><option value="45">Persian</option><option value="94">Punjabi</option><option value="95">Rajasthani</option><option value="96">Russian</option><option value="48">Sanskrit</option><option value="49">Santhali</option><option value="12">Sindhi</option><option value="98">Sourashtra</option><option value="99">Spanish</option><option value="51">Swedish</option><option value="52">Tagalog</option><option value="100">Tamil</option><option value="101">Telugu</option><option value="102">Tulu</option><option value="103">Urdu</option>
                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="3" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-mother_tongue-container"><span class="select2-selection__rendered" id="select2-mother_tongue-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="birthdate">Birthdate <span class="Form__Error">*</span></label>

                                        <input class="form-control required" type="date" value="" max="2006-03-01" id="birthdate" name="birthdate"/>

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="marital_status">Marital Status <span class="Form__Error">*</span></label>

                                    <select required="" class="form-select single select2-hidden-accessible" id="marital_status" name="marital_status" aria-label="Select Marital Status" data-select2-id="marital_status" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="6">Select Marital Status</option><option value="Unmarried">Unmarried</option><option value="Widow/Widower">Widow/Widower</option><option value="Divorcee">Divorcee</option><option value="Separated">Separated</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-marital_status-container"><span class="select2-selection__rendered" id="select2-marital_status-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 total_children" style={{display:  'none'}}><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="total_children">Total Children <span class="Form__Error">*</span></label>

                                    <select required="" class="form-select single select2-hidden-accessible" id="total_children" name="total_children" aria-label="Select Total Children" data-select2-id="total_children" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="8">Select Total Children</option><option value="None">None</option><option value="One">One</option><option value="Two">Two</option><option value="Three">Three</option><option value="Four and above">Four and above</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="7" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-total_children-container"><span class="select2-selection__rendered" id="select2-total_children-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 status_children" style={{display:  'none'}}><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="status_children">Status Children <span class="Form__Error">*</span></label>

                                    <select required="" class="form-select single select2-hidden-accessible" id="status_children" name="status_children" aria-label="Select Status Children" data-select2-id="status_children" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="10">Select Status Children</option><option value="Living with me">Living with me</option><option value="Not living with me">Not living with me</option><option value="I have no children">I have no children</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="9" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-status_children-container"><span class="select2-selection__rendered" id="select2-status_children-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                  <h4 class="mb-4 text-primary font-medium">Religious Information</h4>
                  <div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="religion">Religion <span class="Form__Error">*</span></label>

                                    <select onchange="dropdownChange('religion','caste','caste_list')" required="" class="form-select single required select2-hidden-accessible" id="religion" name="religion" aria-label="Select Religion" data-select2-id="religion" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="12">Select Religion</option><option value="12">Buddhist</option><option value="8">Christian</option><option value="5">Hindu</option><option value="9">Jain</option><option value="6">Muslim</option><option value="15">Others</option><option value="10">Parsi</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="11" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-religion-container"><span class="select2-selection__rendered" id="select2-religion-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="caste">Caste <span class="Form__Error">*</span></label>

                                    <select required="" class="form-select single required select2-hidden-accessible" id="caste" name="caste" aria-label="Select Caste" data-select2-id="caste" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="14">Select Caste</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="13" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-caste-container"><span class="select2-selection__rendered" id="select2-caste-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="subcaste">Sub Caste </label>

                                        <input type="text" class="form-control " id="subcaste" name="subcaste" placeholder="Sub Caste" value=""/>

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="manglik">Manglik </label>

                                    <select class="form-select single select2-hidden-accessible" id="manglik" name="manglik" aria-label="Select Manglik" data-select2-id="manglik" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="16">Select Manglik</option><option value="No">No</option><option value="Yes">Yes</option><option value="Maybe">Maybe</option><option value="Anshik">Anshik</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="15" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-manglik-container"><span class="select2-selection__rendered" id="select2-manglik-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="gothra">Gothra </label>

                                        <input type="text" class="form-control " id="gothra" name="gothra" placeholder="Gothra" value=""/>

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="moonsign">Moonsign </label>

                                    <select class="form-select single select2-hidden-accessible" id="moonsign" name="moonsign" aria-label="Select Moonsign" data-select2-id="moonsign" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="18">Select Moonsign</option><option value="9">Dhanu (Sagittarious)</option><option value="6">Kanya (Virgo)</option><option value="4">Karka (Cancer)</option><option value="11">Kumbha (Aquarious)</option><option value="10">Makar (Capricorn)</option><option value="12">Meen (Pisces)</option><option value="1">Mesh (Aries)</option><option value="3">Mithun (Gemini)</option><option value="5">Simha (Leo)</option><option value="7">Tula (Libra)</option><option value="8">Vrischika (Scorpio)</option><option value="2">Vrishabh (Taurus)</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="17" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-moonsign-container"><span class="select2-selection__rendered" id="select2-moonsign-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="star">Star </label>

                                    <select class="form-select single select2-hidden-accessible" id="star" name="star" aria-label="Select Star" data-select2-id="star" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="20">Select Star</option><option value="1">Anurādhā (अनुराधा)/ANUSHAM</option><option value="22">Ārdrā (आर्द्रा)/THIRUVADIRAI</option><option value="4">Āshleshā (अश्लेषा)/AYILYAM</option><option value="2">Ashwini (अश्विनि)</option><option value="5">Bharani (भरणी)</option><option value="6">Chitra (चित्रा)</option><option value="7">Hasta (हस्त)</option><option value="8">Jyeshtha (ज्येष्ठा)/KETTAI</option><option value="9">Krittika (कृत्तिका)</option><option value="10">Maghā (मघा)</option><option value="12">Mrigashīrsha(मृगशीर्ष)</option><option value="11">Mula (मूल)</option><option value="14">Punarvasu (पुनर्वसु)/PUNARPUSAM</option><option value="15">Pūrva Āshādhā (पूर्व आषाढ़)/PURADAM</option><option value="17">Pūrva Bhādrapadā (पूर्व भाद्रपद)/PURATATHI</option><option value="16">Pūrva or Pūrva Phalgunī (पूर्व फल्गुनी)/PURAM</option><option value="13">Pushya (पुष्य)</option><option value="18">Revati (रेवती)</option><option value="19">Rohini(रोहिणी)</option><option value="20">Shatabhisha (शतभिषा)or Śatataraka/SADAYAM</option><option value="23">Śrāvaṇa (श्र‌ावण)/THIRUVONAM</option><option value="3">Śrāviṣṭha (श्रविष्ठा) or Dhanishta/AVITTAM</option><option value="21">Svātī (स्वाति)</option><option value="24">Uttara Āṣāḍhā (उत्तर आषाढ़)/UTHIRADAM</option><option value="26">Uttara Bhādrapadā (उत्तर भाद्रपद)/UTHIRATTADHI</option><option value="25">Uttara or Uttara Phalgunī (उत्तर फल्गुनी)/UTHIRAM</option><option value="27">Viśākhā (विशाखा)</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="19" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-star-container"><span class="select2-selection__rendered" id="select2-star-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="birthplace">Birth Place </label>

                                        <input type="text" class="form-control " id="birthplace" name="birthplace" placeholder="Birth Place" value=""/>

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="birthtime">Birth Time </label>

                                        <input class="form-control " type="time" value="" id="birthtime" name="birthtime"/>

                                    </div></div></div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                  <h4 class="mb-4 text-primary font-medium">Education / Occupation Details</h4>
                  <div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="education_level">Education <span class="Form__Error">*</span></label>

                                    <select required="" class="form-select single required select2-hidden-accessible" id="education_level" name="education_level" aria-label="Select Education" data-select2-id="education_level" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="22">Select Education</option><option value="1">Bachelor's</option><option value="2">Master's</option><option value="5">Other</option><option value="3">PHD</option><option value="4">Post Doc</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="21" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-education_level-container"><span class="select2-selection__rendered" id="select2-education_level-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="education_details">Education Details </label>

                                        <input type="text" class="form-control " id="education_details" name="education_details" placeholder="Education Details" value=""/>

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="occupation">Occupation <span class="Form__Error">*</span></label>

                                    <select required="" class="form-select single required select2-hidden-accessible" id="occupation" name="occupation" aria-label="Select Occupation" data-select2-id="occupation" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="24">Select Occupation</option><option value="1">Agriculture</option><option value="2">Arts/Creative</option><option value="3">Automotive</option><option value="4">Business/Entrepreneurship</option><option value="5">Construction</option><option value="6">Consulting</option><option value="7">Education/Teaching</option><option value="8">Energy/Utilities</option><option value="9">Engineering</option><option value="10">Environmental Services</option><option value="33">Fashion Designer</option><option value="11">Finance/Banking</option><option value="12">Food Services/Hospitality</option><option value="13">Government/Public Service</option><option value="14">Healthcare/Medical</option><option value="16">Human Resources</option><option value="17">Information Technology (IT)</option><option value="32">Interior Designer</option><option value="18">Legal/Law</option><option value="34">Management/Administration</option><option value="19">Manufacturing</option><option value="20">Marketing/Advertising</option><option value="21">Media/Entertainment</option><option value="31">Others</option><option value="22">Pharmaceuticals</option><option value="23">Real Estate/Property</option><option value="24">Research/Science</option><option value="25">Retail</option><option value="26">Sales</option><option value="27">Seva/Non-Profit/NGO</option><option value="28">Sports/Fitness</option><option value="29">Telecommunications</option><option value="30">Transportation/Logistics</option><option value="15">Travel/Tourism</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="23" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-occupation-container"><span class="select2-selection__rendered" id="select2-occupation-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="employee_in">Employee In <span class="Form__Error">*</span></label>

                                    <select required="" class="form-select single required select2-hidden-accessible" id="employee_in" name="employee_in" aria-label="Select Employee In" data-select2-id="employee_in" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="26">Select Employee In</option><option value="2">Development</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="25" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-employee_in-container"><span class="select2-selection__rendered" id="select2-employee_in-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="income">Annual Income <span class="Form__Error">*</span></label>

                                    <select required="" class="form-select single required select2-hidden-accessible" id="income" name="income" aria-label="Select Annual Income" data-select2-id="income" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="28">Select Annual Income</option><option value="1">Upto INR 1,00,000</option><option value="2">INR 1,00,000 to 2,00,000</option><option value="3">INR 2,00,000 to 4,00,000</option><option value="4">INR 4,00,000 to 7,00,000</option><option value="5">INR 7,00,000 to 10,00,000</option><option value="6">INR 10,00,000 to 15,00,000</option><option value="7">INR 15,00,000 to 20,00,000</option><option value="8">INR 20,00,000 to 30,00,000</option><option value="9">INR 30,00,000 to 50,00,000</option><option value="10">INR 50,00,000 to 75,00,000</option><option value="11">INR 75,00,000 to 1,00,00,000</option><option value="12">INR 1,00,00,000 to 3,00,00,000</option><option value="13">INR 3,00,00,000 and above</option><option value="14">Not applicable</option><option value="15">Don’t want to Specify</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="27" style={{width: '394.205px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-income-container"><span class="select2-selection__rendered" id="select2-income-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                </div>
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

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="country_id">Country <span class="Form__Error">*</span></label>

                                    <select onchange="dropdownChange('country_id','state_id','state_list')" required="" class="form-select single not_reset required select2-hidden-accessible" id="country_id" name="country_id" aria-label="Select Country" data-select2-id="country_id" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="30">Select Country</option><option value="3">Afghanistan</option><option value="14">Aland Islands</option><option value="5">Albania</option><option value="56">Algeria</option><option value="10">American Samoa</option><option value="1">Andorra</option><option value="7">Angola</option><option value="8">Antarctica</option><option value="4">Antigua And Barbuda</option><option value="9">Argentina</option><option value="6">Armenia</option><option value="13">Aruba</option><option value="12">Australia</option><option value="11">Austria</option><option value="15">Azerbaijan</option><option value="30">Bahamas</option><option value="22">Bahrain</option><option value="18">Bangladesh</option><option value="17">Barbados</option><option value="34">Belarus</option><option value="19">Belgium</option><option value="35">Belize</option><option value="24">Benin</option><option value="25">Bermuda</option><option value="31">Bhutan</option><option value="27">Bolivia</option><option value="28">Bonaire, Saint Eustatius And Saba</option><option value="16">Bosnia And Herzegovina</option><option value="33">Botswana</option><option value="32">Bouvet Island</option><option value="29">Brazil</option><option value="96">British Indian Ocean Territory</option><option value="26">Brunei</option><option value="21">Bulgaria</option><option value="20">Burkina Faso</option><option value="23">Burundi</option><option value="107">Cambodia</option><option value="43">Cameroon</option><option value="36">Canada</option><option value="48">Cape Verde</option><option value="38">Central African Republic</option><option value="197">Chad</option><option value="42">Chile</option><option value="44">China</option><option value="45">Colombia</option><option value="109">Comoros</option><option value="46">Costa Rica</option><option value="88">Croatia</option><option value="47">Cuba</option><option value="49">Cyprus</option><option value="50">Czech Republic</option><option value="37">Democratic Republic Of The Congo</option><option value="53">Denmark</option><option value="52">Djibouti</option><option value="54">Dominica</option><option value="55">Dominican Republic</option><option value="203">East Timor</option><option value="57">Ecuador</option><option value="59">Egypt</option><option value="194">El Salvador</option><option value="80">Equatorial Guinea</option><option value="61">Eritrea</option>
                                    <option value="58">Estonia</option><option value="63">Ethiopia</option>
                                    <option value="67">Faroe Islands</option><option value="65">Fiji</option><option value="64">Finland</option><option value="68">France</option><option value="73">French Guiana</option><option value="160">French Polynesia</option><option value="198">French Southern Territories</option><option value="69">Gabon</option><option value="77">Gambia</option><option value="72">Georgia</option>
                                    <option value="51">Germany</option><option value="75">Ghana</option><option value="81">Greece</option><option value="76">Greenland</option><option value="71">Grenada</option><option value="79">Guadeloupe</option><option value="83">Guam</option><option value="82">Guatemala</option><option value="74">Guernsey</option><option value="78">Guinea</option><option value="84">Guinea-Bissau</option><option value="85">Guyana</option><option value="89">Haiti</option><option value="87">Honduras</option><option value="86">Hong Kong</option><option value="90">Hungary</option><option value="99">Iceland</option><option value="95">India</option><option value="91">Indonesia</option><option value="98">Iran</option><option value="97">Iraq</option><option value="92">Ireland</option><option value="94">Isle Of Man</option><option value="93">Israel</option><option value="100">Italy</option><option value="41">Ivory Coast</option><option value="102">Jamaica</option><option value="104">Japan</option><option value="101">Jersey</option><option value="103">Jordan</option><option value="114">Kazakhstan</option><option value="105">Kenya</option><option value="108">Kiribati</option><option value="225">Kosovo</option><option value="113">Kuwait</option><option value="106">Kyrgyzstan</option><option value="115">Laos</option><option value="124">Latvia</option><option value="116">Lebanon</option><option value="121">Lesotho</option><option value="120">Liberia</option><option value="125">Libya</option><option value="118">Liechtenstein</option><option value="122">Lithuania</option><option value="123">Luxembourg</option><option value="136">Macao</option><option value="132">Macedonia</option><option value="130">Madagascar</option><option value="143">Malawi</option><option value="145">Malaysia</option><option value="142">Maldives</option><option value="133">Mali</option><option value="131">Marshall Islands</option><option value="138">Martinique</option><option value="139">Mauritania</option><option value="141">Mauritius</option><option value="227">Mayotte</option><option value="144">Mexico</option><option value="66">Micronesia</option><option value="128">Moldova</option>
                                    <option value="127">Monaco</option><option value="135">Mongolia</option><option value="129">Montenegro</option><option value="140">Montserrat</option><option value="126">Morocco</option><option value="146">Mozambique</option><option value="134">Myanmar</option><option value="147">Namibia</option><option value="155">Nauru</option><option value="154">Nepal</option><option value="152">Netherlands</option><option value="148">New Caledonia</option><option value="239">New York</option><option value="156">New Zealand</option><option value="151">Nicaragua</option><option value="149">Niger</option><option value="150">Nigeria</option><option value="111">North Korea</option><option value="137">Northern Mariana Islands</option><option value="153">Norway</option><option value="157">Oman</option><option value="163">Pakistan</option><option value="169">Palau</option><option value="167">Palestinian Territory</option><option value="158">Panama</option><option value="161">Papua New Guinea</option><option value="170">Paraguay</option><option value="159">Peru</option><option value="162">Philippines</option><option value="164">Poland</option><option value="168">Portugal</option><option value="166">Puerto Rico</option><option value="171">Qatar</option><option value="39">Republic Of The Congo</option><option value="172">Reunion</option><option value="173">Romania</option><option value="175">Russia</option><option value="176">Rwanda</option><option value="183">Saint Helena</option><option value="110">Saint Kitts And Nevis</option><option value="117">Saint Lucia</option><option value="165">Saint Pierre And Miquelon</option><option value="218">Saint Vincent And The Grenadines</option><option value="224">Samoa</option>
                                    <option value="188">San Marino</option><option value="193">Sao Tome And Principe</option><option value="177">Saudi Arabia</option><option value="241">Scotland</option><option value="189">Senegal</option><option value="174">Serbia</option><option value="179">Seychelles</option><option value="187">Sierra Leone</option><option value="182">Singapore</option><option value="186">Slovakia</option><option value="184">Slovenia</option><option value="178">Solomon Islands</option><option value="190">Somalia</option><option value="228">South Africa</option><option value="112">South Korea</option><option value="192">South Sudan</option><option value="62">Spain</option><option value="119">Sri Lanka</option><option value="180">Sudan</option><option value="191">Suriname</option><option value="185">Svalbard And Jan Mayen</option><option value="196">Swaziland</option><option value="181">Sweden</option><option value="40">Switzerland</option><option value="195">Syria</option><option value="210">Taiwan</option><option value="201">Tajikistan</option><option value="211">Tanzania</option><option value="200">Thailand</option><option value="199">Togo</option><option value="202">Tokelau</option><option value="206">Tonga</option><option value="208">Trinidad And Tobago</option><option value="205">Tunisia</option><option value="207">Turkey</option><option value="204">Turkmenistan</option><option value="209">Tuvalu</option><option value="220">U.S. Virgin Islands</option><option value="213">Uganda</option><option value="212">Ukraine</option><option value="2">United Arab Emirates</option><option value="70">United Kingdom</option><option value="215">United States</option><option value="214">United States Minor Outlying Islands</option><option value="216">Uruguay</option><option value="217">Uzbekistan</option><option value="222">Vanuatu</option><option value="219">Venezuela</option><option value="221">Vietnam</option><option value="223">Wallis And Futuna</option><option value="60">Western Sahara</option><option value="226">Yemen</option><option value="229">Zambia</option><option value="230">Zimbabwe</option>
                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="29" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-country_id-container"><span class="select2-selection__rendered" id="select2-country_id-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="state_id">State <span class="Form__Error">*</span></label>

                                    <select onchange="dropdownChange('state_id','city','city_list')" required="" class="form-select single required select2-hidden-accessible" id="state_id" name="state_id" aria-label="Select State" data-select2-id="state_id" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="32">Select State</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="31" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-state_id-container"><span class="select2-selection__rendered" id="select2-state_id-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="city">City <span class="Form__Error">*</span></label>

                                    <select required="" class="form-select single required select2-hidden-accessible" id="city" name="city" aria-label="Select City" data-select2-id="city" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="34">Select City</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="33" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-city-container"><span class="select2-selection__rendered" id="select2-city-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="residence_type">Residence Type </label>

                                    <select class="form-select single select2-hidden-accessible" id="residence_type" name="residence_type" aria-label="Select Residence Type" data-select2-id="residence_type" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="36">Select Residence Type</option><option value="Citizen">Citizen</option><option value="Permanent Resident">Permanent Resident</option><option value="Student Visa">Student Visa</option><option value="Temporary Visa">Temporary Visa</option><option value="Work permit">Work permit</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="35" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-residence_type-container"><span class="select2-selection__rendered" id="select2-residence_type-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="alternate_number">Alternate Number </label>

                                        <input type="text" class="form-control " id="alternate_number" name="alternate_number" placeholder="Alternate Number" value=""/>

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="nri_country">If NRI Originated country </label>

                                        <input type="text" class="form-control " id="nri_country" name="nri_country" placeholder="If NRI Originated country" value=""/>

                                    </div></div></div><div class="col-lg-12 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3">

                                    <label class="form-label" for="address">Address </label>

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

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="height">Height </label>

                                    <select class="form-select single select2-hidden-accessible" id="height" name="height" aria-label="Select Height" data-select2-id="height" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="38">Select Height</option><option value="50">4-2 ft</option><option value="51">4-3 ft</option><option value="52">4-4 ft</option><option value="53">4-5 ft</option><option value="54">4-6 ft</option><option value="55">4-7 ft</option><option value="56">4-8 ft</option><option value="57">4-9 ft</option><option value="58">4-10 ft</option><option value="59">4-11 ft</option><option value="60">153cm - 5</option><option value="61">5-1 ft</option><option value="62">5-2 ft</option><option value="63">5-3 ft</option><option value="64">5-4 ft</option><option value="65">5-5 ft</option><option value="66">5-6 ft</option><option value="67">5-7 ft</option><option value="68">5-8 ft</option><option value="69">5-9 ft</option><option value="70">5-10 ft</option><option value="71">5-11 ft</option><option value="72">183cm - 6</option><option value="73">6-1 ft</option><option value="74">6-2 ft</option><option value="75">6-3 ft</option><option value="76">6-4 ft</option><option value="77">6-5 ft</option><option value="78">6-6 ft</option><option value="79">6-7 ft</option><option value="80">6-8 ft</option><option value="81">6-9 ft</option><option value="82">6-10 ft</option><option value="83">6-11 ft</option><option value="84">214cm - 7</option><option value="85">7-1 ft</option><option value="86">7-2 ft</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="37" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-height-container"><span class="select2-selection__rendered" id="select2-height-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="weight">Weight </label>

                                    <select class="form-select single select2-hidden-accessible" id="weight" name="weight" aria-label="Select Weight" data-select2-id="weight" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="40">Select Weight</option><option value="35">35 Kg</option><option value="36">36 Kg</option><option value="37">37 Kg</option><option value="38">38 Kg</option><option value="39">39 Kg</option><option value="40">40 Kg</option><option value="41">41 Kg</option><option value="42">42 Kg</option><option value="43">43 Kg</option><option value="44">44 Kg</option><option value="45">45 Kg</option><option value="46">46 Kg</option><option value="47">47 Kg</option><option value="48">48 Kg</option><option value="49">49 Kg</option><option value="50">50 Kg</option><option value="51">51 Kg</option><option value="52">52 Kg</option><option value="53">53 Kg</option><option value="54">54 Kg</option><option value="55">55 Kg</option><option value="56">56 Kg</option><option value="57">57 Kg</option><option value="58">58 Kg</option><option value="59">59 Kg</option><option value="60">60 Kg</option><option value="61">61 Kg</option><option value="62">62 Kg</option><option value="63">63 Kg</option><option value="64">64 Kg</option><option value="65">65 Kg</option><option value="66">66 Kg</option><option value="67">67 Kg</option><option value="68">68 Kg</option><option value="69">69 Kg</option><option value="70">70 Kg</option><option value="71">71 Kg</option><option value="72">72 Kg</option><option value="73">73 Kg</option><option value="74">74 Kg</option><option value="75">75 Kg</option><option value="76">76 Kg</option><option value="77">77 Kg</option><option value="78">78 Kg</option><option value="79">79 Kg</option><option value="80">80 Kg</option><option value="81">81 Kg</option><option value="82">82 Kg</option><option value="83">83 Kg</option><option value="84">84 Kg</option><option value="85">85 Kg</option><option value="86">86 Kg</option><option value="87">87 Kg</option><option value="88">88 Kg</option><option value="89">89 Kg</option><option value="90">90 Kg</option><option value="91">91 Kg</option><option value="92">92 Kg</option><option value="93">93 Kg</option><option value="94">94 Kg</option>
                                    <option value="95">95 Kg</option><option value="96">96 Kg</option><option value="97">97 Kg</option><option value="98">98 Kg</option><option value="99">99 Kg</option><option value="100">100 Kg</option><option value="101">101 Kg</option><option value="102">102 Kg</option><option value="103">103 Kg</option><option value="104">104 Kg</option><option value="105">105 Kg</option><option value="106">106 Kg</option><option value="107">107 Kg</option><option value="108">108 Kg</option><option value="109">109 Kg</option><option value="110">110 Kg</option><option value="111">111 Kg</option><option value="112">112 Kg</option><option value="113">113 Kg</option><option value="114">114 Kg</option>
                                    <option value="115">115 Kg</option><option value="116">116 Kg</option><option value="117">117 Kg</option><option value="118">118 Kg</option><option value="119">119 Kg</option><option value="120">120 Kg</option><option value="121">121 Kg</option><option value="122">122 Kg</option><option value="123">123 Kg</option><option value="124">124 Kg</option>
                                    <option value="125">125 Kg</option><option value="126">126 Kg</option><option value="127">127 Kg</option><option value="128">128 Kg</option><option value="129">129 Kg</option><option value="130">130 Kg</option><option value="131">131 Kg</option><option value="132">132 Kg</option><option value="133">133 Kg</option><option value="134">134 Kg</option>
                                    <option value="135">135 Kg</option>
                                    <option value="136">136 Kg</option>
                                    <option value="137">137 Kg</option>
                                    <option value="138">138 Kg</option>
                                    <option value="139">139 Kg</option>
                                    <option value="140">140 Kg</option>
                                    <option value="141">141 Kg</option>
                                    <option value="142">142 Kg</option>
                                    <option value="143">143 Kg</option>
                                    <option value="144">144 Kg</option>
                                    <option value="145">145 Kg</option>
                                    <option value="146">146 Kg</option>
                                    <option value="147">147 Kg</option>
                                    <option value="148">148 Kg</option>
                                    <option value="149">149 Kg</option>
                                    <option value="150">150 Kg</option>
                                    </select>
                                    
                                    <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="39" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-weight-container"><span class="select2-selection__rendered" id="select2-weight-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="diet">Eating Habits </label>

                                    <select class="form-select single select2-hidden-accessible" id="diet" name="diet" aria-label="Select Eating Habits" data-select2-id="diet" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="42">Select Eating Habits</option><option value="Vegetarian">Vegetarian</option><option value="Non Vegetarian">Non Vegetarian</option><option value="Eggetarian">Eggetarian</option><option value="Vegan">Vegan</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="41" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-diet-container"><span class="select2-selection__rendered" id="select2-diet-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="smoke">Smoking </label>

                                    <select class="form-select single select2-hidden-accessible" id="smoke" name="smoke" aria-label="Select Smoking" data-select2-id="smoke" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="44">Select Smoking</option><option value="Yes">Yes</option><option value="No">No</option><option value="Planning to quit">Planning to quit</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="43" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-smoke-container"><span class="select2-selection__rendered" id="select2-smoke-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="drink">Drinking </label>

                                    <select class="form-select single select2-hidden-accessible" id="drink" name="drink" aria-label="Select Drinking" data-select2-id="drink" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="46">Select Drinking</option><option value="Teetotaler">Teetotaler</option><option value="Occasionally">Occasionally</option><option value="Socially">Socially</option><option value="Regularly">Regularly</option><option value="Planning to quit">Planning to quit</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="45" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-drink-container"><span class="select2-selection__rendered" id="select2-drink-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="body_type">Body Type </label>

                                    <select class="form-select single select2-hidden-accessible" id="body_type" name="body_type" aria-label="Select Body Type" data-select2-id="body_type" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="48">Select Body Type</option><option value="Slim">Slim</option><option value="Average">Average</option><option value="Athletic">Athletic</option><option value="Heavy">Heavy</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="47" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-body_type-container"><span class="select2-selection__rendered" id="select2-body_type-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="skin_tone">Skin Tone </label>

                                    <select class="form-select single select2-hidden-accessible" id="skin_tone" name="skin_tone" aria-label="Select Skin Tone" data-select2-id="skin_tone" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="50">Select Skin Tone</option><option value="Wheatish">Wheatish</option><option value="Very Fair">Very Fair</option><option value="Fair">Fair</option><option value="Wheatish Brown">Wheatish Brown</option><option value="Dark">Dark</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="49" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-skin_tone-container"><span class="select2-selection__rendered" id="select2-skin_tone-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                  <h4 class="mb-4 text-danger">About</h4>
                  <div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="profileby">Profile By </label>

                                    <select class="form-select single select2-hidden-accessible" id="profileby" name="profileby" aria-label="Select Profile By" data-select2-id="profileby" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="52">Select Profile By</option><option value="Self">Self</option><option value="Parents">Parents</option><option value="Guardian">Guardian</option><option value="Friends">Friends</option><option value="Sibling">Sibling</option><option value="Relatives">Relatives</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="51" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-profileby-container"><span class="select2-selection__rendered" id="select2-profileby-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-12 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3">

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

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="family_type">Family Type </label>

                                    <select class="form-select single select2-hidden-accessible" id="family_type" name="family_type" aria-label="Select Family Type" data-select2-id="family_type" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="54">Select Family Type</option><option value="Nuclear Family">Nuclear Family</option><option value="Joint Family">Joint Family</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="53" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-family_type-container"><span class="select2-selection__rendered" id="select2-family_type-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="family_status">Family Status </label>

                                    <select class="form-select single select2-hidden-accessible" id="family_status" name="family_status" aria-label="Select Family Status" data-select2-id="family_status" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="56">Select Family Status</option><option value="Rich">Rich</option><option value="Upper Middle Class">Upper Middle Class</option><option value="Middle Class">Middle Class</option><option value="Lower Middle Class">Lower Middle Class</option><option value="Poor Family">Poor Family</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="55" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-family_status-container"><span class="select2-selection__rendered" id="select2-family_status-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="father_name">Father Name <span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control " id="father_name" name="father_name" placeholder="Father Name" value=""/>

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="father_occupation">Father Occupation <span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control " id="father_occupation" name="father_occupation" placeholder="Father Occupation" value=""/>

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="mother_name">Mother Name <span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control " id="mother_name" name="mother_name" placeholder="Mother Name" value=""/>

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="edit_inputMain-sltr"><div class="mb-3">

                                        <label class="form-label" for="mother_occupation">Mother Occupation <span class="Form__Error">*</span></label>

                                        <input type="text" required="" class="form-control " id="mother_occupation" name="mother_occupation" placeholder="Mother Occupation" value=""/>

                                    </div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="no_of_brother">No Of Brother </label>

                                    <select class="form-select single select2-hidden-accessible" id="no_of_brother" name="no_of_brother" aria-label="Select No Of Brother" data-select2-id="no_of_brother" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="58">Select No Of Brother</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="4 +">4 +</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="57" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-no_of_brother-container"><span class="select2-selection__rendered" id="select2-no_of_brother-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="no_of_sister">No Of Sister </label>

                                    <select class="form-select single select2-hidden-accessible" id="no_of_sister" name="no_of_sister" aria-label="Select No Of Sister" data-select2-id="no_of_sister" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="60">Select No Of Sister</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="4 +">4 +</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="59" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-no_of_sister-container"><span class="select2-selection__rendered" id="select2-no_of_sister-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-12 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3">

                                    <label class="form-label" for="family_details">Family Details </label>

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

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_frm_age">Partner From Age </label>

                                    <select class="form-select single select2-hidden-accessible" id="part_frm_age" name="part_frm_age" aria-label="Select Partner From Age" data-select2-id="part_frm_age" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="62">Select Partner From Age</option><option value="18">18 Year</option><option value="19">19 Year</option><option value="20">20 Year</option><option value="21">21 Year</option><option value="22">22 Year</option><option value="23">23 Year</option><option value="24">24 Year</option><option value="25">25 Year</option><option value="26">26 Year</option><option value="27">27 Year</option><option value="28">28 Year</option><option value="29">29 Year</option><option value="30">30 Year</option><option value="31">31 Year</option><option value="32">32 Year</option><option value="33">33 Year</option><option value="34">34 Year</option><option value="35">35 Year</option><option value="36">36 Year</option><option value="37">37 Year</option><option value="38">38 Year</option><option value="39">39 Year</option><option value="40">40 Year</option><option value="41">41 Year</option><option value="42">42 Year</option><option value="43">43 Year</option><option value="44">44 Year</option><option value="45">45 Year</option><option value="46">46 Year</option><option value="47">47 Year</option><option value="48">48 Year</option><option value="49">49 Year</option><option value="50">50 Year</option><option value="51">51 Year</option><option value="52">52 Year</option><option value="53">53 Year</option><option value="54">54 Year</option><option value="55">55 Year</option><option value="56">56 Year</option><option value="57">57 Year</option><option value="58">58 Year</option><option value="59">59 Year</option><option value="60">60 Year</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="61" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-part_frm_age-container"><span class="select2-selection__rendered" id="select2-part_frm_age-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_to_age">Partner To Age </label>

                                    <select class="form-select single select2-hidden-accessible" id="part_to_age" name="part_to_age" aria-label="Select Partner To Age" data-select2-id="part_to_age" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="64">Select Partner To Age</option><option value="18">18 Year</option><option value="19">19 Year</option><option value="20">20 Year</option><option value="21">21 Year</option><option value="22">22 Year</option><option value="23">23 Year</option><option value="24">24 Year</option><option value="25">25 Year</option><option value="26">26 Year</option><option value="27">27 Year</option><option value="28">28 Year</option><option value="29">29 Year</option><option value="30">30 Year</option><option value="31">31 Year</option><option value="32">32 Year</option><option value="33">33 Year</option><option value="34">34 Year</option><option value="35">35 Year</option><option value="36">36 Year</option><option value="37">37 Year</option><option value="38">38 Year</option><option value="39">39 Year</option><option value="40">40 Year</option><option value="41">41 Year</option><option value="42">42 Year</option><option value="43">43 Year</option><option value="44">44 Year</option><option value="45">45 Year</option><option value="46">46 Year</option><option value="47">47 Year</option><option value="48">48 Year</option><option value="49">49 Year</option><option value="50">50 Year</option><option value="51">51 Year</option><option value="52">52 Year</option><option value="53">53 Year</option><option value="54">54 Year</option><option value="55">55 Year</option><option value="56">56 Year</option><option value="57">57 Year</option><option value="58">58 Year</option><option value="59">59 Year</option><option value="60">60 Year</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="63" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-part_to_age-container"><span class="select2-selection__rendered" id="select2-part_to_age-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_height">Partner From Height </label>

                                    <select class="form-select single select2-hidden-accessible" id="part_height" name="part_height" aria-label="Select Partner From Height" data-select2-id="part_height" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="66">Select Partner From Height</option><option value="50">4-2 ft</option><option value="51">4-3 ft</option><option value="52">4-4 ft</option><option value="53">4-5 ft</option><option value="54">4-6 ft</option><option value="55">4-7 ft</option><option value="56">4-8 ft</option><option value="57">4-9 ft</option><option value="58">4-10 ft</option><option value="59">4-11 ft</option><option value="60">153cm - 5</option><option value="61">5-1 ft</option><option value="62">5-2 ft</option><option value="63">5-3 ft</option><option value="64">5-4 ft</option><option value="65">5-5 ft</option><option value="66">5-6 ft</option><option value="67">5-7 ft</option><option value="68">5-8 ft</option><option value="69">5-9 ft</option><option value="70">5-10 ft</option><option value="71">5-11 ft</option><option value="72">183cm - 6</option><option value="73">6-1 ft</option><option value="74">6-2 ft</option><option value="75">6-3 ft</option><option value="76">6-4 ft</option><option value="77">6-5 ft</option><option value="78">6-6 ft</option><option value="79">6-7 ft</option><option value="80">6-8 ft</option><option value="81">6-9 ft</option><option value="82">6-10 ft</option><option value="83">6-11 ft</option><option value="84">214cm - 7</option><option value="85">7-1 ft</option><option value="86">7-2 ft</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="65" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-part_height-container"><span class="select2-selection__rendered" id="select2-part_height-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_height_to">Partner To Height </label>

                                    <select class="form-select single select2-hidden-accessible" id="part_height_to" name="part_height_to" aria-label="Select Partner To Height" data-select2-id="part_height_to" tabindex="-1" aria-hidden="true">

                                    <option selected="" value="" data-select2-id="68">Select Partner To Height</option><option value="50">4-2 ft</option><option value="51">4-3 ft</option><option value="52">4-4 ft</option><option value="53">4-5 ft</option><option value="54">4-6 ft</option><option value="55">4-7 ft</option><option value="56">4-8 ft</option><option value="57">4-9 ft</option><option value="58">4-10 ft</option><option value="59">4-11 ft</option><option value="60">153cm - 5</option><option value="61">5-1 ft</option><option value="62">5-2 ft</option><option value="63">5-3 ft</option><option value="64">5-4 ft</option><option value="65">5-5 ft</option><option value="66">5-6 ft</option><option value="67">5-7 ft</option><option value="68">5-8 ft</option><option value="69">5-9 ft</option><option value="70">5-10 ft</option><option value="71">5-11 ft</option><option value="72">183cm - 6</option><option value="73">6-1 ft</option><option value="74">6-2 ft</option><option value="75">6-3 ft</option><option value="76">6-4 ft</option><option value="77">6-5 ft</option><option value="78">6-6 ft</option><option value="79">6-7 ft</option><option value="80">6-8 ft</option><option value="81">6-9 ft</option><option value="82">6-10 ft</option><option value="83">6-11 ft</option><option value="84">214cm - 7</option><option value="85">7-1 ft</option><option value="86">7-2 ft</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="67" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-part_height_to-container"><span class="select2-selection__rendered" id="select2-part_height_to-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Please Select</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_religion">Partner Religion </label>

                                    <select multiple="" onchange="dropdownChange('part_religion','part_caste','caste_list')" class="form-select single disbaledValue select2-hidden-accessible" id="part_religion" name="part_religion[]" aria-label="Select Partner Religion" data-select2-id="part_religion" tabindex="-1" aria-hidden="true">

                                    <option value="Does Not Matter">Does Not Matter</option><option value="12">Buddhist</option><option value="8">Christian</option><option value="5">Hindu</option><option value="9">Jain</option><option value="6">Muslim</option><option value="15">Others</option><option value="10">Parsi</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="69" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Please Select" style={{width: '0px'}}/></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_caste">Partner Caste </label>

                                    <select multiple="" class="form-select single disbaledValue select2-hidden-accessible" id="part_caste" name="part_caste[]" aria-label="Select Partner Caste" data-select2-id="part_caste" tabindex="-1" aria-hidden="true">

                                    <option value="Does Not Matter">Does Not Matter</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="70" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Please Select" style={{width: '0px'}} /></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_country">Country </label>

                                    <select multiple="" onchange="dropdownChange('part_country','part_state','state_list')" class="form-select single disbaledValue select2-hidden-accessible" id="part_country" name="part_country[]" aria-label="Select Country" data-select2-id="part_country" tabindex="-1" aria-hidden="true">

                                    <option value="Does Not Matter">Does Not Matter</option><option value="3">Afghanistan</option><option value="14">Aland Islands</option><option value="5">Albania</option><option value="56">Algeria</option><option value="10">American Samoa</option><option value="1">Andorra</option><option value="7">Angola</option><option value="8">Antarctica</option><option value="4">Antigua And Barbuda</option><option value="9">Argentina</option><option value="6">Armenia</option><option value="13">Aruba</option><option value="12">Australia</option><option value="11">Austria</option><option value="15">Azerbaijan</option><option value="30">Bahamas</option><option value="22">Bahrain</option><option value="18">Bangladesh</option><option value="17">Barbados</option><option value="34">Belarus</option><option value="19">Belgium</option>
                                    <option value="35">Belize</option><option value="24">Benin</option><option value="25">Bermuda</option><option value="31">Bhutan</option><option value="27">Bolivia</option><option value="28">Bonaire, Saint Eustatius And Saba</option><option value="16">Bosnia And Herzegovina</option><option value="33">Botswana</option><option value="32">Bouvet Island</option><option value="29">Brazil</option>
                                    <option value="96">British Indian Ocean Territory</option><option value="26">Brunei</option><option value="21">Bulgaria</option><option value="20">Burkina Faso</option><option value="23">Burundi</option><option value="107">Cambodia</option><option value="43">Cameroon</option><option value="36">Canada</option><option value="48">Cape Verde</option><option value="38">Central African Republic</option><option value="197">Chad</option><option value="42">Chile</option><option value="44">China</option><option value="45">Colombia</option><option value="109">Comoros</option>
                                    <option value="46">Costa Rica</option><option value="88">Croatia</option><option value="47">Cuba</option><option value="49">Cyprus</option><option value="50">Czech Republic</option><option value="37">Democratic Republic Of The Congo</option><option value="53">Denmark</option><option value="52">Djibouti</option><option value="54">Dominica</option><option value="55">Dominican Republic</option><option value="203">East Timor</option><option value="57">Ecuador</option><option value="59">Egypt</option><option value="194">El Salvador</option><option value="80">Equatorial Guinea</option><option value="61">Eritrea</option><option value="58">Estonia</option><option value="63">Ethiopia</option><option value="67">Faroe Islands</option>
                                    <option value="65">Fiji</option><option value="64">Finland</option><option value="68">France</option><option value="73">French Guiana</option><option value="160">French Polynesia</option><option value="198">French Southern Territories</option><option value="69">Gabon</option><option value="77">Gambia</option><option value="72">Georgia</option>
                                    <option value="51">Germany</option><option value="75">Ghana</option><option value="81">Greece</option><option value="76">Greenland</option><option value="71">Grenada</option><option value="79">Guadeloupe</option><option value="83">Guam</option><option value="82">Guatemala</option><option value="74">Guernsey</option><option value="78">Guinea</option><option value="84">Guinea-Bissau</option><option value="85">Guyana</option><option value="89">Haiti</option><option value="87">Honduras</option><option value="86">Hong Kong</option><option value="90">Hungary</option><option value="99">Iceland</option><option value="95">India</option><option value="91">Indonesia</option><option value="98">Iran</option><option value="97">Iraq</option><option value="92">Ireland</option><option value="94">Isle Of Man</option><option value="93">Israel</option><option value="100">Italy</option><option value="41">Ivory Coast</option><option value="102">Jamaica</option>
                                    <option value="104">Japan</option><option value="101">Jersey</option><option value="103">Jordan</option><option value="114">Kazakhstan</option><option value="105">Kenya</option><option value="108">Kiribati</option><option value="225">Kosovo</option><option value="113">Kuwait</option><option value="106">Kyrgyzstan</option><option value="115">Laos</option><option value="124">Latvia</option><option value="116">Lebanon</option><option value="121">Lesotho</option><option value="120">Liberia</option><option value="125">Libya</option><option value="118">Liechtenstein</option><option value="122">Lithuania</option><option value="123">Luxembourg</option><option value="136">Macao</option><option value="132">Macedonia</option><option value="130">Madagascar</option><option value="143">Malawi</option><option value="145">Malaysia</option><option value="142">Maldives</option><option value="133">Mali</option><option value="131">Marshall Islands</option><option value="138">Martinique</option><option value="139">Mauritania</option><option value="141">Mauritius</option><option value="227">Mayotte</option><option value="144">Mexico</option><option value="66">Micronesia</option><option value="128">Moldova</option><option value="127">Monaco</option><option value="135">Mongolia</option><option value="129">Montenegro</option><option value="140">Montserrat</option><option value="126">Morocco</option><option value="146">Mozambique</option><option value="134">Myanmar</option><option value="147">Namibia</option><option value="155">Nauru</option><option value="154">Nepal</option><option value="152">Netherlands</option><option value="148">New Caledonia</option><option value="239">New York</option><option value="156">New Zealand</option><option value="151">Nicaragua</option><option value="149">Niger</option><option value="150">Nigeria</option><option value="111">North Korea</option><option value="137">Northern Mariana Islands</option><option value="153">Norway</option><option value="157">Oman</option><option value="163">Pakistan</option><option value="169">Palau</option><option value="167">Palestinian Territory</option><option value="158">Panama</option><option value="161">Papua New Guinea</option><option value="170">Paraguay</option><option value="159">Peru</option>
                                    <option value="162">Philippines</option><option value="164">Poland</option><option value="168">Portugal</option><option value="166">Puerto Rico</option><option value="171">Qatar</option><option value="39">Republic Of The Congo</option><option value="172">Reunion</option><option value="173">Romania</option><option value="175">Russia</option><option value="176">Rwanda</option><option value="183">Saint Helena</option><option value="110">Saint Kitts And Nevis</option><option value="117">Saint Lucia</option><option value="165">Saint Pierre And Miquelon</option><option value="218">Saint Vincent And The Grenadines</option><option value="224">Samoa</option><option value="188">San Marino</option><option value="193">Sao Tome And Principe</option><option value="177">Saudi Arabia</option><option value="241">Scotland</option><option value="189">Senegal</option><option value="174">Serbia</option><option value="179">Seychelles</option><option value="187">Sierra Leone</option><option value="182">Singapore</option><option value="186">Slovakia</option><option value="184">Slovenia</option><option value="178">Solomon Islands</option><option value="190">Somalia</option><option value="228">South Africa</option><option value="112">South Korea</option><option value="192">South Sudan</option><option value="62">Spain</option><option value="119">Sri Lanka</option><option value="180">Sudan</option><option value="191">Suriname</option><option value="185">Svalbard And Jan Mayen</option><option value="196">Swaziland</option><option value="181">Sweden</option><option value="40">Switzerland</option><option value="195">Syria</option><option value="210">Taiwan</option><option value="201">Tajikistan</option><option value="211">Tanzania</option><option value="200">Thailand</option><option value="199">Togo</option><option value="202">Tokelau</option><option value="206">Tonga</option><option value="208">Trinidad And Tobago</option><option value="205">Tunisia</option><option value="207">Turkey</option><option value="204">Turkmenistan</option><option value="209">Tuvalu</option><option value="220">U.S. Virgin Islands</option><option value="213">Uganda</option><option value="212">Ukraine</option><option value="2">United Arab Emirates</option><option value="70">United Kingdom</option>
                                    <option value="215">United States</option><option value="214">United States Minor Outlying Islands</option><option value="216">Uruguay</option><option value="217">Uzbekistan</option><option value="222">Vanuatu</option><option value="219">Venezuela</option><option value="221">Vietnam</option><option value="223">Wallis And Futuna</option><option value="60">Western Sahara</option><option value="226">Yemen</option><option value="229">Zambia</option><option value="230">Zimbabwe</option>
                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="71" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Please Select" style={{width: '0px'}} /></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_state">Partner State </label>

                                    <select multiple="" class="form-select single disbaledValue select2-hidden-accessible" id="part_state" name="part_state[]" aria-label="Select Partner State" data-select2-id="part_state" tabindex="-1" aria-hidden="true">

                                    <option value="Does Not Matter">Does Not Matter</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="72" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Please Select" style={{width: '0px'}}/></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_marital_status">Partner Marital Status </label>

                                    <select multiple="" class="form-select single disbaledValue select2-hidden-accessible" id="part_marital_status" name="part_marital_status[]" aria-label="Select Partner Marital Status" data-select2-id="part_marital_status" tabindex="-1" aria-hidden="true">

                                    <option value="Does Not Matter">Does Not Matter</option><option value="Unmarried">Unmarried</option><option value="Widow/Widower">Widow/Widower</option><option value="Divorcee">Divorcee</option><option value="Separated">Separated</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="73" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Please Select" style={{width: '0px'}}/></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_income">Partner Annual Income </label>

                                    <select multiple="" class="form-select single disbaledValue select2-hidden-accessible" id="part_income" name="part_income[]" aria-label="Select Partner Annual Income" data-select2-id="part_income" tabindex="-1" aria-hidden="true">

                                    <option value="Does Not Matter">Does Not Matter</option><option value="1">Upto INR 1,00,000</option><option value="2">INR 1,00,000 to 2,00,000</option><option value="3">INR 2,00,000 to 4,00,000</option><option value="4">INR 4,00,000 to 7,00,000</option><option value="5">INR 7,00,000 to 10,00,000</option><option value="6">INR 10,00,000 to 15,00,000</option><option value="7">INR 15,00,000 to 20,00,000</option><option value="8">INR 20,00,000 to 30,00,000</option><option value="9">INR 30,00,000 to 50,00,000</option><option value="10">INR 50,00,000 to 75,00,000</option><option value="11">INR 75,00,000 to 1,00,00,000</option><option value="12">INR 1,00,00,000 to 3,00,00,000</option><option value="13">INR 3,00,00,000 and above</option><option value="14">Not applicable</option><option value="15">Don’t want to Specify</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="74" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Please Select" style={{width: '0px'}}/></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_education">Partner Education </label>

                                    <select multiple="" class="form-select single disbaledValue select2-hidden-accessible" id="part_education" name="part_education[]" aria-label="Select Partner Education" data-select2-id="part_education" tabindex="-1" aria-hidden="true">

                                    <option value="Does Not Matter">Does Not Matter</option><option value="1">Bachelor's</option><option value="2">Master's</option><option value="5">Other</option><option value="3">PHD</option><option value="4">Post Doc</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="75" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Please Select" style={{width: '0px'}} /></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_occupation">Partner Occupation </label>

                                    <select multiple="" class="form-select single disbaledValue select2-hidden-accessible" id="part_occupation" name="part_occupation[]" aria-label="Select Partner Occupation" data-select2-id="part_occupation" tabindex="-1" aria-hidden="true">

                                    <option value="Does Not Matter">Does Not Matter</option><option value="1">Agriculture</option><option value="2">Arts/Creative</option><option value="3">Automotive</option><option value="4">Business/Entrepreneurship</option><option value="5">Construction</option><option value="6">Consulting</option><option value="7">Education/Teaching</option><option value="8">Energy/Utilities</option><option value="9">Engineering</option><option value="10">Environmental Services</option><option value="33">Fashion Designer</option><option value="11">Finance/Banking</option><option value="12">Food Services/Hospitality</option><option value="13">Government/Public Service</option><option value="14">Healthcare/Medical</option><option value="16">Human Resources</option><option value="17">Information Technology (IT)</option><option value="32">Interior Designer</option><option value="18">Legal/Law</option><option value="34">Management/Administration</option><option value="19">Manufacturing</option><option value="20">Marketing/Advertising</option><option value="21">Media/Entertainment</option><option value="31">Others</option><option value="22">Pharmaceuticals</option><option value="23">Real Estate/Property</option><option value="24">Research/Science</option><option value="25">Retail</option><option value="26">Sales</option><option value="27">Seva/Non-Profit/NGO</option><option value="28">Sports/Fitness</option><option value="29">Telecommunications</option><option value="30">Transportation/Logistics</option><option value="15">Travel/Tourism</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="76" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Please Select" style={{width: '0px'}}/></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_mothertongue">Partner Mother Tongue </label>

                                    <select multiple="" class="form-select single not_reset select2-hidden-accessible" id="part_mothertongue" name="part_mothertongue[]" aria-label="Select Partner Mother Tongue" data-select2-id="part_mothertongue" tabindex="-1" aria-hidden="true">

                                    // <option value="Does Not Matter">Does Not Matter</option><option value="65">Aka</option><option value="66">Arabic</option><option value="67">Assamese</option><option value="19">Awadhi</option><option value="68">Bengali</option><option value="69">Bhojpuri</option><option value="21">Bhutia</option><option value="70">Chattisgarhi</option><option value="71">Chinese</option><option value="72">Coorgi</option><option value="73">Dogri</option><option value="74">English</option><option value="75">French</option><option value="76">Garhwali</option><option value="27">Garo</option><option value="77">Gujarati</option><option value="78">Haryanavi</option><option value="79">Himachali/Pahari</option><option value="80">Hindi</option><option value="29">Kakbarak</option><option value="30">Kanauji</option><option value="81">Kannada</option><option value="82">Kashmiri</option><option value="32">Khandesi</option><option value="33">Khasi</option><option value="83">Konkani</option><option value="34">Koshali</option><option value="35">Kumoani</option><option value="84">Kutchi</option><option value="37">Lepcha</option><option value="38">Magahi</option><option value="85">Maithili</option><option value="86">Malay</option><option value="87">Malayalam</option><option value="88">Manipuri</option><option value="89">Marathi</option><option value="90">Marwari</option><option value="41">Miji</option><option value="42">Mizo</option><option value="43">Monpa</option><option value="91">Nepali</option><option value="92">Oriya</option><option value="93">Other</option><option value="45">Persian</option><option value="94">Punjabi</option><option value="95">Rajasthani</option><option value="96">Russian</option><option value="48">Sanskrit</option><option value="49">Santhali</option><option value="12">Sindhi</option><option value="98">Sourashtra</option><option value="99">Spanish</option><option value="51">Swedish</option><option value="52">Tagalog</option><option value="100">Tamil</option><option value="101">Telugu</option><option value="102">Tulu</option><option value="103">Urdu</option>
                                    </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="77" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Please Select" style={{width: '0px'}}/></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><div class="col-lg-6 col-md-6 mb-4 "><div class="custom-select2-div">

                              <div class="edit_inputMain-sltr select2Part w-100 floating-group"><div class="mb-3">

                                    <label class="form-label" for="part_manglik">Partner Manglik </label>

                                    <select multiple="" class="form-select single disbaledValue select2-hidden-accessible" id="part_manglik" name="part_manglik[]" aria-label="Select Partner Manglik" data-select2-id="part_manglik" tabindex="-1" aria-hidden="true">

                                    <option value="Does Not Matter">Does Not Matter</option><option value="No">No</option><option value="Yes">Yes</option><option value="Maybe">Maybe</option><option value="Anshik">Anshik</option></select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="78" style={{width: 'auto'}}><span class="selection"><span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1" aria-disabled="false"><ul class="select2-selection__rendered"><li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="Please Select" style={{width: '0px'}}/></li></ul></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span></div></div></div></div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                </div>
                <input type="hidden" name="step" id="step" value="5"/>
                <button type="button" class="btn btn-primary formSubmitBtn" data-formid="formSubmitBtn5" id="formSubmitBtn5">Submit</button>
              </form>
            </div>
          </div>
         
          <div class="tab-pane fade" id="pills-upload-photo" role="tabpanel" aria-labelledby="pills-upload-photo-tab" tabindex="0">
            <div class="form_content_data">
              
                <div class="row">
                  <input type="hidden" name="_token" value="HzTT0wIMebo7XZX7qQA7c4cxCjKSx33wqCW5LSAU" /> </div>                
                   <div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3">

                                    <label class="form-label" for="photo1">Photo 1 <span class="Form__Error">*</span></label>

                                    <input required="" name="photo1" class="form-control " placeholder="Photo 1" type="file" id="photo1"/>

                                    <input type="hidden" name="photo1_val" id="photo1_val" value=""/>

                                    <input type="hidden" name="photo1_path" id="photo1_path" value="assets/photos/" />

                                    <input type="hidden" name="photo1_ext" id="photo1_ext" value="jpg,png,jpeg,gif,bmp"/>

                                    <p class="help-block">Allowed Maximum File size up to 10MB. File type jpg , png , jpeg , gif , bmp.</p>

                                </div>
                                </div></div>

                                <div class="col-sm-4">

                                    

                                </div><div class="mb-3"> <label class="form-label">Photo 1 Status &nbsp;&nbsp;</label><input checked="" name="photo1_approve" id="Yes" class="form-check-input " type="radio" value="Yes"/>

                                <label class="form-label" for="Yes">APPROVED</label> &nbsp;<input name="photo1_approve" id="No" class="form-check-input " type="radio" value="No"/>

                                <label class="form-label" for="No">UNAPPROVED</label> &nbsp;</div><div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3">

                                    <label class="form-label" for="photo2">Photo 2 </label>

                                    <input name="photo2" class="form-control " placeholder="Photo 2" type="file" id="photo2"/>

                                    <input type="hidden" name="photo2_val" id="photo2_val" value=""/>

                                    <input type="hidden" name="photo2_path" id="photo2_path" value="assets/photos/"/>

                                    <input type="hidden" name="photo2_ext" id="photo2_ext" value="jpg,png,jpeg,gif,bmp"/>

                                    <p class="help-block">Allowed Maximum File size up to 10MB. File type jpg , png , jpeg , gif , bmp.</p>

                                </div></div></div>

                                <div class="col-sm-4">

                                    

                                </div><div class="mb-3"> <label class="form-label">Photo 2 Status &nbsp;&nbsp;</label><input checked="" name="photo2_approve" id="Yes" class="form-check-input " type="radio" value="Yes"/>

                                <label class="form-label" for="Yes">APPROVED</label> &nbsp;<input name="photo2_approve" id="No" class="form-check-input " type="radio" value="No"/>

                                <label class="form-label" for="No">UNAPPROVED</label> &nbsp;</div><div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3">

                                    <label class="form-label" for="photo3">Photo 3 </label>

                                    <input name="photo3" class="form-control " placeholder="Photo 3" type="file" id="photo3"/>

                                    <input type="hidden" name="photo3_val" id="photo3_val" value=""/>

                                    <input type="hidden" name="photo3_path" id="photo3_path" value="assets/photos/"/>

                                    <input type="hidden" name="photo3_ext" id="photo3_ext" value="jpg,png,jpeg,gif,bmp"/>

                                    <p class="help-block">Allowed Maximum File size up to 10MB. File type jpg , png , jpeg , gif , bmp.</p>

                                </div></div></div>

                                <div class="col-sm-4">

                                    

                                </div><div class="mb-3"> <label class="form-label">Photo 3 Status &nbsp;&nbsp;</label><input checked="" name="photo3_approve" id="Yes" class="form-check-input " type="radio" value="Yes"/>

                                <label class="form-label" for="Yes">APPROVED</label> &nbsp;<input name="photo3_approve" id="No" class="form-check-input " type="radio" value="No"/>

                                <label class="form-label" for="No">UNAPPROVED</label> &nbsp;</div><div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3">

                                    <label class="form-label" for="photo4">Photo 4 </label>

                                    <input name="photo4" class="form-control " placeholder="Photo 4" type="file" id="photo4"/>

                                    <input type="hidden" name="photo4_val" id="photo4_val" value=""/>

                                    <input type="hidden" name="photo4_path" id="photo4_path" value="assets/photos/"/>

                                    <input type="hidden" name="photo4_ext" id="photo4_ext" value="jpg,png,jpeg,gif,bmp"/>

                                    <p class="help-block">Allowed Maximum File size up to 10MB. File type jpg , png , jpeg , gif , bmp.</p>

                                </div></div></div>

                                <div class="col-sm-4">

                                    

                                </div><div class="mb-3"> <label class="form-label">Photo 4 Status &nbsp;&nbsp;</label><input checked="" name="photo4_approve" id="Yes" class="form-check-input " type="radio" value="Yes"/>

                                <label class="form-label" for="Yes">APPROVED</label> &nbsp;<input name="photo4_approve" id="No" class="form-check-input " type="radio" value="No"/>

                                <label class="form-label" for="No">UNAPPROVED</label> &nbsp;</div><div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3">

                                    <label class="form-label" for="id_proof_front">Id Proof Front <span class="Form__Error">*</span></label>

                                    <input required="" name="id_proof_front" class="form-control required" placeholder="Id Proof Front" type="file" id="id_proof_front"/>

                                    <input type="hidden" name="id_proof_front_val" id="id_proof_front_val" value=""/>

                                    <input type="hidden" name="id_proof_front_path" id="id_proof_front_path" value="assets/id_proof/"/>

                                    <input type="hidden" name="id_proof_front_ext" id="id_proof_front_ext" value="jpg,png,jpeg,gif,bmp"/>

                                    <p class="help-block">Allowed Maximum File size up to 10MB. File type jpg , png , jpeg , gif , bmp.</p>

                                </div></div></div>

                                <div class="col-sm-4">

                                    

                                </div><div class="col-lg-6 col-md-6 mb-4"><div class="edit_inputMain-sltr"><div class="mb-3">

                                    <label class="form-label" for="id_proof_back">Id Proof Back <span class="Form__Error">*</span></label>

                                    <input required="" name="id_proof_back" class="form-control required" placeholder="Id Proof Back" type="file" id="id_proof_back"/>

                                    <input type="hidden" name="id_proof_back_val" id="id_proof_back_val" value=""/>

                                    <input type="hidden" name="id_proof_back_path" id="id_proof_back_path" value="assets/id_proof"/>

                                    <input type="hidden" name="id_proof_back_ext" id="id_proof_back_ext" value="jpg,png,jpeg,gif,bmp"/>

                                    <p class="help-block">Allowed Maximum File size up to 10MB. File type jpg , png , jpeg , gif , bmp.</p>

                                </div></div></div>

                                <div class="col-sm-4">

                                    

                                </div><div class="mb-3"> <label class="form-label">ID Proof Status &nbsp;&nbsp;</label><input name="id_proof_approve" id="APPROVED" class="form-check-input " type="radio" value="APPROVED"/>

                                <label class="form-label" for="APPROVED">APPROVED</label> &nbsp;<input name="id_proof_approve" id="UNAPPROVED" class="form-check-input " type="radio" value="UNAPPROVED"/>

                                <label class="form-label" for="UNAPPROVED">UNAPPROVED</label> &nbsp;</div><input type="hidden" name="callbackUrl" id="callbackUrl" value="admin.member.index"/>                
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