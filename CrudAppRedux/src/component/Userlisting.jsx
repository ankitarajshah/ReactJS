import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { blockUser, deleteUser } from "../UserReducer";

const Userlisting = () => {
  const users = useSelector((state) => state.users);
  console.log(users);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    alert("Are you sure you want to Delete");
    dispatch(deleteUser({ id }));
    navigate("/");
  };
  const handleBlock = (id) => {
    alert("Are you sure you want to Block");
    dispatch(blockUser({ id }));
    navigate("/");
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h1>UserListing</h1>
          <Link to={"/user/add"} className="btn btn-info mx-3">
            Create
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link
                      to={`/user/edit/${user.id}`}
                      className="btn btn-info mx-3"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="btn btn-danger mx-3"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleBlock(user.id)}
                      className="btn btn-danger"
                    >
                      Block
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Userlisting;
