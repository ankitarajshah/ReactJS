import { useState } from "react";
// import Review from "./ReviewTwoWay";

export default function TwoWayBinding() {
  const [feedback, setFeedback] = useState("");
  const [studentName, setStudentName] = useState("");

  const handleChangeName = (event) => {
    setStudentName(event.target.value);
  };
  const handleChangeFeedback = (event) => {
    setFeedback(event.target.value);
  };
  return (
    <>
      <h1>Two way Binding</h1>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label htmlFor="">Your Feedback</label>
          <textarea onChange={handleChangeFeedback} value={feedback} />
        </p>
        <p>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name=""
            id=""
            onChange={handleChangeName}
            value={studentName}
          />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>
        <Review feedback={feedback} student={studentName} />
        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}
const Review = ({ feedback, student }) => {
  return (
    <>
      <p>{feedback}</p>
      <h2>{student}</h2>
    </>
  );
};
