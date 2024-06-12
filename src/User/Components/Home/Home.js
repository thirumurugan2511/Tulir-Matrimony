import React, { useState, useEffect } from 'react';
import Logo from './rgt-matrimony-logo.png';
import './Home.css';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import CardSlider from './CardSlider';
import About from './About';




const Home = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const cards = [
    { image: 'https://via.placeholder.com/300x200' },
    { image: 'https://via.placeholder.com/300x200' },
    { image: 'https://via.placeholder.com/300x200' },
    { image: 'https://via.placeholder.com/300x200' },
    { image: 'https://via.placeholder.com/300x200' },
    { image: 'https://via.placeholder.com/300x200' },
  ];
  return (
    <>
    <Navbar />
     
      <section className='bg-grey pb-5 '>
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
        <div className='search-form-btn mt-4 mx-auto'>
           <Link to="/Searchlist"  className='btn btn-primary col-sm-6 col-5 py-3'>Free search</Link>
        </div>
      </section>
      <section className='mt-5 pt-5 mb-5'>
      <CardSlider cards={cards} />
      
      </section>
      <About />
      
    </>
  );
}

export default Home;
