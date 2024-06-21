import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Select from "react-select";
import Footer from "../Footer/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";

function Searchform() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { value: "Mustard", label: "Mustard" },
    { value: "Mustard", label: "Mustard" },
    { value: "Ghee", label: "Mustard" },
    { value: "khee", label: "Mustard" },
    { value: "Mustard", label: "Mustard" },
    { value: "Mustard", label: "Mustard" },
    { value: "Mustard", label: "Mustard" },
    { value: "Ketchup", label: "Ketchup" },
    { value: "Relish", label: "Relish" },
  ];

  const handleSelect = (selected) => {
    setSelectedOptions(selected || []);
  };

  const handleRemove = (item) => {
    setSelectedOptions(
      selectedOptions.filter((option) => option.value !== item)
    );
  };

  return (
    <>
      <Navbar />
      <section className="pt-4 pb-4 bg-white">
        <form className="container card my-0 py-4">
          <div className="row justify-content-center text-start ">
            <div className="col-lg-2 col-6 mb-2">
              <label className="form-label">From Age</label>
              <select className="form-select">
                <option>Select</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 mb-2">
              <label className="form-label">To Age</label>
              <select className="form-select">
                <option>Select</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 mb-2">
              <label className="form-label">கல்வி</label>
              <select className="form-select">
                <option>Select</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 mb-2">
              <label className="form-label">வேலை</label>
              <select className="form-select">
                <option>Select</option>
              </select>
            </div>
            <div className="col-lg-2 mb-2">
              <label className="form-label">பிறந்த மாவட்டம்</label>
              <select className="form-select">
                <option>Select</option>
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
              options={options}
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
                      //   backgroundColor: "red",
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
            <button className="btn btn-primary px-5 py-2">Search</button>
          </div>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Searchform;
