import React from 'react'
import Slider1 from './Slider1.jpg'
import Slider2 from './Slider2.jpg'


const Home1 = () => {
  return (
   <>
   <div class="page-wrapper">
    {/* <!-- Preloader --> */}
    <div class="preloader"></div>
    {/* <!-- Header span --> */}
    {/* <!-- Main Header--> */}
        {/* <!-- Main Header--> */}
    <header class="main-header">
        <div class="main-box">
		
            <div class="auto-container clearfix ">
			
                <div class="logo-box">
				
                    <div class="logo"><a href="index"><img src="images/logo.png" alt="" title=""/></a>
					</div>
					
                </div>
                
                {/* <!--Nav Box--> */}
                <div class="nav-outer clearfix">
				
                    {/* <!--Mobile Navigation Toggler--> */}
                    <div class="mobileapp_Icon">
                    <a href="https://play.google.com/store/apps/details?id=com.infinity.matrimonysoftware"target="_blank"><img src="images/app-ic.png"/></a>
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
							
                                <li class="current dropdown"><a href="index">Home</a></li>
								
                                <li class="dropdown"><a href="about-us">About</a>
								
							
                                </li>
                                
                                <li class="dropdown"><a href="my_offer">Membership </a></li>
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
          <div class="slide-item" >
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
          <div class="slide-item" >
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
          <div class="slide-item" style={{backgroundImage: url({Slider2})}}>
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
    <section class="coming-soon-section">
      <div class="auto-container">
        <div class="outer-box">
          <div class="time-counter">
            <div class="col-md-12">
              <div class="row">
                <form action="front_search_result?page=1" class="form-inline" method="post">
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
                    <button type="submit" name="submit" value="Lets's Begin" class="theme-btn btn btn-style-two btn-style-letsbegin" >
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
                         <label class="labelcss" style={{vertical-align: 'middle'}}>
                <input type="checkbox" checked style={{vertical-align: 'middle' }}  />
                </label> 
                 I Agree <a href="terms-conditions"  tabindex="3"><u>Terms of Service </u></a> <span class="privacyPolicy"> And<a href="privacy-policy" ><u> Privacy Policy*</u></a></span>

              
                                </div>
             <div class="col-lg-9 col-md-9 col-sm-9 mt-2 keepin_Sign">            
              <li class="switch-agileits float-left"></li>
              <label class="labelcss" style={{vertical-align: 'middle'}}>
                <input type="checkbox" style={{vertical-align: 'middle'}} name="remember_me" value="1"  tabindex="4"/>
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
        <div class="row">
          {/* <!-- Content Column --> */}
          <div class="content-column col-lg-6 col-md-12 col-sm-12">
            <div class="inner-column">
              <div class="sec-title">
                <span class="title">ABOUT US</span>
                  <h2 class="animate-charcter">Welcome to the matrimonysoftware.in</h2>
                  <div class="text">Ready Matrimonial provides decent Matrimonial PHP Script in various design templates at a reasonable price. It is also available in Android & iOs versions.
                  </div>
              </div>
              <ul class="list-style-one">
                <li>Profile with fully updated details</li>
                <li>Multiple & easy way to contact</li>
                <li>Automatic Matching System</li>
                <li>Easy & flexible navigations</li>
              </ul>
              <div class="btn-box"><a href="signup" class="theme-btn btn btn-style-three"><span class="btn-title">Register Now</span></a></div>
            </div>
          </div>
          {/* <!-- Image Column --> */}
          <div class="image-column col-lg-6 col-md-12 col-sm-12 d-none d-sm-block">
            <div class="image-box">
              <figure class="image wow fadeIn">
    <img class="d-none d-lg-block d-xl-block d-md-block" src="images/resource/about-img-1.jpg" alt="" style={{max-width: '100%'}}/>
    </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--End About Section --> */}
    {/* <!-- Features Section Two --> */}
    <section class="features-section-two">
      <div class="auto-container">
        <div class="anim-icons">   
          <span class="icon twist-line-1 wow zoomIn"></span>
          <span class="icon twist-line-2 wow zoomIn" data-wow-delay="1s"></span>
          <span class="icon twist-line-3 wow zoomIn" data-wow-delay="2s"></span>
        </div>
        <div class="row">
          {/* <!-- Title Block --> */}
          <div class="title-block col-lg-4 col-md-12 col-sm-12 wow fadeInUp">
            <div class="inner-box">
              <div class="sec-title">
                <span class="title">Features</span>
                <h2>Our Feature</h2>
              </div>
            </div>
          </div>
        {/* <!-- Feature Block --> */}
        <div class="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
          <div class="inner-box">
            <div class="icon-box"><span class="icon flaticon-lecture"></span></div>
            <h4><a href="login">Free SMS & Chat</a></h4>
            <div class="text">An important facility such as chat is available in our site, so that people can interact with each other.</div>
          </div>
        </div>
        {/* <!-- Feature Block --> */}
        <div class="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
          <div class="inner-box">
            <div class="icon-box"><span class="icon flaticon-search"></span></div>
            <h4><a href="login">Auto Match Maker</a></h4>
            <div class="text">Some new members get registered daily. This matrimony system updates and shows.</div>
          </div>
        </div>
        {/* <!-- Feature Block --> */}
        <div class="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
          <div class="inner-box">
            <div class="icon-box"><span class="icon flaticon-diamond-1"></span></div>
            <h4><a href="login">Recommend Profile</a></h4>
            <div class="text">when you follow some-one, you can see the updates of people whom you follow.
            </div>
          </div>
        </div>
        {/* <!-- Feature Block --> */}
        <div class="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
          <div class="inner-box">
            <div class="icon-box"><span class="icon flaticon-success"></span></div>
            <h4><a href="login">Notification Alerts</a></h4>
            <div class="text">The activities such as changing the display picture, birthday notification, photo requests.
            </div>
          </div>
        </div>
        {/* <!-- Feature Block --> */}
        <div class="feature-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
          <div class="inner-box">
            <div class="icon-box"><span class="icon flaticon-employee"></span></div>
            <h4><a href="login">Restrictions Setting</a></h4>
            <div class="text">Restrictions Enable Copying Photos & Video Disable Anti Spam System Provided.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!--End Features Section --> */}

  {/* <link href="search-profiles-style/mystyle.css" rel="stylesheet"> */}
