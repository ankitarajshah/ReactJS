import { useState, useCallback, useEffect, useRef } from "react";
import Button from "./Button";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+={}[]~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 bg-gray-500 text-orange-500">
        <h1 className="mt-8">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4"> </div>
        <input
          ref={passwordRef}
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 "
          placeholder="Password"
          readOnly
        />
        <Button onClick={copyPasswordToClipBoard}>Copy</Button>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <label>Length:</label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-x-1">
            <label>Numbers:</label>
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
          </div>
          <div className="flex items-center gap-x-1">
            <label>Characters:</label>
            <input
              id="characterInput"
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
