import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { updateUser } from "../Reducer/UserReducer";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const { id } = useParams();

  const users = useSelector((state) => state.users);
  console.log(users, "current user update");

  const existingUser = users.filter((user) => user.id === parseInt(id));
  console.log(existingUser, "updateexisting user");

  const { name: initialName, email: initialEmail } = existingUser[0];

  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  console.log(name);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log("update action id", id);
    // console.log(name, "upname");
    // console.log(email, "upname");
    dispatch(updateUser({ id: id, name: name, email: email }));
    navigate("/home");
  };

  return (
    <>
      <div className="bg-secondary d-flex w-100 justify-content-center align-items-center">
        <div className="w-50 border bg-light">
          <h2>Update User</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-info justify-content-center align-items-center"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
