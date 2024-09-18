import React, { useState, useEffect } from 'react';
import '../Css/Charts.css';
import '../Css/Common.css';
import '../Css/Core.css';
import '../Css/Demo.css';
import '../Css/Newstylle.css';
import '../Css/Scrol.css';
import '../Css/Boxicon.css';
import '../Css/Theme.css';
import '../Css/Select.css';
import Aside from '../Aside/Aside';
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Smallicon from '../../Components/heart-icon.png'
import Navbar from '../Navbar/Navbar';


const Stories = () => {
    const [data, setData] = useState([]);

  //   const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };
  const [dashboardData, setDashboardData] = useState({
    total_member: 0,
    male_member: 0,
    female_member: 0,
    paid_member: 0,
    notpaid_member: 0,
    expired_member: 0,
  });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://tulirmatrimony.com/controlapi/successlist.php');
          const result = await response.json();
          console.log(result)
          setData(result.body);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
        await fetch(`https://tulirmatrimony.com/controlapi/deletesuccess.php`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
        // Assuming successful deletion, update the state to reflect the changes
        setData(data.filter(item => item.id !== id));
    } catch (error) {
        console.error('Error deleting data:', error);
    }
};
    
  return (
    <>
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Aside />
          <div class="layout-page">
            <Navbar />
            <div class="content-wrapper">
              <div class="container-xxl flex-grow-1 container-p-y">
                <div class="row  justify-content-between">
                  <div class="col-md-2">
                    <a href="/Storiesadd" class="fw-bold mb-4 btn btn-info">
                      <IoMdAdd class="bx bx-plus-circle" /> Add New
                    </a>
                  </div>

                  {/* <div class="col-md-4">
                    <div class="search-container">
                      <input
                        type="text"
                        class="search-box form-control"
                        id="searchText"
                        placeholder="Search"
                      />
                      <button
                        class="search-button btn btn-info searchMainBtn"
                        id="commonSearch"
                      >
                        <FaSearch class="bx bx-search-alt-2" />
                      </button>
                    </div>
                  </div> */}
                </div>

                {/* <!-- Basic Layout --> */}
                <div class="card">
                  <h5 class="card-header">Manage Success Stories</h5>
                  <div class="table-responsive text-nowrap" id="resultData">
                    <table class="table">
                      <caption class="d-none">&nbsp;&nbsp; Result Data</caption>
                      <thead>
                        <tr class="text-nowrap">
                          <th scope="col">Images</th>
                          <th scope="col">Bride Id</th>
                          <th scope="col">Bride Name</th>
                          <th scope="col">Groom Id</th>
                          <th scope="col">Groom Name</th>
                          <th scope="col">Marriage Date</th>
                          <th scope="col">Message</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <img
                                src={`data:image/jpeg;base64,${item.image}`}
                                height={50}
                                width={50}
                                alt="User Profile"
                                className="w-px-40 rounded"
                              />
                            </td>
                            <td>{item.bride_id}</td>
                            <td>{item.bridename}</td>
                            <td>{item.groom_id}</td>
                            <td>{item.groom_name}</td>
                            <td>{item.marriage_date}</td>
                            <td>{item.Message}</td>
                            <td>
                            <Link to={`/Editstory/${item.id}`}>
                                  <MdModeEdit className="bx bxs-edit" /> Edit
                                </Link>
                              <Link
                                to="#"
                                onClick={() => handleDelete(item.id)}
                                className="text-ed"
                              >
                                {" "}
                                <MdDelete class="bx bxs-edit" />
                                Delete
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <input
                type="hidden"
                name="_token"
                value="QmQajZaby0jhK1w27Zi2q032b38lFxQusYolpel3"
              />
              <input
                type="hidden"
                name="ajaxRequestUrl"
                id="ajaxRequestUrl"
                value="https://gloriousmatrimonial.com/admin/success-story/getAjaxPaginationData"
              />
              <input
                type="hidden"
                name="changeStatusUrl"
                id="changeStatusUrl"
                value="https://gloriousmatrimonial.com/admin/success-story/changeStatus"
              />
              <input type="hidden" name="page" id="page" value="1" />
              <footer class="content-footer footer bg-footer-theme">
                <div class="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
                  <div class="mb-2 mb-md-0">
                    <a
                      href="https://gloriousmatrimonial.com/admin/dashboard"
                      class="footer-link"
                    >
                      © Copyright 2023-2024 By Aathesh Soft. All Rights
                      Reserved.
                    </a>
                  </div>
                </div>
              </footer>
              <div class="content-backdrop fade"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stories