<div class="auto-container new-profiles">
  <div class="sec-title text-center">
        <span class="title">Introducing Profile </span>
        <h2>Our Groom & Bride</h2>
  </div>
<div class="skew-container">
            <div class="skew module" id="skew11">
  <p class="bdate">ND78568 &nbsp; 
    <span class="mat-id"><a href="login" class="mat-id" >Jain-Others </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/2024_01_05_12_38_16depositphotos_37383675-stock-photo-portrait-of-a-young-beautiful.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Ruchita</p>
      <p>31YRS, 4Ft 1 inch </p>
      <p>345634</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="skew module" id="skew11">
  <p class="bdate">ND41854 &nbsp; 
    <span class="mat-id"><a href="login" class="mat-id" >Maratha </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/2023_04_18_03_26_18agbsdzbx6354.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Ravi</p>
      <p>30YRS, 5Ft 5 inch </p>
      <p>Not Set</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>12th       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="skew module" id="skew11">
  <p class="bdate">ND50616 &nbsp; 
    <span class="mat-id"><a href="login" class="mat-id" >Digambar </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/2023_04_18_03_27_02asafgsag34654675421.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Sk</p>
      <p>23YRS, Null</p>
      <p>Not Set</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="skew module" id="skew11">
  <p class="bdate">ND94180 &nbsp; 
    <span class="mat-id"><a href="login" class="mat-id" >Telugu </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/5900372023_04_10_05_42_23IMG_20221030_133631_103.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Battala</p>
      <p>22YRS, 5Ft 10 inch </p>
      <p>20000</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="skew module" id="skew11">
  <p class="bdate">ND15046 &nbsp; 
    <span class="mat-id"><a href="login" class="mat-id" >Ahom </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/5939732023_04_13_02_43_52Naniactor.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Nani</p>
      <p>22YRS, 6Ft </p>
      <p>500000</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="skew module" id="skew11">
  <p class="bdate">ND95881 &nbsp; 
    <span class="mat-id"><a href="login" class="mat-id" >Kumbara </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/1777322023_04_10_11_34_16WhatsAppImage2023-04-10at11.33.53AM.jpeg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Rakesh</p>
      <p>26YRS, 5Ft 2 inch </p>
      <p>800000</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="skew module" id="skew11">
  <p class="bdate">ND84770 &nbsp; 
    <span class="mat-id"><a href="login" class="mat-id" >Ad Dharmi </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/2023_04_18_03_27_50b43c499e3dda476b395539f69303a05d.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Sidharth</p>
      <p>24YRS, Null</p>
      <p>Not Set</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="skew module" id="skew11">
  <p class="bdate">ND28352 &nbsp; 
    <span class="mat-id"><a href="login" class="mat-id" >Arekatica </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/2023_04_18_03_28_30hair-stylehair-styles-for-boys-hair-styles-men-salon-near-me-hair-boy-hair-salon-near-me-salon-in-mira-road-salons-hair-styles-for-wedding-near-me-13.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Rajesh</p>
      <p>33YRS, 5Ft 2 inch </p>
      <p>5000</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
  
