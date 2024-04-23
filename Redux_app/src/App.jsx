import "./App.css";
import CounterClass from "./components/CounterClass";
import CounterFunc from "./components/CounterFunc";

import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <CounterFunc />
      {/* <CounterClass /> */}
    </>
  );
}

export default App;
