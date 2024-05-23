// CardSlider.js
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
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
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
        breakpoint: 480,
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
            <img src={card.image} alt={`Card ${index + 1}`} />
          </Card>
        ))}
      </Slider>
    </CardSliderContainer>
  );
};

export default CardSlider;
