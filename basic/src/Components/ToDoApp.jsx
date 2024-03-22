import { useState } from "react";
// import ToDo from "./Data";
import ToDoItem from "./Data";

export const ToDOList = ["Learning", "Reading", "Drawing"];

export default function ToDoApp() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      completed: false,
    },
  ]);
  const [text, setText] = useState("");

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);

    setText("");
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id == id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <>
      {/* <h1>ToDO APP basic</h1>
      <ul>
        {ToDOList.map((todo) => (
          <ToDo text={todo} />
        ))}
      </ul> */}
      <h1>ToDO App Adv</h1>
      <div className="todo-list">
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => addTask(text)}>Add</button>
      </div>
    </>
  );
}
