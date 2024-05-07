import { redirect, Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

import { generateToken } from "../../util/TokenLoader";
const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const [loginData, setLoginData] = useState({
    id: "",
    password: "",
  });
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(loginData, "login");

    let isValid = true;
    let validationErrors = {};

    if (loginData.id === "" || loginData.id === null) {
      isValid = false;
      validationErrors.id = "UserName is Required";
    }

    if (loginData.password === "" || loginData.password === null) {
      isValid = false;
      validationErrors.password = "Password is Required";
    } else if (loginData.password.length < 6) {
      isValid = false;
      validationErrors.password = "Enter valid password length atleast 6 char ";
    }
    if (isValid) {
      try {
        const response = await axios.get("http://localhost:3000/users");
        console.log(response.data, "res");
        const users = response.data;
        const user = users.find(
          (user) =>
            user.id === loginData.id && user.password === loginData.password
        );
        if (user) {
          const token = generateToken();
          localStorage.setItem("token", token);
          alert("login");
          // redirect("/dashboard");
          navigateTo("/dashboard");
        } else {
          alert("Login fail");
        }
      } catch (error) {
        console.error("Login fail:", error);
      }
    } else {
      setErrors(validationErrors);
      setValid(isValid);
    }
  };

  return (
    <>
      <div className="offset-lg-3 col-lg-6">
        {valid ? (
          <></>
        ) : (
          <span className="text-danger">
            {errors.id},{errors.password}
          </span>
        )}
        <form className="container" onSubmit={handleLogin}>
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="form-label">User name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="id"
                      onChange={(e) =>
                        setLoginData({ ...loginData, id: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={(e) =>
                        setLoginData({
                          ...loginData,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                    |
                    {/* <Link to={"/dashboard"} className="btn btn-primary">
                      Login
                    </Link> */}
                    <Link to={"/register"} className="btn btn-danger">
                      Create new User
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
