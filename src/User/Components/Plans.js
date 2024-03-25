import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { GiGoldBar } from "react-icons/gi";



const Plans = () => {
    const pageStyle ={
		backgroundImage: 'url("https://www.matrimonysoftware.in/images/background/5.jpg")'
	}
  return (
    <>
    <section class="page-title" style={pageStyle} >
        <div class="auto-container">
            <h1 class="d-none d-lg-block d-xl-block d-md-block"> Membership Plans</h1>
            <ul class="bread-crumb clearfix">
                <li><a href="index">Home</a></li>
                <li> Membership Plans</li>
            </ul>
        </div>
    </section>
    <section class="pricing-section">
        <div class="anim-icons">
            <span class="icon icon-circle-green wow fadeIn animated" ></span>
            <span class="icon icon-circle-blue wow fadeIn animated" ></span>
            <span class="icon icon-circle-pink wow fadeIn animated"></span>
        </div>
		
               
        <div class="auto-container">
            
            <div class="outer-box">
                <div class="row">
				
				   
                    <div class="pricing-block col-lg-4 col-md-4 col-sm-4 wow fadeInUp animated" >
								  
                               <form method="post" action="login" name="my_plan">

                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><FaPaperPlane className='icon flaticon-paper-plane' /> </div>
                            </div>
                            <div class="price-box">
                                <div class="title">BASIC</div>
                                <h4 class="price">INR: 500 <i class="fa fa-inr "></i> <br/>
                               Days 30 </h4>
                            </div>
                            <ul class="features">
                                                               <li class="true">Profile Display</li>
								                                
								 
                                <li class="true">Express Interest</li>
								 
                               
								 
                                <li class="true">Verified Profiles</li>
								 
								<li class="true">Profile Up-gradation</li>
								                            </ul>
							<p class="contacts">
							<h4>Allowed Contacts : 60</h4>
                                                       
							</p>
                           
							 <div class="btn-box mt-3">							
                              <input name="choose" type="hidden" value="1"/>

                            <button type="submit" class="theme-btn"><a class="theme-btn btn btn-style-one"><span class="btn-title">Pay Now</span></a></button>
                        </div>
							<input name="txtplan" type="hidden" id="txtplan" value="plan5"/>
							<input name="txtplanname" type="hidden" id="txtplanname" value="BASIC"/>
							<input name="txtoid" type="hidden" id="txtoid" value="MP3096937"/>
							<input type="hidden" name="id" value="1"/>
							<input type="hidden" name="pm" value="op4" class="formtext" onclick="getPayForm(this.value)" checked=""/>
                             
                        </div>
						 </form>
						                     </div>
					   
             
                    <div class="pricing-block col-lg-4 col-md-4 col-sm-4 wow fadeInUp animated">
								  
          
                               <form method="post" action="login" name="my_plan">

                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><AiFillDollarCircle class="icon flaticon-paper-plane"/></div>
                            </div>
                            <div class="price-box">
                                <div class="title">Silver</div>
                                <h4 class="price">INR: 3000 <i class="fa fa-inr"></i> <br/>
                               Days 60 </h4>
                            </div>
                            <ul class="features">
                                                               <li class="true">Profile Display</li>
								                                
								 
                                <li class="true">Express Interest</li>
								 
                                
								 
                                <li class="true">Verified Profiles</li>
								 
								<li class="true">Profile Up-gradation</li>
								                            </ul>
							<p class="contacts">
							<h4>Allowed Contacts : 120</h4>
                                                       
							</p>
                           
							 <div class="btn-box mt-3">							
                              <input name="choose" type="hidden" value="3"/>

                            <button type="submit" class="theme-btn"><a class="theme-btn btn btn-style-one"><span class="btn-title">Pay Now</span></a></button>
                        </div>
							<input name="txtplan" type="hidden" id="txtplan" value="Plan3"/>
							<input name="txtplanname" type="hidden" id="txtplanname" value="PRIMIUM"/>
							<input name="txtoid" type="hidden" id="txtoid" value="MP3096937"/>
							<input type="hidden" name="id" value="3"/>
							<input type="hidden" name="pm" value="op4" class="formtext" onclick="getPayForm(this.value)" checked=""/>
                             
                        </div>
						 </form>
						                     </div>
					   
               
                    <div class="pricing-block col-lg-4 col-md-4 col-sm-4 wow fadeInUp animated">
								  
                 
                               <form method="post" action="login" name="my_plan">

                        <div class="inner-box">
                            <div class="icon-box">
                                <div class="icon-outer"><GiGoldBar class="icon flaticon-paper-plane" /></div>
                            </div>
                            <div class="price-box">
                                <div class="title">Gold</div>
                                <h5 class="price">INR: 2100 <i class="fa fa-inr"></i> <br/>
                               Days 120 </h5>
                            </div>
                            <ul class="features">
                                                               <li class="true">Profile Display</li>
								                              
								 
                                <li class="true">Express Interest</li>
								 
								 
                                <li class="true">Verified Profiles</li>
								 
								<li class="true">Profile Up-gradation</li>
								                            </ul>
							<p class="contacts">
							<h4>Allowed Contacts : No limit</h4>
                                                       
							</p>
                           
							 <div class="btn-box mt-3">							
                              <input name="choose" type="hidden" value="54"/>

                            <button type="submit" class="theme-btn"><a class="theme-btn btn btn-style-one"><span class="btn-title">Pay Now</span></a></button>
                        </div>
							<input name="txtplan" type="hidden" id="txtplan" value=""/>
							<input name="txtplanname" type="hidden" id="txtplanname" value="SUPERseUPAR"/>
							<input name="txtoid" type="hidden" id="txtoid" value="MP3096937"/>
							<input type="hidden" name="id" value="54"/>
							<input type="hidden" name="pm" value="op4" class="formtext" onclick="getPayForm(this.value)" checked=""/>
                             
                        </div>
						 </form>
						                     </div>
					                    </div>
		       </div>
             </div>
              
			</section>
    </>
  )
}

export default Plans