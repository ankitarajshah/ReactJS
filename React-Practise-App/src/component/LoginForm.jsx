import { Form, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <>
      <Form method="post">
        <h1>{isLogin ? "Login" : "Create new User"}</h1>
        <div className="container d-flex justify-content-center">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
              />
            </div>

            <Link to="/dashboard" className="btn btn-primary m-2">
              Submit
            </Link>
            <Link to={`?mode=${isLogin ? "register" : "login"}`}>
              {isLogin ? "Create new User" : "Login"}
            </Link>
          </form>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
