import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "../Components/Home/CardSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import loaderGif from "./loader-spin.gif";
import About3 from "../Components/Home/tulir3.jpg";

const StorySliderContainer = styled.div`
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

const Hstories = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //https://tulirmatrimony.com/controlapi/successlist.php
        //http://localhost:8000/data/hstories
        const response = await fetch(
          "https://tulirmatrimony.com/controlapi/successlist.php"
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    <>
      <section className="pt-5 pb-5 bg-grey">
        <div className="sec-title text-center">
          <span className="title"> Our </span>
          <h2>Happy Story</h2>
        </div>
        <StorySliderContainer>
          <Slider {...settings}>
            {cards.map((card, index) => (
                <Card key={index}>
                  <div className="mx-auto container row p-5 bg-white">
                    <div className="col-lg-8 text-start mb-2">
                      <p className="mb-3">{card.Message}</p>
                      <h3>
                        {card.bridename} &amp; {card.groom_name}
                      </h3>
                      <h3> {card.marriage_date}</h3>
                    </div>
                    <div className="col-lg-4">
                      <img
                        src={`data:image/jpeg;base64,${card.image}`}
                        className="abouth-slide rounded"
                      />
                    </div>
                  </div>
                </Card>
            ))}
          </Slider>
        </StorySliderContainer>
      </section>
    </>
  );
};

export default Hstories;
