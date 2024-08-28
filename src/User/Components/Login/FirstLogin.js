import React, { useState } from "react";
import { useAuth } from "../../../AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Logo from "../rgt-matrimony-logo.png";
import "./Login.css";

const FirstLogin = () => {
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://tulirmatrimony.com/controlapi/userlogin.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phonenumber: phonenumber,
            password: password,
          }),
        }
      );

      const data = await response.json();
      const user_id = data.body.user_id;      

      if (data.head.code === 200) {
        login(data.body); // Store the user data in the auth context
        navigate(`/Editprofile`); // Redirect to the search list page
      } else {
        // Handle errors returned by the API
        setError(data.head.msg || "Invalid phone number or password");
        alert("Invalid phone number or password");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar /> {/* Pass userid as prop to Navbar */}
      <div className="container">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            <div className="card login-div col-lg-6 col-sm-12 mt-5 mx-auto">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a href="#" className="app-brand-link gap-2">
                    <img src={Logo} alt="" className="w-100" />
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
                  >
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                  </a>
                </div>
                <p className="mb-4 mt-2">Welcome to Tulir Matrimony.</p>
                <form
                  id="formAuthentication"
                  className="mb-3"
                  onSubmit={handleLogin}
                >
                  <div className="mb-3 text-start">
                    <label htmlFor="phonenumber" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={phonenumber}
                      onChange={(e) => setPhonenumber(e.target.value)}
                      className="form-control p-3"
                      id="phonenumber"
                      name="phonenumber"
                      placeholder="Enter your phone number"
                      autoFocus
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        className="form-control p-3"
                        name="password"
                        placeholder="*********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="input-group-text cursor-pointer"></span>
                    </div>
                  </div>

                  {error && <div className="alert alert-danger">{error}</div>}

                  <div className="mb-3">
                    <button
                      className="btn btn-primary d-grid w-100 p-3"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <div className="overflow-auto mt-3 mt-lg-4">
                  <div className="male_femaleusersets">
                    <div className="singleviewlsudgfvs d-flex text-center">
                      <p>
                        Don't Have an Account?{" "}
                        <Link to="/Freereg" className="mx-2">
                          Create New Account
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstLogin;
