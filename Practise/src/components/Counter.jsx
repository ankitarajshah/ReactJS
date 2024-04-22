import { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleAdd() {
    setCounter((prevCounter) => prevCounter + 1);
  }
  function handleDelete() {
    setCounter((prevCounter) => prevCounter - 1);
  }
  return (
    <>
      <h1>Counter</h1>
      <div className="p-6">
        <Button onClick={() => handleAdd()}>Add </Button>
      </div>
      <span className="p-4 m-8 bg-orange-200">{counter}</span>
      <div className="p-6">
        <Button onClick={() => handleDelete()}>Delete </Button>
      </div>
    </>
  );
}
