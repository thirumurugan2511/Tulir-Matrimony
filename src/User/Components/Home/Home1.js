import React from 'react';
import Logo from './rgt-matrimony-logo.png';
import './Home.css';
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <>
      {/* <header>
        <nav className="navbar navbar-light bg-light py-4">
          <div className="container-fluid">
            <div className='container row mx-auto'>
              <div className='col-lg-8 col-md-6 col-sm-6 col-6 text-start'>
                <a className="navbar-brand" href="#">
                  <img src={Logo} alt="Logo" width="150" height="120" className="d-inline-block align-text-top"/>
                </a>
              </div>
              <div className='col-lg-2 col-md-3 col-sm-6 col-6 text-end'>
                <Link to='/Freereg' className='btn btn-primary px-5 py-2'>Sign In</Link>
              </div>
              <div className='col-lg-2 col-md-3 col-sm-6 col-6 text-end'>
                <Link to='/Freereg' className='btn btn-primary px-5 py-2'>Sign Up</Link>
              </div>
            </div>
          </div>
        </nav>
      </header> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
              <img src={Logo} alt="Logo" width="150" height="120" className="d-inline-block align-text-top"/>
            </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
            <Link to='/Freereg' className='btn btn-primary px-5 py-2 nav-link'>Member Plans</Link>
            </li>
            <li class="nav-item">
            <Link to='/Freereg' className='btn btn-primary px-5 py-2 nav-link'>Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className='bg-grey'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" style={{height: '600px', objectFit: 'cover'}} src="https://attune.in/img/slider/slide1.jpg" alt="First slide"/>
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center" style={{height: '100%'}}>
                <h1 className='fw-bold'>Find Your Prefect Match Here!!!</h1>
              
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" style={{height: '600px', objectFit: 'cover'}} src="https://attune.in/img/slider/slide2.jpg" alt="Second slide"/>
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center" style={{height: '100%'}}>
                <h1 className='fw-bold'>Find Your Prefect Match Here!!!</h1>
               
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" style={{height: '600px', objectFit: 'cover'}} src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*RC6B19aAIwugxbtWNJ7QvQ.jpeg" alt="Third slide"/>
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center" style={{height: '100%'}}>
                <h1 className='fw-bold'>Find Your Prefect Match Here!!!</h1>
              
              </div>
            </div>
          </div>
       
          {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a> */}
        </div>
        <div className="search-form mt-4 col-lg-8 mx-auto">
            <form className="d-flex banner-search justify-content-center rounded p-3">
            <select className="form-select mx-2" aria-label="Looking for">
                <option selected>I'm looking for a</option>
                <option value="1">Bride</option>
                <option value="2">Groom</option>
            </select>
            <select className="form-select mx-2" aria-label="From Age">
                <option selected>From Age</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                
            </select>
            <select className="form-select mx-2" aria-label="To Age">
                <option selected>To Age</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                
            </select>
            <select className="form-select mx-2" aria-label="Religion">
                <option selected>Religion</option>
                <option value="any">Any</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
        
            </select>
            <button type="submit" className="btn btn-primary mx-2 w-50">Let's Begin</button>
            </form>
        </div>
      </section>
    </>
  );
}

export default Home;
