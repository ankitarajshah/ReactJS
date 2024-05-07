import { useNavigate } from "react-router-dom";
import { generateToken } from "../util/TokenLoader";
import { useEffect } from "react";
const Protected = (props) => {
  const { Comp } = props;
  const navigate = useNavigate();

  const token = generateToken();
  if (!token) {
    navigate("login");
  }

  return (
    <>
      <Comp />
      {/* token ? <Outlet /> : <Navigate to="/login" />; */}
    </>
  );
};

export default Protected;
