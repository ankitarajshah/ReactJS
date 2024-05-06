import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import { action as logoutAction } from "./pages/Logout";
import { checkLoginLoader, tokenLoader } from "./pages/TokenLoader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
