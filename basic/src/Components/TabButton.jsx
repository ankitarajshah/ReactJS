// export default function TabButton(props) {
//   return (
//     <>
//       {" "}
//       <li>
//         <button>{props.children}</button>
//       </li>
//     </>
//   );
// }
// //////////////////////////////////////Label
// export default function TabButton1({ label }) {
//   return (
//     <>
//       <button>{label}</button>
//     </>
//   );
// }
///////////////////////////////////////////children
// export default function TabButton({ children }) {
//   function handleClick() {
//     console.log("Hello world!!");
//   }
//   return (
//     <>
//       <button onClick={handleClick}>{children}</button>
//     </>
//   );
// }
///////////////////////////////////////passing functions to props
export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </>
  );
}
