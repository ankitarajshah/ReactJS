import { useState } from "react";
import Input from "./Input";

export default function Form() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    console.log("email:", enteredEmail);
    console.log("password: ", enteredPassword);
  }

  function handleEmailChange(event) {
    setEnteredEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setEnteredPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleEmailChange}
            value={enteredEmail}
          />
          
        </div> */}

        <Input
          label="Email"
          id="email"
          name="email"
          onChange={handleEmailChange}
          value={enteredEmail}
        />
        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handlePasswordChange}
            value={enteredPassword}
          />
        </div> */}

        <Input
          label="Password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          value={enteredPassword}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
