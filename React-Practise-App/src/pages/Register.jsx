import React, { useState, useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const [formData, setformData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    let isValid = true;
    let validationErrors = {};
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
    if (formData.cpassword !== formData.password) {
      isValid = false;
      validationErrors.cpassword = "Confirm password not match";
    }
    setErrors(validationErrors);
    setValid(isValid);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:3000/users", formData)
        .then((result) => {
          alert("Register successfully");
          console.log(result, "result");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <h1 className="text-center">Create New User</h1>
      {valid ? (
        <></>
      ) : (
        <span className="text-danger">
          {errors.fname}
          {errors.lname}
          {errors.email}
          {errors.mobile}
          {errors.password}
          {errors.cpassword}
        </span>
      )}
      <div className="container d-flex justify-content-center">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-3">
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
          <div className="col-md-3">
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
          <div className="col-md-3">
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
          <div className="col-md-3">
            <label htmlFor="validationDefault03" className="form-label">
              Mobile
            </label>
            <input
              type="number"
              className="form-control"
              id="validationDefault03"
              required
              name="mobile"
              onChange={(e) =>
                setformData({ ...formData, mobile: e.target.value })
              }
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="exampleInputPassword" className="form-label">
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
          <div className="col-md-3">
            <label htmlFor="cexampleInputPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="confirmpassword"
              className="form-control"
              id="cexampleInputPassword"
              name="cpassword"
              onChange={(e) =>
                setformData({ ...formData, cpassword: e.target.value })
              }
            />
          </div>

          <div className="col-6 mt-5">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
