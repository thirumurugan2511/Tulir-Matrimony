import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
    
  return (
   <>
    <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <h2 className='text-center mb-4'>Recommended Profiles</h2>
    <div class="carousel-item active slider-bck" >
      <div class="card-wrapper container-sm d-flex  justify-content-around">
      <div class="card card-div ">
  <img src="https://artriva.com/media/k2/galleries/8/matrimonial_5.jpg" class="card-img-top card-recom" width="100px" height="100px" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Name : Vijay</h5>
    <h5 class="card-title">Age : 25</h5>
    <h5 class="card-title">Education : B.Tech</h5>
    
  </div>
</div><div class="card card-div ">
  <img src="https://wallpapercave.com/wp/wp8061235.jpg" class="card-img-top card-recom" width="100px" height="100px" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Name : Durga</h5>
    <h5 class="card-title">Age : 25</h5>
    <h5 class="card-title">Education : B.Tech</h5>
    
  </div>
        </div>
        <div class="card card-div ">
  <img src="https://i.pinimg.com/550x/9a/67/97/9a6797ffac3d2398472dfc45ac9bb809.jpg" class="card-img-top card-recom" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Name : Karthik</h5>
    <h5 class="card-title">Age : 25</h5>
    <h5 class="card-title">Education : B.Tech</h5>
  </div>
</div>
</div>
    </div>
    <div class="carousel-item">
      <div class="card-wrapper container-sm d-flex   justify-content-around">
      <div class="card card-div ">
  <img src="https://artriva.com/images/portfolio/portraits/guy_matrimonial.jpg" class="card-img-top card-recom" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Name : Praveen</h5>
    <h5 class="card-title">Age : 25</h5>
    <h5 class="card-title">Education : B.Tech</h5>
    
  </div>
</div><div class="card card-div ">
  <img src="https://artriva.com/media/k2/galleries/8/ART_4968.jpg" class="card-img-top card-recom" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Name : Sai </h5>
    <h5 class="card-title">Age : 25</h5>
    <h5 class="card-title">Education : B.Tech</h5>
    
  </div>
        </div>
        <div class="card card-div ">
  <img src="https://c1.wallpaperflare.com/preview/834/844/966/smile-happy-bangle-blue.jpg" class="card-img-top card-recom" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Namme : Bhavana</h5>
    <h5 class="card-title">Age : 25</h5>
    <h5 class="card-title">Education : B.Tech</h5>
    
  </div>
</div>
    </div>
    </div>
    <div class="carousel-item">
      <div class="card-wrapper container-sm d-flex  justify-content-around">
      <div class="card card-div ">
  <img src="https://w0.peakpx.com/wallpaper/56/870/HD-wallpaper-minu-murali-kerala-model-minukutty.jpg" class="card-img-top card-recom" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Viji</h5>
    
  </div>
</div>
<div class="card card-div ">
  <img src="https://e0.pxfuel.com/wallpapers/362/512/desktop-wallpaper-kerala-wedding-graphy-by-camrin-films-42-kerala-girls.jpg" class="card-img-top card-recom" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Lashmi</h5>
    
  </div>
        </div>
        <div class="card card-div ">
  <img src="https://artriva.com/images/portfolio/matrimonial/vivek_jain.jpg" class="card-img-top card-recom" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rahul</h5>
    
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    
   </>
  )
}



export default Slider