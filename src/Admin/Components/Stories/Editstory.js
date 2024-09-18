import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Aside from "../Aside/Aside";
import { Link } from "react-router-dom";
import Smallicon from "../../Components/heart-icon.png";
import { IoMdSettings } from "react-icons/io";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { LuLogOut } from "react-icons/lu";
import Navbar from "../Navbar/Navbar";


const Editstory = () => {
  const { id } = useParams(); // Get the story ID from the URL parameters
  const [initialData, setInitialData] = useState(null);
 // const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    bridename: "",
    bride_id: "",
    groom_name: "",
    groom_id: "",
    marriage_date: "",
    Message: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  //const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tulirmatrimony.com/controlapi/successlist.php");
        const result = await response.json();
  
        const story = result.body.find((story) => story.id === id);
        console.log("Fetched story:", story);
  
        if (story) {
          const rawDate = story.marriage_date;
          console.log("Raw marriage_date:", rawDate);
  
          // Convert 'DD-MM-YYYY' to 'YYYY-MM-DD'
          const [day, month, year] = rawDate.split("-");
          const formattedDate = year && month && day
            ? `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
            : "";
  
          console.log("Formatted marriage_date:", formattedDate);
  
          setInitialData(story);
          setFormData({
            ...story,
            marriage_date: formattedDate,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [id]);
  
  

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
        setFormData((prevState) => ({
          ...prevState,
          [name]: base64String,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      id,
      ...formData,
    };

    try {
      const response = await fetch(
        "https://tulirmatrimony.com/controlapi/editsuccess.php",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData), // Send the updatedData directly
        }
      );

      const data = await response.json();
      console.log(data);

      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        console.log("Success Stories edited successfully!");
        alert("Success Stories edited successfully!");
        window.location.href = "/Stories";
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Aside />
          <div className="layout-page">
            <Navbar />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="col-xl">
                    <div className="card mb-4">
                      <div className="card-body">
                        <form onSubmit={handleSubmit}>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="weddingphoto">
                              Upload Your Wedding Photo <span className="Form__Error">*</span>
                            </label>
                            <input
                              name="image"
                              className="form-control"
                              placeholder="Upload Your Wedding Photo"
                              type="file"
                              id="image"
                              onChange={handleChange}
                            />
                            {formData.image && (
                              <img
                                src={`data:image/jpeg;base64,${formData.image}`}
                                alt="Wedding"
                                className="mt-3"
                                style={{ maxWidth: "200px" }}
                              />
                            )}
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="bridename">
                              Bride's Name <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="text"
                              
                              className="form-control required"
                              id="bridename"
                              name="bridename"
                              value={formData.bridename}
                              placeholder="Bride's Name"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="brideid">
                              Bride's ID <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="text"
                              
                              className="form-control required"
                              id="bride_id"
                              name="bride_id"
                              value={formData.bride_id}
                              placeholder="Bride's ID"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="groom_name">
                              Groom's Name <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="text"
                              
                              className="form-control required"
                              id="groom_name"
                              name="groom_name"
                              value={formData.groom_name}
                              placeholder="Groom's Name"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="groom_id">
                              Groom's ID <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="text"
                              
                              className="form-control required"
                              id="groom_id"
                              name="groom_id"
                              value={formData.groom_id}
                              placeholder="Groom's ID"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="marriage_date">
                              Marriage Date <span className="Form__Error">*</span>
                            </label>
                            <input
                              type="date"
                              required
                              className="form-control required"
                              id="marriage_date"
                              name="marriage_date"
                              value={formData.marriage_date || ""}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="mb-3 text-start">
                            <label className="form-label" htmlFor="Message">
                              Message <span className="Form__Error">*</span>
                            </label>
                            <textarea
                              rows={3}
                              
                              className="form-control required"
                              id="Message"
                              name="Message"
                              value={formData.Message}
                              placeholder="Message"
                              onChange={handleChange}
                            />
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Save Story
                          </button>
                        </form>
                        {showAlert && (
                          <div className="alert alert-success mt-3" role="alert">
                            Successfully Updated!
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editstory;
