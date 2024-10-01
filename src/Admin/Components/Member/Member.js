import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdManageHistory,
  MdPostAdd,
  MdModeEdit,
  MdDelete,
} from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { FaEye, FaSearch } from "react-icons/fa";
import { IoMdSettings, IoMdAdd } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import Aside from "../Aside/Aside";
import Smallicon from "../../Components/heart-icon.png";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import loaderGif from "./loader-spin.gif";
import backspin from "./back-spin.gif";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const Member = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const category = query.get("category");

  const [dashboardData, setDashboardData] = useState({
    total_member: 0,
    male_member: 0,
    female_member: 0,
    paid_member: 0,
    notpaid_member: 0,
    expired_member: 0,
  });
  const [data, setData] = useState([]);
  const [plans, setPlans] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [clickCount, setClickCount] = useState(0);
  const [remainingLimit, setRemainingLimit] = useState(10);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const profilesPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (searchQuery) {
          // If there's a search query, call the search API
          response = await axios.post(
            "https://tulirmatrimony.com/controlapi/adminsearch.php",
            { search: searchQuery }
          );
          
        } 
        
        else {
          // Otherwise, call the default customer list API
          response = await axios.post(
            "https://tulirmatrimony.com/controlapi/customerlist.php",
            { member: category }
          );
        }
        setData(response.data.body);

        console.log(response.data.body); 
        
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, searchQuery]);

  console.log(category);

  // Calculate the profiles to display based on the current page
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = data.slice(indexOfFirstProfile, indexOfLastProfile);

  // Change page
  const paginate = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePlanChange = (userId, e) => {
    const newSelectedPlans = { ...selectedPlans, [userId]: e.target.value };
    setSelectedPlans(newSelectedPlans);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        await fetch(
          `https://tulirmatrimony.com/controlapi/deletecustomer.php`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          }
        );
        setData(data.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.search.value); // Set the search query from input
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
                <div className="row justify-content-between">
                  <div className="col-md-2">
                    <Link to="/Addusers" className="fw-bold mb-4 btn btn-info">
                      <IoMdAdd className="bx bx-plus-circle" /> Add New
                    </Link>
                  </div>

                  <div className="col-md-4">
                    <form onSubmit={handleSearch}>
                      <div class="input-group">
                        <input
                          type="search"
                          name="search"
                          class="form-control rounded"
                          placeholder="Search by Name, Phone or DOB"
                          aria-label="Search"
                          aria-describedby="search-addon"
                        />
                        <button
                          type="submit"
                          class="btn btn-outline-primary"
                          data-mdb-ripple-init
                        >
                          <FaSearch /> Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="card">
                  <h5 className="card-header">Manage Member List</h5>
                  <div className="table-responsive text-nowrap" id="resultData">
                    {loading ? (
                      <div
                        className="d-flex justify-content-center back-spin text-center"
                        style={{ height: "100vh", alignItems: "center" }}
                      >
                        <img
                          src={loaderGif}
                          alt="Loading..."
                          className="load-spin"
                        />
                      </div>
                    ) : (
                      <table className="table">
                        <caption className="d-none">
                          &nbsp;&nbsp; Result Data
                        </caption>
                        <thead className="text-start">
                          <tr className="text-nowrap">
                            <th scope="col">Reg ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Images</th>
                            <th scope="col">Plan Name</th>
                            <th scope="col">View</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>

                        <tbody className="text-start">
                          {paginatedData.map((item) => (
                            <tr key={item.id}>
                              <td>{item.reg_id}</td>
                              <td>{item.name}</td>
                              <td>
                                <img
                                  src={`data:image/jpeg;base64,${item.image}`}
                                  height={50}
                                  width={50}
                                  alt="User Profile"
                                  className="w-px-40 rounded"
                                />
                              </td>
                              <td>{item.plan_name}</td>
                              <td>
                                <Link to={`/Viewmember/${item.id}`}>
                                  <FaEye className="bx bxs-edit" />
                                </Link>
                              </td>
                              <td>
                                <Link to={`/Edituser/${item.id}`}>
                                  <MdModeEdit className="bx bxs-edit" /> Edit
                                </Link>{" "}
                                /
                                <Link
                                  to="#"
                                  onClick={() => handleDelete(item.id)}
                                  className="text-ed"
                                >
                                  {" "}
                                  <MdDelete className="bx bxs-edit" />
                                  Delete
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
                <div className="">
                  <Stack spacing={2}>
                    <Pagination
                      count={Math.ceil(data.length / profilesPerPage)}
                      page={currentPage}
                      onChange={paginate}
                      color="secondary"
                    />
                  </Stack>
                </div>
              </div>
              <footer className="content-footer footer bg-footer-theme">
                <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                  <div className="mb-2 mb-md-0">
                    <Link
                      to="https://gloriousmatrimonial.com/admin/dashboard"
                      className="footer-link"
                    >
                      © Copyright 2023-2024 By Aathesh Soft. All Rights
                      Reserved.
                    </Link>
                  </div>
                </div>
              </footer>
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Member;
