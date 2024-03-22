import componentsImg from "../image/components.png";
import propsImg from "../image/config.png";
import jsxImg from "../image//jsx-ui.png";
import stateImg from "../image//state-mgmt.png";

export const EXAMPLES = {
  components: {
    image: componentsImg,
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
  function Welcome() {
    return <h1>Hello, World!</h1>;
  }`,
  },
  jsx: {
    image: jsxImg,
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
  },
  props: {
    image: propsImg,
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
  },
  state: {
    image: stateImg,
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show Details</button>
        {isVisible && <p>Amazing details!</p>}
      </div>
    );
  }`,
  },
};
console.log(EXAMPLES);

////////////////////////////////////////////////// To Do App
// export default function ToDo(props) {
//   return <li>{props.text}</li>;
// }
export default function ToDoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.td);
  }
  return (
    <div className="todo-item">
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <p>{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}
