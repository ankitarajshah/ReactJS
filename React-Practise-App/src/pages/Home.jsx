import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Welcome to App</h5>

          <NavLink to="/login" className="btn btn-primary">
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
