import reactImag from "../image/1.jpeg";

const reactDesc = ["Fundamental", "Crucial", "Core"];

function getRandomMAx(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header1() {
  const desc = reactDesc[getRandomMAx(2)];
  return (
    <>
      <header>
        <h2>React is Javascript library</h2>
        <p>React is {reactDesc[getRandomMAx(2)]}</p>
        <p>React is {desc}</p>
        <img src={reactImag} />
      </header>
    </>
  );
}
export const userData = {
  firstName: "Ankita",
  lastName: "Shah",
  title: "Engineer",
};
function Header() {
  return (
    <>
      <Header1 />
      {/* <main>
        <h3>Dynamic value by creating export object</h3>
        <p>
          {userData.firstName} ,{userData.lastName}
        </p>
        <p>{userData.title}</p>
      </main> */}
    </>
  );
}

export default Header;
