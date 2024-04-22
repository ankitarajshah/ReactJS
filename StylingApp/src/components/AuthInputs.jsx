import { useState } from "react";
import { styled } from "styled-components";

import Button from "./Button.jsx";
import Input from "./Input.jsx";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [eneteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }
  function handleLogin() {
    setSubmitted(true);
  }
  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && eneteredPassword.trim().length < 6;
  return (
    <>
      <div
        id="auth-inputs"
        className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-500"
      >
        {/* <div className="controls"> */}

        <ControlContainer>
          {/* <p className="paragraph"> */}
          {/* <Label className={`label ${emailNotValid ? "invalid" : ""}`}> */}
          {/* <Label $invalid={emailNotValid}>Email</Label> */}
          <Input
            label="Email"
            invalid={emailNotValid}
            type="email"
            // className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
          {/* </p> */}
          {/* <p> */}
          {/* <Label className={`label ${passwordNotValid ? "invalid" : ""}`}> */}

          {/* <Label $invalid={passwordNotValid}>Password</Label> */}
          <Input
            label="Password"
            type="password"
            invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
          {/* </p> */}
          {/* </div> */}
        </ControlContainer>
        <div className="actions">
          <button type="button" className="text-button">
            Create a new account?
          </button>
          {/* <Button className="button" onClick={handleLogin}>
            Sign In
          </Button> */}
          <Button onClick={handleLogin}>Sign In</Button>
        </div>
      </div>
    </>
  );
}
