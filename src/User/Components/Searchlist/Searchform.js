import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Select from "react-select";
import Footer from "../Footer/Footer";

function Searchform() {
  const { user_id } = useParams();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [ages, setAges] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [occupationList, setOccupationList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [starOptions, setStarOptions] = useState([]);

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
        console.log("Education data:", data);
        if (Array.isArray(data.body)) {
          setEducationList(
            data.body.map((item) => ({ value: item.id, label: item.name }))
          );
        } else {
          console.error("Education data is not an array:", data);
        }
      });

    // Fetch occupation list
    fetch("https://tulirmatrimony.com/controlapi/occupationlist.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Occupation data:", data);
        if (Array.isArray(data.body)) {
          setOccupationList(
            data.body.map((item) => ({ value: item.id, label: item.name }))
          );
        } else {
          console.error("Occupation data is not an array:", data);
        }
      });

    // Fetch district list
    fetch("https://tulirmatrimony.com/controlapi/districtlist.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("District data:", data);
        if (Array.isArray(data.body)) {
          setDistrictList(
            data.body.map((item) => ({ value: item.id, label: item.name }))
          );
        } else {
          console.error("District data is not an array:", data);
        }
      });

    // Fetch star list
    fetch("https://tulirmatrimony.com/controlapi/starlist.php")
      .then((response) => response.json())
      .then((data) => {
        console.log("Star data:", data);
        if (Array.isArray(data.body)) {
          setStarOptions(
            data.body.map((item) => ({ value: item.id, label: item.name }))
          );
        } else {
          console.error("Star data is not an array:", data);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedValues = {
      user_id, // Add user_id to the selected values
      fromAge: document.querySelector("#fromAge").value,
      toAge: document.querySelector("#toAge").value,
      education: document.querySelector("#education").value,
      occupacation: document.querySelector("#job").value,
      district: document.querySelector("#district").value,
      star: selectedOptions.map((option) => option.value),
    };

    fetch("https://tulirmatrimony.com/controlapi/usersearch.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedValues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
      <Footer />
    </>
  );
}

export default Searchform;