</div>

<div class="secondskew-container">
            <div class="secondskew module" id="skew11">
  <p class="bdate">ND79777 &nbsp; <span> <a href="login" class="mat-id">Lingayath </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/5419132023_04_18_04_08_38febca1600e74a56aa1acafd298aea6fc.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Ujala</p>
      <p>35YRS, 5Ft 4 inch </p>
      <p>504154</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="secondskew module" id="skew11">
  <p class="bdate">ND82795 &nbsp; <span> <a href="login" class="mat-id">Araya </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/2023_04_18_02_51_42yhu8A98.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Kriti</p>
      <p>30YRS, Null</p>
      <p>Not Set</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="secondskew module" id="skew11">
  <p class="bdate">ND55162 &nbsp; <span> <a href="login" class="mat-id"> </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/7267052022_09_15_12_50_43girl.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Nilam</p>
      <p>24YRS, 4Ft 10 inch </p>
      <p>110000</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="secondskew module" id="skew11">
  <p class="bdate">ND18227 &nbsp; <span> <a href="login" class="mat-id">Lingayath </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/8877832022_09_15_12_49_265a6b16956a2753892d9ee5714f6f112a.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Shraddha</p>
      <p>27YRS, 4Ft </p>
      <p>Not Set</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="secondskew module" id="skew11">
  <p class="bdate">ND77768 &nbsp; <span> <a href="login" class="mat-id">Maratha </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/2022_09_16_11_22_22Shraddha-Kapoor-looks-radiant-in-her-desi-avatar-in-a-saree-worth-Rs.-14000-41.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Rohini</p>
      <p>22YRS, 5Ft 3 inch </p>
      <p>100000</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="secondskew module" id="skew11">
  <p class="bdate">ND82357 &nbsp; <span> <a href="login" class="mat-id">Jain-Others </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/2023_04_18_02_53_39istockphoto-1147525564-612x612.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Shruti</p>
      <p>21YRS, Null</p>
      <p>Not Set</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="secondskew module" id="skew11">
  <p class="bdate">ND88370 &nbsp; <span> <a href="login" class="mat-id"> </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/2023_04_18_02_52_58istockphoto-871802194-612x612.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Shruti</p>
      <p>22YRS, Null</p>
      <p>Not Set</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
 <div class="secondskew module" id="skew11">
  <p class="bdate">ND54409 &nbsp; <span> <a href="login" class="mat-id">Mahajan </a></span></p>
  <div class="skew-image">
    <a href="login">
        <img src="photoprocess.php?image=gallary/3941562022_09_15_10_48_29girl.jpg&square=500" alt="" />
    </a>
  </div>
  <div class="info">
    <div class="left-info">
      <p>Renuka</p>
      <p>22YRS, 4Ft 8 inch </p>
      <p>110000</p>
      <p>Not Set</p>
    </div>
    <div class="right-info">
      <p>Not Set      </p>
      <p>Not Set       </p>
      <p>Not Set      </p>
    </div>
  </div>
</div>
  
</div>
</div>
</div>
   </>
  )
}

export default Home1