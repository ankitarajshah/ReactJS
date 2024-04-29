import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { updateUser } from "../Reducer/UserReducer";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const { id } = useParams();

  const users = useSelector((state) => state.users);
  console.log(users, "update");

  const existingUser = users.filter((user) => user.id === parseInt(id));
  console.log(existingUser);

  const { name, email } = existingUser[0];

  const [uname, setuName] = useState(name);
  const [uemail, setuEmail] = useState(email);
  console.log(uname);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: id, name: uname, email: uemail }));
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
                value={uname}
                onChange={(e) => setuName(e.target.value)}
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
                value={uemail}
                onChange={(e) => setuEmail(e.target.value)}
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
