import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import CardSlider from "./CardSlider";
import About from "./About";
import './Home.css';
import Hstories from "../Hstories";
import Footer from "../Footer/Footer";
import axios from 'axios'; // Make sure axios is installed and imported
import loaderGif from "../loader-spin.gif"; // Adjust the path as necessary

const Home = () => {
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [bannerList, setBannerList] = useState([]); // New state for banners

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  useEffect(() => {
    const fetchBannerList = async () => {
      try {
        const response = await axios.get('https://tulirmatrimony.com/controlapi/bannerlist.php');
        setBannerList(response.data.body); // Set bannerList to response.data.body
        setLoading(false); // Stop loading after fetching data
      } catch (error) {
        console.error('Error fetching banner list', error);
        setLoading(false); // Stop loading even if there's an error
      }
    };
    fetchBannerList(); // Call the function to fetch banner images
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
          <section className="bg-grey pb-5 home-banner">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <ol className="carousel-indicators">
                {bannerList.map((banner, index) => (
                  <li
                    key={banner.id}
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                  ></li>
                ))}
              </ol>
              <div className="carousel-inner">
                {bannerList.map((banner, index) => (
                  <div
                    key={banner.id}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      className="d-block w-100"
                      style={{ height: "600px", objectFit: "cover" }}
                      src={banner.image}
                      alt={`Banner ${banner.id}`}
                    />
                    <div
                      className="carousel-caption d-flex flex-column justify-content-center align-items-center"
                      style={{ height: "100%" }}
                    >
                      <h1 className="fw-bold">Find Your Perfect Match Here!!!</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="search-form-btn mt-4 mx-auto">
              <Link
                to="/Searchform"
                className="btn btn-primary col-lg-3 col-sm-6 col-5 py-3"
              >
                Free search
              </Link>
            </div>
          </section>
          <section className="mt-5 pt-5 mb-5 card-slider-profile container">
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
