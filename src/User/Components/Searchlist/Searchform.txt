import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../../AuthContext';
import Navbar from "../Navbar/Navbar";
import Select from "react-select";
import Footer from "../Footer/Footer";
import loaderGif from "../loader-spin.gif";
import "../Spinner/Spinner.css";
import { ProfileContext } from '../ProfileContext';
import "./Searchlist.css";

function Searchform() {
  const { userid } = useAuth();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [ages, setAges] = useState([]);
  const profilesPerPage = 12;
  const [educationList, setEducationList] = useState([]);
  const [occupactionList, setOccupactionList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [starOptions, setStarOptions] = useState([]);
  const [searchResults, setSearchResults] = useState(null); // State for storing search results
  const [loading, setLoading] = useState(false); // State for loading status
  const [defaultMessage, setDefaultMessage] = useState(true); // New state for default message
  const [remainingCount, setRemainingCount] = useState(null);
  const [expiredDate, setExpiredDate] = useState(null);
  const [viewProfile, setViewProfile] = useState(false);
  const [planData, setPlanData] = useState(null);
  const [singleData, setSingleData] = useState([]);
  const { setProfileCount, profileCount } = useContext(ProfileContext);
  const [noPlan, setNoPlan] = useState("");
  const [plan, setPlan] = useState(null);

  const [viewCount, setViewCount] = useState(0);
  const [data, setData] = useState([]);
  const [fetchComplete, setFetchComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);



  useEffect(() => {
    // Populate age dropdowns
    const ageArray = [];
    for (let i = 18; i <= 60; i++) {
      ageArray.push({ value: i, label: i });
    }
    setAges(ageArray);

    // Fetch education list
    fetch("https://tulirmatrimony.com/controlapi/educationlist.php")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.body)) {
          setEducationList(
            data.body.map((item) => ({ value: item.name, label: item.name }))
          );
        }
      });

    // Fetch occupation list
    fetch("https://tulirmatrimony.com/controlapi/occupationlist.php")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.body)) {
          setOccupactionList(
            data.body.map((item) => ({ value: item.name, label: item.name }))
          );
        }
      });

    // Fetch district list
    fetch("https://tulirmatrimony.com/controlapi/districtlist.php")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.body)) {
          setDistrictList(
            data.body.map((item) => ({ value: item.name, label: item.district_name }))
          );
        }
      });

    // Fetch star list
    fetch("https://tulirmatrimony.com/controlapi/starlist.php")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.body)) {
          setStarOptions(
            data.body.map((item) => ({ value: item.name, label: item.name }))
          );
        }
      });
  }, []);

  const handleSelect = (selected) => {
    setSelectedOptions(selected || []);
  };

  const handleRemove = (item) => {
    setSelectedOptions(
      selectedOptions.filter((option) => option.value !== item)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    setDefaultMessage(false); // Remove default message when search is initiated

    const selectedValues = {
      user_id: `${userid}`,
      fromage: document.querySelector("#fromAge").value,
      toage: document.querySelector("#toAge").value,
      education: document.querySelector("#education").value,
      occupaction: document.querySelector("#job").value,
      district: document.querySelector("#district").value,
      star: selectedOptions.length > 0 ? selectedOptions.map((option) => option.value) : "" 
    };

    try {
      const response = await fetch("https://tulirmatrimony.com/controlapi/usersearch.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedValues),
      });
       
      console.log("Selected data:", selectedValues);
      const responseData = await response.json();
      console.log("Response data:", responseData);

      // Check for success code (200) and valid body array
      if (responseData.head.code === 200 && Array.isArray(responseData.body)) {
        setSearchResults(responseData.body); // Populate with profiles
      } else if (responseData.head.code === 600 && responseData.head.msg === "Data Not Exist") {
        setSearchResults([]); // Set empty array if no profiles found
      } else {
        setSearchResults(null); // Handle any other cases
      }

    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false); // Turn off loading state
    }
  };



  useEffect(() => {
    const singlefetchData = async () => {
      try {
        const response = await fetch(
          `https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${userid}`
        );
        const result = await response.json();
        setSingleData(result.body);
        setFetchComplete(true);
        console.log("Logged User Data", result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    singlefetchData();
  }, [userid]);

  useEffect(() => {
    if (fetchComplete && singleData) {
      const sendPlanData = async () => {
        try {
          const response = await fetch(
            `https://tulirmatrimony.com/controlapi/usermemberplan.php`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user_id: userid,
                plan: singleData.plan_name,
              }),
            }
          );
          const result = await response.json();
          
          if (Array.isArray(result.body) && result.body.length > 0) {
            const planData = result.body[0];
            const profileCount = planData.plan_profile_count;
            const remainingCount = planData.remaining_profile_count;
            const expiredDate = planData.plan_expired_date;

            setProfileCount(profileCount);
            setRemainingCount(remainingCount);
            setExpiredDate(expiredDate);
            setPlan(singleData.plan_name);
          } else {
            console.error("Unexpected response structure or empty body array:", result.body);
          }
        } catch (error) {
          console.error("Error sending plan data:", error);
          setNoPlan("No Plan Selected");
        }
      };

      sendPlanData();
    }
  }, [fetchComplete, singleData, userid, setProfileCount]);

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = data.slice(indexOfFirstProfile, indexOfLastProfile);

  const paginate = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const canViewProfile = () => {
    const remaining = parseInt(remainingCount, 10);
    const isExpired = expiredDate && new Date(expiredDate) <= new Date();
    return remaining > 0 && !isExpired;
  };

  const handleProfileClick = async () => {
    try {
      const response = await fetch(
        "https://tulirmatrimony.com/controlapi/userprofilecount.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userid,
            plan: singleData.plan_name,
          }),
        }
      );
      const result = await response.json();
      if (Array.isArray(result.body) && result.body.length > 0) {
        setPlanData(result.body[0]);
        setRemainingCount(result.body[0].remaining_profile_count);
        setExpiredDate(result.body[0].plan_expired_date);
        console.log("Profile Count API", result.body[0].remaining_profile_count);
        console.log("Profile Expired Date", result.body[0].plan_expired_date);
        if (result.body[0].remaining_profile_count <= 0 || new Date(result.body[0].plan_expire_date) <= new Date()) {
          setViewProfile(false);
        } else {
          setViewProfile(true);
          setViewCount(viewCount + 1);
        }
      } else {
        console.error("Unexpected response structure or empty body array:", result.body);
      }
    } catch (error) {
      console.error("Error fetching profile count data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="pt-4 pb-4 bg-white">
        <form className="container card card-searchh my-0 py-4" onSubmit={handleSubmit}>
          <div className="row justify-content-center text-start">
            <div className="col-lg-2 col-6 mb-2">
              <label className="form-label">வயது (முதல்)</label>
              <select className="form-select" id="fromAge">
                <option value="">Select</option>
                {ages.map((age) => (
                  <option key={age.value} value={age.value}>
                    {age.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-2 col-6 mb-2">
              <label className="form-label">வயது (முதல்)</label>
              <select className="form-select" id="toAge">
                <option value="">Select</option>
                {ages.map((age) => (
                  <option key={age.value} value={age.value}>
                    {age.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-2 col-6 mb-2">
              <label className="form-label">கல்வி</label>
              <select className="form-select" id="education">
                <option value="">Select</option>
                {educationList.map((edu) => (
                  <option key={edu.value} value={edu.value}>
                    {edu.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-2 col-6 mb-2">
              <label className="form-label">வேலை</label>
              <select className="form-select" id="job">
                <option value="">Select</option>
                {occupactionList.map((job) => (
                  <option key={job.value} value={job.value}>
                    {job.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-2 mb-2">
              <label className="form-label">பிறந்த மாவட்டம்</label>
              <select className="form-select" id="district">
                <option value="">Select</option>
                {districtList.map((district) => (
                  <option key={district.value} value={district.value}>
                    {district.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row mx-auto text-start col-lg-10 mb-2">
            <label className="form-label">நட்சத்திரம்</label>
            <Select
              className="basic-multi-select"
              classNamePrefix="select"
              isMulti
              name="stars"
              options={starOptions}
              value={selectedOptions}
              onChange={handleSelect}
            />

            <div className="row mb-2">
              {selectedOptions.map((option, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5px",
                  }}
                  className="col-lg-1 col-2 col-sm-3 col-md-2 w-auto"
                >
                  <span>{option.label}</span>
                  <button
                    onClick={() => handleRemove(option.value)}
                    style={{
                      marginLeft: "10px",
                      color: "black",
                      border: "none",
                      background: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <button className="btn btn-primary px-5 py-2" type="submit">
              Search
            </button>
          </div>
        </form>
      </section>

      <section className="search-body">
  {loading ? (
    <div className="text-center">
      <img src={loaderGif} alt="Loading..." />
    </div>
  ) : (
    <>
      {defaultMessage && (
        <div className="text-center py-4">
          <h1>Find your matches here</h1>
        </div>
      )}
       <div className="auto-container">
      {searchResults !== null && !loading && (
        searchResults.length > 0 ? (
          <div className="profile-cards row">
            {searchResults.map((profile, index) => (
              <div key={index} className="speaker-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated">
              <div className="inner-box">
                <div className="image-box search-profile-div">
                  <figure className="image">
                    <a href="#" target="_blank">
                      <img src={`data:image/jpeg;base64,${profile.image}`} alt="Profile Loading.." />
                    </a>
                  </figure>
                </div>
                <div className="info-box">
                  <h4 className="name">
                    <a href="#" className="cus_name" target="_blank">
                      {profile.name}
                    </a>
                  </h4>
                  <a href="#" target="_blank" onClick={handleProfileClick}>
                    <span className="designation">Age : {profile.age} </span>
                    <span className="designation">{profile.education} </span>
                    <span className="designation">{profile.occupaction} </span>
                    <span className="designation">{profile.star} </span>
                    <span className="designation">{profile.district} </span>
                  </a>
                  <Link
                    className="btn py-2 mt-2 view-pro"
                    to={`/Viewuser/${profile.user_id}`}
                    onClick={() => handleProfileClick()}
                    disabled={!canViewProfile()}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p>No profiles found matching your criteria.</p>
          </div>
        )
      )}
      </div>
    </>
  )}
</section>
      <Footer />
    </>
  );
}

export default Searchform;