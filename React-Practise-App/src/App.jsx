import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RootLayout from "./components/common/Home";
import LoginForm from "./pages/auth/LoginForm";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/auth/Register";
import { action as logoutAction } from "./pages/auth/Logout";
import { checkLoginLoader, tokenLoader } from "./util/TokenLoader";
import Protected from "./components/Protected";
import Home from "./components/common/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected Comp={Home} />,
    loader: tokenLoader,
    id: "root",
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
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
  return <RouterProvider router={router} />;
}

export default App;
