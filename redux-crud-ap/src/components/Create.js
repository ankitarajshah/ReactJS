import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Reducer/UserReducer";
export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const users = useSelector((state) => state.users);
  console.log(users, "adddedd");

  const handleSubmit = (e) => {
    console.log("call1");
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        name: name,
        email: email,
      })
    );
    setName("");
    setEmail("");
    navigate("/home");
  };
  return (
    <>
      <div className="bg-secondary d-flex w-100 justify-content-center align-items-center">
        <div className="w-50 border bg-light">
          <h2>Add New User</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                placeholder="Full Name"
                onChange={(e) => setName(e.target?.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target?.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-info justify-content-center align-items-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
