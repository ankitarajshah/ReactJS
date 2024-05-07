import React from "react";

const User = ({ Current_user }) => {
  return Current_user === "admin" || Current_user === "registerd" ? (
    <div>User</div>
  ) : (
    <div>You cannot access this page</div>
  );
};

export default User;
