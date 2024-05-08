import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RootLayout from "./components/common/Home";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-bootstrap";
import LoginForm from "./pages/auth/LoginForm";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/auth/Register";
import { action as logoutAction } from "./pages/auth/Logout";
import { checkLoginLoader, tokenLoader } from "./util/TokenLoader";
import Protected from "./components/Protected";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
    loader: tokenLoader,
    id: "root",
    children: [
      {
        path: "/home",
        element: <Protected Comp={Home} />, // Protected home page route
      },
      {
        path: "dashboard",
        element: <Protected Comp={Dashboard} />,
        // loader: checkLoginLoader,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return;
  <>
    <ToastContainer></ToastContainer>
    <RouterProvider router={router} />
  </>;
}

export default App;
