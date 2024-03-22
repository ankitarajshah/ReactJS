import React from "react";
import ReactDOM from "react-dom/client";
// import "./Index.css";
import "./Compo.css";
import App from "./Compo/App";
// import Header from "./Components/Header";
// import Employee from "./Components/PassingProps";
// import UseStateEx from "./Components/useStateHook1";
// import UseStateTask from "./Components/useStateHook2";
// import ToDoApp from "./Components/ToDoApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    {/* <Header /> */}
    {/* <Employee /> props learning */}
    {/* <UseStateEx /> */}
    {/* <UseStateTask /> */}
    {/* <ToDoApp /> */}

    <p style={{ backgroundColor: "green" }}>
      Props Learning tag in main app file can written
    </p>
  </>
);
