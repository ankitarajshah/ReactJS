import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";

export default function LoginDynamic() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  // Blur validation
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });
  // email validation
  const emailIsInvalid =
    // enteredValues.email !== "" && !enteredValues.email.includes("@");
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);

  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: false }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    console.log(enteredValues);

    // event.target.reset();
    // setEnteredValues({ email: "", password: "" });
    // setDidEdit({ email: false, password: false });
  }

  function handleReset(event) {
    // event.preventDefault();
    console.log("reset");

    event.target.reset();
    setEnteredValues({ email: "", password: "" });
    setDidEdit({ email: false, password: false });
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({ ...prevEdit, [identifier]: true }));
  }
  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <h2>Login</h2>
      <div className="control-row">
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enteredValues.email}
            onBlur={() => handleInputBlur("email")}
          />
          <div className="control-email">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div> */}
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
          onBlur={() => handleInputBlur("email")}
          error={emailIsInvalid && "Please enter a valid email"}
        />

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enteredValues.password}
          />
        </div> */}

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          value={enteredValues.password}
          onBlur={() => handleInputBlur("password")}
          error={passwordIsInvalid && "Please enter a valid password"}
        />
      </div>
      <p className="form-actions"></p>

      <button type="submit" className="button">
        Login
      </button>
      <button type="reset" className="button button-flat">
        Reset
      </button>
    </form>
  );
}
