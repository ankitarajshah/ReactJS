import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateUser } from "../UserReducer";
const Updateuser = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingUser = users.filter((user) => user.id === parseInt(id));
  console.log(existingUser);
  const { fname, lname, email, phone } = existingUser[0];

  const [formData, setformData] = useState({
    ufname: existingUser[0].fname,
    ulname: existingUser[0].lname,
    uemail: existingUser[0].email,
    uphone: existingUser[0].phone,
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(formData);

    let isValid = true;
    let validationErrors = {};

    if (formData.ufname === "" || formData.ufname === null) {
      isValid = false;
      validationErrors.ufname = "FirstName is Required";
    }
    if (formData.ulname === "" || formData.ulname === null) {
      isValid = false;
      validationErrors.ulname = "LastName is Required";
    }

    if (formData.uemail === "" || formData.uemail === null) {
      isValid = false;
      validationErrors.uemail = "Email is Required";
    }

    setErrors(validationErrors);
    setValid(isValid);

    if (isValid) {
      dispatch(
        updateUser({
          id: parseInt(id),
          fname: formData.ufname,
          lname: formData.ulname,
          email: formData.uemail,
          phone: formData.uphone,
        })
      );
      navigate("/");
    }
  };

  return (
    <>
      <div className="offset-lg-3 col-lg-6">
        {!valid && (
          <span className="text-danger">
            {errors.ufname},{errors.ulname},{errors.uemail},
          </span>
        )}
        <form className="container" onSubmit={handleUpdate}>
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Update user</h1>
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
                      name="ufname"
                      value={formData.ufname}
                      onChange={(e) =>
                        setformData({ ...formData, ufname: e.target.value })
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
                      name="ulname"
                      value={formData.ulname}
                      onChange={(e) =>
                        setformData({ ...formData, ulname: e.target.value })
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
                        name="uemail"
                        value={formData.uemail}
                        onChange={(e) =>
                          setformData({ ...formData, uemail: e.target.value })
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
                      name="uphone"
                      value={formData.uphone}
                      onChange={(e) =>
                        setformData({ ...formData, uphone: e.target.value })
                      }
                    />
                  </div>

                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Update
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

export default Updateuser;
