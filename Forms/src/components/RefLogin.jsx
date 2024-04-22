import { useRef, useState } from "react";

export default function Form() {
  //   const [enteredEmail, setEnteredEmail] = useState("");
  //   const [enteredPassword, setEnteredPassword] = useState("");

  const [emailIsInvalid, setEmailInvalid] = useState(false);
  const email = useRef();
  const Password = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");

    const enteredEmail = email.current.value;
    const enteredPassword = Password.current.value;

    const emailIsValid = enteredEmail.includes("@");

    if (!emailIsValid) {
      setEmailInvalid(true);
      return;
    }
    setEmailInvalid(false);
    console.log("email:", enteredEmail);
    console.log("password: ", enteredPassword);
  }

  //   function handleEmailChange(event) {
  //     setEnteredEmail(event.target.value);
  //   }
  //   function handlePasswordChange(event) {
  //     setEnteredPassword(event.target.value);
  //   }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            ref={email}
            // onChange={handleEmailChange}
            // value={enteredEmail}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter valid email</p>}
          </div>
        </div>
        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={Password}
            // onChange={handlePasswordChange}
            // value={enteredPassword}
          />
        </div>
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
