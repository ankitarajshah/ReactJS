import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { addUser } from "../UserReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Adduser = () => {
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const [formData, setformData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        phone: formData.phone,
      })
    );
    navigate("/");
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

    setErrors(validationErrors);
    setValid(isValid);
  };

  return (
    <>
      <div className="offset-lg-3 col-lg-6">
        {valid ? (
          <></>
        ) : (
          <span className="text-danger">
            {errors.fname},{errors.lname},{errors.email},
          </span>
        )}
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Create user</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
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
                      Phone
                    </label>
                    <input
                      type="phone"
                      className="form-control"
                      id="validationDefault03"
                      required
                      name="phone"
                      onChange={(e) =>
                        setformData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                    |
                    <Link to={"/"} className="btn btn-danger">
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

export default Adduser;
