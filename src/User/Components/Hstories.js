import Footer from "./Footer/Footer";
import React, { useState, useEffect } from "react";

const Hstories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tulirmatrimony.com/controlapi/successlist.php"
        );
        const result = await response.json();
        console.log(result);
        setData(result.body);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="news-section d-none d-md-block d-lg-block d-xl-block">
        <div className="anim-icons">
          <span className="icon icon-circle-blue wow fadeIn animated"></span>
          <span className="icon twist-line-1 wow zoomIn animated"></span>
          <span className="icon twist-line-2 wow zoomIn animated"></span>
          <span className="icon twist-line-3 wow zoomIn animated"></span>
        </div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="title"> Our </span>
            <h2>Happy Story</h2>
          </div>

          <div className="row">
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide row"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {data.map((item, index) => (
                  <div
                    key={item.id}
                    className={`news-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight animated ${
                      index === 0 ? "active" : ""
                    }`}
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <a href="success_story">
                            <img
                              className="w-30"
                              src={`data:image/jpeg;base64,${item.image}`}
                              alt=""
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="lower-content">
                        <ul className="post-info">
                          <li>
                            <span className="far fa-user"></span>
                            <a href="success_story">{item.marriage_date}</a>
                          </li>
                        </ul>
                        <h4>
                          <a href="success_story">
                            {item.bridename} &amp; {item.groom_name}
                          </a>
                        </h4>
                        <p>{item.Message}</p>
                        <div className="btn-box btn">
                          {/* <a href="success_story" className="read-more">
                            View More
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hstories;
