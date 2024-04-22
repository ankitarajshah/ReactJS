import logoImg from "../assets/logoImg.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-12">
      <div className="flex gap-2 items-center">
        <img
          className="w-16 h-16 object-contain rounded-3xl border-solid border-2 border-indigo-600 "
          src={logoImg}
        />
        <h1>Food App Live</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
}
