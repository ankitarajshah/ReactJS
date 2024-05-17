import "./App.css";
import Login from "./component/Login";
import Profile from "./component/Profile";
import UserContextProvider from "./context/UserContextProvider";
function App() {
  return (
    <>
      <h1>React Context API</h1>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
