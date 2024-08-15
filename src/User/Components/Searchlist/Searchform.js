import React, { useState, useEffect } from "react";
import { useAuth } from '../../../AuthContext';
import Navbar from "../Navbar/Navbar";
import Select from "react-select";
import Footer from "../Footer/Footer";
import loaderGif from "../loader-spin.gif";

function Searchform() {
  const { userid } = useAuth();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [ages, setAges] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [occupationList, setOccupationList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [starOptions, setStarOptions] = useState([]);
  const [searchResults, setSearchResults] = useState(null); // State for storing search results
  const [loading, setLoading] = useState(false); // State for loading status

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
          setOccupationList(
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

    const selectedValues = {
      user_id: `${userid}`,
      fromage: document.querySelector("#fromAge").value,
      toage: document.querySelector("#toAge").value,
      education: document.querySelector("#education").value,
      occupation: document.querySelector("#job").value,
      district: document.querySelector("#district").value,
      star: selectedOptions.map((option) => option.value),
    };

    try {
      const response = await fetch("https://tulirmatrimony.com/controlapi/usersearch.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedValues),
      });

      const responseData = await response.json();
      console.log("Response data:", responseData);

      if (responseData.head.code === 200) {
        setSearchResults(responseData.profiles); // Assuming profiles are in the response
      } else if (responseData.head.code === 600) {
        setSearchResults([]); // No profiles found
      }

    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false); // Turn off loading state
    }
  };

  return (
    <>
      <Navbar />
      <section className="pt-4 pb-4 bg-white">
        <form className="container card my-0 py-4" onSubmit={handleSubmit}>
          <div className="row justify-content-center text-start">
            <div className="col-lg-2 col-6 mb-2">
              <label className="form-label">வயது (முதல்)</label>
              <select className="form-select" id="fromAge">
                <option>Select</option>
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
                <option>Select</option>
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
                <option>Select</option>
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
                <option>Select</option>
                {occupationList.map((job) => (
                  <option key={job.value} value={job.value}>
                    {job.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-lg-2 mb-2">
              <label className="form-label">பிறந்த மாவட்டம்</label>
              <select className="form-select" id="district">
                <option>Select</option>
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
          searchResults && (
            searchResults.length > 0 ? (
              <div className="profile-cards">
                {searchResults.map((profile, index) => (
                  <div key={index} className="card">
                    <h5>{profile.name}</h5>
                    <p>{profile.age} years old</p>
                    {/* Add more profile details here */}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <p>No profiles found matching your criteria.</p>
              </div>
            )
          )
        )}
      </section>
      <Footer />
    </>
  );
}

export default Searchform;
