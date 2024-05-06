import React from 'react'
import Slider1 from './Home/Slider1.jpg'
import Slider2 from './Home/Slider2.jpg'
import Aboutimg from './Home/about-img.jpg'
// import Logo from './rgt-matrimony-logo.png'
import Slider from './Home/Slider'
import Hstories from './Hstories'
const Dhome = () => {

  return (
    <>
    <div class="page-wrapper">
    <header class="main-header">
        <div class="main-box " id='navbar'>
		
            <div class="auto-container clearfix">
			
                <div class="logo-box">
				
                    <div class="logo"><a href="index"><img src={''} class='logo-img' alt="" title="" style={{maxWidth : '100%', height: '60'}} /></a>
					</div>
					
                </div>
                
                {/* <!--Nav Box--> */}
                <div class="nav-outer clearfix">
				
                    {/* <!--Mobile Navigation Toggler--> */}
                    <div class="mobileapp_Icon">
                    <a href="" target="_blank"><img src="images/app-ic.png"/></a>
                    </div>
                    <div class="mobile-nav-toggler"><span class="icon flaticon-menu"></span>
					
					</div>
                    {/* <!-- Main Menu --> */}
                    <nav class="main-menu navbar-expand-md navbar-light">
					
                        <div class="navbar-header">
                            {/* <!-- Togg le Button -->       */}
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="icon flaticon-menu-button"></span>
                            </button>
                        </div>

                        <div class="collapse navbar-collapse clearfix" id="navbarSupportedContent">
						
                            <ul class="navigation clearfix">
							
                                {/* <li class="current dropdown"><a href="index">Home</a></li> */}
								
                                {/* <li class="dropdown"><a href="about-us">About</a> */}
								
							
                                {/* </li> */}
                                
                                <li class="dropdown"><a href="my_offer">Membership Plan </a></li>
                                {/* <!--<li class="dropdown"><a href="success_story">Happy Story</a></li>--> */}
                              
								
                            </ul>
							
                        </div>
                    </nav>
					
                    {/* <!-- Main Menu End--> */}

                    {/* <!-- Outer box --> */}
                    <div class="outer-box">
					
                        {/* <!--Search Box--> */}
                        <div class="search-box-outer">
						
                            <div class="search-box-btn">
							<span class="flaticon-search">
							</span></div>
                        </div>

                        {/* <!-- Button Box --> */}
                          <div class="btn-box">
						  
                            <a href="login" class="theme-btn btn btn-style-one"><span class="btn-title">Login</span></a>
                        </div>
                        <div class="btn-box">
                            <a href="signup" class="theme-btn btn btn-style-one"><span class="btn-title">SignUp</span></a>
							
                        </div>
						
                    </div>
					
                </div>
            </div>
        </div>
		

        {/* <!-- Mobile Menu  --> */}
        <div class="mobile-menu">
		
            <div class="menu-backdrop"></div>
            <div class="close-btn"><span class="icon flaticon-cancel-1"></span></div>
            
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            <nav class="menu-box">
                <div class="nav-logo"><a href="index"><img src="images/logo-2.png" alt="" title=""/></a>
				</div>
                
                <ul class="navigation clearfix">
				
				{/* <!--Keep This Empty / Menu will come through Javascript--> */}
        </ul>

				<li class="dropdown"><a href="success_story">Happy Story</a></li><hr/>
				<a href="login" class="theme-btn btn-style-one ml-4 mt-2"><span class="btn-title">Login</span></a>
				<a href="signup" class="theme-btn btn-style-one mt-2 ml-3"><span class="btn-title">SignUp</span></a>
            </nav>
        </div>
        {/* <!-- End Mobile Menu --> */}

    </header>
    {/* <!--End Main Header --> */}
	
		<div id="search-popup" class="search-popup">
	<div class="close-search theme-btn"><span class="fas fa-window-close"></span></div>
	<div class="popup-inner">
		<div class="overlay-layer"></div>
    	<div class="search-form">
        	<form method="post" action="idsearch_result.php">
            	<div class="form-group">
                	{/* <fieldset>
                        <input type="search" class="form-control" placeholder="Enter Matrimony ID" value="" 
						name="matriid" required >
						<input type="submit" value="Search Profile!" name="submit_id" class="theme-btn">
                    </fieldset> */}
                </div>
            </form>
            
            <br/>
            <h3>Recent Search Keywords</h3>
            <ul class="recent-searches">
			 
			            
				<li><a href="religion_search?religion=Christian" >Christian</a></li>

                            
				<li><a href="religion_search?religion=Hindu" >Hindu</a></li>

                            
				<li><a href="religion_search?religion=Inter-Religion" >Inter-Religion</a></li>

                            
				<li><a href="religion_search?religion=Jain" >Jain</a></li>

                            
				<li><a href="religion_search?religion=Muslim" >Muslim</a></li>

                            
				<li><a href="religion_search?religion=Sikh" >Sikh</a></li>

                             </ul>
        
        </div>
        
    </div>
</div>
      {/* <!--End Main Header -->
      <!-- Banner Section --> */}
     <div class="mainBannerSection">
     <section class="banner-section d-none d-lg-block d-xl-block d-md-block mobile_Hidden">
        <div class="banner-carousel owl-carousel owl-theme ">

          {/* <!-- Slide Item --> */}
          <div class="slide-item" style={{backgroundImage: `url(${Slider2})`}}>
            <div class="auto-container">
              <div class="content-box mt-5">
               
                <h2> Find  Your Prefect <br/>Match Here!!!</h2>
                <ul class="info-list">
                  <li><span class="icon fas fa-edit"></span> Sign Up</li>
                  <li><span class="icon fas fa-user-plus"></span> Connect</li>
                  <li><span class="icon fas fa-comments"></span> Interact</li>
                </ul>
               
              </div>  
            </div>
          </div>

        </div>
      </section>

  {/* <!-- mobile slider start here --> */}
  <section class="banner-section d-block d-lg-none d-xl-none d-md-none mobile_Hidden">
        <div class="banner-carousel owl-carousel owl-theme banner-carousel-two">
            {/* <!-- Slide Item --> */}
          <div class="slide-item">
            <div class="auto-container">
              <div class="content-box mt-5">
                
                <h2> Someone Special is <br/>Waiting For You</h2>
                <ul class="info-list">
                  <li><span class="icon fas fa-edit"></span> Sign Up</li>
                  <li><span class="icon fas fa-user-plus"></span> Connect</li>
                  <li><span class="icon fas fa-comments"></span> Interact</li>
                </ul>
               
              </div>  
            </div>
          </div>

          {/* <!-- Slide Item --> */}
          <div class="slide-item">
            <div class="auto-container">
              <div class="content-box mt-5">
                
                <h2> Find  Your Prefect <br/>Match Here!!!</h2>
                <ul class="info-list">
                  <li><span class="icon fas fa-edit"></span> Sign Up</li>
                  <li><span class="icon fas fa-user-plus"></span> Connect</li>
                  <li><span class="icon fas fa-comments"></span> Interact</li>
                </ul>
               
              </div>  
            </div>
          </div>

        </div>
      </section>
    </div>
     {/* <!-- mobile slider end here -->

    <!--End Banner Section -->
    <!--End Banner Section -->
    <!-- Coming Soon --> */}
    <section class="coming-soon-section mt-5">
      <div class="auto-container">
        <div class="outer-box">
          <div class="time-counter">
            <div class="col-md-12">
              <div class="row">
                <form action="front_search_result?page=1" class="form-inline row" method="post">
                  <div class="col-lg-3 col-md-3 col-sm-3 form-group">
                  <label class="label" for="lookingfor"><span class="search">I'm looking for a</span></label>
                  <select class="dropselect" name="gender" selected tabindex="1">
                    <option value="Male">Groom</option>
                    <option value="Female" selected>Bride</option>
                  </select>
                  </div> 
                  <div class="col-lg-2 col-md-2 col-sm-2 form-group">       
                    <label class="label" for="lookingfor"><span class="search">From Age</span></label>
                      <select class="dropselect" id="fromage"   onChange="fillage(this.value)" value="Select" name="txtSAge" tabindex="2"required>
                  <option value="" selected>Select</option> 
                                            <option value="18">18</option>
                                      <option value="19">19</option>
                                      <option value="20">20</option>
                                      <option value="21">21</option>
                                      <option value="22">22</option>
                                      <option value="23">23</option>
                                      <option value="24">24</option>
                                      <option value="25">25</option>
                                      <option value="26">26</option>
                                      <option value="27">27</option>
                                      <option value="28">28</option>
                                      <option value="29">29</option>
                                      <option value="30">30</option>
                                      <option value="31">31</option>
                                      <option value="32">32</option>
                                      <option value="33">33</option>
                                      <option value="34">34</option>
                                      <option value="35">35</option>
                                      <option value="36">36</option>
                                      <option value="37">37</option>
                                      <option value="38">38</option>
                                      <option value="39">39</option>
                                      <option value="40">40</option>
                                      <option value="41">41</option>
                                      <option value="42">42</option>
                                      <option value="43">43</option>
                                      <option value="44">44</option>
                                      <option value="45">45</option>
                                      <option value="46">46</option>
                                      <option value="47">47</option>
                                      <option value="48">48</option>
                                      <option value="49">49</option>
                                      <option value="50">50</option>
                                      <option value="51">51</option>
                                      <option value="52">52</option>
                                      <option value="53">53</option>
                                      <option value="54">54</option>
                                      <option value="55">55</option>
                                      <option value="56">56</option>
                                      <option value="57">57</option>
                                      <option value="58">58</option>
                                      <option value="59">59</option>
                                      <option value="60">60</option>
                                      <option value="61">61</option>
                                      <option value="62">62</option>
                                      <option value="63">63</option>
                                      <option value="64">64</option>
                                      <option value="65">65</option>
                                          </select>
                  </div>
                  <div class="col-lg-2 col-md-2 col-sm-2 form-group">
                    <label class="label" for="lookingfor"><span  class="search">To Age</span></label>
                    <select class="dropselect" value="Select"  id="toage" name="txtEAge" tabindex="3"required>
                     <option value="" selected>Select</option> 
                                    <option value="18">18</option>
                                      <option value="19">19</option>
                                      <option value="20">20</option>
                                      <option value="21">21</option>
                                      <option value="22">22</option>
                                      <option value="23">23</option>
                                      <option value="24">24</option>
                                      <option value="25">25</option>
                                      <option value="26">26</option>
                                      <option value="27">27</option>
                                      <option value="28">28</option>
                                      <option value="29">29</option>
                                      <option value="30">30</option>
                                      <option value="31">31</option>
                                      <option value="32">32</option>
                                      <option value="33">33</option>
                                      <option value="34">34</option>
                                      <option value="35">35</option>
                                      <option value="36">36</option>
                                      <option value="37">37</option>
                                      <option value="38">38</option>
                                      <option value="39">39</option>
                                      <option value="40">40</option>
                                      <option value="41">41</option>
                                      <option value="42">42</option>
                                      <option value="43">43</option>
                                      <option value="44">44</option>
                                      <option value="45">45</option>
                                      <option value="46">46</option>
                                      <option value="47">47</option>
                                      <option value="48">48</option>
                                      <option value="49">49</option>
                                      <option value="50">50</option>
                                      <option value="51">51</option>
                                      <option value="52">52</option>
                                      <option value="53">53</option>
                                      <option value="54">54</option>
                                      <option value="55">55</option>
                                      <option value="56">56</option>
                                      <option value="57">57</option>
                                      <option value="58">58</option>
                                      <option value="59">59</option>
                                      <option value="60">60</option>
                                      <option value="61">61</option>
                                      <option value="62">62</option>
                                      <option value="63">63</option>
                                      <option value="64">64</option>
                                      <option value="65">65</option>
                                        </select>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 form-group">
                    <label class="label" for="lookingfor"><span class="search" >Religion</span></label>
                    <select class="dropselect" value="Select" name="religion" id="religion" onChange="fillcaste(this.value)" tabindex="4" required>
                      <option value="Any" selected>Any</option>
                                            <option value="Christian">Christian</option>
                                            <option value="Hindu">Hindu</option>
                                            <option value="Inter-Religion">Inter-Religion</option>
                                            <option value="Jain">Jain</option>
                                            <option value="Muslim">Muslim</option>
                                            <option value="Sikh">Sikh</option>
                                          </select>
                    <span></span>
                  </div>
         <div class="btn-box col-md-2 mt-3 ">  
                    <button type="submit" name="submit" value="Lets's Begin" class="theme-btn py-3 px-3 btn btn-style-two btn-style-letsbegin" >
           <span class="btn-title">Lets's Begin </span></button>
                  </div>
                </form>
              </div>
            </div>
        </div>
        </div>
        </div>
    </section>
    {/* <!-- End Coming Soon --> */}
        {/* <!--LoginPage Section--> */}
    <section class="newsletter-section loginSection">
        <div class="anim-icons full-width">
            <span class="icon icon-shape-3 wow fadeIn"></span>
            <span class="icon icon-line-1 wow fadeIn"></span>
        </div>
        <div class="auto-container">
            {/* <!--Subscribe Form--> */}
      <div class="row">
       <div class="col-lg-2 col-md-4 col-sm-4">
       </div>
             <div class="form-column col-lg-8 col-md-12 col-sm-12">
                    <div class="inner-column">
                        <div class="contact-form">
                             <div class="sec-title text-center"> 
                            {/* <!--<div class="icon-box"><span class="fa fa-envelope"></span></div>
                            <br/><h2>Log In</h2> --> */}
                            <div class="text">Existing Member? Login</div>
                        </div>
                                                             <form method="post" action="login_submit.php" class="form" id="contact-form">
                                <div class="row clearfix">
                              
                 <div class="col-lg-12 col-md-12 col-sm-12 form-group" id="emailerror">
                                       <input type="text"  autofocus name="txtusername" placeholder="Email ID / Username / Mobile No." tabindex="1"   required value="" />
                                    </div>
                                    
                                    <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                   <input type="password" name="txtpassword" placeholder="Enter Password" maxlength="35"  id="pass" tabindex="2" required value="" />

                      </div>
              <div class="col-lg-9 col-md-9 col-sm-9 mb-2 AcknowledgeSection">   
                         <label class="labelcss" >
                <input type="checkbox" checked   />
                </label> 
                 I Agree <a href="terms-conditions"  tabindex="3"><u>Terms of Service </u></a> <span class="privacyPolicy"> And<a href="privacy-policy" ><u> Privacy Policy*</u></a></span>

              
                                </div>
             <div class="col-lg-9 col-md-9 col-sm-9 mt-2 keepin_Sign">            
              <li class="switch-agileits float-left"></li>
              <label class="labelcss" >
                <input type="checkbox"  name="remember_me" value="1"  tabindex="4"/>
                <span class="slider-switch round " ></span>
                  Keep me signed in
              </label>
              
              </div>
              
              <div class="col-lg-3 col-md-3 col-sm-3 mt-2 troubleSection"  >    
                               <a href="forgot_password" class="ml-4" tabindex="5">Trouble login in?</a>
                      </div>    
                                   
                                    
                                    
                                    
                                   <div class="col-lg-12 col-md-12 col-sm-12 mt-3 ">
                 <div class="btn-box">  
                <button class="theme-btn btn btn-style-one " tabindex="6" type="submit" name="submit" style={{width:'100%'}}><span class="btn-title">Log In</span></button>
                                          
                 </div> 
                 
                  
                           </div>
                   <div class="col-lg-9 col-md-9 col-sm-9 mt-3 registerSection">
                <span class="">  New Candidate Register ?<a href="signup"  tabindex="7"> SignUp</a></span>
                 
               </div>
                
                                </div>
                            </form>
              
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </section>
    {/* <!--EndLoginPage Section--> */}
    {/* <!-- About Section --> */}
    <section class="about-section">
      <div class="anim-icons full-width">
        <span class="icon icon-dots wow fadeInleft"></span>
        <span class="icon icon-circle-1 wow zoomIn"></span>
      </div>
      <div class="auto-container">
        <div class="row container">
          {/* <!-- Content Column --> */}
          <div class="content-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="sec-title text-start">
                <span class="title">ABOUT US</span>
                  <h2 class="animate-charcter">Welcome to the RGT Matrimony</h2>
                  <div class="text text-start">Here we foster meaningful connections. With a focus on compatibility and lasting relationships, we're here to help you find your perfect match.
                  </div>
              </div>
              <ul class="list-style-one text-start">
                <li>Profile with fully updated details</li>
                <li>Multiple & easy way to contact</li>
                <li>Automatic Matching System</li>
                <li>Easy & flexible navigations</li>
              </ul>
              <div class="btn-box text-start"><a href="signup" class="theme-btn btn btn-style-three"><span class="btn-title">Register Now</span></a>
              </div>
            </div>
          </div>
          {/* <!-- Image Column --> */}
          <div class="image-column col-lg-6 col-md-12 col-sm-12 d-none d-sm-block">
            <div class="image-box">
              <figure class="image wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
    <img class="d-lg-block d-xl-block d-md-block" src={Aboutimg} alt="" style={{maxWidth : '100%'}} />
    </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--End About Section --> */}
    {/* <!-- Features Section Two --> */}
    <Slider />
    <Hstories />

    <Hstories />





 

</div>
    </>
  )
}

export default Dhome