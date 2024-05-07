import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import User from "./pages/User";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";

function App() {
  const Users = {
    Registered: "Registered",
    Public: "public",
    Admin: "admin",
  };
  const Current_user = Users.Public;
  return (
    <>
      <BrowserRouter>
        <NavBar Current_user={Current_user} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/admin"
            element={<Admin Current_user={Current_user} />}
          ></Route>
          <Route
            path="/user"
            element={<User Current_user={Current_user} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
