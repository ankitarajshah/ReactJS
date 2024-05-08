import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Userlisting from "./component/Userlisting";
import Home from "./component/Home";
import Adduser from "./pages/Adduser";
import Updateuser from "./pages/Updateuser";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item m-2">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="nav-item m-2">
                  <Link to={"/user"}>User</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Userlisting />} />
            <Route path="/user/add" element={<Adduser />} />
            <Route path="/user/edit/:id" element={<Updateuser />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
