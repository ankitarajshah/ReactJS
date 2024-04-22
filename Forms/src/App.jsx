import Header from "./components/Header";
import StateLogin from "./components/StateLogin";
import LoginDynamic from "./components/LoginDynamic";
import RefLogin from "./components/RefLogin";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <StateLogin /> */}
        <LoginDynamic />
        {/* <RefLogin /> */}
        {/* <SignUp /> */}
      </main>
    </>
  );
}

export default App;
