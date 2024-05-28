// CardSlider.js
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import './CardSlider.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const CardSlider = ({ cards }) => {
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

  return (
    <CardSliderContainer>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Card key={index}>
            <div class="card " style={{width: '18rem'}}>
            <img src={card.image} alt={`Card ${index + 1}`} class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          </Card>
        ))}
      </Slider>
    </CardSliderContainer>
  );
};

export default CardSlider;
