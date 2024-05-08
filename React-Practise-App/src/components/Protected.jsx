import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { generateToken } from "../util/TokenLoader";

const Protected = ({ Comp }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = generateToken();
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return <Comp />;
};
export default Protected;
