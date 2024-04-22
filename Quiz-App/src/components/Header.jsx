import logo from "../assets/logo.png";
export default function Header() {
  return (
    <>
      <header className="bg-orange-200">
        <img src={logo} alt="" />
        <h1 className="text-slate-500">Quiz App</h1>
      </header>
    </>
  );
}
