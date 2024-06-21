import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import './About.css';
import About1 from './tulir1.jpg'
import About2 from "./tulir2.jpg";
import About3 from "./tulir3.jpg";


class About extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "60vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "200px",
      width: "200px",
      textAlign: "center",
      background: "#52C0F5",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <>
        <section className="pt-2 about-bg">
          <div className="container row mx-auto">
            <div className="text-center">
              <h2 className="text-white mt-3 mb-3">About Us</h2>
            </div>
            <div className="col-lg-6 my-auto">
              <h3 className="mb-3 text-white">Welcome to Tulir Matrimony</h3>
              <p className="text-white text-start">
                துளிர் மாட்ரிமோனி உங்கள் வாழ்க்கை துணையை தேர்ந்தெடுக்க உதவ ஒரு
                சிறந்த தளமாகும். நாங்கள் வாடிக்கையாளர்களுக்கு அவர்களின்
                விருப்பங்கள் மற்றும் நம்பிக்கைகளை மதித்து, பாதுகாப்பான மற்றும்
                நம்பகமான சேவைகளை வழங்க கடமைப்பட்டுள்ளோம். துளிர் மாட்ரிமோனி
                மூலம், நீங்கள் உங்கள் வாழ்நாளின் சிறந்த துணையை கண்டுபிடித்து
                வாழ்க்கையை மகிழ்ச்சியோடு கழிக்க முடியும்.
              </p>
            </div>
            <div className="col-lg-6">
              <div style={About.CONTAINER_STYLE}>
                <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                  <img
                    src={About1}
                    className="about-slide"
                    style={About.CARD_STYLE}
                  />
                 
                  <img
                    src={About2}
                    className="about-slide"
                    style={About.CARD_STYLE}
                  />
                  
                  <img
                    src={About3}
                    className="about-slide"
                    style={About.CARD_STYLE}
                  />
                  
                  {/* <img className="about-slide" style={About.CARD_STYLE}>
                    Fourth Card
                  </img>
                  <img className="about-slide" style={About.CARD_STYLE}>
                    Fifth Card
                  </img> */}
                </ReactCardCarousel>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;


