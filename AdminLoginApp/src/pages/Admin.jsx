import React from "react";

const Admin = ({ Current_user }) => {
  return Current_user === "admin" ? (
    <div>Admin</div>
  ) : (
    <div>You are not authorized</div>
  );
};

export default Admin;
