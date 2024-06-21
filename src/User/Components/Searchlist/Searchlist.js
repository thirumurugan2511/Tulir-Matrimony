import React, { useEffect, useState } from "react";
import "./Searchlist.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Searchlist = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [clickCount, setClickCount] = useState(0); // State variable to track the number of clicks
  const [remainingLimit, setRemainingLimit] = useState(10); // State variable to track the remaining limit
  const [loading, setLoading] = useState(true); // State variable for loading status
  const profilesPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        //('https://tulirmatrimony.com/controlapi/customerlist.php');
        //http://localhost:8000/data/memlist
        const response = await fetch(
          "https://tulirmatrimony.com/controlapi/customerlist.php"
        );
        const result = await response.json();
        console.log(result);
        setData(result.body);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, []);

  // Calculate the profiles to display based on the current page
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = data.slice(indexOfFirstProfile, indexOfLastProfile);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / profilesPerPage); i++) {
    pageNumbers.push(i);
  }

  // Function to show alert and track click counts
  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    setRemainingLimit(remainingLimit - 1);
    if (newCount >= 10) {
      if (window.confirm("User count is reached. Do you want to proceed?")) {
        window.location.href = "/Plans"; // Redirect to another page
      }
    } else {
      window.confirm("முழு விவரங்களைப் பார்க்க, திட்டத்தைத் தேர்ந்தெடுக்கவும்");
    }
  };

  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <div className="d-flex align-items-center justify-content-center">
            <div
              className="spinner-grow"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="sr-only"></span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <section className="speakers-section-three pt-5">
            <div className="auto-container">
              <h4 className="mb-3">
                {/* நீங்கள் {clickCount} சுயவிவரங்களை பார்த்திருக்கிறீர்கள். */}
                உங்களிடம் {remainingLimit} சுயவிவரங்களை பார்க்கும் வாய்ப்பு
                உள்ளது.
              </h4>
            </div>
            <div className="auto-container">
              <div className="row">
                {currentProfiles.map((item, index) => (
                  <div
                    key={index}
                    className="speaker-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <a href="#" target="_blank">
                            <img
                              src={`data:image/jpeg;base64,${item.image}`}
                              alt="Profile Loading.."
                            />
                          </a>
                        </figure>
                      </div>
                      <div className="info-box">
                        <h4 className="name">
                          <a href="#" target="_blank">
                            {item.name}
                          </a>
                        </h4>
                        <a href="#" target="_blank" onClick={handleClick}>
                          <span className="designation">
                            {item.age} Age : 22
                          </span>
                          <span className="designation">
                            {item.education} Bachelor of computer applications
                          </span>
                          <span className="designation">
                            {item.occupaction} Software engineer trainee
                          </span>
                          <span className="designation">
                            {item.star} பூரட்டாதி
                          </span>
                          <span className="designation">
                            {item.district} Madurai{" "}
                          </span>
                        </a>
                        <button
                          className="btn py-2 mt-2 view-pro"
                          onClick={handleClick}
                          disabled={remainingLimit <= 0} // Disable button if limit is reached
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div align="center" className="col-lg-12">
                <ul className="styled-pagination" id="pagination">
                  <li className="setPage">
                    Page {currentPage} of {pageNumbers.length}
                  </li>
                  {pageNumbers.map((number) => (
                    <li
                      key={number}
                      className={number === currentPage ? "activee" : ""}
                    >
                      <a onClick={() => paginate(number)}>{number}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default Searchlist;
