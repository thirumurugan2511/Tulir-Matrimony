import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import CardSlider from "./CardSlider";
import About from "./About";
import './Home.css';
import Hstories from "../Hstories";
import Footer from "../Footer/Footer";
import loaderGif from "../loader-spin.gif"; // Adjust the path as necessary

const Home = () => {
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the time as needed
  }, []);

  return (
    <>
     
      <Navbar />
      {loading ? (
        <div
          className="d-flex justify-content-center back-spin"
          style={{ height: "100vh", alignItems: "center" }}
        >
          <img src={loaderGif} alt="Loading..." className="load-spin" />
        </div>
      ) : (
        <>
          <section className="bg-grey pb-5">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                ></li>
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    style={{ height: "600px", objectFit: "cover" }}
                    src="https://attune.in/img/slider/slide1.jpg"
                    alt="First slide"
                  />
                  <div
                    className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                    style={{ height: "100%" }}
                  >
                    <h1 className="fw-bold">Find Your Perfect Match Here!!!</h1>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{ height: "600px", objectFit: "cover" }}
                    src="https://attune.in/img/slider/slide2.jpg"
                    alt="Second slide"
                  />
                  <div
                    className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                    style={{ height: "100%" }}
                  >
                    <h1 className="fw-bold">Find Your Perfect Match Here!!!</h1>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    style={{ height: "600px", objectFit: "cover" }}
                    src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*RC6B19aAIwugxbtWNJ7QvQ.jpeg"
                    alt="Third slide"
                  />
                  <div
                    className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                    style={{ height: "100%" }}
                  >
                    <h1 className="fw-bold">Find Your Perfect Match Here!!!</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="search-form-btn mt-4 mx-auto">
              <Link
                to="/Searchlist"
                className="btn btn-primary col-lg-3 col-sm-6 col-5 py-3"
              >
                Free search
              </Link>
            </div>
          </section>
          <section className="mt-5 pt-5 mb-5 card-slider-profile">
            <CardSlider />
          </section>
          <About />
          <Hstories />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
