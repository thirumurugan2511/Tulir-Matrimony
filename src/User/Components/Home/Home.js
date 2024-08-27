import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import CardSlider from "./CardSlider";
import About from "./About";
import './Home.css';
import Hstories from "../Hstories";
import Footer from "../Footer/Footer";
import axios from 'axios';
import loaderGif from "../loader-spin.gif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    const fetchBannerList = async () => {
      try {
        const response = await axios.get('https://tulirmatrimony.com/controlapi/bannerlist.php');
        setBannerList(response.data.body);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching banner list', error);
        setLoading(false);
      }
    };
    fetchBannerList();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
            <Slider {...settings}>
              {bannerList.map((banner) => (
                <div key={banner.id}>
                  <img
                    className="d-block w-100 banner-radious"
                    style={{ height: "600px", objectFit: "cover" }}
                    src={banner.image}
                    alt={`Banner ${banner.id}`}
                  />
                </div>
              ))}
            </Slider>
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
