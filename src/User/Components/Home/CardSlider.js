import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./CardSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import loaderGif from "../loader-spin.gif";

const CardSliderContainer = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

const Card = styled.div`
  width: 100%;
  margin: 0 10px;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const CardSlider = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //https://tulirmatrimony.com/controlapi/customerlist.php
        //http://localhost:8000/data/memlist
        const response = await fetch(
          "https://tulirmatrimony.com/controlapi/customerlist.php"
        );
        const result = await response.json();
        const shuffledCards = shuffleArray(result.body).slice(0, 8);
        setCards(shuffledCards);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center back-spin"
        style={{ height: "100vh", alignItems: "center" }}
      >
        <img src={loaderGif} alt="Loading..." className="load-spin" />
      </div>
    );
  }

  return (
    <CardSliderContainer>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Card key={index}>
            <div className="card pro-border" style={{ width: "18rem" }}>
              <img
                src={`data:image/jpeg;base64,${card.image}`}
                alt=""
                className="card-img-top"
              />
              <div className="card-body info-box-div mt-2">
                <h5 className="card-title text-white">{card.name}</h5>
                <p className="card-text">{card.age}Age : 22</p>
                <p className="card-text mb-1">{card.age}Software Engineer</p>
                <Link to="/Login" className="btn view-pro">View Profile</Link>
              </div>
            </div>
          </Card>
        ))}
      </Slider>
    </CardSliderContainer>
  );
};

export default CardSlider;
