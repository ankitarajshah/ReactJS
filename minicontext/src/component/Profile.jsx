import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please login</div>;
  return (
    <>
      <h1>Profile</h1>
      <div>Welcome{user.username}</div>
    </>
  );
};

export default Profile;
