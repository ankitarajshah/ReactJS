import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-bootstrap";
const Register = () => {
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const [formData, setformData] = useState({
    id: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    let isValid = true;
    let validationErrors = {};

    if (formData.id === "" || formData.id === null) {
      isValid = false;
      validationErrors.id = "UserName is Required";
    }
    if (formData.fname === "" || formData.fname === null) {
      isValid = false;
      validationErrors.fname = "FirstName is Required";
    }
    if (formData.lname === "" || formData.lname === null) {
      isValid = false;
      validationErrors.lname = "LastName is Required";
    }

    if (formData.email === "" || formData.email === null) {
      isValid = false;
      validationErrors.email = "Email is Required";
    }

    if (formData.password === "" || formData.password === null) {
      isValid = false;
      validationErrors.password = "Password is Required";
    } else if (formData.password.length < 6) {
      isValid = false;
      validationErrors.password = "Enter valid password length atleast 6 char ";
    }

    setErrors(validationErrors);
    setValid(isValid);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:3000/users", formData)
        .then((res) => {
          alert("Register successfully");
          toast.success("Registered successfully");
          navigate("/login");
          console.log(res, "result");
        })
        .catch((err) => console.log(err));
    }
  };

  //   fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((res) => {
  //       toast.success("Registered successfully");
  //       navigate("/login");
  //     })
  //     .catch((err) => {
  //       toast.error("Failed", err);
  //     });
  // };
  return (
    <>
      <ToastContainer></ToastContainer>
      <div className="offset-lg-3 col-lg-6">
        {valid ? (
          <></>
        ) : (
          <span className="text-danger">
            {errors.id} ,{errors.fname},{errors.lname},{errors.email},
            {errors.password}
          </span>
        )}
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">User Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="validationDefault" className="form-label">
                      User name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault"
                      name="id"
                      onChange={(e) =>
                        setformData({ ...formData, id: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="validationDefault01" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault01"
                      name="fname"
                      onChange={(e) =>
                        setformData({ ...formData, fname: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="validationDefault02" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefault02"
                      name="lname"
                      onChange={(e) =>
                        setformData({ ...formData, lname: e.target.value })
                      }
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        onChange={(e) =>
                          setformData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="validationDefault03" className="form-label">
                      Mobile
                    </label>
                    <input
                      type="phone"
                      className="form-control"
                      id="validationDefault03"
                      required
                      name="phone"
                      onChange={(e) =>
                        setformData({ ...formData, mobile: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="exampleInputPassword"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword"
                      name="password"
                      onChange={(e) =>
                        setformData({ ...formData, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                    |
                    <Link to={"/login"} className="btn btn-danger">
                      Back
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

export default Register;
